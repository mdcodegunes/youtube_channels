const channels = [
    {
        id: 0,
        label: "computer",
        url: "",
        links: [
            { name: "ColdFusion", url: "https://www.youtube.com/@ColdFusion" },
            { name: "Undecided with Matt Ferrell", url: "https://www.youtube.com/@UndecidedMF" },
            { name: "Bloomberg Originals", url: "https://www.youtube.com/@business" },
            { name: "Branch Education", url: "https://www.youtube.com/@BranchEducation" }
        ]
    },
    {
        id: 1,
        label: "gunes",
        url: "",
        links: [
            { name: "Evrim Ağacı", url: "https://www.youtube.com/@evrimagaci" },
            { name: "Bebar Bilim", url: "https://www.youtube.com/@bebarbilim" },
            { name: "Ayhan Tarakçı", url: "https://www.youtube.com/@AyhanTarakci" },
            { name: "Bentropi", url: "https://www.youtube.com/@bentropi" },
            { name: "Aklınızda Bulunsun", url: "https://www.youtube.com/@aklinizdabulunsun" },
            { name: "Portal Video", url: "https://www.youtube.com/@PortalVideo" },
            { name: "FEYreal", url: "https://www.youtube.com/@FEYreal" },
            { name: "Erdi Özüağ", url: "https://www.youtube.com/@ErdiOzuag" },
            { name: "DW Türkçe", url: "https://www.youtube.com/@dwturkce" },
            { name: "Faruk Yılmaz Videoları", url: "https://www.youtube.com/@farukyilmazvideolari" },
            { name: "Dolubatarya", url: "https://www.youtube.com/@dolubatarya" },
            { name: "Teknoloji Hayat", url: "https://www.youtube.com/@TeknolojiHayat" },
            { name: "Mehmet Ali Güldal", url: "https://www.youtube.com/@mehmetaliguldal" },
            { name: "Aposto", url: "https://www.youtube.com/@apostonews" },
            { name: "Akademik Link", url: "https://www.youtube.com/@AkademikLink" },
            { name: "Mesut Çevik", url: "https://www.youtube.com/@MesutCevik" },
            { name: "49W", url: "https://www.youtube.com/@49W" },
            { name: "plus90", url: "https://www.youtube.com/@plus90" },
            { name: "Donanım Haber", url: "https://www.youtube.com/@donanimhabertv" },
            { name: "Haluk Tatar", url: "https://www.youtube.com/@HalukTatar" },
            { name: "Evrim Ağacı 2", url: "https://www.youtube.com/@evrimagaci2" },
            { name: "Ruhicenet Media", url: "https://www.youtube.com/@ruhicenetmedia" },
            { name: "KAFA", url: "https://www.youtube.com/@kafa" },
            { name: "İlber Ortaylı Resmi", url: "https://www.youtube.com/@IlberOrtaylresmi" },
            { name: "Teke Tek Bilim", url: "https://www.youtube.com/@TekeTekBilim" },
            { name: "Özcan Show", url: "https://www.youtube.com/@ozcanshow" },
            { name: "Uzm. Dr. Emre Şengün", url: "https://www.youtube.com/@Uzm.Dr.EmreSengun" },
            { name: "Donanım Haber Plus", url: "https://www.youtube.com/@donanimhaberplus" },
            { name: "Dr. Patoloji", url: "https://www.youtube.com/@Drpatoloji" },
            { name: "Tesla TR Maniac", url: "https://www.youtube.com/@teslatrmaniac" },
            { name: "Dr. Dahiliye", url: "https://www.youtube.com/@drdahiliye" },
            { name: "Diosophia", url: "https://www.youtube.com/@diosophia" },
            { name: "Bilimin Etrafında", url: "https://www.youtube.com/@biliminetrafinda" },
            { name: "OMNIBUS LIVE", url: "https://www.youtube.com/@OMNIBUSLIVE" }
        ]
    },
    {
        id: 2,
        label: "sun",
        url: "",
        links: [
            { name: "English with Lucy", url: "https://www.youtube.com/@EnglishwithLucy" },
            { name: "RobWords", url: "https://www.youtube.com/@RobWords" },
            { name: "Tacappaert", url: "https://www.youtube.com/@tacappaert" },
            { name: "Official OET", url: "https://www.youtube.com/@OfficialOET" },
            { name: "E2 OET", url: "https://www.youtube.com/@E2OET" },
            { name: "mmmEnglish", url: "https://www.youtube.com/@mmmEnglish_Emma" }
        ]
    },
    {
        id: 3,
        label: "sole",
        url: "",
        links: [
            { name: "Learn Italian with Lucrezia", url: "https://www.youtube.com/@lucreziaoddone" },
            { name: "Learn Italian with Francesca", url: "https://www.youtube.com/@FrancescaDePaolis" },
            { name: "Fanpage.it", url: "https://www.youtube.com/@FanpageIt" },
            { name: "LearnAmo", url: "https://www.youtube.com/@LearnAmo" },
            { name: "TreccaniChannel", url: "https://www.youtube.com/@treccani" },
            { name: "ScuolaZoo", url: "https://www.youtube.com/@ScuolaZooChannel" },
            { name: "Eumed", url: "https://www.youtube.com/@eumed1248" },
            { name: "Quimamme", url: "https://www.youtube.com/@quimammeitalia" },
            { name: "Ettore Scaletta (Il Corpo Umano)", url: "https://www.youtube.com/@IlCorpoUmano" },
            { name: "Easy Italian", url: "https://www.youtube.com/@EasyItalian" },
            { name: "Briller", url: "https://www.youtube.com/@Briller5" },
            { name: "Wild at Earth", url: "https://www.youtube.com/@WildatEarth" },
            { name: "La Repubblica", url: "https://www.youtube.com/@repubblica" },
            { name: "MinisteroSalute", url: "https://www.youtube.com/@MinisteroSalute" },
            { name: "Breaking Italy", url: "https://www.youtube.com/@breakingitaly" },
            { name: "Project Happiness", url: "https://www.youtube.com/@ProgettoHappiness" }
        ]
    },
    {
        id: 4,
        label: "soleil",
        url: "",
        links: [
            { name: "Français avec Nelly", url: "https://www.youtube.com/@francaisavecnelly" },
            { name: "VU FranceTV", url: "https://www.youtube.com/@VUFranceTV" },
            { name: "alice ayel", url: "https://www.youtube.com/@aliceayel" },
            { name: "Oh La La I Speak French", url: "https://www.youtube.com/@ohlalafrench" },
            { name: "Aprender Francés con Pierre", url: "https://www.youtube.com/@AprenderFranc%C3%A9sconPierre" },
            { name: "Parlez-vous FRENCH : Learn French Online", url: "https://www.youtube.com/@ParlezvousFRENCH" },
            { name: "La Minute de Poésie", url: "https://www.youtube.com/@laminutedepoesie" },
            { name: "Français avec Pierre", url: "https://www.youtube.com/@FrancaisavecPierre" },
            { name: "Société Marocaine de Rhumatologie", url: "https://www.youtube.com/@chainesmr" },
            { name: "Bruno Maltor", url: "https://www.youtube.com/@BrunoMaltor" },
            { name: "Alice Esmeralda", url: "https://www.youtube.com/@AliceEsmeralda" },
            { name: "Ben Névert", url: "https://www.youtube.com/@bennevert" },
            { name: "Cyrus North", url: "https://www.youtube.com/@CyrusNorth" },
            { name: "DirtyBiology", url: "https://www.youtube.com/@dirtybiology" },
            { name: "Solange te parle", url: "https://www.youtube.com/@SolangeTeParle" },
            { name: "innerFrench", url: "https://www.youtube.com/@innerFrench" },
            { name: "lingoni FRENCH", url: "https://www.youtube.com/@lingoniFRENCH" },
            { name: "Piece of French", url: "https://www.youtube.com/@pieceoffrench" },
            { name: "EDN_FR", url: "https://www.youtube.com/@EDN_FR" },
            { name: "Geneva University Hospitals", url: "https://www.youtube.com/@hug_ge" },
            { name: "Les Artisans de Demain", url: "https://www.youtube.com/@lesartisansdedemain" },
            { name: "bref.", url: "https://www.youtube.com/@Bref" },
            { name: "Gregsway", url: "https://www.youtube.com/@Gregsway" },
            { name: "Norman", url: "https://www.youtube.com/@NormanFaitDesVideos" },
            { name: "Le Fil d'Actu - Officiel", url: "https://www.youtube.com/@LeFildActu" },
            { name: "Learn French with Pascal", url: "https://www.youtube.com/@Frenchspanishonline" },
            { name: "Français avec Pierre Shorts", url: "https://www.youtube.com/@FrancaisavecPierreShorts" },
            { name: "Golden Moustache (M6)", url: "https://www.youtube.com/@goldenmoustache" },
            { name: "podcast francais facile", url: "https://www.youtube.com/@podcast_francais_facile" },
            { name: "digiSchool Collège", url: "https://www.youtube.com/@digiSchool-college" },
            { name: "Français Authentique", url: "https://www.youtube.com/@francaisauthentique" },
            { name: "Learn French With Alexa", url: "https://www.youtube.com/@learnfrenchwithalexa" },
            { name: "Easy French", url: "https://www.youtube.com/@EasyFrench" },
            { name: "Rad", url: "https://www.youtube.com/@Radpointca" },
            { name: "HugoDécrypte - Actus du jour", url: "https://www.youtube.com/@hugodecrypteactus" },
            { name: "TV5MONDE Info", url: "https://www.youtube.com/@TV5MONDEInfo" },
            { name: "Nota Bene", url: "https://www.youtube.com/@notabenemovies" },
            { name: "Konbini", url: "https://www.youtube.com/@konbini" },
            { name: "Osons Causer", url: "https://www.youtube.com/@Osonscauser" },
            { name: "Brut", url: "https://www.youtube.com/@BrutFR" },
            { name: "Info ou Mytho ?", url: "https://www.youtube.com/@InfoouMytho" },
            { name: "French mornings with Elisa", url: "https://www.youtube.com/@FrenchmorningswithElisa" },
            { name: "Studio Bagel", url: "https://www.youtube.com/@StudioBagel" },
            { name: "C'est une autre histoire", url: "https://www.youtube.com/@manonbrilcuah" },
            { name: "French Comprehensible Input", url: "https://www.youtube.com/@FrenchComprehensibleInput" },
            { name: "PLANÈTE FRANÇAIS TV avec Elsa Kenza", url: "https://www.youtube.com/@Elsa.Planete.Francais" },
            { name: "Wandering French", url: "https://www.youtube.com/@wanderingfrench" },
            { name: "COLAS BIM", url: "https://www.youtube.com/@COLASBIM" },
            { name: "Cyprien", url: "https://www.youtube.com/@cyprien" }
        ]
    },
    {
        id: 5,
        label: "sol",
        url: "",
        links: [
            { name: "Freellee", url: "https://www.youtube.com/@Freellee" },
            { name: "Linguriosa", url: "https://www.youtube.com/@Linguriosa" },
            { name: "Dreaming Spanish", url: "https://www.youtube.com/@DreamingSpanish" },
            { name: "El Robot de Platón", url: "https://www.youtube.com/@ElRobotdePlaton" },
            { name: "wen 𖦹 criesinquechua", url: "https://www.youtube.com/@criesinquechua" },
            { name: "Conrado Ev", url: "https://www.youtube.com/@ConradoEv" },
            { name: "Farmatoledo 34", url: "https://www.youtube.com/@Farmatoledo34" },
            { name: "La Hiperactina", url: "https://www.youtube.com/@Lahiperactina" },
            { name: "Clases con Clau", url: "https://www.youtube.com/@clasesconclau" },
            { name: "Pau M. Just - Deconstruyendo el Cine", url: "https://www.youtube.com/@PauMJust" },
            { name: "The Language Tutor - Spanish", url: "https://www.youtube.com/@TheLanguageTutor" },
            { name: "Easy Spanish", url: "https://www.youtube.com/@EasySpanish" },
            { name: "Lalia Benchelef", url: "https://www.youtube.com/@LaliaBenchelef" },
            { name: "emi grace", url: "https://www.youtube.com/@emigrace" },
            { name: "Mr. Salas", url: "https://www.youtube.com/@MrSalas" },
            { name: "Spanish After Hours", url: "https://www.youtube.com/@spanishafterhours" },
            { name: "Jorge De León", url: "https://www.youtube.com/@JorgeDeLeonMx" },
            { name: "Viole Franco", url: "https://www.youtube.com/@VioleFranco" },
            { name: "beyond words", url: "https://www.youtube.com/@beyondwords" },
            { name: "Euge Oller", url: "https://www.youtube.com/@EugeOller" },
            { name: "Kiskeya Life", url: "https://www.youtube.com/@KiskeyaLife" },
            { name: "Judith Tiral", url: "https://www.youtube.com/@judithtiral5713" },
            { name: "Lethal Crysis", url: "https://www.youtube.com/@lethalcrysis" },
            { name: "Iris", url: "https://www.youtube.com/@irisreescribetuhistoria" },
            { name: "DANIEL ILLESCAS", url: "https://www.youtube.com/@danielillescas" },
            { name: "Simply Cande", url: "https://www.youtube.com/@simplycande" },
            { name: "jose m.", url: "https://www.youtube.com/@josemd" },
            { name: "Enrique Álex", url: "https://www.youtube.com/@enriquealex" },
            { name: "Español con Juan", url: "https://www.youtube.com/@espanolconjuan" },
            { name: "Isadora Vera", url: "https://www.youtube.com/@IsadoraVera" }
        ]
    },
    {
        id: 6,
        label: "osol",
        url: "",
        links: [
            { name: "Porta dos Fundos", url: "https://www.youtube.com/@portadosfundos" },
            { name: "Speaking Brazilian Language School", url: "https://www.youtube.com/@SpeakingBrazilian" },
            { name: "Português com Marcia Macedo", url: "https://www.youtube.com/@portuguescommarciamacedobr" },
            { name: "Portugués con Philipe Brazuca", url: "https://www.youtube.com/@Philipebrazuca" },
            { name: "Joana Gote", url: "https://www.youtube.com/@joanagote9435" },
            { name: "Easy Languages", url: "https://www.youtube.com/@easylanguages" },
            { name: "Brasileirices", url: "https://www.youtube.com/@Brasileirices" },
            { name: "SmallAdvantages", url: "https://www.youtube.com/@SmallAdvantages" },
            { name: "Ask Jackie", url: "https://www.youtube.com/@AskJackie" },
            { name: "Pula Muralha", url: "https://www.youtube.com/@pulamuralha" },
            { name: "Tim Explica", url: "https://www.youtube.com/@TimExplica" },
            { name: "Elzinga", url: "https://www.youtube.com/@diogoelzinga" },
            { name: "Meus 2 Centavos", url: "https://www.youtube.com/@tiagobelotti" },
            { name: "VICE Brasil", url: "https://www.youtube.com/@VICEBrasil" },
            { name: "Easy Portuguese", url: "https://www.youtube.com/@EasyPortugueseVideos" },
            { name: "BBC News Brasil", url: "https://www.youtube.com/@BBCNewsBrasil" },
            { name: "INGLÉS EnSimplesPalabras", url: "https://www.youtube.com/@EnSimplesPalabras" }
        ]
    },
    {
        id: 7,
        label: "sonne",
        url: "",
        links: [
            { name: "DW Deutsch", url: "https://www.youtube.com/@dwdeutsch" },
            { name: "Terra X Lesch & Co", url: "https://www.youtube.com/@TerraXLeschundCo" },
            { name: "ZDF", url: "https://www.youtube.com/@ZDF" },
            { name: "musstewissen Mathe", url: "https://www.youtube.com/@musstewissenMathe" },
            { name: "musstewissen Chemie", url: "https://www.youtube.com/@musstewissenChemie" },
            { name: "Prof. Woodhouse", url: "https://www.youtube.com/@prof.woodhouse3189" },
            { name: "musstewissen Physik", url: "https://www.youtube.com/@musstewissenPhysik" },
            { name: "Learn German Today", url: "https://www.youtube.com/@LearnGermanToday" },
            { name: "Learn German", url: "https://www.youtube.com/@LearnGermanOriginal" },
            { name: "Galileo", url: "https://www.youtube.com/@GalileoOffiziell" },
            { name: "Quarks", url: "https://www.youtube.com/@Quarks" },
            { name: "MAITHINK X", url: "https://www.youtube.com/@maithinkx" },
            { name: "klagemauerTV", url: "https://www.youtube.com/@KlaTv" },
            { name: "Deutsch mit Marija", url: "https://www.youtube.com/@DeutschmitMarija" },
            { name: "Klinik am Südring", url: "https://www.youtube.com/@KlinikamSuedring" },
            { name: "lingoni GERMAN", url: "https://www.youtube.com/@lingoniGERMAN" },
            { name: "ARD", url: "https://www.youtube.com/@ARD" },
            { name: "Easy German", url: "https://www.youtube.com/@EasyGerman" },
            { name: "Hallo Deutschschule", url: "https://www.youtube.com/@hallodeutschschule" },
            { name: "German with Begi Begi", url: "https://www.youtube.com/@BeGiBeGi" },
            { name: "Learn German with Anja", url: "https://www.youtube.com/@LearnGermanwithAnja" },
            { name: "Dinge Erklärt – Kurzgesagt", url: "https://www.youtube.com/@KurzgesagtDE" },
            { name: "DoktorWeigl", url: "https://www.youtube.com/@DoktorWeigl1" },
            { name: "Deutschland3000", url: "https://www.youtube.com/@Deutschland3000" },
            { name: "Terra X History", url: "https://www.youtube.com/@TerraXHistory" },
            { name: "MrWissen2go", url: "https://www.youtube.com/@MrWissen2go" },
            { name: "Arbeitsgemeinschaft für Notfallmedizin", url: "https://www.youtube.com/@arbeitsgemeinschaftfuernotfall" },
            { name: "AMBOSS DE", url: "https://www.youtube.com/@ambossDACH" },
            { name: "Medcast FAU", url: "https://www.youtube.com/@MedcastFAU" },
            { name: "ERF Mensch Gott", url: "https://www.youtube.com/@ERFMenschGott" },
            { name: "Kontor.TV", url: "https://www.youtube.com/@kontorrecords" },
            { name: "Deutsch für Euch", url: "https://www.youtube.com/@DeutschFuerEuch" },
            { name: "reporter", url: "https://www.youtube.com/@reporter-offiziell" }
        ]
    },
    {
        id: 8,
        label: "shams",
        url: "",
        links: [
            { name: "Learn Arabic with ArabicPod101.com", url: "https://www.youtube.com/@ArabicPod101" },
            { name: "Easy Arabic", url: "https://www.youtube.com/@EasyArabicVideos" },
            { name: "LearnArabicwithMaha", url: "https://www.youtube.com/@LearnArabicwithMaha" },
            { name: "Easy Languages", url: "https://www.youtube.com/@easylanguages" }
        ]
    },
    {
        id: 9,
        label: "arew",
        url: "",
        links: [
            { name: "Peace Corps Armenia", url: "https://www.youtube.com/@PCArmeniaTV" },
            { name: "Learn Armenian with Hayasa", url: "https://www.youtube.com/@learnarmenian" }
        ]
    },
    {
        id: 10,
        label: "taiyo",
        url: "",
        links: [
            { name: "Eve", url: "https://www.youtube.com/@ooo0eve0ooo" },
            { name: "Learn Japanese", url: "https://www.youtube.com/@learnjapanesebod" },
            { name: "Can kıpçak", url: "https://www.youtube.com/@Cankpcak" },
            { name: "もしもしゆうすけ", url: "https://www.youtube.com/@moshimoshi.yusuke" }
        ]
    },
    {
        id: 11,
        label: "taeyang",
        url: "",
        links: [
            { name: "seemile Korean", url: "https://www.youtube.com/@seemile" },
            { name: "Talk To Me In Korean", url: "https://www.youtube.com/@talktomeinkorean" },
            { name: "Learn Korean with GO! Billy Korean", url: "https://www.youtube.com/@GoBillyKorean" },
            { name: "Doctor JUDY 닥터주디 피부과전문의", url: "https://www.youtube.com/@dr.judyjoo" },
            { name: "Korean Unnie 한국언니", url: "https://www.youtube.com/@KoreanUnnie" }
        ]
    },
    {
        id: 12,
        label: "taiyang",
        url: "",
        links: [
            { name: "Easy Mandarin", url: "https://www.youtube.com/@EasyMandarin" },
            { name: "Everyday Chinese", url: "https://www.youtube.com/@EverydayChinese" },
            { name: "ShuoshuoChinese说说中文", url: "https://www.youtube.com/@ShuoshuoChinese" },
            { name: "Yoyo Chinese", url: "https://www.youtube.com/@YoyoChinese" },
            { name: "learnchinesewithemma", url: "https://www.youtube.com/@learnchinesewithemma" },
            { name: "李子柒 Liziqi", url: "https://www.youtube.com/@cnliziqi" }
        ]
    },
    {
        id: 13,
        label: "solntse",
        url: "",
        links: [
            { name: "Easy Russian", url: "https://www.youtube.com/@EasyRussianVideos" },
            { name: "Russian On The Go", url: "https://www.youtube.com/@RussianOnTheGo" },
            { name: "Real Russian Club", url: "https://www.youtube.com/@RealRussianClub" },
            { name: "Insta Language Online", url: "https://www.youtube.com/@HowToSpeakwithIrina" },
            { name: "Weekly Russian", url: "https://www.youtube.com/@weeklyrussian" }
        ]
    },
    {
        id: 14,
        label: "soltnse",
        url: "",
        links: [
            { name: "Speak Ukrainian", url: "https://www.youtube.com/@SpeakUkrainian" },
            { name: "Easy Languages", url: "https://www.youtube.com/@easylanguages" },
            { name: "Olga Reznikova", url: "https://www.youtube.com/@Olga_Reznikova" }
        ]
    },
    {
        id: 15,
        label: "slunce",
        url: "",
        links: [
            { name: "Easy Czech", url: "https://www.youtube.com/@EasyCzechVideos" },
            { name: "Learn Czech with CzechClass101.com", url: "https://www.youtube.com/@Czechclass101" }
        ]
    },
    {
        id: 16,
        label: "slnko",
        url: "",
        links: [
            { name: "Slovak Girl", url: "https://www.youtube.com/@SlovakGirlTami" },
            { name: "Learn Slovak with Stories", url: "https://www.youtube.com/@LearnSlovakwithStories" }
        ]
    },
    {
        id: 17,
        label: "sonce",
        url: "",
        links: [
            { name: "Learn Slovene", url: "https://www.youtube.com/@learn_slovene" },
            { name: "Sandra Potisek", url: "https://www.youtube.com/@SandraPotisek" }
        ]
    },
    {
        id: 18,
        label: "soltnseb",
        url: "",
        links: [
            { name: "LingoTala", url: "https://www.youtube.com/@lingotala5304" }
        ]
    },
    {
        id: 19,
        label: "slonce",
        url: "",
        links: [
            { name: "Easy Polish", url: "https://www.youtube.com/@EasyPolish" },
            { name: "Polish Eagle", url: "https://www.youtube.com/@polisheagle4346" },
            { name: "Polish Flower - Polish Language with Maggie", url: "https://www.youtube.com/@polishflowerdotcom" },
            { name: "Sabaton", url: "https://www.youtube.com/@Sabaton" }
        ]
    },
    {
        id: 20,
        label: "sunce",
        url: "",
        links: [
            { name: "Croatian Experience with Sanda", url: "https://www.youtube.com/@CroatianExperiencewithSanda" },
            { name: "IrenasCroCafe", url: "https://www.youtube.com/@irenascrocafe" }
        ]
    },
    {
        id: 21,
        label: "nap",
        url: "",
        links: [
            { name: "Learn Hungarian with HungarianPod101.com", url: "https://www.youtube.com/@HungarianPod101" }
        ]
    },
    {
        id: 22,
        label: "soare",
        url: "",
        links: [
            { name: "Learn Romanian with RomanianPod101.com", url: "https://www.youtube.com/@RomanianPod101" },
            { name: "Stefan Cristian Stanel", url: "https://www.youtube.com/@StefanCristianStanel" }
        ]
    },
    {
        id: 23,
        label: "aurinko",
        url: "",
        links: [
            { name: "Learn Finnish with FinnishPod101.com", url: "https://www.youtube.com/@FinnishPod101" }
        ]
    },
    {
        id: 24,
        label: "kunes",
        url: "",
        links: [
            { name: "RizaNovaUZ", url: "https://www.youtube.com/@RizaNovaUZ" },
            { name: "MrOtabekTV", url: "https://www.youtube.com/@MrOtabekTV" },
            { name: "Grup Orhun", url: "https://www.youtube.com/@GrupORHUN" },
            { name: "Oğuz Kaan", url: "https://www.youtube.com/@oguzkaan6201" },
            { name: "TatarTuruk", url: "https://www.youtube.com/@TatarTuruk" },
            { name: "NYUSHA MUSIC", url: "https://www.youtube.com/@NYUSHAmusic" },
            { name: "CANER KARA", url: "https://www.youtube.com/@CanerKara_" },
            { name: "Sevara Nazarkhan", url: "https://www.youtube.com/@Sevara-Nazarkhan" },
            { name: "sevaramusic", url: "https://www.youtube.com/@sevaramusic" },
            { name: "UzbekFilmsHD", url: "https://www.youtube.com/@UzbekFilmsHD" },
            { name: "Yulduz Usmanova", url: "https://www.youtube.com/@YulduzUsmonovaMusic" },
            { name: "TRT Avaz", url: "https://www.youtube.com/@TRTAvaz" },
            { name: "RizaNovaUZ", url: "https://www.youtube.com/@RizaNovaUZ1" },
            { name: "Milliy TV", url: "https://www.youtube.com/@MilliyTV" },
            { name: "ZO'R TV", url: "https://www.youtube.com/@ZORTVUZ" },
            { name: "SHOKUZ", url: "https://www.youtube.com/@shokuz_official" },
            { name: "Arslanbek Sultanbekov", url: "https://www.youtube.com/@arslanbeksultanbekov2526" },
            { name: "• • Spirit Of the Steppe • • •", url: "https://www.youtube.com/@IdelUralState" }
        ]
    },
    {
        id: 25,
        label: "solis",
        url: "",
        links: [
            { name: "Learn Latin from Scratch!", url: "https://www.youtube.com/@latinfromscratch" }
        ]
    },
    {
        id: 26,
        label: "ilios",
        url: "",
        links: [
            { name: "Learn Greek with Lina", url: "https://www.youtube.com/@linaaaap1" },
            { name: "Education World", url: "https://www.youtube.com/@wisdomcity" }
        ]
    },
    {
        id: 27,
        label: "roj",
        url: "",
        links: [
            { name: "TRT Kurdi", url: "https://www.youtube.com/@trtkurdi" },
            { name: "Qûling Çeviri", url: "https://www.youtube.com/@qulingceviri651" },
            { name: "Mem Ararat", url: "https://www.youtube.com/@MemArarat" },
            { name: "BoxCafe", url: "https://www.youtube.com/@BoxCafe" },
            { name: "FİLARMONİK", url: "https://www.youtube.com/@filarmonik." },
            { name: "Hunergeha Welat", url: "https://www.youtube.com/@HunergehaWelat" },
            { name: "Helin Hevi", url: "https://www.youtube.com/@helin.heviii" },
            { name: "Rojbin Kizil", url: "https://www.youtube.com/@RojbinKizil" },
            { name: "001humanist", url: "https://www.youtube.com/@001humanist" },
            { name: "KOM MÜZİK", url: "https://www.youtube.com/@kommuziknet" },
            { name: "Dile Getir", url: "https://www.youtube.com/@dilegetir5468" },
            { name: "Kürtçe-Türkçe Çeviri", url: "https://www.youtube.com/@kurtce-turkceceviri2396" },
            { name: "Kurdi Online", url: "https://www.youtube.com/@KurdiOnline" },
            { name: "Hîn Bûn", url: "https://www.youtube.com/@HinBun" }
        ]
    },
    {
        id: 28,
        label: "suryab",
        url: "",
        links: [
            { name: "RASELraju Institute", url: "https://www.youtube.com/@RASELrajuInstitute" }
        ]
    },
    {
        id: 29,
        label: "surya",
        url: "",
        links: [
            { name: "Ivana Perkovic", url: "https://www.youtube.com/@IvanaPerkovicOfficial" },
            { name: "bald and bankrupt", url: "https://www.youtube.com/@baldandbankrupt" }
        ]
    },
    {
        id: 30,
        label: "sooraj",
        url: "",
        links: [
            { name: "Gyapan Entrance Academy", url: "https://www.youtube.com/@GyapanEntranceAcademy" },
            { name: "Gyapan Academy", url: "https://www.youtube.com/@GyapanAcademy" }
        ]
    },
    {
        id: 31,
        label: "hus",
        url: "",
        links: [
            { name: "Learn Persian with Chai and Conversation", url: "https://www.youtube.com/@chai_and_conversation" }
        ]
    },
    {
        id: 32,
        label: "zon",
        url: "",
        links: [
            { name: "Learn Dutch with Bart de Pau", url: "https://www.youtube.com/@LearndutchOrg" }
        ]
    },
    {
        id: 33,
        label: "soln",
        url: "",
        links: [
            { name: "thenorwegianteacher", url: "https://www.youtube.com/@thenorwegianteacher" },
            { name: "Arham Sheikh", url: "https://www.youtube.com/@ArhamSheikh" },
            { name: "Become A Polyglot", url: "https://www.youtube.com/@BecomeAPolyglot" }
        ]
    },
    {
        id: 34,
        label: "sold",
        url: "",
        links: [
            { name: "Danish Mastery", url: "https://www.youtube.com/@Danishmastery" },
            { name: "Learn Danish with DanishClass101.com", url: "https://www.youtube.com/@DanishClass101" }
        ]
    },
    {
        id: 35,
        label: "solen",
        url: "",
        links: [
            { name: "Easy Languages", url: "https://www.youtube.com/@easylanguages" }
        ]
    },
    {
        id: 36,
        label: "mattroi",
        url: "",
        links: [
            { name: "Tieng Viet Oi - Vietnamese Lessons", url: "https://www.youtube.com/@Tiengvietoi" }
        ]
    },
    {
        id: 37,
        label: "matahari",
        url: "",
        links: [
            { name: "Learn Indonesian Online", url: "https://www.youtube.com/@Learnbahasa.indonesia" }
        ]
    },
    { id: 38, label: "soli", url: "" },
    {
        id: 39,
        label: "shemesh",
        url: "",
        links: [
            { name: "Learn Hebrew with HebrewPod101.com", url: "https://www.youtube.com/@HebrewPod101" }
        ]
    },
    { id: 40, label: "daet", url: "" },
    { id: 41, label: "oraw", url: "" },
    { id: 99, label: "languages", url: "" },
    { id: 101, label: "code", url: "" },
    { id: 102, label: "andphone", url: "" },
    { id: 103, label: "documantary", url: "" },
    { id: 104, label: "film", url: "" },
    { id: 105, label: "anime", url: "" },
    { id: 106, label: "music", url: "" },
    { id: 107, label: "travel", url: "" },
    { id: 108, label: "books", url: "" },
    { id: 109, label: "history", url: "" },
    { id: 110, label: "arts", url: "" },
    { id: 111, label: "shopping", url: "" },
    { id: 112, label: "writer", url: "" },
    { id: 113, label: "philosopher", url: "" },
    { id: 114, label: "technology", url: "" },
    { id: 115, label: "space", url: "" },
    { id: 116, label: "architect", url: "" },
    { id: 117, label: "earth", url: "" },
    { id: 118, label: "magazine", url: "" },
    { id: 119, label: "math", url: "" },
    { id: 120, label: "lifestyle", url: "" },
    { id: 121, label: "plants", url: "" },
    { id: 122, label: "knowledge", url: "" },
    { id: 123, label: "science", url: "" },
    { id: 124, label: "animals", url: "" },
    { id: 125, label: "food", url: "" },
    { id: 126, label: "Encyclopedia", url: "" },
    { id: 127, label: "martialarts", url: "" },
    { id: 128, label: "news", url: "" },
    { id: 129, label: "plab", url: "" },
    { id: 130, label: "podcast", url: "" },
    { id: 131, label: "politics", url: "" },
    { id: 132, label: "sport", url: "" },
    { id: 133, label: "survival", url: "" },
    { id: 134, label: "testosterone", url: "" },
    { id: 135, label: "car", url: "" },
    { id: 136, label: "ai", url: "" },
    { id: 137, label: "pcgames", url: "" },
    { id: 138, label: "youtube", url: "" },
    { id: 139, label: "konutarsa", url: "" },
    { id: 140, label: "religion", url: "" },
    { id: 141, label: "repair", url: "" },
    { id: 150, label: "invest", url: "" },
    { id: 151, label: "freelancer", url: "" },
    { id: 152, label: "logo", url: "" },
    { id: 153, label: "graphicdesigner", url: "" },
    { id: 154, label: "gooogleplaays", url: "" },
    { id: 155, label: "photography", url: "" },
    { id: 156, label: "photo", url: "" },
    { id: 157, label: "aile", url: "" },
    { id: 200, label: "mardinomerligunes", url: "" },
    { id: 201, label: "evdesaglik", url: "" },
    { id: 202, label: "sunsonnegunes", url: "" },
    { id: 203, label: "voyagerandsun", url: "" },
    { id: 204, label: "omergunesks", url: "" },
    { id: 205, label: "drguneskocabas", url: "" },
    { id: 206, label: "forms", url: "" },
    { id: 222, label: "friends", url: "" }
];

const searchInput = document.querySelector("#search-input");
const clearButton = document.querySelector("#clear-button");
const grid = document.querySelector("#channels-grid");
const template = document.querySelector("#channel-card-template");
const jumpStrip = document.querySelector("#jump-strip");
const modal = document.querySelector("#channel-modal");
const modalDialog = modal?.querySelector(".channel-modal__dialog");
const modalTitle = document.querySelector("#channel-modal-title");
const modalSubtitle = modal?.querySelector(".channel-modal__subtitle");
const modalLinks = modal?.querySelector(".channel-modal__links");
const modalCloseButtons = modal ? modal.querySelectorAll("[data-modal-close]") : [];

if (
    !searchInput ||
    !clearButton ||
    !grid ||
    !template ||
    !jumpStrip ||
    !modal ||
    !modalDialog ||
    !modalTitle ||
    !modalSubtitle ||
    !modalLinks
) {
    throw new Error("Required DOM nodes are missing. Check index.html structure.");
}

const normalise = (text) => text.trim().toLowerCase();

const isAndroid = /Android/i.test(navigator.userAgent);
const shouldOpenInNewTab = () => !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const toVideosUrl = (url) => {
    if (!url) {
        return url;
    }

    try {
        const parsed = new URL(url, window.location.origin);
        if (!parsed.pathname.endsWith("/videos")) {
            parsed.pathname = parsed.pathname.replace(/\/$/, "") + "/videos";
        }
        return parsed.toString();
    } catch (error) {
        if (url.startsWith("/")) {
            return url.replace(/\/$/, "") + "/videos";
        }
    }

    return url;
};

const buildIntentUrl = (url) => {
    const stripped = url.replace(/^https?:\/\//, "");
    const fallback = encodeURIComponent(url);
    return `intent://${stripped}#Intent;scheme=https;package=com.google.android.youtube;S.browser_fallback_url=${fallback};end`;
};

const getChannelLinks = (channel) => {
    if (!channel) {
        return [];
    }

    if (Array.isArray(channel.links) && channel.links.length) {
        return channel.links.filter((entry) => entry && entry.url);
    }

    if (channel.url) {
        return [
            {
                name: channel.label || `Channel ${channel.id}`,
                url: channel.url
            }
        ];
    }

    return [];
};

const createLinkElement = (channel, entry, index, openInNewTab = shouldOpenInNewTab()) => {
    if (!entry || !entry.url) {
        return null;
    }

    const anchor = document.createElement("a");
    anchor.className = "channel-link";

    const finalUrl = toVideosUrl(entry.url);
    const label = (entry.name || channel.label || `Channel ${channel.id}`).trim();

    anchor.href = finalUrl;
    anchor.dataset.fallbackUrl = finalUrl;
    anchor.dataset.channelId = String(channel.id);
    anchor.dataset.linkIndex = String(index);
    anchor.textContent = label;
    anchor.setAttribute("aria-label", `Open ${label} on YouTube`);

    if (openInNewTab) {
        anchor.target = "_blank";
        anchor.rel = "noopener";
    }

    return anchor;
};

let mobileHandlersInitialized = false;

const closeModal = () => {
    if (!modal) {
        return;
    }

    modalLinks.innerHTML = "";

    if (typeof modal.close === "function" && modal.open) {
        modal.close();
    } else {
        modal.removeAttribute("open");
    }

    document.body.classList.remove("is-modal-open");
};

const openModal = (channel) => {
    if (!channel || !modal) {
        return;
    }

    modalTitle.textContent = `Channel ${channel.id}`;

    if (channel.label) {
        modalSubtitle.textContent = channel.label;
        modalSubtitle.hidden = false;
    } else {
        modalSubtitle.textContent = "";
        modalSubtitle.hidden = true;
    }

    modalLinks.innerHTML = "";

    const links = getChannelLinks(channel);
    const fragment = document.createDocumentFragment();
    const openInNewTab = shouldOpenInNewTab();

    if (links.length) {
        links.forEach((entry, index) => {
            const anchor = createLinkElement(channel, entry, index, openInNewTab);
            if (anchor) {
                fragment.appendChild(anchor);
            }
        });

        modalLinks.appendChild(fragment);
        if (isAndroid) {
            modalLinks.querySelectorAll(".channel-link").forEach((anchor) => {
                anchor.addEventListener("click", (event) => {
                    const fallbackUrl = anchor.dataset.fallbackUrl;
                    if (!fallbackUrl) {
                        return;
                    }

                    event.preventDefault();
                    const intentUrl = buildIntentUrl(fallbackUrl);
                    const fallbackDelay = 900;
                    let fallbackTimer;

                    const cleanUp = () => {
                        document.removeEventListener("visibilitychange", handleVisibilityChange);
                        window.removeEventListener("pagehide", handlePageHide);
                    };

                    const handleVisibilityChange = () => {
                        if (document.visibilityState === "hidden") {
                            clearTimeout(fallbackTimer);
                        }
                        cleanUp();
                    };

                    const handlePageHide = () => {
                        clearTimeout(fallbackTimer);
                        cleanUp();
                    };

                    fallbackTimer = window.setTimeout(() => {
                        cleanUp();
                        if (document.visibilityState === "visible") {
                            window.location.href = fallbackUrl;
                        }
                    }, fallbackDelay);

                    document.addEventListener("visibilitychange", handleVisibilityChange);
                    window.addEventListener("pagehide", handlePageHide, { once: true });

                    window.location.href = intentUrl;
                });
            });
        }
    } else {
        const empty = document.createElement("p");
        empty.className = "channel-modal__empty";
        empty.textContent = "No links for this channel.";
        modalLinks.appendChild(empty);
    }

    modalLinks.scrollTop = 0;
    modalDialog.scrollTop = 0;

    document.body.classList.add("is-modal-open");

    if (typeof modal.showModal === "function") {
        if (!modal.open) {
            modal.showModal();
        }
    } else {
        modal.setAttribute("open", "open");
    }
};

const initMobileHandlers = () => {
    if (!isAndroid || mobileHandlersInitialized) {
        return;
    }

    grid.addEventListener("click", (event) => {
        const target = event.target.closest(".channel-link");
        if (!target) {
            return;
        }

        const fallbackUrl = target.dataset.fallbackUrl;
        if (!fallbackUrl) {
            return;
        }

        event.preventDefault();

        const intentUrl = buildIntentUrl(fallbackUrl);
        const fallbackDelay = 900;
        let fallbackTimer;

        const cleanUp = () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("pagehide", handlePageHide);
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                clearTimeout(fallbackTimer);
            }
            cleanUp();
        };

        const handlePageHide = () => {
            clearTimeout(fallbackTimer);
            cleanUp();
        };

        fallbackTimer = window.setTimeout(() => {
            cleanUp();
            if (document.visibilityState === "visible") {
                window.location.href = fallbackUrl;
            }
        }, fallbackDelay);

        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("pagehide", handlePageHide, { once: true });

        window.location.href = intentUrl;
    });

    mobileHandlersInitialized = true;
};

const setActiveJump = (channelId) => {
    if (!jumpStrip.children.length) {
        return;
    }

    for (const link of jumpStrip.querySelectorAll("a")) {
        if (link.dataset.channelId === String(channelId)) {
            link.classList.add("is-active");
        } else {
            link.classList.remove("is-active");
        }
    }
};

const updateJumpStrip = (items) => {
    jumpStrip.innerHTML = "";

    if (!items.length) {
        jumpStrip.hidden = true;
        return;
    }

    const fragment = document.createDocumentFragment();

    for (const channel of items) {
        const link = document.createElement("a");
        link.href = `#channel-${channel.id}`;
        link.textContent = channel.id;
        link.dataset.channelId = String(channel.id);
        if (!getChannelLinks(channel).length) {
            link.classList.add("is-empty");
        }
        fragment.appendChild(link);
    }

    jumpStrip.appendChild(fragment);
    jumpStrip.hidden = false;
    setActiveJump(items[0].id);
};

const renderChannels = (items) => {
    grid.innerHTML = "";

    if (!items.length) {
        const empty = document.createElement("p");
        empty.className = "empty-state";
        empty.textContent = "No matches found. Try a different number or name.";
        grid.append(empty);
        return;
    }

    const fragment = document.createDocumentFragment();
    const openInNewTab = shouldOpenInNewTab();

    for (const channel of items) {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector(".channel-card");
        const numberEl = clone.querySelector(".channel-number");
        const titleEl = clone.querySelector(".channel-title");
        const toggleBtn = clone.querySelector(".toggle-links");
        const linksPanel = clone.querySelector(".channel-links");
        const linksScroll = clone.querySelector(".links-scroll");

        card.id = `channel-${channel.id}`;
        const panelId = `channel-links-${channel.id}`;
        linksPanel.id = panelId;
        toggleBtn.setAttribute("aria-controls", panelId);
        numberEl.textContent = channel.id;
        titleEl.textContent = channel.label;
        linksScroll.innerHTML = "";
        linksPanel.hidden = false;

        const linkEntries = getChannelLinks(channel);

        if (linkEntries.length) {
            linkEntries.forEach((entry, index) => {
                const anchor = createLinkElement(channel, entry, index, openInNewTab);
                if (anchor) {
                    linksScroll.appendChild(anchor);
                }
            });

            card.classList.add("has-links", "is-expanded");
            card.classList.remove("is-collapsed");

            toggleBtn.hidden = false;
            toggleBtn.textContent = "Hide links";
            toggleBtn.setAttribute("aria-expanded", "true");

            toggleBtn.addEventListener("click", () => {
                const expanded = card.classList.toggle("is-expanded");
                card.classList.toggle("is-collapsed", !expanded);
                linksPanel.hidden = !expanded;
                toggleBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
                toggleBtn.textContent = expanded ? "Hide links" : "Show links";
                if (expanded) {
                    setActiveJump(channel.id);
                }
            });

            numberEl.style.cursor = "pointer";
            numberEl.tabIndex = 0;
            numberEl.setAttribute("role", "button");
            numberEl.setAttribute("aria-label", `Open channel ${channel.id} links`);
            const openChannelModal = () => openModal(channel);
            numberEl.addEventListener("click", openChannelModal);
            numberEl.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openChannelModal();
                }
            });

            card.addEventListener("mouseenter", () => setActiveJump(channel.id));
            card.addEventListener("focusin", () => setActiveJump(channel.id));
        } else {
            toggleBtn.hidden = true;
            toggleBtn.setAttribute("aria-expanded", "false");
            toggleBtn.removeAttribute("aria-controls");
            card.classList.remove("has-links", "is-expanded", "is-collapsed");

            const placeholder = document.createElement("span");
            placeholder.className = "channel-link is-empty";
            placeholder.textContent = "Link coming soon";
            linksScroll.appendChild(placeholder);
        }

        fragment.appendChild(clone);
    }

    grid.appendChild(fragment);
    updateJumpStrip(items);
    initMobileHandlers();
};

const handleSearch = () => {
    const term = normalise(searchInput.value);

    if (!term) {
        renderChannels(channels);
        return;
    }

    const filtered = channels.filter((channel) => {
        const idMatch = String(channel.id).includes(term);
        const labelMatch = normalise(channel.label).includes(term);
        return idMatch || labelMatch;
    });

    renderChannels(filtered);
};

searchInput.addEventListener("input", handleSearch);
clearButton.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    renderChannels(channels);
});

document.addEventListener("DOMContentLoaded", () => {
    renderChannels(channels);
    initMobileHandlers();

    for (const button of modalCloseButtons) {
        button.addEventListener("click", () => {
            closeModal();
        });
    }

    modal.addEventListener("cancel", (event) => {
        event.preventDefault();
        closeModal();
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    jumpStrip.addEventListener("click", (event) => {
        const link = event.target.closest("a[data-channel-id]");
        if (!link) {
            return;
        }

        event.preventDefault();
        const { channelId } = link.dataset;
        setActiveJump(channelId);

        const channel = channels.find((c) => String(c.id) === String(channelId));
        if (!channel) {
            return;
        }

        openModal(channel);
    });
});

export { channels, renderChannels };
