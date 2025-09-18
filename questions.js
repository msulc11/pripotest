const questions = [
    {
        id: 1,
        category: "Historie",
        question: "První generaci počítačů charakterizujte:",
        type: "multiple",
        correctAnswer: "Nástup elektronkových počítacích automatů",
        options: [
            "Nástup elektronkových počítacích automatů",
            "Objevení tranzistoru jako stavebního kamene",
            "Založeny na integrovaném obvodu",
            "Používání mikroprocesorů"
        ]
    },
    {
        id: 2,
        category: "Historie",
        question: "Druhou generaci počítačů charakterizujte:",
        type: "multiple",
        correctAnswer: "Objevení tranzistoru, jenž se stal hlavním stavebním kamenem",
        options: [
            "Nástup elektronkových počítacích automatů",
            "Objevení tranzistoru, jenž se stal hlavním stavebním kamenem",
            "Založeny na integrovaném obvodu",
            "Používání kvantových procesorů"
        ]
    },
    {
        id: 3,
        category: "Historie",
        question: "Třetí generaci počítačů charakterizuje:",
        type: "multiple",
        correctAnswer: "Počítače založeny na integrovaném obvodu",
        options: [
            "Objevení tranzistoru jako stavebního kamene",
            "Nástup elektronkových počítacích automatů",
            "Počítače založeny na integrovaném obvodu",
            "Používání biologických procesorů"
        ]
    },
    {
        id: 4,
        category: "Historie",
        question: "Čtvrtou generaci počítačů charakterizuje:",
        type: "multiple",
        correctAnswer: "Celý řídící procesor s jeho lokální pamětí je uložen jediném malém integrovaném obvodě",
        options: [
            "Celý řídící procesor s jeho lokální pamětí je uložen jediném malém integrovaném obvodě",
            "Založeny pouze na integrovaném obvodu",
            "Používání mechanických součástí",
            "Nástup analogových počítačů"
        ]
    },
    {
        id: 5,
        category: "Číselné soustavy",
        question: "Poziční číselná soustava je taková, kde:",
        type: "multiple",
        correctAnswer: "Má každá číslice v čísle pevně přiřazenou váhu závislou na pozici v čísle",
        options: [
            "Má každá číslice v čísle pevně přiřazenou váhu závislou na pozici v čísle",
            "Váha číslice nezávisí na pozici",
            "Používá pouze dekadické číslice",
            "Všechny číslice mají stejnou váhu"
        ]
    },
    {
        id: 6,
        category: "Číselné soustavy",
        question: "Polyadická číselná soustava je číselná soustava, kde váha číslice nezávisí na pořadí číslice v čísle.",
        type: "boolean",
        correctAnswer: false
    },
    {
        id: 7,
        category: "Číselné soustavy",
        question: "Co je to BCD kód?",
        type: "multiple",
        correctAnswer: "Přímý kód používaný pro kódování číslic 0 až 9",
        options: [
            "Přímý kód používaný pro kódování číslic 0 až 9",
            "Nepřímý kód pro písmena",
            "Kompresní algoritmus",
            "Šifrovací metoda"
        ]
    },
    {
        id: 8,
        category: "Číselné soustavy",
        question: "Znaménko expanze se používá ke slučování slov nestejné délky",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 9,
        category: "Logické funkce",
        question: "Logická hradla jsou:",
        type: "multiple",
        correctAnswer: "Základní stavební prvek logických obvodů, který vyčísluje logickou funkci",
        options: [
            "Základní stavební prvek logických obvodů, který vyčísluje logickou funkci",
            "Pouze teoretický koncept",
            "Výhradně softwarové komponenty",
            "Mechanické spínače"
        ]
    },
    {
        id: 10,
        category: "Logické funkce",
        question: "Logická funkce je úplně zadaná, pokud je hodnota logické funkce známa pro všechny možné kombinace hodnot proměnných.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 11,
        category: "Logické funkce",
        question: "Logická funkce je neúplně zadaná, pokud je známa její hodnota 1 nebo 0 pro všechny možné kombinace hodnot proměnných.",
        type: "boolean",
        correctAnswer: false
    },
    {
        id: 12,
        category: "Logické funkce",
        question: "Za úplný systém logických funkcí můžeme považovat Scheffnerovu funkci, ale i Peircerovu funkci.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 13,
        category: "Logické funkce",
        question: "Disjunkce je:",
        type: "multiple",
        correctAnswer: "Logický součet",
        options: [
            "Logický součet",
            "Logický součin",
            "Logická negace",
            "Logická implikace"
        ]
    },
    {
        id: 14,
        category: "Logické funkce",
        question: "Konjunkce je:",
        type: "multiple",
        correctAnswer: "Logický součin",
        options: [
            "Logický součet",
            "Logický součin",
            "Logická negace",
            "Logická ekvivalence"
        ]
    },
    {
        id: 15,
        category: "Logické funkce",
        question: "Úplná disjunktivní normální forma je zápis pomocí:",
        type: "multiple",
        correctAnswer: "Součtu součinů",
        options: [
            "Součtu součinů",
            "Součinu součtů",
            "Negace součtů",
            "Implikace součinů"
        ]
    },
    {
        id: 16,
        category: "Logické funkce",
        question: "Úplná konjunktivní normální forma je zápis funkce pomocí:",
        type: "multiple",
        correctAnswer: "Součinu součtů",
        options: [
            "Součtu součinů",
            "Součinu součtů",
            "Negace součinů",
            "Ekvivalence součtů"
        ]
    },
    {
        id: 17,
        category: "Logické funkce",
        question: "Pravdivostní tabulka má 2^n řádků, kde n je počet sloupců výsledných funkcí",
        type: "boolean",
        correctAnswer: false
    },
    {
        id: 18,
        category: "Logické funkce",
        question: "Pro pravdivostní tabulku platí, že v řádcích jsou zaznamenány všechny možné kombinace proměnných.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 19,
        category: "Logické funkce",
        question: "Základy dvouhodnotové logiky vytvořil:",
        type: "multiple",
        correctAnswer: "George Boole",
        options: [
            "George Boole",
            "Alan Turing",
            "John von Neumann",
            "Charles Darwin"
        ]
    },
    {
        id: 20,
        category: "Logické funkce",
        question: "Výrokem je např. věta \"Špagety jsou jeho nejoblíbenější jídlo.\"",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 21,
        category: "Logické funkce",
        question: "Výrokem je např.věta \"Dva plus jedna je šest.\"",
        type: "boolean",
        correctAnswer: false
    },
    {
        id: 22,
        category: "Logické funkce",
        question: "Výrokem je každá oznamovací věta, u které má význam určovat její pravdivostní hodnotu.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 23,
        category: "Logické funkce",
        question: "Výrokem je každá oznamovací věta:",
        type: "boolean",
        correctAnswer: false
    },
    {
        id: 24,
        category: "Logické funkce",
        question: "Zásada vyloučení třetího ve výrokové (dvouhodnotové) logice znamená:",
        type: "multiple",
        correctAnswer: "Skutečnost buď je nebo není, třetí možnost neexistuje",
        options: [
            "Skutečnost buď je nebo není, třetí možnost neexistuje",
            "Existují tři možné stavy pravdivosti",
            "Každý výrok má neutrální hodnotu",
            "Logika má více než dvě hodnoty"
        ]
    },
    {
        id: 25,
        category: "Logické funkce",
        question: "Zásada sporu ve výrokové (dvouhodnotové) logice znamená:",
        type: "multiple",
        correctAnswer: "Nelze, aby skutečnost zároveň byla a současně nebyla",
        options: [
            "Nelze, aby skutečnost zároveň byla a současně nebyla",
            "Skutečnost může být současně pravdivá i nepravdivá",
            "Spor je základem logiky",
            "Kontradikce jsou povoleny"
        ]
    },
    {
        id: 26,
        category: "Logické funkce",
        question: "Zásada totožnosti ve výrokové (dvouhodnotové) logice znamená:",
        type: "multiple",
        correctAnswer: "Každý výrok má pevný a neměnný význam",
        options: [
            "Každý výrok má pevný a neměnný význam",
            "Výroky mohou měnit svůj význam",
            "Všechny výroky jsou totožné",
            "Význam závisí na kontextu"
        ]
    },
    {
        id: 27,
        category: "Logické funkce",
        question: "Existence záporu ve výrokové (dvouhodnotové) logice znamená",
        type: "multiple",
        correctAnswer: "Ke každému výroku je možné vytvořit jiný zvaný zápor (negace)",
        options: [
            "Ke každému výroku je možné vytvořit jiný zvaný zápor (negace)",
            "Zápor neexistuje v logice",
            "Pouze některé výroky mají zápor",
            "Zápor je totožný s původním výrokem"
        ]
    },
    {
        id: 28,
        category: "Logické obvody",
        question: "Klopný obvod:",
        type: "multiple",
        correctAnswer: "Elektronický obvod, který přechází mezi několika diskrétními stavy a ke změně mezi nimi dochází skokově",
        options: [
            "Elektronický obvod, který přechází mezi několika diskrétními stavy a ke změně mezi nimi dochází skokově",
            "Obvod s plynulou změnou stavů",
            "Pouze analogový obvod",
            "Mechanické zařízení"
        ]
    },
    {
        id: 29,
        category: "Logické obvody",
        question: "Bistabilní klopné obvody:",
        type: "multiple",
        correctAnswer: "Oba dva stavy jsou stabilní a používají se jako paměťové prvky",
        options: [
            "Oba dva stavy jsou stabilní a používají se jako paměťové prvky",
            "Mají pouze jeden stabilní stav",
            "Nemají žádný stabilní stav",
            "Slouží pouze k blikání"
        ]
    },
    {
        id: 30,
        category: "Logické obvody",
        question: "Astabilní klopný obvod:",
        type: "multiple",
        correctAnswer: "Nemají žádný stabilní stav a neustále kmitají z jednoho stavu do druhého",
        options: [
            "Nemají žádný stabilní stav a neustále kmitají z jednoho stavu do druhého",
            "Mají dva stabilní stavy",
            "Mají jeden stabilní stav",
            "Nikdy nekmitají"
        ]
    },
    {
        id: 31,
        category: "Logické obvody",
        question: "Monostabilní klopný obvod:",
        type: "multiple",
        correctAnswer: "Jeden stabilní stav, ze kterého se obvod překlopí pouze s příchodem spouštěcího impulzu",
        options: [
            "Jeden stabilní stav, ze kterého se obvod překlopí pouze s příchodem spouštěcího impulzu",
            "Dva stabilní stavy",
            "Žádný stabilní stav",
            "Překlopí se náhodně"
        ]
    },
    {
        id: 32,
        category: "Logické obvody",
        question: "V případě kombinačních logických obvodů:",
        type: "multiple",
        correctAnswer: "Výstup závisí pouze na vstupu",
        options: [
            "Výstup závisí pouze na vstupu",
            "Výstup závisí na historii vstupů",
            "Výstup je nezávislý na vstupu",
            "Výstup závisí pouze na čase"
        ]
    },
    {
        id: 33,
        category: "Logické obvody",
        question: "Asynchronní logické obvody:",
        type: "multiple",
        correctAnswer: "Reagují na změnu vstupních signálů okamžitě",
        options: [
            "Reagují na změnu vstupních signálů okamžitě",
            "Reagují pouze na hodinový signál",
            "Nikdy nereagují na vstupy",
            "Reagují s velkým zpožděním"
        ]
    },
    {
        id: 34,
        category: "Logické obvody",
        question: "Synchronní logické obvody:",
        type: "multiple",
        correctAnswer: "Obsahují řídící synchronizační (hodinový) signál",
        options: [
            "Obsahují řídící synchronizační (hodinový) signál",
            "Reagují okamžitě na vstupy",
            "Nemají žádné řízení",
            "Fungují pouze náhodně"
        ]
    },
    {
        id: 35,
        category: "Logické obvody",
        question: "V případě sekvenčních logických obvodů:",
        type: "multiple",
        correctAnswer: "Výstupní stav závisí na předcházejících stavech proměnných",
        options: [
            "Výstupní stav závisí na předcházejících stavech proměnných",
            "Výstup závisí pouze na aktuálním vstupu",
            "Výstup je vždy konstantní",
            "Výstup je náhodný"
        ]
    },
    {
        id: 36,
        category: "Logické obvody",
        question: "Hazard:",
        type: "multiple",
        correctAnswer: "Krátká neočekávaná změna vstupního signálu, která se obvykle projevuje jako velmi krátký rušivý impuls",
        options: [
            "Krátká neočekávaná změna vstupního signálu, která se obvykle projevuje jako velmi krátký rušivý impuls",
            "Dlouhodobá změna signálu",
            "Očekávaná změna signálu",
            "Stabilní signál"
        ]
    },
    {
        id: 37,
        category: "Logické obvody",
        question: "Hazard vzniká v důsledku různě velkých zpoždění vznikajících při průchodu elektrického signálu hradly.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 38,
        category: "Logické obvody",
        question: "Dynamický hazard znamená, že v důsledku zpoždění signálu se při změně jedné vstupní proměnné objeví na výstupu krátký impuls opačné úrovně.",
        type: "boolean",
        correctAnswer: false
    },
    {
        id: 39,
        category: "Logické obvody",
        question: "Statický hazard znamená, že v důsledku zpoždění signálu se při změně jedné vstupní proměnné objeví na výstupu krátký impuls opačné úrovně.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 40,
        category: "Logické obvody",
        question: "Funkční hazard znamená:",
        type: "multiple",
        correctAnswer: "Že se mění ve stejný okamžik více vstupních proměnných zároveň",
        options: [
            "Že se mění ve stejný okamžik více vstupních proměnných zároveň",
            "Že se mění pouze jedna proměnná",
            "Že se nemění žádná proměnná",
            "Že funkce nefunguje"
        ]
    },
    {
        id: 41,
        category: "Zobrazovací soustava",
        question: "Mezi výhody vektorové grafiky patří:",
        type: "multiple",
        correctAnswer: "Při zvětšování a zmenšování nedochází k zhoršení kvality",
        options: [
            "Při zvětšování a zmenšování nedochází k zhoršení kvality",
            "Větší paměťová náročnost",
            "Horší kvalita při změně velikosti",
            "Nemožnost editace objektů"
        ]
    },
    {
        id: 42,
        category: "Zobrazovací soustava",
        question: "Mezi nevýhody vektorové grafiky patří:",
        type: "multiple",
        correctAnswer: "Složitější pořízení obrázku",
        options: [
            "Složitější pořízení obrázku",
            "Nižší kvalita při změně velikosti",
            "Větší paměťová náročnost než rastrová",
            "Lepší vhodnost pro fotografie"
        ]
    },
    {
        id: 43,
        category: "Zobrazovací soustava",
        question: "Mezi výhody CRT monitorů patří:",
        type: "multiple",
        correctAnswer: "Vysoký kontrastní poměr",
        options: [
            "Vysoký kontrastní poměr",
            "Malé rozměry a váha",
            "Nízká spotřeba energie",
            "Odolnost proti magnetickému poli"
        ]
    },
    {
        id: 44,
        category: "Zobrazovací soustava",
        question: "Mezi nevýhody CRT monitorů patří:",
        type: "multiple",
        correctAnswer: "Velké rozměry a váha",
        options: [
            "Velké rozměry a váha",
            "Nízký kontrastní poměr",
            "Malá spotřeba energie",
            "Stabilní obraz"
        ]
    },
    {
        id: 45,
        category: "Zobrazovací soustava",
        question: "Mezi výhody LCD monitorů patří:",
        type: "multiple",
        correctAnswer: "Kompaktní a lehký",
        options: [
            "Kompaktní a lehký",
            "Vysoká spotřeba energie",
            "Velké rozměry",
            "Geometrické zkreslení"
        ]
    },
    {
        id: 46,
        category: "Zobrazovací soustava",
        question: "Mezi nevýhody LCD monitorů patří:",
        type: "multiple",
        correctAnswer: "Malý kontrastní poměr",
        options: [
            "Malý kontrastní poměr",
            "Vysoký kontrastní poměr",
            "Rychlé časy odezvy",
            "Neomezené pozorovací úhly"
        ]
    },
    {
        id: 47,
        category: "Zobrazovací soustava",
        question: "Mezi nevýhody plazmových displejů patří:",
        type: "multiple",
        correctAnswer: "Problémy s kontrastem",
        options: [
            "Problémy s kontrastem",
            "Perfektní kontrast",
            "Levné",
            "Dokonalé zobrazení šedi"
        ]
    },
    {
        id: 48,
        category: "Zobrazovací soustava",
        question: "Mezi výhody rastrové grafiky patří:",
        type: "multiple",
        correctAnswer: "Snadné pořízení pomocí fotoaparátu nebo skeneru",
        options: [
            "Snadné pořízení pomocí fotoaparátu nebo skeneru",
            "Neomezeně škálovatelná",
            "Malá paměťová náročnost",
            "Vektorové objekty"
        ]
    },
    {
        id: 49,
        category: "Zobrazovací soustava",
        question: "Rastrová grafika znamená, že:",
        type: "multiple",
        correctAnswer: "Je celý obrázek popsán pomocí jednotlivých barevných bodů (pixelů), které jsou uspořádány do mřížky",
        options: [
            "Je celý obrázek popsán pomocí jednotlivých barevných bodů (pixelů), které jsou uspořádány do mřížky",
            "Používá matematické funkce pro popis objektů",
            "Je nekonečně škálovatelná",
            "Nepoužívá pixely"
        ]
    },
    {
        id: 50,
        category: "Mikroprocesory",
        question: "U von Neumannovy architektury platí, že:",
        type: "multiple",
        correctAnswer: "Má sekvenční zpracování, to znamená, že počítač má společnou paměť pro instrukce i data",
        options: [
            "Má sekvenční zpracování, to znamená, že počítač má společnou paměť pro instrukce i data",
            "Má oddělenou paměť pro instrukce a data",
            "Má pouze paměť pro data",
            "Má pouze paměť pro instrukce"
        ]
    },
    {
        id: 51,
        category: "Mikroprocesory",
        question: "Von Neumannova architektura počítače se vyznačuje sekvenčním zpracováním.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 52,
        category: "Mikroprocesory",
        question: "U von Neumannovy architektury přistupuje řídící jednotka procesoru do paměti pro data i pro instrukce jednotným způsobem.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 53,
        category: "Mikroprocesory",
        question: "Von Neumanova architektura popisuje počítač s oddělenou pamětí pro instrukce a data.",
        type: "boolean",
        correctAnswer: false
    },
    {
        id: 54,
        category: "Mikroprocesory",
        question: "U von Neumannovy architektury může procesor v jedné chvíli vykonávat jen jednu činnost – číst (nebo zapisovat) data nebo instrukce.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 55,
        category: "Mikroprocesory",
        question: "U Harvardské architektury nelze nevyužitou část paměti dat použít pro program obráceně.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 56,
        category: "Mikroprocesory",
        question: "U Harvardské architektury platí, že:",
        type: "multiple",
        correctAnswer: "Má paralelní zpracování, odděluje fyzicky paměť od programu a dat a jejich spojovací obvody",
        options: [
            "Má paralelní zpracování, odděluje fyzicky paměť od programu a dat a jejich spojovací obvody",
            "Má společnou paměť pro data i instrukce",
            "Má pouze sekvenční zpracování",
            "Nepoužívá paměť"
        ]
    },
    {
        id: 57,
        category: "Mikroprocesory",
        question: "U Harvardské architektury počítače:",
        type: "multiple",
        correctAnswer: "Není potřeba mít paměť stejných parametrů a vlastností pro data a pro program",
        options: [
            "Není potřeba mít paměť stejných parametrů a vlastností pro data a pro program",
            "Je potřeba identická paměť pro data i program",
            "Používá pouze jednu paměť",
            "Nerozlišuje data a program"
        ]
    },
    {
        id: 58,
        category: "Mikroprocesory",
        question: "U Harvardské architektury rozdělení paměti pro kód a data určuje programátor.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 59,
        category: "Mikroprocesory",
        question: "Procesor:",
        type: "multiple",
        correctAnswer: "Základní součást počítače",
        options: [
            "Základní součást počítače",
            "Nepotřebná součást počítače",
            "Pouze paměťová součást",
            "Pouze vstupní zařízení"
        ]
    },
    {
        id: 60,
        category: "Mikroprocesory",
        question: "Pipelining:",
        type: "multiple",
        correctAnswer: "Zřetězené zpracování, či překrývání strojových instrukcí",
        options: [
            "Zřetězené zpracování, či překrývání strojových instrukcí",
            "Sekvenční zpracování bez překrývání",
            "Pouze jednoduché instrukce",
            "Zpracování bez optimalizace"
        ]
    },
    {
        id: 61,
        category: "Mikroprocesory",
        question: "Strojový kód je:",
        type: "multiple",
        correctAnswer: "Posloupnost strojových instrukcí prováděných procesorem počítače",
        options: [
            "Posloupnost strojových instrukcí prováděných procesorem počítače",
            "Vysokoúrovňový programovací jazyk",
            "Pouze textový popis programu",
            "Grafické rozhraní"
        ]
    },
    {
        id: 62,
        category: "Mikroprocesory",
        question: "Registr je:",
        type: "multiple",
        correctAnswer: "Rychlá paměťová buňka přímo v mikroprocesoru",
        options: [
            "Rychlá paměťová buňka přímo v mikroprocesoru",
            "Pomalá externí paměť",
            "Vstupní zařízení",
            "Výstupní zařízení"
        ]
    },
    {
        id: 63,
        category: "Mikroprocesory",
        question: "Co to je DMA?",
        type: "multiple",
        correctAnswer: "Přímý přístup do paměti",
        options: [
            "Přímý přístup do paměti",
            "Digitální audio rozhraní",
            "Databázový management",
            "Síťový protokol"
        ]
    },
    {
        id: 64,
        category: "Mikroprocesory",
        question: "Přerušený je signál, jenž znamená, že vysílatel signálu se snaží zabrat procesor sám pro sebe.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 65,
        category: "Programové vybavení počítače",
        question: "Software:",
        type: "multiple",
        correctAnswer: "Sada všech počítačových programů používaných v počítači, které provádějí nějakou činnost",
        options: [
            "Sada všech počítačových programů používaných v počítači, které provádějí nějakou činnost",
            "Pouze fyzické komponenty počítače",
            "Pouze operační systém",
            "Pouze hry"
        ]
    },
    {
        id: 66,
        category: "Programové vybavení počítače",
        question: "Operační systém:",
        type: "multiple",
        correctAnswer: "Základní programové vybavení počítače",
        options: [
            "Základní programové vybavení počítače",
            "Aplikační software",
            "Herní software",
            "Webový prohlížeč"
        ]
    },
    {
        id: 67,
        category: "Programové vybavení počítače",
        question: "Mezi systémové prostředky nepatří diskový prostor.",
        type: "boolean",
        correctAnswer: false
    },
    {
        id: 68,
        category: "Programové vybavení počítače",
        question: "Mezi sytémové zdroje řadíme (mimo jiné) i čas procesu a diskový prostor.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 69,
        category: "Programové vybavení počítače",
        question: "Mezi systémové prostředky nepatří přídavná zařízení",
        type: "boolean",
        correctAnswer: false
    },
    {
        id: 70,
        category: "Programové vybavení počítače",
        question: "Jádro operačního systému:",
        type: "multiple",
        correctAnswer: "Zavedeno do operační paměti při startu počítače a je mu předáno zařízení",
        options: [
            "Zavedeno do operační paměti při startu počítače a je mu předáno zařízení",
            "Spouští se až po spuštění aplikací",
            "Není součástí operačního systému",
            "Běží pouze v uživatelském režimu"
        ]
    },
    {
        id: 71,
        category: "Programové vybavení počítače",
        question: "Jádro operačního systému celkem často ztrácí kontrolu nad počítačem, pak vše řídí procesor.",
        type: "boolean",
        correctAnswer: false
    },
    {
        id: 72,
        category: "Programové vybavení počítače",
        question: "Proces:",
        type: "multiple",
        correctAnswer: "Název pro spuštěný počítačový program",
        options: [
            "Název pro spuštěný počítačový program",
            "Pouze zdrojový kód programu",
            "Pouze spustitelný soubor",
            "Hardware počítače"
        ]
    },
    {
        id: 73,
        category: "Programové vybavení počítače",
        question: "Multitasking:",
        type: "multiple",
        correctAnswer: "Schopnost operačního systému provádět několik procesů současně",
        options: [
            "Schopnost operačního systému provádět několik procesů současně",
            "Provádění pouze jednoho procesu",
            "Hardware vlastnost procesoru",
            "Síťová funkce"
        ]
    },
    {
        id: 74,
        category: "Programové vybavení počítače",
        question: "Vlákno (thread):",
        type: "multiple",
        correctAnswer: "Odlehčený proces, pomocí něhož se snižuje režie operačního systému při změně kontextu",
        options: [
            "Odlehčený proces, pomocí něhož se snižuje režie operačního systému při změně kontextu",
            "Totožné s plnohodnotným procesem",
            "Fyzické spojení v počítači",
            "Síťový protokol"
        ]
    },
    {
        id: 75,
        category: "Paměti a záznamy dat",
        question: "Flash paměť",
        type: "multiple",
        correctAnswer: "Je nevolatilní elektricky programovatelná paměť s libovolným přístupem",
        options: [
            "Je nevolatilní elektricky programovatelná paměť s libovolným přístupem",
            "Je volatilní paměť závislá na napájení",
            "Pouze pro čtení",
            "Mechanická paměť"
        ]
    },
    {
        id: 76,
        category: "Paměti a záznamy dat",
        question: "Asociativní paměť neboli cache:",
        type: "multiple",
        correctAnswer: "Rychlá vyrovnávací paměť, je blízko procesoru, má vlastní řízení",
        options: [
            "Rychlá vyrovnávací paměť, je blízko procesoru, má vlastní řízení",
            "Pomalá vzdálená paměť",
            "Pouze pro dlouhodobé uložení",
            "Síťová paměť"
        ]
    },
    {
        id: 77,
        category: "Paměti a záznamy dat",
        question: "Dynamická RAM (DRAM)",
        type: "multiple",
        correctAnswer: "Informaci nese stav kondenzátoru (nabitý, vybitý)",
        options: [
            "Informaci nese stav kondenzátoru (nabitý, vybitý)",
            "Používá pouze bistabilní klopné obvody",
            "Není závislá na napájení",
            "Mechanické uložení dat"
        ]
    },
    {
        id: 78,
        category: "Paměti a záznamy dat",
        question: "Statická RAM:",
        type: "multiple",
        correctAnswer: "Je realizována jako bistabilní klopný obvod",
        options: [
            "Je realizována jako bistabilní klopný obvod",
            "Používá kondenzátory",
            "Vyžaduje občasné obnovování",
            "Je mechanická"
        ]
    },
    {
        id: 79,
        category: "Paměti a záznamy dat",
        question: "Pro dynamickou paměť DRAM platí, že:",
        type: "multiple",
        correctAnswer: "Je realizovaná pomocí parazitních kapacit",
        options: [
            "Je realizovaná pomocí parazitních kapacit",
            "Používá bistabilní klopné obvody",
            "Nevyžaduje obnovování",
            "Je mechanická"
        ]
    },
    {
        id: 80,
        category: "Paměti a záznamy dat",
        question: "Paměť typu ROM:",
        type: "multiple",
        correctAnswer: "Je typ elektronické paměti, jejíž obsah je dán při výrobě a není závislí na napájení",
        options: [
            "Je typ elektronické paměti, jejíž obsah je dán při výrobě a není závislí na napájení",
            "Lze ji programovat uživatelem",
            "Ztrácí data při vypnutí",
            "Je pouze dočasná"
        ]
    },
    {
        id: 81,
        category: "Paměti a záznamy dat",
        question: "Vnitřní paměť není energeticky závislá.",
        type: "boolean",
        correctAnswer: false
    },
    {
        id: 82,
        category: "Paměti a záznamy dat",
        question: "SSD disky:",
        type: "multiple",
        correctAnswer: "Je typ datového média, které na rozdíl od magnetických pevných disků neobsahuje pohyblivé mechanické části",
        options: [
            "Je typ datového média, které na rozdíl od magnetických pevných disků neobsahuje pohyblivé mechanické části",
            "Obsahují pohyblivé mechanické části",
            "Jsou pomalejší než HDD",
            "Spotřebovávají více energie než HDD"
        ]
    },
    {
        id: 83,
        category: "Základy elektrotechniky",
        question: "Elektrické pole:",
        type: "multiple",
        correctAnswer: "Je jednou ze dvou základních forem hmoty",
        options: [
            "Je jednou ze dvou základních forem hmoty",
            "Neexistuje v přírodě",
            "Je pouze teoretický koncept",
            "Nevzniká u nabitých částic"
        ]
    },
    {
        id: 84,
        category: "Základy elektrotechniky",
        question: "Elektrický odpor kovových vodičů:",
        type: "multiple",
        correctAnswer: "Závisí na teplotě, s rostoucí teplotou roste (lineární závislost)",
        options: [
            "Závisí na teplotě, s rostoucí teplotou roste (lineární závislost)",
            "S rostoucí teplotou klesá",
            "Nezávisí na teplotě",
            "Mění se náhodně"
        ]
    },
    {
        id: 85,
        category: "Základy elektrotechniky",
        question: "Elektrický odpor polovodičů:",
        type: "multiple",
        correctAnswer: "Se vzrůstající teplotou nelineárně klesá",
        options: [
            "Se vzrůstající teplotou nelineárně klesá",
            "Se vzrůstající teplotou roste",
            "Nezávisí na teplotě",
            "Je vždy konstantní"
        ]
    },
    {
        id: 86,
        category: "Základy elektrotechniky",
        question: "Elektrický náboj:",
        type: "multiple",
        correctAnswer: "Fyzikální veličina charakterizující elektricky nabitá tělesa, popřípadě částice vytvářející ve svém okolí el. pole",
        options: [
            "Fyzikální veličina charakterizující elektricky nabitá tělesa, popřípadě částice vytvářející ve svém okolí el. pole",
            "Neexistuje v přírodě",
            "Nevytváří elektrické pole",
            "Je pouze teoretický"
        ]
    },
    {
        id: 87,
        category: "Základy elektrotechniky",
        question: "Elektrický proud:",
        type: "multiple",
        correctAnswer: "Uspořádaný pohyb volných částic s elektrickým nábojem",
        options: [
            "Uspořádaný pohyb volných částic s elektrickým nábojem",
            "Neuspořádaný pohyb částic",
            "Statický jev",
            "Magnetický jev"
        ]
    },
    {
        id: 88,
        category: "Základy elektrotechniky",
        question: "Druhý Kirchhoffův zákon říká, že:",
        type: "multiple",
        correctAnswer: "Součet úbytků napětí na rezistorech je v uzavřené smyčce roven součtu elektromotorických napětí zdrojů",
        options: [
            "Součet úbytků napětí na rezistorech je v uzavřené smyčce roven součtu elektromotorických napětí zdrojů",
            "Součet proudů v uzlu je roven nule",
            "Odpor je konstantní",
            "Napětí je vždy konstantní"
        ]
    },
    {
        id: 89,
        category: "Základy elektrotechniky",
        question: "Kondenzátor",
        type: "multiple",
        correctAnswer: "Je tvořen dvěma rovnoběžnými deskami",
        options: [
            "Je tvořen dvěma rovnoběžnými deskami",
            "Je tvořen jednou deskou",
            "Nevede žádný proud",
            "Vede pouze stejnosměrný proud"
        ]
    },
    {
        id: 90,
        category: "Základy elektrotechniky",
        question: "Kapacitu kondenzátoru lze zvětšovat:",
        type: "multiple",
        correctAnswer: "Použitím dielektrika kondenzátoru",
        options: [
            "Použitím dielektrika kondenzátoru",
            "Vzdalováním desek",
            "Zmenšováním plochy desek",
            "Odstraněním dielektrika"
        ]
    },
    {
        id: 91,
        category: "Základy elektrotechniky",
        question: "Ve spínacích obvodech má tranzistor:",
        type: "multiple",
        correctAnswer: "Stav vysoké impendance",
        options: [
            "Stav vysoké impendance",
            "Pouze nízkou impedanci",
            "Konstantní impedanci",
            "Neměnnou impedanci"
        ]
    },
    {
        id: 92,
        category: "Základy elektrotechniky",
        question: "V případě bipolárního tranzistoru proud teče od emitoru do kolektoru.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 93,
        category: "Základy elektrotechniky",
        question: "V případě unipolárního tranzistoru je kolektorový proud řízen napětím.",
        type: "boolean",
        correctAnswer: true
    },
    {
        id: 94,
        category: "Základy elektrotechniky",
        question: "Bipolární tranzistor je řízen napětím.",
        type: "boolean",
        correctAnswer: false
    },
    {
        id: 95,
        category: "Základy elektrotechniky",
        question: "Magnetické pole:",
        type: "multiple",
        correctAnswer: "Fyzikální pole, které vzniká následkem pohybu elektrických nábojů",
        options: [
            "Fyzikální pole, které vzniká následkem pohybu elektrických nábojů",
            "Nevzniká z elektrických nábojů",
            "Je nezávislé na pohybu",
            "Neexistuje"
        ]
    },
    {
        id: 96,
        category: "Základy elektrotechniky",
        question: "Rozdíl mezi aktivními a pasivními prvky elektronických obvodů je, že:",
        type: "multiple",
        correctAnswer: "Pasivní je spotřebičem elektrické energie",
        options: [
            "Pasivní je spotřebičem elektrické energie",
            "Pasivní je zdrojem elektrické energie",
            "Aktivní spotřebovává energii",
            "Není mezi nimi rozdíl"
        ]
    },
    {
        id: 97,
        category: "Základy elektrotechniky",
        question: "Supravodivost je jev, při němž:",
        type: "multiple",
        correctAnswer: "Klesá měrný elektrický odpor látky na nulovou hodnotu",
        options: [
            "Klesá měrný elektrický odpor látky na nulovou hodnotu",
            "Roste elektrický odpor",
            "Odpor zůstává konstantní",
            "Látka se stává nevodivou"
        ]
    },
    {
        id: 98,
        category: "Základy elektrotechniky",
        question: "Ohmův zákon říká, že:",
        type: "multiple",
        correctAnswer: "Proud procházející elektrickým vodičem je při stálém odporu přímo úměrný napětí mezi konci vodiče",
        options: [
            "Proud procházející elektrickým vodičem je při stálém odporu přímo úměrný napětí mezi konci vodiče",
            "Proud je nepřímo úměrný napětí",
            "Odpor nezávisí na napětí",
            "Napětí nezávisí na proudu"
        ]
    }
];
