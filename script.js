class QuizApp {
    constructor() {
        // Zkontroluj, zda je vybrána kategorie
        const selectedCategory = localStorage.getItem('selectedCategory');
        if (selectedCategory) {
            this.questions = questions.filter(q => q.category === selectedCategory);
            localStorage.removeItem('selectedCategory'); // Vyčistit po načtení
            // Aktualizuj total v HTML (pokud máš dynamický total)
            document.getElementById('total-questions').textContent = this.questions.length;
            document.getElementById('total-questions-result').textContent = this.questions.length;
        } else {
            this.questions = questions; // Celý test
        }
        
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.score = 0;
        this.isReviewMode = false;
        
        this.initializeElements();
        this.shuffleQuestions();
        this.bindEvents();
        this.displayQuestion();
        this.updateProgress();
    }

    initializeElements() {
        // Quiz elements
        this.quizContainer = document.getElementById('quiz-container');
        this.resultsContainer = document.getElementById('results-container');
        this.reviewContainer = document.getElementById('review-container');
        
        // Question elements
        this.questionTitle = document.getElementById('question-title');
        this.questionCategory = document.getElementById('question-category');
        this.answersSection = document.getElementById('answers-section');
        
        // Navigation elements
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.finishBtn = document.getElementById('finish-btn');
        
        // Progress elements
        this.progressBar = document.getElementById('progress');
        this.currentQuestionSpan = document.getElementById('current-question');
        this.totalQuestionsSpan = document.getElementById('total-questions');
        
        // Results elements
        this.finalScore = document.getElementById('final-score');
        this.correctAnswersSpan = document.getElementById('correct-answers');
        this.totalAnsweredSpan = document.getElementById('total-answered');
        this.totalQuestionsResultSpan = document.getElementById('total-questions-result');
        
        // Control buttons
        this.restartBtn = document.getElementById('restart-btn');
        this.reviewBtn = document.getElementById('review-btn');
        this.backToResultsBtn = document.getElementById('back-to-results-btn');
        
        // Set total questions
        this.totalQuestionsSpan.textContent = this.questions.length;
        this.totalQuestionsResultSpan.textContent = this.questions.length;
    }

    shuffleQuestions() {
        // Fisher-Yates shuffle algorithm
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
        
        // Shuffle options for multiple choice questions
        this.questions.forEach(question => {
            if (question.type === 'multiple' && question.options) {
                const correctAnswer = question.correctAnswer;
                const shuffledOptions = [...question.options];
                
                // Fisher-Yates shuffle for options
                for (let i = shuffledOptions.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
                }
                
                question.options = shuffledOptions;
            }
        });
    }

    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.finishBtn.addEventListener('click', () => this.finishQuiz());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.reviewBtn.addEventListener('click', () => this.showReview());
        this.backToResultsBtn.addEventListener('click', () => this.showResults());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.quizContainer.style.display !== 'none') {
                switch(e.key) {
                    case 'ArrowLeft':
                        if (!this.prevBtn.disabled) this.previousQuestion();
                        break;
                    case 'ArrowRight':
                        if (!this.nextBtn.disabled) this.nextQuestion();
                        break;
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                        this.selectAnswerByNumber(parseInt(e.key));
                        break;
                }
            }
        });
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        this.questionTitle.textContent = question.question;
        this.questionCategory.textContent = question.category;
        
        this.answersSection.innerHTML = '';
        this.answersSection.className = 'answers-section'; // Reset class
        
        if (question.type === 'multiple') {
            this.createMultipleChoiceAnswers(question);
        } else if (question.type === 'boolean') {
            this.createBooleanAnswers(question);
        }
        
        // Restore previous answer if exists
        const previousAnswer = this.userAnswers[this.currentQuestionIndex];
        if (previousAnswer !== null) {
            // Select and show the colors for previous answer
            const selectedOption = question.type === 'boolean' ? 
                this.answersSection.querySelector(`[data-answer="${String(previousAnswer)}"]`) :
                this.answersSection.querySelector(`[data-answer="${previousAnswer}"]`);
            if (selectedOption) {
                selectedOption.classList.add('selected');
                
                // Show color feedback for the previous answer
                const isCorrect = this.isAnswerCorrect(question, previousAnswer);
                
                this.answersSection.querySelectorAll('.answer-option').forEach(option => {
                    const optionAnswer = option.dataset.answer;
                    
                    // For boolean questions, compare as strings
                    const isUserAnswer = question.type === 'boolean' ? 
                        optionAnswer === String(previousAnswer) : 
                        optionAnswer == previousAnswer;
                    
                    if (isUserAnswer) {
                        option.classList.add(isCorrect ? 'correct' : 'incorrect');
                    }
                    
                    // Show correct answer if user was wrong
                    const isCorrectAnswer = question.type === 'boolean' ? 
                        optionAnswer === String(question.correctAnswer) : 
                        optionAnswer == question.correctAnswer;
                    
                    if (!isCorrect && isCorrectAnswer) {
                        option.classList.add('correct-answer');
                    }
                });
            }
        }
    }

    createMultipleChoiceAnswers(question) {
        const labels = ['a', 'b', 'c', 'd'];
        
        question.options.forEach((option, index) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-option';
            answerDiv.dataset.answer = option;
            
            answerDiv.innerHTML = `
                <div class="answer-label">${labels[index]}</div>
                <div class="answer-text">${option}</div>
            `;
            
            answerDiv.addEventListener('click', () => {
                this.selectAnswer(option);
            });
            
            this.answersSection.appendChild(answerDiv);
        });
    }

    createBooleanAnswers(question) {
        const booleanOptions = [
            { value: true, text: 'Pravda' },
            { value: false, text: 'Nepravda' }
        ];
        
        this.answersSection.className = 'answers-section true-false-options';
        
        booleanOptions.forEach((option) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-option';
            answerDiv.dataset.answer = option.value;
            
            answerDiv.innerHTML = `
                <div class="answer-text">${option.text}</div>
            `;
            
            answerDiv.addEventListener('click', () => {
                this.selectAnswer(option.value);
            });
            
            this.answersSection.appendChild(answerDiv);
        });
    }

    selectAnswer(answer) {
        const question = this.questions[this.currentQuestionIndex];
        
        // Check if this answer was already selected (when going back)
        const wasAlreadyAnswered = this.userAnswers[this.currentQuestionIndex] !== null;
        
        // Remove previous selection and styling
        this.answersSection.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect', 'correct-answer');
        });
        
        // Add selection to clicked answer
        const selectedOption = question.type === 'boolean' ? 
            this.answersSection.querySelector(`[data-answer="${String(answer)}"]`) :
            this.answersSection.querySelector(`[data-answer="${answer}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
        
        // Store answer
        this.userAnswers[this.currentQuestionIndex] = answer;
        
        // Show color feedback immediately
        const isCorrect = this.isAnswerCorrect(question, answer);
        
        // Style the answers with colors
        this.answersSection.querySelectorAll('.answer-option').forEach(option => {
            const optionAnswer = option.dataset.answer;
            
            // For boolean questions, compare as strings
            const isUserAnswer = question.type === 'boolean' ? 
                optionAnswer === String(answer) : 
                optionAnswer == answer;
            
            if (isUserAnswer) {
                option.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
            
            // Show correct answer if user was wrong
            const isCorrectAnswer = question.type === 'boolean' ? 
                optionAnswer === String(question.correctAnswer) : 
                optionAnswer == question.correctAnswer;
            
            if (!isCorrect && isCorrectAnswer) {
                option.classList.add('correct-answer');
            }
        });
        
        // Enable navigation
        this.updateNavigationButtons();
    }

    selectAnswerByNumber(number) {
        const question = this.questions[this.currentQuestionIndex];
        
        if (question.type === 'multiple' && question.options && number <= question.options.length) {
            this.selectAnswer(question.options[number - 1]);
        } else if (question.type === 'boolean') {
            if (number === 1) this.selectAnswer(true);
            else if (number === 2) this.selectAnswer(false);
        }
    }

    updateNavigationButtons() {
        // Previous button
        this.prevBtn.disabled = this.currentQuestionIndex === 0;
        
        // Next/Finish button
        const isLastQuestion = this.currentQuestionIndex === this.questions.length - 1;
        
        if (isLastQuestion) {
            this.nextBtn.style.display = 'none';
            this.finishBtn.style.display = 'inline-block';
            this.finishBtn.disabled = false;
        } else {
            this.nextBtn.style.display = 'inline-block';
            this.finishBtn.style.display = 'none';
            this.nextBtn.disabled = false;
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
            this.updateProgress();
            this.updateNavigationButtons();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
            this.updateProgress();
            this.updateNavigationButtons();
        }
    }

    finishQuiz() {
        this.calculateScore();
        this.showResults();
    }

    calculateScore() {
        this.score = 0;
        let totalAnswered = 0;
        
        this.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            
            if (userAnswer !== null) {
                totalAnswered++;
                
                if (question.type === 'boolean') {
                    if (userAnswer === question.correctAnswer) {
                        this.score++;
                    }
                } else if (question.type === 'multiple') {
                    if (userAnswer === question.correctAnswer) {
                        this.score++;
                    }
                }
            }
        });
        
        return { score: this.score, totalAnswered };
    }

    showResults() {
        const { score, totalAnswered } = this.calculateScore();
        const percentage = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;
        
        this.quizContainer.style.display = 'none';
        this.reviewContainer.style.display = 'none';
        this.resultsContainer.style.display = 'block';
        
        this.finalScore.textContent = `${percentage}%`;
        this.correctAnswersSpan.textContent = score;
        this.totalAnsweredSpan.textContent = totalAnswered;
        
        // Add color coding for score
        const scoreCircle = document.querySelector('.score-circle');
        scoreCircle.className = 'score-circle';
        
        if (percentage >= 80) {
            scoreCircle.style.background = 'linear-gradient(135deg, #4caf50, #45a049)';
        } else if (percentage >= 60) {
            scoreCircle.style.background = 'linear-gradient(135deg, #ff9800, #f57c00)';
        } else {
            scoreCircle.style.background = 'linear-gradient(135deg, #f44336, #d32f2f)';
        }
    }

    showReview() {
        this.quizContainer.style.display = 'none';
        this.resultsContainer.style.display = 'none';
        this.reviewContainer.style.display = 'block';
        
        this.generateReviewContent();
    }

    generateReviewContent() {
        const reviewContent = document.getElementById('review-content');
        reviewContent.innerHTML = '';
        
        this.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = this.isAnswerCorrect(question, userAnswer);
            
            const questionDiv = document.createElement('div');
            questionDiv.className = `review-question ${!isCorrect ? 'incorrect' : ''}`;
            
            let reviewHTML = `
                <h4>${index + 1}. ${question.question}</h4>
                <div class="review-category">${question.category}</div>
            `;
            
            if (userAnswer !== null) {
                const userAnswerText = question.type === 'boolean' ? 
                    (userAnswer === true ? 'Pravda' : 'Nepravda') : 
                    userAnswer;
                
                reviewHTML += `
                    <div class="review-answer ${isCorrect ? 'correct' : 'user-incorrect'}">
                        Vaše odpověď: ${userAnswerText} ${isCorrect ? '✓' : '✗'}
                    </div>
                `;
            } else {
                reviewHTML += `
                    <div class="review-answer user-incorrect">
                        Nezodpovězeno ✗
                    </div>
                `;
            }
            
            if (!isCorrect) {
                const correctAnswerText = question.type === 'boolean' ? 
                    (question.correctAnswer === true ? 'Pravda' : 'Nepravda') : 
                    question.correctAnswer;
                
                reviewHTML += `
                    <div class="review-answer correct">
                        Správná odpověď: ${correctAnswerText} ✓
                    </div>
                `;
            }
            
            questionDiv.innerHTML = reviewHTML;
            reviewContent.appendChild(questionDiv);
        });
    }

    isAnswerCorrect(question, userAnswer) {
        if (userAnswer === null) return false;
        
        if (question.type === 'boolean') {
            return userAnswer === question.correctAnswer;
        } else if (question.type === 'multiple') {
            return userAnswer === question.correctAnswer;
        }
        
        return false;
    }

    restartQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.score = 0;
        
        this.shuffleQuestions();
        
        this.resultsContainer.style.display = 'none';
        this.reviewContainer.style.display = 'none';
        this.quizContainer.style.display = 'block';
        
        this.displayQuestion();
        this.updateProgress();
        this.updateNavigationButtons();
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
