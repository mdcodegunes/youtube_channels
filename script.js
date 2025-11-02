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
    {
        id: 99,
        label: "languages",
        url: "",
        links: [
            { name: "Learn German Fast", url: "https://www.youtube.com/@LearnGermanFast" },
            { name: "longua.org", url: "https://www.youtube.com/@longuaorg" },
            { name: "Dein Sprachcoach", url: "https://www.youtube.com/@DeinSprachcoach" },
            { name: "Oscar Amaury", url: "https://www.youtube.com/@OscarAmaury" },
            { name: "Spanisch mit Vicky", url: "https://www.youtube.com/@spanischmitvicky" },
            { name: "Tarle Speech - English Pronunciation", url: "https://www.youtube.com/@tarlespeech" },
            { name: "Yo Sí Aprendo Inglés", url: "https://www.youtube.com/@yosiaprendoingles" },
            { name: "Heea Park", url: "https://www.youtube.com/@HeeaPark2015" },
            { name: "Victoria Fenart", url: "https://www.youtube.com/@victoriafenart" },
            { name: "JiniChannel", url: "https://www.youtube.com/@JiniChannel" },
            { name: "Panda_Investiert", url: "https://www.youtube.com/@Panda_Investiert" },
            { name: "BarbieBac La Azafata", url: "https://www.youtube.com/@Barbiebac" },
            { name: "Patry Ruiz", url: "https://www.youtube.com/@patryruiz." },
            { name: "Lingua italiana insieme", url: "https://www.youtube.com/@simona.dipunzio" },
            { name: "María Español", url: "https://www.youtube.com/@mariaespanolcom" },
            { name: "Easy French", url: "https://www.youtube.com/@EasyFrench" },
            { name: "Learn Italian with Teacher Stefano", url: "https://www.youtube.com/@teacherstefano" },
            { name: "Instant English", url: "https://www.youtube.com/@InstantEnglishUK" },
            { name: "Like Germans", url: "https://www.youtube.com/@LikeGermans" },
            { name: "World Friends", url: "https://www.youtube.com/@worldfriends77" },
            { name: "Tu profesora de Lengua", url: "https://www.youtube.com/@tuprofesoradelengua" },
            { name: "Emirati Arabic (AlRamsa Institute)", url: "https://www.youtube.com/@emiratiarabic.AlRamsa" },
            { name: "Richtig Deutsch sprechen", url: "https://www.youtube.com/@richtigdeutschsprechen" },
            { name: "Kurdi Online", url: "https://www.youtube.com/@KurdiOnline" },
            { name: "Liry Onni", url: "https://www.youtube.com/@LiryOnni" },
            { name: "Madinah Arabic", url: "https://www.youtube.com/@MadinahArabicTuition" },
            { name: "POC English", url: "https://www.youtube.com/@POCEnglish" },
            { name: "GRAZY GRACE", url: "https://www.youtube.com/@GRAZYGRACE" },
            { name: "EWA: Learn Languages", url: "https://www.youtube.com/@EWALearnLanguage" },
            { name: "Easy Polish", url: "https://www.youtube.com/@EasyPolish" },
            { name: "Lea Katharina Maria Shorts", url: "https://www.youtube.com/@Leakatharinamaria" },
            { name: "Rachel's English", url: "https://www.youtube.com/@rachelsenglish" },
            { name: "Learn German by Listening", url: "https://www.youtube.com/@DldH" },
            { name: "StudyInネイティブ英会話", url: "https://www.youtube.com/@StudyIn" },
            { name: "English with Rod", url: "https://www.youtube.com/@englishwithrod" },
            { name: "English Teacher Josh", url: "https://www.youtube.com/@EnglishTeacherJosh" },
            { name: "Neparu Tv", url: "https://www.youtube.com/@neparutv" },
            { name: "Alana Dunsmore", url: "https://www.youtube.com/@AlanaDunsmore" },
            { name: "Learn French with FrenchPod101.com", url: "https://www.youtube.com/@frenchpod101" },
            { name: "Jesica Rivero Inglés", url: "https://www.youtube.com/@jesicariveroingles" },
            { name: "Chingu amiga", url: "https://www.youtube.com/@ChinguAmiga" },
            { name: "Deutsch mit Marija", url: "https://www.youtube.com/@DeutschmitMarija" },
            { name: "El Profesor Hernán", url: "https://www.youtube.com/@elprofesorhernan" },
            { name: "Italian Matters", url: "https://www.youtube.com/@italianmatters" },
            { name: "AT Frenchies", url: "https://www.youtube.com/@atfrenchies" },
            { name: "NativLang", url: "https://www.youtube.com/@NativLang" },
            { name: "Englisch Hacks", url: "https://www.youtube.com/@englischhacks" },
            { name: "Learn Italian with Lucrezia", url: "https://www.youtube.com/@lucreziaoddone" },
            { name: "paulomuc", url: "https://www.youtube.com/@paulomucYT" },
            { name: "Deutsch verstehen", url: "https://www.youtube.com/@Deutschverstehen" },
            { name: "Hallo Klasse Almanca", url: "https://www.youtube.com/@hallo-klasse" },
            { name: "funk", url: "https://www.youtube.com/@funk" },
            { name: "Deutsch lernen mit der DW", url: "https://www.youtube.com/@dwlearngerman" },
            { name: "NihongoDekita with Sayaka", url: "https://www.youtube.com/@NihongoDekita" },
            { name: "The perfect French with Dylane", url: "https://www.youtube.com/@TheperfectfrenchwithDylane" },
            { name: "LearnQuranicArabic", url: "https://www.youtube.com/@LearnQuranicArabic" },
            { name: "Arabic 101", url: "https://www.youtube.com/@Arabic101" },
            { name: "English Lessons with Kate", url: "https://www.youtube.com/@KateEnglish" },
            { name: "Teuida", url: "https://www.youtube.com/@teuida" },
            { name: "Speak English With Vanessa", url: "https://www.youtube.com/@SpeakEnglishWithVanessa" },
            { name: "English Learning Hub", url: "https://www.youtube.com/@EnglishLearningHubOfficial" },
            { name: "ENGLISHERA", url: "https://www.youtube.com/@ENGLISHERA" },
            { name: "ShuoshuoChinese说说中文", url: "https://www.youtube.com/@ShuoshuoChinese" },
            { name: "BBC Learning English", url: "https://www.youtube.com/@bbclearningenglish" },
            { name: "Korean with Ina", url: "https://www.youtube.com/@koreanwithina" },
            { name: "Learn Arabic Language", url: "https://www.youtube.com/@LearnArabicwithustazmahmoud" },
            { name: "Jicki", url: "https://www.youtube.com/@Jickisprachduschen" },
            { name: "ValViajando", url: "https://www.youtube.com/@valviajando3500" },
            { name: "Punto IT", url: "https://www.youtube.com/@_puntoit_" },
            { name: "Davide Patron", url: "https://www.youtube.com/@patrondavide" },
            { name: "Elisabetta Maccani - Italian Language Coach", url: "https://www.youtube.com/@ElisabettaMaccani" },
            { name: "ERIKOTTERO", url: "https://www.youtube.com/@ERIKOTTERO" },
            { name: "Simplitalian", url: "https://www.youtube.com/@simplitalian" },
            { name: "자스민", url: "https://www.youtube.com/@Jaseumin" },
            { name: "Miki la japonesa", url: "https://www.youtube.com/@Mikilajaponesa" },
            { name: "La Serena Bi - Language Coach per professionisti", url: "https://www.youtube.com/@laserenabi" },
            { name: "dangerous chemist", url: "https://www.youtube.com/@tehlikelikimyager" },
            { name: "One Two Three Inglés Gratis Para Ti", url: "https://www.youtube.com/@onetwothreeinglesgratispar1446" },
            { name: "Misakissme", url: "https://www.youtube.com/@misakissme" },
            { name: "Speedy Languages", url: "https://www.youtube.com/@speedylanguages3971" },
            { name: "Speak Spanish Faster", url: "https://www.youtube.com/@SpeakSpanishFaster" },
            { name: "Real Fast Spanish", url: "https://www.youtube.com/@realfastspanish" },
            { name: "Bringlese", url: "https://www.youtube.com/@Bringlese" },
            { name: "BaseLang", url: "https://www.youtube.com/@Baselang" },
            { name: "Neo Lingua", url: "https://www.youtube.com/@neolingua6754" },
            { name: "Busuu", url: "https://www.youtube.com/@busuu" },
            { name: "Lullaby", url: "https://www.youtube.com/@lullaby5326" },
            { name: "The English Coach", url: "https://www.youtube.com/@TheEnglishCoach" },
            { name: "Gabriely Silva", url: "https://www.youtube.com/@Gabriely733" },
            { name: "Onur Bıyık", url: "https://www.youtube.com/@OnurBykk" },
            { name: "Soy Miguel Idiomas", url: "https://www.youtube.com/@SoyMiguelIdiomas" },
            { name: "Jareth Luis", url: "https://www.youtube.com/@jarethluis6118" },
            { name: "D A R K M I K A", url: "https://www.youtube.com/@darkestmika" },
            { name: "suckmycatT", url: "https://www.youtube.com/@suckmycatt3899" },
            { name: "Buublee Girl", url: "https://www.youtube.com/@BuubleeGirl" },
            { name: "hereisjules", url: "https://www.youtube.com/@hereisjules2621" },
            { name: "Lyrics Productions", url: "https://www.youtube.com/@LyricsProductionss" },
            { name: "♡ M o n s • M o o n l i g h t ♡", url: "https://www.youtube.com/@monsmoonlight" },
            { name: "Indhira Señas", url: "https://www.youtube.com/@indhirasenas" },
            { name: "Learn Chinese with Annie", url: "https://www.youtube.com/@learnchinesewithannie4129" },
            { name: "Ariannita | Vlogs in Spanish", url: "https://www.youtube.com/@soyariannita" },
            { name: "i l o m i l o", url: "https://www.youtube.com/@theworldsalittleblurry841" },
            { name: "× B a p h y ×", url: "https://www.youtube.com/@baphy9032" },
            { name: "chicx sxd", url: "https://www.youtube.com/@chicxsxd7995" },
            { name: "Butterflyiexx", url: "https://www.youtube.com/@butterflyiexx519" },
            { name: "glossfvck.", url: "https://www.youtube.com/@glossfvck.2608" },
            { name: "hudmi gang", url: "https://www.youtube.com/@usuari913" },
            { name: "My Daily Spanish", url: "https://www.youtube.com/@holamydailyspanish" },
            { name: "Learn with Cyn & Scott", url: "https://www.youtube.com/@learnwithcynscott" },
            { name: "Young Lyrics xxi", url: "https://www.youtube.com/@younglyricsxxi2" },
            { name: "VIT", url: "https://www.youtube.com/@vit5103" },
            { name: "Yellowjackets", url: "https://www.youtube.com/@Courtneylover25" },
            { name: "Joy", url: "https://www.youtube.com/@WhosJoy" },
            { name: "EvilMorty", url: "https://www.youtube.com/@evilmorty4679" },
            { name: "paoloymar", url: "https://www.youtube.com/@paoloymar" },
            { name: "Vocab Videos", url: "https://www.youtube.com/@VocabVideos" },
            { name: "Mica & Stavy", url: "https://www.youtube.com/@MicayStavy" },
            { name: "Fluency Inglés", url: "https://www.youtube.com/@fluencyingleslatam" },
            { name: "Top videos de Tiktok", url: "https://www.youtube.com/@Topvideosdetiktok" },
            { name: "Learn German with Anja", url: "https://www.youtube.com/@LearnGermanwithAnja" },
            { name: "Inglés Prilla", url: "https://www.youtube.com/@InglesPrilla" },
            { name: "Ariannita la Gringa", url: "https://www.youtube.com/@ariannitalagringa" },
            { name: "Inglés Con Liliana", url: "https://www.youtube.com/@inglesconliliana" },
            { name: "Peaceful Nature", url: "https://www.youtube.com/@peacefulnature7" },
            { name: "clever clever", url: "https://www.youtube.com/@cleveracadem" },
            { name: "Cosas de Quelita", url: "https://www.youtube.com/@CosasdeQuelita" },
            { name: "Centro de Idiomas Universal", url: "https://www.youtube.com/@centrodeidiomasuniversal" },
            { name: "EasyGoing!", url: "https://www.youtube.com/@Streetstylejoe" },
            { name: "Digi Ludus - Dabeisein ist alles!", url: "https://www.youtube.com/@digiludus" },
            { name: "English126 with Ankit", url: "https://www.youtube.com/@English126withankit" },
            { name: "Ingles en mi mundo", url: "https://www.youtube.com/@inglesenmimundo7745" },
            { name: "TV Jenson", url: "https://www.youtube.com/@tvjenson" },
            { name: "HMV ACADEMY APRENDER IDIOMA COREANO", url: "https://www.youtube.com/@hmvacademyaprenderidiomaco4721" },
            { name: "Annabel Chinese", url: "https://www.youtube.com/@AnnabelChinese" },
            { name: "Patti Macias", url: "https://www.youtube.com/@pattimmacias" },
            { name: "静说中文MsZhaoChinese", url: "https://www.youtube.com/@user-sunjing" },
            { name: "Yidianr Chinese", url: "https://www.youtube.com/@YidianrChinese" },
            { name: "English with abdo", url: "https://www.youtube.com/@englishwithabdo6645" },
            { name: "Deutsch D1 مضر السامرائي", url: "https://www.youtube.com/@deutschd1" },
            { name: "Learn Korean Method", url: "https://www.youtube.com/@learnkoreanmethod7922" },
            { name: "Iro Knocks", url: "https://www.youtube.com/@iroknocks" },
            { name: "Idiomas Con Jake", url: "https://www.youtube.com/@IdiomasConJake" },
            { name: "Inverted Coconut", url: "https://www.youtube.com/@InvertedCoconut" },
            { name: "Limira", url: "https://www.youtube.com/@Limiradia" },
            { name: "小赵老师说中文MsZhaoChinese", url: "https://www.youtube.com/@mszhaochinese" },
            { name: "QUỐC TỊCH MỸ", url: "https://www.youtube.com/@QUOCTICHMY" },
            { name: "Lingualizer", url: "https://www.youtube.com/@lingualizer" },
            { name: "DeutschLera", url: "https://www.youtube.com/@DeutschLera" },
            { name: "lingoni GERMAN", url: "https://www.youtube.com/@lingoniGERMAN" },
            { name: "Learn German Easily", url: "https://www.youtube.com/@LearnGermanEasily" },
            { name: "Spanish with Yanet", url: "https://www.youtube.com/@spanishwithyanet" },
            { name: "English with Cooke", url: "https://www.youtube.com/@englishwithcooke" },
            { name: "German4me", url: "https://www.youtube.com/@German4me" },
            { name: "Deutsch verstehen shorts", url: "https://www.youtube.com/@deutschverstehenshorts5181" },
            { name: "DKH Institut", url: "https://www.youtube.com/@dkh_institut" },
            { name: "Lizhi Language", url: "https://www.youtube.com/@lizhilanguage8908" },
            { name: "린온에일린 Lean on Aileen", url: "https://www.youtube.com/@leanonaileen" },
            { name: "Cozy story corner", url: "https://www.youtube.com/@Cozystorycorner123" },
            { name: "techFK", url: "https://www.youtube.com/@learnwithfk2027" },
            { name: "Effective Arabic", url: "https://www.youtube.com/@EffectiveArabic" },
            { name: "Learn English", url: "https://www.youtube.com/@learnarabicwithosama3627" },
            { name: "Arabic comprehensible", url: "https://www.youtube.com/@arabiccomprehensible" },
            { name: "Nabila Bouchala", url: "https://www.youtube.com/@learnarabicwithnina" },
            { name: "Learn Arabic with Dina", url: "https://www.youtube.com/@learnarabicwithdina" },
            { name: "Learning Arabic is fun", url: "https://www.youtube.com/@learningarabicisfun5209" },
            { name: "Learn Egyptian Arabic with MIMO", url: "https://www.youtube.com/@EgyptianArabicMimo" },
            { name: "Learn Arabic", url: "https://www.youtube.com/@LearnArabicMSA" },
            { name: "Learn Arabic With Me !", url: "https://www.youtube.com/@learnarabicwithme38" },
            { name: "Dr. Maha Sweis-Dababneh /Learn Arabic Language", url: "https://www.youtube.com/@dr.mahasweis-learnarabic" },
            { name: "Learn Arabic with Habiba", url: "https://www.youtube.com/@learnarabicwithHabiba" },
            { name: "5amsa Ramadan (Learn Arabic 🇪🇬)", url: "https://www.youtube.com/@5amsaramadanlearnarabic347" },
            { name: "Arabic learn & fun With Hiba Hamza", url: "https://www.youtube.com/@arabiclearnfunwithhibahamz227" },
            { name: "LEARN TO SPEAK ALGERIAN", url: "https://www.youtube.com/@LEARNTOSPEAKALGERIAN" },
            { name: "ARABIC LEARN", url: "https://www.youtube.com/@arabiclearn1591" },
            { name: "Learn Arabic language With movies and drama", url: "https://www.youtube.com/@learnarabiclanguagewithmov3869" },
            { name: "Learn Arabic with AJ", url: "https://www.youtube.com/@LearnArabicwithAJ" },
            { name: "Arabic lessons4U", url: "https://www.youtube.com/@arabiclessons4u963" },
            { name: "Learn Arabic With Abbassia", url: "https://www.youtube.com/@LearnArabicWithAbbassia" },
            { name: "Learn Levantine Arabic", url: "https://www.youtube.com/@LearnLevantineArabic" },
            { name: "Learn Arabic With Soraya", url: "https://www.youtube.com/@learnarabicwithsoraya7653" },
            { name: "Learn Libyan Arabic", url: "https://www.youtube.com/@learnlibyanarabic8760" },
            { name: "Learn Arabic Online Free | Nassra Arabic Method", url: "https://www.youtube.com/@learnarabicwithnassramethod" },
            { name: "PalWeb TV (Learn Palestinian Arabic)", url: "https://www.youtube.com/@PalWebTV" },
            { name: "Let's Learn Arabic", url: "https://www.youtube.com/@LetsLearnArabic" },
            { name: "Learn Arabic Online with Loubna Duymayan", url: "https://www.youtube.com/@ArabicwithLoubnaDuymayan" },
            { name: "Learn Arabic Language / تعلم اللغة العربية", url: "https://www.youtube.com/@learnarabiclgg" },
            { name: "Learn Levantine Arabic", url: "https://www.youtube.com/@spokenlevantinelebanesearabic" },
            { name: "Learn Arabic with Razan - Syrian Dialect", url: "https://www.youtube.com/@LearnArabicwithRazan" },
            { name: "Arabic With Ibtisam", url: "https://www.youtube.com/@arabicwithibtisam8441" },
            { name: "Levantine Arabic with Manar", url: "https://www.youtube.com/@ArabicwithManar" },
            { name: "Arabic Khatawaat", url: "https://www.youtube.com/@ArabicKhatawaat" },
            { name: "Learn Arabic With Ameen", url: "https://www.youtube.com/@LearnArabicWithAmeen" },
            { name: "ARABIC LANGUAGE ACADEMY", url: "https://www.youtube.com/@ARABICLANGUAGEACADEMY-DG" },
            { name: "Imran Alawiye", url: "https://www.youtube.com/@ImranAlawiye-gatewaytoarabic" },
            { name: "Learn Arabic with Qasid", url: "https://www.youtube.com/@LearnArabicQasid" },
            { name: "Learn Modern Standard Arabic", url: "https://www.youtube.com/@learnmodernstandardarabic" },
            { name: "Arabic Lessons with Nada", url: "https://www.youtube.com/@purenada" },
            { name: "Mehmet ÖZDEMİR...", url: "https://www.youtube.com/@arapcaogrenelimletslearnar8435" },
            { name: "LearnArabic_with _Naseem", url: "https://www.youtube.com/@learnarabic_with_naseem" },
            { name: "Hidaya Center - Learning Arabic", url: "https://www.youtube.com/@hidayacenter" },
            { name: "Learn Arabic with ArabicPod101.com", url: "https://www.youtube.com/@ArabicPod101" },
            { name: "Learn With Safaa", url: "https://www.youtube.com/@LearnWithSafaa" },
            { name: "LearnArabicwithMaha", url: "https://www.youtube.com/@LearnArabicwithMaha" },
            { name: "Arabic blooms", url: "https://www.youtube.com/@arabicblooms" },
            { name: "Arabic with Toqa", url: "https://www.youtube.com/@ArabicwithToqa" },
            { name: "Memrise", url: "https://www.youtube.com/@memrise" },
            { name: "Japonés Vlog", url: "https://www.youtube.com/@japonesvlog3654" },
            { name: "Sourcing & Shipping with Cody", url: "https://www.youtube.com/@sourcing.shipping_with_cody" },
            { name: "LaogeChinese", url: "https://www.youtube.com/@LaogeChinese" },
            { name: "Chinese_sherry", url: "https://www.youtube.com/@Chinesesherry168" },
            { name: "Jenny Mayolin English", url: "https://www.youtube.com/@JennyMayolinEnglish" },
            { name: "K-Nute", url: "https://www.youtube.com/@nutekpop" },
            { name: "Lingster Academy", url: "https://www.youtube.com/@LingsterAcademy" },
            { name: "eng Pronunciation", url: "https://www.youtube.com/@engpronunciation5625" },
            { name: "EnglishTestBlog.com", url: "https://www.youtube.com/@EnglishTestBlog" },
            { name: "German Pronunciation By Deutsch mit Benjamin", url: "https://www.youtube.com/@DeutschMitBenjamin" },
            { name: "Anika", url: "https://www.youtube.com/@wanganika" },
            { name: "NITA | Study German Daily", url: "https://www.youtube.com/@studygermandaily" },
            { name: "Speak English With Zach", url: "https://www.youtube.com/@speakenglishwithzach" },
            { name: "YaYi Mandarin汉语通", url: "https://www.youtube.com/@TheGreatMr-Mandarin123" },
            { name: "LerneDeutsch", url: "https://www.youtube.com/@LerneDeutsch" },
            { name: "Oh Rabah", url: "https://www.youtube.com/@OhRabah" },
            { name: "ChineseTeacher_Mint", url: "https://www.youtube.com/@chineseteacher_mint" },
            { name: "Deutsch1", url: "https://www.youtube.com/@deutsch_eins" },
            { name: "حي على الفلاح‏ Come to Success", url: "https://www.youtube.com/@cometosuccess2954" },
            { name: "Speak Japanese Naturally", url: "https://www.youtube.com/@SpeakJapaneseNaturally" },
            { name: "English with Lucy", url: "https://www.youtube.com/@EnglishwithLucy" },
            { name: "koshka", url: "https://www.youtube.com/@thekoshka-u3f" },
            { name: "Diego Cascudo", url: "https://www.youtube.com/@diegocascudo" },
            { name: "Shirley Chineseteacher", url: "https://www.youtube.com/@shirleychineseteacher927" },
            { name: "Explore with Mia", url: "https://www.youtube.com/@chinesewithmia" },
            { name: "Everyday Easy Chinese", url: "https://www.youtube.com/@EverydayEasyChinese" },
            { name: "Sophia6689", url: "https://www.youtube.com/@Sophia-xs7qj" },
            { name: "早安中文 Morning Chinese", url: "https://www.youtube.com/@morningchinese1251" },
            { name: "Hailey _Your Korean Friend", url: "https://www.youtube.com/@koreanfriendhailey" },
            { name: "Cancan Chinese", url: "https://www.youtube.com/@CanCanChinese" },
            { name: "Ting", url: "https://www.youtube.com/@chinesewithting5185" },
            { name: "ninateachchinese", url: "https://www.youtube.com/@ninateachchinese1973" },
            { name: "English to Excel", url: "https://www.youtube.com/@englishtoexcel" },
            { name: "Lia Chinese", url: "https://www.youtube.com/@LiaChinese" },
            { name: "Zenfluent Maria", url: "https://www.youtube.com/@ZenfluentMaria" },
            { name: "Emma Ma", url: "https://www.youtube.com/@emmama9186" },
            { name: "Julie Gao", url: "https://www.youtube.com/@juliegao6947" },
            { name: "Selina teaches Mandarin", url: "https://www.youtube.com/@selinateachesmandarin7094" },
            { name: "Dengdeng's Teaching Diary", url: "https://www.youtube.com/@DengdengsDiary" },
            { name: "Titi Zamili", url: "https://www.youtube.com/@TitiZamili" },
            { name: "Talgickidtoy", url: "https://www.youtube.com/@Talgickidtoy" },
            { name: "Learn English With Sandra", url: "https://www.youtube.com/@learnenglishwithsandra" },
            { name: "Italian with Grace - Learn Italian Language 🇮🇹", url: "https://www.youtube.com/@ItalianwithGrace" },
            { name: "Giulia per School2u", url: "https://www.youtube.com/@GiuliaSchool2u" },
            { name: "Edoardo De Santis", url: "https://www.youtube.com/@Italessons" },
            { name: "Learn English with Ty", url: "https://www.youtube.com/@english-with-ty" },
            { name: "Piazzasquare italiano", url: "https://www.youtube.com/@piazzasquare" },
            { name: "Mi Coreana (MIMI)", url: "https://www.youtube.com/@micoreana" },
            { name: "Mandarin teacher Lily", url: "https://www.youtube.com/@hichineselilily2025" },
            { name: "Oui In France", url: "https://www.youtube.com/@OuiInFrance" },
            { name: "Chinese drama Hub", url: "https://www.youtube.com/@Chinese_drama_hub" },
            { name: "Podcast Italiano", url: "https://www.youtube.com/@PodcastItaliano" },
            { name: "Portuguese With Leo", url: "https://www.youtube.com/@PortugueseWithLeo" },
            { name: "French mornings with Elisa", url: "https://www.youtube.com/@FrenchmorningswithElisa" },
            { name: "Veronika's Language Diaries", url: "https://www.youtube.com/@veronikas.languagediaries" },
            { name: "Loic Suberville", url: "https://www.youtube.com/@loic.suberville" },
            { name: "Sueda", url: "https://www.youtube.com/@Sueda2" },
            { name: "Spanish After Hours", url: "https://www.youtube.com/@spanishafterhours" },
            { name: "RobWords", url: "https://www.youtube.com/@RobWords" },
            { name: "JoEnglish", url: "https://www.youtube.com/@JoEnglish" },
            { name: "superholly", url: "https://www.youtube.com/@superholly" },
            { name: "Let's Learn Thai!", url: "https://www.youtube.com/@letslearnthai" },
            { name: "linguamarina", url: "https://www.youtube.com/@linguamarina" },
            { name: "Chinese with Jessie", url: "https://www.youtube.com/@ChinesewithJessie" },
            { name: "Bite size Japanese", url: "https://www.youtube.com/@BitesizeJapanese1" },
            { name: "Antonio Parlati (Learn English)", url: "https://www.youtube.com/@englishwithantonio" },
            { name: "Buster Moon", url: "https://www.youtube.com/@bustermoon" },
            { name: "StudyIn Daily Japanese", url: "https://www.youtube.com/@StudyInDailyJapanese" },
            { name: "Easy Mandarin", url: "https://www.youtube.com/@EasyMandarin" },
            { name: "Easy Czech", url: "https://www.youtube.com/@EasyCzechVideos" },
            { name: "Feli from Germany", url: "https://www.youtube.com/@FelifromGermany" },
            { name: "Langfocus", url: "https://www.youtube.com/@Langfocus" },
            { name: "Zach Morris", url: "https://www.youtube.com/@zacmorri" },
            { name: "Hîn Bûn", url: "https://www.youtube.com/@HinBun" },
            { name: "PAPI English", url: "https://www.youtube.com/@PAPIEnglish" },
            { name: "Ali İhsan Varol ile Dağarcık Düellosu", url: "https://www.youtube.com/@dagarcikduellosu" },
            { name: "Gizem Kurt", url: "https://www.youtube.com/@gizemkurt" },
            { name: "kamer", url: "https://www.youtube.com/@kamer." },
            { name: "iclal dere", url: "https://www.youtube.com/@icsie" },
            { name: "Lulminett", url: "https://www.youtube.com/@Lulminett" },
            { name: "Night", url: "https://www.youtube.com/@Nightt22" },
            { name: "solardito.", url: "https://www.youtube.com/@soolardito" },
            { name: "My Olidy", url: "https://www.youtube.com/@Olidy.s" },
            { name: "Jhonny J", url: "https://www.youtube.com/@JhonnyJ" },
            { name: "girl in space", url: "https://www.youtube.com/@giirlinspace" },
            { name: "steven", url: "https://www.youtube.com/@stevenfan" },
            { name: "Zoe.languages", url: "https://www.youtube.com/@zoe.languages" },
            { name: "Kübra", url: "https://www.youtube.com/@kubraayy" },
            { name: "Linguriosa", url: "https://www.youtube.com/@Linguriosa" },
            { name: "jazmine layah", url: "https://www.youtube.com/@jazminelayah9302" },
            { name: "Euphoric.", url: "https://www.youtube.com/@euphxric" },
            { name: "Little Deukae", url: "https://www.youtube.com/@littledeukae8887" },
            { name: "Glossika", url: "https://www.youtube.com/@Glossika" },
            { name: "K.I.R.A", url: "https://www.youtube.com/@k.i.r.a7294" },
            { name: "ivy", url: "https://www.youtube.com/@ivy3876" },
            { name: "Learn Italian with Ines", url: "https://www.youtube.com/@LearnItalianwithInes" },
            { name: "Sasha Alex Sloan México", url: "https://www.youtube.com/@sadgirlsloanmx" },
            { name: "m u s i c v i b e s", url: "https://www.youtube.com/@musicvibes4672" },
            { name: "Jenny Luav", url: "https://www.youtube.com/@Jennyluav" },
            { name: "Dahlia", url: "https://www.youtube.com/@dahlia8578" },
            { name: "elysse daVega", url: "https://www.youtube.com/@elyssedavega" },
            { name: "Elifnur Hançer", url: "https://www.youtube.com/@elifnurhancer" },
            { name: "Donut Lyrics", url: "https://www.youtube.com/@DonutLyrics" },
            { name: "Easy Languages", url: "https://www.youtube.com/@easylanguages" },
            { name: "LOCKED MOON", url: "https://www.youtube.com/@lockedmoon4009" },
            { name: "In Myself.", url: "https://www.youtube.com/@inmyself" },
            { name: "Marinosaurio", url: "https://www.youtube.com/@Marinosaurio" }
        ]
    },
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
