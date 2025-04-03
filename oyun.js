const questions = [
    {
        "question": "Es hängt ____ dir ab, was wir machen.",
        "options": ["von","mit","auf"],
        "answer": "von"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Udo hat sich ___ seinem Professor abgemeldet.",
        "options": ["mit", "bei", "auf"],
        "answer": "bei"
    },
    {
        "question": "Bitte füllen Sie die Lücke aus: Sie hat sich ___ Deutschkurs abgemeldet.",
        "options": ["vom", "am", "auf"],
        "answer": "vom"
    },
    {
        "question": "Das ändert nichts ____ der Situation!",
        "options": ["an", "auf", "mit"],
        "answer": "an"
    },
    {
        "question": "Ich fange jetzt ____ der Arbeit an.",
        "options": ["mit", "bei", "für"],
        "answer": "mit"
    },
    {
        "question": "Ich ängstige mich ____ meinen Sohn.",
        "options": ["um", "an", "auf"],
        "answer": "um"
    },
    {
        "question": "Jetzt kommt es ____ dich an!",
        "options": ["auf", "bei", "mit"],
        "answer": "auf"
    },
    {
        "question": "Er hat sich ____ der Volkshochschule angemeldet.",
        "options": ["bei", "für", "an"],
        "answer": "bei"
    },
    {
        "question": "Hast du dich schon ____ den Kurs angemeldet?",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Du musst noch ____ dem Reisebüro anrufen.",
        "options": ["beim", "für", "an"],
        "answer": "beim"
    },
    {
        "question": "Es hängt ____ dir ab, was wir machen.",
        "options": ["von", "mit", "auf"],
        "answer": "von"
    },
    {
        "question": "Udo hat sich ____ seinem Professor abgemeldet.",
        "options": ["bei", "mit", "an"],
        "answer": "bei"
    },
    {
        "question": "Sie hat sich ____ Deutschkurs abgemeldet.",
        "options": ["vom", "am", "auf"],
        "answer": "vom"
    },
    {
        "question": "Ole rechnet die Kosten ____ seiner Firma ab.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Wir schließen einen Vertrag ____ dem Käufer ab.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Die Mitarbeiter stimmen ____ den Antrag ab.",
        "options": ["über", "an", "mit"],
        "answer": "über"
    },
    {
        "question": "Achte besser ____ deine Gesundheit!",
        "options": ["auf", "an", "mit"],
        "answer": "auf"
    },
    {
        "question": "Max amüsiert sich ____ den Film.",
        "options": ["über", "an", "mit"],
        "answer": "über"
    },
    {
        "question": "Ich biete dir mein Auto ____ Kauf an.",
        "options": ["zum", "für", "an"],
        "answer": "zum"
    },
    {
        "question": "Das ändert nichts ____ der Situation!",
        "options": ["an", "auf", "mit"],
        "answer": "an"
    },
    {
        "question": "Ich fange jetzt ____ der Arbeit an.",
        "options": ["mit", "bei", "für"],
        "answer": "mit"
    },
    {
        "question": "Ich ängstige mich ____ meinen Sohn.",
        "options": ["um", "an", "auf"],
        "answer": "um"
    },
    {
        "question": "Jetzt kommt es ____ dich an!",
        "options": ["auf", "bei", "mit"],
        "answer": "auf"
    },
    {
        "question": "Er hat sich ____ der Volkshochschule angemeldet.",
        "options": ["bei", "für", "an"],
        "answer": "bei"
    },
    {
        "question": "Hast du dich schon ____ den Kurs angemeldet?",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Du musst noch ____ dem Reisebüro anrufen.",
        "options": ["beim", "für", "an"],
        "answer": "beim"
    },
    {
        "question": "Er sieht mich ____ seinen Freund an.",
        "options": ["als", "bei", "an"],
        "answer": "als"
    },
    {
        "question": "Wir möchten Sie gern ____ Fahrer anstellen.",
        "options": ["als", "bei", "an"],
        "answer": "als"
    },
    {
        "question": "Antworte bitte ____ meine Frage!",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Beate kennt sich ____ guten Weinen aus.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Er ruht sich ____ seinem Erfolg aus.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Ich muss mich ____ dem Flug ausruhen.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Der Minister wurde ____ der Partei ausgeschlossen.",
        "options": ["aus", "bei", "an"],
        "answer": "aus"
    },
    {
        "question": "Es sieht ____ einem Gewitter aus.",
        "options": ["nach", "bei", "an"],
        "answer": "nach"
    },
    {
        "question": "Der Politiker spricht sich ____ Reformen aus.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Ich möchte mich ____ Ihre Hilfe bedanken.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Leo, bedank dich ____ dem Mann!",
        "options": ["bei", "für", "an"],
        "answer": "bei"
    },
    {
        "question": "Der Boden war ____ Schnee bedeckt.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Beeil dich mal ____ deiner Arbeit!",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Herr Ulrich wurde ____ Abteilungsleiter befördert.",
        "options": ["zum", "bei", "an"],
        "answer": "zum"
    },
    {
        "question": "Der Elefant wurde ____ der Gefangenschaft befreit.",
        "options": ["aus", "bei", "an"],
        "answer": "aus"
    },
    {
        "question": "Er hat sich ____ seinen Sorgen befreit.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Ich kann mich ____ diesen Autor nicht begeistern.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Herr Bär hat ____ einfacher Arbeiter begonnen.",
        "options": ["als", "bei", "an"],
        "answer": "als"
    },
    {
        "question": "Wann beginnst du ____ dem Studium?",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Ich beglückwünsche Sie ____ Ihrem Erfolg!",
        "options": ["zu", "bei", "an"],
        "answer": "zu"
    },
    {
        "question": "Lina begründet ihr Fehlen ____ ihrer Krankheit.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Er bekennt sich ____ seiner Geliebten.",
        "options": ["zu", "bei", "an"],
        "answer": "zu"
    },
    {
        "question": "Viele Leute geben ihr Geld ____ ein Luxusauto aus.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Man sollte immer ____ Besten ausgehen.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Ich war ____ meiner Arbeit sehr beschäftigt.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Mark beschränkt sich ____ ein Glas Wein pro Woche.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Beschwer dich doch ____ deinen Nachbarn!",
        "options": ["bei", "für", "an"],
        "answer": "bei"
    },
    {
        "question": "Du beschwerst dich ohne Grund ____ deinen Mann.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Ich bestehe ____ einem korrekten Vertrag.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Das Dessert besteht ____ einem Joghurt mit Obst.",
        "options": ["aus", "bei", "an"],
        "answer": "aus"
    },
    {
        "question": "Mein Job besteht ____ der Bearbeitung von Anträgen.",
        "options": ["in", "bei", "an"],
        "answer": "in"
    },
    {
        "question": "Er hat das Sofa ____ einem Möbelhaus bestellt.",
        "options": ["bei", "für", "an"],
        "answer": "bei"
    },
    {
        "question": "Über meinen Bauch bestimme ich! sagten Frauen.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Der Täter wurde ____ den Diebstahl bestraft.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Die Studenten beteiligen sich ____ der Diskussion.",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Wir beten ____ dich.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Viele Menschen beten in Not ____ ihrem Gott.",
        "options": ["zu", "bei", "an"],
        "answer": "zu"
    },
    {
        "question": "Ich betrachte das ____ eine Lüge.",
        "options": ["als", "bei", "an"],
        "answer": "als"
    },
    {
        "question": "Ralf hat seine Frau ____ ihrer Freundin betrogen.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Ines bewirbt sich ____ einem Reisebüro.",
        "options": ["bei", "für", "an"],
        "answer": "bei"
    },
    {
        "question": "Sie bewirbt sich ____ einen Job im Marketing.",
        "options": ["um", "bei", "an"],
        "answer": "um"
    },
    {
        "question": "Der Chef bezeichnet ihn ____ seinen besten Mann.",
        "options": ["als", "bei", "an"],
        "answer": "als"
    },
    {
        "question": "Ich bleibe ____ meiner Meinung.",
        "options": ["bei", "für", "an"],
        "answer": "bei"
    },
    {
        "question": "Ich brauche dich ____ den Umzug.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Zusammen bringen wir es ____ neun Personen.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Die kleine Miriam bringt ihre Eltern ____ den Schlaf.",
        "options": ["um", "bei", "an"],
        "answer": "um"
    },
    {
        "question": "Ich danke dir ____ deinen Tipp!",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Denkt ihr ____ den Geburtstag von Oma?",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Das neue Benzin soll ____ Umweltschutz dienen.",
        "options": ["zum", "bei", "an"],
        "answer": "zum"
    },
    {
        "question": "Die Politiker diskutieren ____ eine Reform.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Immer dreht sich alles nur ____ dich!",
        "options": ["um", "bei", "an"],
        "answer": "um"
    },
    {
        "question": "Soja eignet sich ____ Fleisch-Ersatz.",
        "options": ["als", "bei", "an"],
        "answer": "als"
    },
    {
        "question": "Manfred eignet sich nicht ____ diesen Job.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Die Regierung einigte sich ____ einen Kompromiss.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Du musst dich ____ deiner Kollegin einigen.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Kann ich dich ____ Essen einladen?",
        "options": ["zum", "bei", "an"],
        "answer": "zum"
    },
    {
        "question": "Auf so einen Handel lasse ich mich nicht ____!",
        "options": ["ein", "bei", "an"],
        "answer": "ein"
    },
    {
        "question": "Jürgen setzt sich ____ den Umweltschutz ein.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Julia zahlt Geld ____ Ihr Konto ein.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Ekelst du dich ____ dieser Spinne?",
        "options": ["vor", "bei", "an"],
        "answer": "vor"
    },
    {
        "question": "Er hat sich ____ den neuen Job entschieden.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Vorher hat er sich ____ Kündigung entschlossen.",
        "options": ["zur", "für", "an"],
        "answer": "zur"
    },
    {
        "question": "Ich verlange, dass du dich ____ mir entschuldigst.",
        "options": ["bei", "für", "an"],
        "answer": "bei"
    },
    {
        "question": "Ich möchte mich ____ meinen Fehler entschuldigen.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Wie ist ____ dem Nichts der Kosmos entstanden?",
        "options": ["aus", "bei", "an"],
        "answer": "aus"
    },
    {
        "question": "Das hässliche Entlein entwickelte sich ____ einem schönen Schwan.",
        "options": ["zu", "bei", "an"],
        "answer": "zu"
    },
    {
        "question": "Ich habe ____ Tod Ihres Mannes erfahren.",
        "options": ["vom", "bei", "an"],
        "answer": "vom"
    },
    {
        "question": "Jetzt muss ich mich ____ dem Stress erholen.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Erinnerst du dich ____ unseren Urlaub?",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Man erkennt ihn ____ seinen großen Ohren.",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Andi hat sich ____ mir nach dir erkundigt.",
        "options": ["bei", "für", "an"],
        "answer": "bei"
    },
    {
        "question": "Der Tourist erkundigt sich ____ dem Weg.",
        "options": ["nach", "bei", "an"],
        "answer": "nach"
    },
    {
        "question": "Er ernährt sich ____ viel Gemüse.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Er wurde ____ Minister ernannt.",
        "options": ["zum", "bei", "an"],
        "answer": "zum"
    },
    {
        "question": "Ich bin ____ das Foto erschrocken.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Bist du ____ diesem Hund erschrocken?",
        "options": ["vor", "bei", "an"],
        "answer": "vor"
    },
    {
        "question": "Das hätte ich ____ dir nicht erwartet!",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Warum hat er ____ seiner Situation nichts erzählt?",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Erzähl mir etwas lieber ____ dich!",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Dir fehlt es ____ Mut dazu!",
        "options": ["am", "bei", "an"],
        "answer": "am"
    },
    {
        "question": "Der Mensch hält ____ seiner Gewohnheiten fest.",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Die Menschen fliehen ____ dem Feind.",
        "options": ["vor", "bei", "an"],
        "answer": "vor"
    },
    {
        "question": "Wir mussten ____ der Adresse fragen.",
        "options": ["nach", "bei", "an"],
        "answer": "nach"
    },
    {
        "question": "Kann ich dich ____ Rat fragen?",
        "options": ["um", "bei", "an"],
        "answer": "um"
    },
    {
        "question": "Ich freue mich ____ die Reise!",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Ich habe mich ____ deinen Brief gefreut.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Die Krise führte ____ einem negativen Geschäftsergebnis.",
        "options": ["zu", "bei", "an"],
        "answer": "zu"
    },
    {
        "question": "David fürchtet sich ____ seiner Kollegin.",
        "options": ["vor", "bei", "an"],
        "answer": "vor"
    },
    {
        "question": "Hier geht es ____ das Prinzip.",
        "options": ["um", "bei", "an"],
        "answer": "um"
    },
    {
        "question": "Österreich gehört ____ Europäischen Union.",
        "options": ["zur", "bei", "an"],
        "answer": "zur"
    },
    {
        "question": "Die Schweiz gilt ____ Paradies für Skifahrer.",
        "options": ["als", "bei", "an"],
        "answer": "als"
    },
    {
        "question": "Dieser Parkausweis gilt nur ____ die Innenstadt.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Karin ist ____ Schwierigkeiten geraten.",
        "options": ["in", "bei", "an"],
        "answer": "in"
    },
    {
        "question": "Du musst dich ____ diese Situation gewöhnen.",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Wer glaubt hier noch ____ die Wahrheit?",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Ich gratuliere dir ____ deinem Examen!",
        "options": ["zu", "bei", "an"],
        "answer": "zu"
    },
    {
        "question": "Ich soll dich ____ der Nachbarin grüßen.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Paul hält sich ____ den Besten.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Was hältst du ____ meinem Vorschlag?",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Die Firma handelt ____ wertvollen Teppichen.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Das Buch handelt ____ einem Abenteuer.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Der König herrscht ____ sein Volk.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Er wurde ____ der Flucht gehindert.",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Darf ich Sie ____ einen Fehler hinweisen?",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Die Studenten hoffen ____ bessere Zeiten.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Kinder hören selten ____ ihre Eltern.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Der Vater hat sich ____ der Schule informiert.",
        "options": ["bei", "für", "an"],
        "answer": "bei"
    },
    {
        "question": "Wir sind ____ den Unfall informiert.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Mein Sohn interessiert sich ____ deinen Wagen.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Sandra hat sich ____ der Uhrzeit geirrt.",
        "options": ["in", "bei", "an"],
        "answer": "in"
    },
    {
        "question": "Die Arbeiter kämpfen ____ einen höheren Lohn.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Er kämpft ____ sein Leben.",
        "options": ["um", "bei", "an"],
        "answer": "um"
    },
    {
        "question": "Wir kennen ihn ____ klugen Mann.",
        "options": ["als", "bei", "an"],
        "answer": "als"
    },
    {
        "question": "Alle klagen ____ den Winter.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Hat es gerade ____ der Tür geklingelt?",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Jemand hat ____ Fenster geklopft.",
        "options": ["ans", "bei", "an"],
        "answer": "ans"
    },
    {
        "question": "Ich komme nicht ____ die Lösung.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Ich komme vor lauter Arbeit nicht mehr ____ Lesen.",
        "options": ["zum", "bei", "an"],
        "answer": "zum"
    },
    {
        "question": "Konzentrier dich ____ das Wichtige!",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Peter kümmert sich ____ seine Mutter.",
        "options": ["um", "bei", "an"],
        "answer": "um"
    },
    {
        "question": "Warum lacht ihr ____ ihn?",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Johanna lebt nur ____ ihre Musik.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Von Luft und Liebe allein kann man nicht ____ leben.",
        "options": ["leben", "bei", "an"],
        "answer": "leben"
    },
    {
        "question": "Viele Leute leiden ____ Übergewicht.",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Margot leidet ____ ihrer Schwiegermutter.",
        "options": ["unter", "bei", "an"],
        "answer": "unter"
    },
    {
        "question": "Die Ware wurde gestern ____ den Kunden geliefert.",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Meine Müdigkeit liegt sicher ____ Wetter.",
        "options": ["am", "bei", "an"],
        "answer": "am"
    },
    {
        "question": "Was meinst du ____ neuen Direktor?",
        "options": ["zum", "bei", "an"],
        "answer": "zum"
    },
    {
        "question": "Du sollst dich ____ deiner Schwester melden.",
        "options": ["bei", "für", "an"],
        "answer": "bei"
    },
    {
        "question": "Petra denkt ____ ihr Leben nach.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Bea orientiert sich in allem ____ ihrer Schwester.",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Dieses Hemd passt nicht ____ deiner Hose.",
        "options": ["zu", "bei", "an"],
        "answer": "zu"
    },
    {
        "question": "Die Demonstranten protestieren ____ die Politik.",
        "options": ["gegen", "bei", "an"],
        "answer": "gegen"
    },
    {
        "question": "Ich werde mich ____ dir rächen! Warte nur!",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Inge will sich ____ die Untreue ihres Freundes rächen.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Auf Nüsse reagiere ich allergisch.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Die Firma rechnet nicht ____ einem hohen Gewinn.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Die Ölkonzerne regieren ____ den Ölmarkt.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Die Passagiere wurden ____ großer Not gerettet.",
        "options": ["aus", "bei", "an"],
        "answer": "aus"
    },
    {
        "question": "Hier riecht es ____ leckerem Essen!",
        "options": ["nach", "bei", "an"],
        "answer": "nach"
    },
    {
        "question": "Berta hat ____ Hilfe gerufen.",
        "options": ["um", "bei", "an"],
        "answer": "um"
    },
    {
        "question": "Was hat er ____ mich gesagt?",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Was sagst du ____ meiner neuen Frisur?",
        "options": ["zu", "bei", "an"],
        "answer": "zu"
    },
    {
        "question": "Die Kinder sammeln ____ einen guten Zweck.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Schalt doch bitte mal ____ das zweite Programm.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Ich schäme mich ____ das Verhalten meines Mannes.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Nach zwei Jahren Ehe lässt er sich ____ ihr scheiden.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Schickst du das Paket ____ deinen Bruder?",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Der Diktator lässt ____ sein Volk schießen.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Viele schimpfen ____ die Politiker.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Aus deinem Verhalten schließe ich, dass du schuld bist.",
        "options": ["aus", "bei", "an"],
        "answer": "aus"
    },
    {
        "question": "Der Tee schmeckt ____ einem Gewürz.",
        "options": ["nach", "bei", "an"],
        "answer": "nach"
    },
    {
        "question": "Diese Impfung schützt ____ Grippe.",
        "options": ["gegen", "bei", "an"],
        "answer": "gegen"
    },
    {
        "question": "Wie kann man sein Geld ____ der Inflation schützen?",
        "options": ["vor", "bei", "an"],
        "answer": "vor"
    },
    {
        "question": "Der Angeklagte schweigt ____ allen Punkten.",
        "options": ["zu", "bei", "an"],
        "answer": "zu"
    },
    {
        "question": "Siehst du bitte mal ____ den Kindern?",
        "options": ["nach", "bei", "an"],
        "answer": "nach"
    },
    {
        "question": "Schatz, ich sehne mich so sehr ____ dir!",
        "options": ["nach", "bei", "an"],
        "answer": "nach"
    },
    {
        "question": "Oft siegt das Gefühl ____ den Verstand.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Anna muss allein ____ ihren Sohn sorgen.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Die Großmutter sorgt sich ____ mich.",
        "options": ["um", "bei", "an"],
        "answer": "um"
    },
    {
        "question": "Wir sparen ____ eine lange Weltreise.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Das Team spielt ____ den dritten Platz.",
        "options": ["um", "bei", "an"],
        "answer": "um"
    },
    {
        "question": "Wann sprichst du ____ deiner Schwester?",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Wir müssen ____ den Zeitplan sprechen.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Nino hat ____ dir gesprochen.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Maxi staunt ____ die Tiere im Zoo.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Er ist ____ einem Herzinfarkt gestorben.",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Niemand hat ____ den Kandidaten gestimmt.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Hier stinkt es ____ altem Fett.",
        "options": ["nach", "bei", "an"],
        "answer": "nach"
    },
    {
        "question": "Bitte stör mich nicht ____ dem Telefonat.",
        "options": ["bei", "für", "an"],
        "answer": "bei"
    },
    {
        "question": "Wer strebt nicht ____ einem besseren Leben?",
        "options": ["nach", "bei", "an"],
        "answer": "nach"
    },
    {
        "question": "Die Arbeiter streiken ____ höhere Löhne.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Sabine streitet oft ____ ihrem Freund.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Meistens streiten sie ____ das Putzen.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Alle suchen ____ dem großen Glück.",
        "options": ["nach", "bei", "an"],
        "answer": "nach"
    },
    {
        "question": "Wer möchte sein Leben ____ ein anderes tauschen?",
        "options": ["gegen", "bei", "an"],
        "answer": "gegen"
    },
    {
        "question": "Wir teilen den Kuchen ____ acht Stücke.",
        "options": ["in", "bei", "an"],
        "answer": "in"
    },
    {
        "question": "Lena nimmt ____ dem Wettbewerb teil.",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Chrissy telefoniert ____ ihrer besten Freundin.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Die Firma trauert ____ ihren Mitarbeiter.",
        "options": ["um", "bei", "an"],
        "answer": "um"
    },
    {
        "question": "Viele träumen ____ einem Haus mit Garten.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Später treffe ich mich ____ meinem Mann.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Ralf hat sich ____ seiner Freundin getrennt.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Trinken wir ____ dein Wohl!",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Er hat sie ____ einem Geschenk überrascht.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Darf ich Sie ____ einem Glas Wein überreden?",
        "options": ["zu", "bei", "an"],
        "answer": "zu"
    },
    {
        "question": "Luther hat die Bibel ____ dem Lateinischen übersetzt.",
        "options": ["aus", "bei", "an"],
        "answer": "aus"
    },
    {
        "question": "Das Buch wird ____ viele Sprachen übersetzt.",
        "options": ["in", "bei", "an"],
        "answer": "in"
    },
    [
    {
        "question": "Das kann man nicht ____ jeden übertragen.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Bitte überweisen Sie das Geld ____ mein Konto.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Ich werde ihn ____ meiner Unschuld überzeugen.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Heinz dreht sich ____ jeder Frau um.",
        "options": ["nach", "bei", "an"],
        "answer": "nach"
    },
    {
        "question": "Gerd unterhält sich ____ seiner Kollegin.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Wir unterhalten uns ____ den Film.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Sie unterrichtet Marion ____ Flamencotanzen.",
        "options": ["im", "bei", "an"],
        "answer": "im"
    },
    {
        "question": "Julia unterscheidet sich sehr ____ ihrer Schwester.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Das Wasser wird ____ Bakterien untersucht.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Leon verabredet sich ____ Maja.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Darf ich mich ____ Ihnen verabschieden?",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Er hat sich ____ Positiven verändert.",
        "options": ["zum", "bei", "an"],
        "answer": "zum"
    },
    {
        "question": "Können Sie mich ____ Herrn Mayr verbinden?",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Mit seiner Arbeit hat er viel Geld verdient.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Heute verfügt er ____ ein großes Vermögen.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Soll man sich immer ____ anderen vergleichen?",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Deine neue Liebe musst du ____ mir nicht verheimlichen.",
        "options": ["vor", "bei", "an"],
        "answer": "vor"
    },
    {
        "question": "Ich verklage ihn ____ Schadenersatz.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Frau Hannig verlangt ____ ihrem Rechtsanwalt.",
        "options": ["nach", "bei", "an"],
        "answer": "nach"
    },
    {
        "question": "Die Arbeitszeit wird ____ sechs Wochentage verlängert.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Können Sie mir das Visum ____ zwei Monate verlängern?",
        "options": ["um", "bei", "an"],
        "answer": "um"
    },
    {
        "question": "Auf meine Freundin kann ich mich immer verlassen.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Birgit hat sich ____ meinen Bruder verliebt.",
        "options": ["in", "bei", "an"],
        "answer": "in"
    },
    {
        "question": "Sie will sich bald ____ ihm verloben.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Julian vermietet die Wohnung ____ seinen Bruder.",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Das Buch wird ____ einem bekannten Verlag veröffentlicht.",
        "options": ["bei", "für", "an"],
        "answer": "bei"
    },
    {
        "question": "Der Soldat wurde ____ den Feind verraten!",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Wir müssen den Termin ____ kommenden Freitag verschieben.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Wir müssen das Haus ____ Feuer versichern.",
        "options": ["gegen", "bei", "an"],
        "answer": "gegen"
    },
    {
        "question": "Versöhn dich doch ____ deiner Familie!",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Warum versteckst du dich ____ mir?",
        "options": ["vor", "bei", "an"],
        "answer": "vor"
    },
    {
        "question": "Wie verstehst du dich ____ deinen Eltern?",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Tom versteht nichts ____ Kindern, er hat keine.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Er verteidigt sich ____ die Vorwürfe.",
        "options": ["gegen", "bei", "an"],
        "answer": "gegen"
    },
    {
        "question": "Mit unseren neuen Nachbarn vertragen wir uns super.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Manchmal muss man ____ die Hilfe von anderen vertrauen.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Wegen des Delikts wurde er ____ einer Geldstrafe verurteilt.",
        "options": ["zu", "bei", "an"],
        "answer": "zu"
    },
    {
        "question": "Ich glaube, sie verwechseln mich ____ meiner Schwester.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Thymian kann man gut ____ Lammgewürz verwenden.",
        "options": ["als", "bei", "an"],
        "answer": "als"
    },
    {
        "question": "Ernst verzichtet ____ seinen Lottogewinn. Verrückt!",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Hast du dich ____ deine Prüfung gut vorbereitet?",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Was stellst du dir ____ einer 'Maibowle' vor?",
        "options": ["unter", "bei", "an"],
        "answer": "unter"
    },
    {
        "question": "Sie wählten Ines ____ Klassensprecherin.",
        "options": ["zur", "bei", "an"],
        "answer": "zur"
    },
    {
        "question": "Die Meteorologen warnen ____ starken Regenfällen.",
        "options": ["vor", "bei", "an"],
        "answer": "vor"
    },
    {
        "question": "Ich musste eine Stunde ____ meinen Bruder warten.",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Warte noch ____ deiner Kündigung!",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Du musst dich ____ diese Ungerechtigkeit wehren.",
        "options": ["gegen", "bei", "an"],
        "answer": "gegen"
    },
    {
        "question": "Andi weinte sehr ____ den Tod seiner Mutter.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Der Polizist gab die Information ____ die Presse weiter.",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Die Firma wirbt ____ ihren neuen Computer.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Was ist denn ____ deiner Freundin Sandra geworden?",
        "options": ["aus", "bei", "an"],
        "answer": "aus"
    },
    {
        "question": "Das kann noch ____ einem Problem werden.",
        "options": ["zu", "bei", "an"],
        "answer": "zu"
    },
    {
        "question": "Ich wette ____ dir um eine Flasche Wein, dass das stimmt!",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Was weißt du ____ den Skandal?",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Von diesem Geheimnis weiß ich gar nichts.",
        "options": ["von", "bei", "an"],
        "answer": "von"
    },
    {
        "question": "Man wundert sich oft ____ die Geduld von Eltern.",
        "options": ["über", "bei", "an"],
        "answer": "über"
    },
    {
        "question": "Ich zahle ____ den Schaden.",
        "options": ["für", "bei", "an"],
        "answer": "für"
    },
    {
        "question": "Wir zählen ____ dich!",
        "options": ["auf", "bei", "an"],
        "answer": "auf"
    },
    {
        "question": "Er zögert noch ____ seiner Entscheidung.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Mit meinem Leben bin ich sehr zufrieden.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Wie kommst du ____ deiner neuen Kollegin zurecht?",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Deine schlechte Laune hängt ____ der Arbeit zusammen.",
        "options": ["mit", "bei", "an"],
        "answer": "mit"
    },
    {
        "question": "Siehst du mir heute ____ Training zu?",
        "options": ["beim", "für", "an"],
        "answer": "beim"
    },
    {
        "question": "Sie zweifelt ____ seiner Geschichte.",
        "options": ["an", "bei", "für"],
        "answer": "an"
    },
    {
        "question": "Man kann niemanden ____ seinem Glück zwingen.",
        "options": ["zu", "bei", "an"],
        "answer": "zu"
    }
]

let currentQuestion = 0;

function showQuestion(index) {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const statusElement = document.getElementById('status');

    const question = questions[index];
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

    questionElement.textContent = question.question;
    optionsContainer.innerHTML = '';
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(button, option, question.answer);
        optionsContainer.appendChild(button);
    });

    statusElement.textContent = `Frage ${index + 1} von ${questions.length}`;
}

function checkAnswer(selectedButton, selectedOption, correctAnswer) {
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }
        if (button === selectedButton && selectedOption !== correctAnswer) {
            button.classList.add('incorrect');
        }
    });
    disableOptions();
}

function disableOptions() {
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => button.disabled = true);
}

document.getElementById('prev-button').onclick = () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
};

document.getElementById('next-button').onclick = () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        alert("Das waren alle Fragen!");
    }
};

document.getElementById('jump-button').onclick = () => {
    const questionNumberInput = document.getElementById('question-number');
    const questionNumber = parseInt(questionNumberInput.value, 10);

    if (!isNaN(questionNumber) && questionNumber >= 1 && questionNumber <= questions.length) {
        currentQuestion = questionNumber - 1;
        showQuestion(currentQuestion);
    } else {
        alert("Bitte eine gültige Fragenummer eingeben!");
    }
};

// İlk soruyu göster
showQuestion(currentQuestion);
