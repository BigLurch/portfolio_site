# Jonas Johansson - MLOps Portfolio

Responsiv portfolio i Navy + Cyan, byggd med HTML, CSS och JavaScript. Ingen installation, backend eller byggprocess behövs.

## Språk och CV

- Engelska är standard vid första besöket. EN/SV i sidhuvudet växlar hela sidan till svenska eller engelska, inklusive projektsidor, bildbeskrivningar och verktygsflödet.
- Valet sparas i webbläsaren. `?lang=en` respektive `?lang=sv` kan användas för att länka till ett bestämt språk. Språkvalet följer även med länkarna mellan HTML-sidorna.
- Utan JavaScript visas den engelska versionen. Båda CV-filerna kan fortfarande laddas ner.
- **Download CV / Ladda ner CV** erbjuder båda språken. Sidfoten har också två separata CV-länkar.
- `assets/documents/jonas-johansson-cv-en.pdf`: ditt bifogade engelska CV.
- `assets/documents/jonas-johansson-cv-sv.pdf`: ditt tidigare svenska CV.
- PDF-filerna är kopior av dina original, utan omskrivningar. Den äldre `jonas-johansson-cv.pdf` finns kvar för kompatibilitet men används inte av den nya menyn.

## Öppna sidan

Öppna `index.html` direkt i en webbläsare, eller kör från projektmappen:

```bash
python -m http.server 8000
```

Besök `http://localhost:8000`.

## Innehåll

Startsidan har fyra projekt i ett horisontellt scrollbart flöde, AI Career Coach som pågående projekt, About, ett interaktivt verktygsflöde och kontaktinformation. De fyra projekten har egna HTML-sidor under `projects/`.

`assets/css/styles.css` styr layout och färger. `assets/js/main.js` hanterar meny, porträtt, projektflöde och verktygsflöde. `assets/js/i18n.js` hanterar språkvalet och innehåller de svenska översättningarna.

## Redigera texter

Engelska originaltexter finns i HTML-filerna och, för verktygsflödet, i `main.js`. I `i18n.js` ligger varje engelsk text som nyckel med sin svenska översättning som värde. Ändrar du en engelsk text behöver du ändra motsvarande nyckel där också. Saknas en översättning visas originaltexten.

Tekniknamn och projektnamn behålls på båda språken. Ändra kontakt- och profillänkar i alla fem HTML-filer om de uppdateras. För nya CV-versioner ersätter du respektive PDF med samma filnamn.

## Bilder

Projektbilder och illustrationen vid datorn finns med. Ditt heroporträtt lägger du som `assets/images/hero-portrait.webp`. Fram tills bilden finns visas reservlayouten. Du kan ändra bildfilen via `data-image` i `index.html`. Porträttets alternativtext hanteras också i `i18n.js` och `main.js`.

## Uppdatera din befintliga hemsida

Den här ZIP-filen innehåller hela portfolion. Om du redan har egna ändringar eller ett heroporträtt på din dator ska du behålla dem när du uppdaterar.

För enbart språk- och CV-uppdateringen ersätter du:

- `index.html` och de fyra HTML-filerna under `projects/`.
- `assets/css/styles.css` och `assets/js/main.js`.

Lägg dessutom till:

- `assets/js/i18n.js`.
- `assets/documents/jonas-johansson-cv-en.pdf`.
- `assets/documents/jonas-johansson-cv-sv.pdf`.

## GitHub

Lägg innehållet i `jonas-portfolio/` i repo-roten så att `index.html` ligger direkt där. Inkludera `.nojekyll` och `.gitignore`. Portfolion kan sedan hostas på GitHub Pages eller annan statisk hosting, även under en undermapp.

Kontrollera sidan på mobil och dator och att dina demo- och profillänkar fungerar före lansering. Inget repo har ändrats och hemsidan har inte publicerats här.

Kontrollerat i denna uppdatering: JavaScript-syntax, språkväxling i DOM-simulering, sparat språkval, språkparametrar, interna filreferenser, PDF-originalens byteinnehåll och ZIP-integritet. Visuell webbläsarkontroll kunde inte köras i denna miljö.

## Uppdatering av gruppprojekten

De två gruppprojekten har nu konkreta beskrivningar av Jonas bidrag, lärdomar och tidigare Azure-driftsättning på engelska och svenska. Azure-miljöerna är avstängda av kostnadsskäl. Fork-länkar och fler projektbilder har lagts till i den senaste uppdateringen. För denna uppdatering ändrades `index.html`, båda grupprojektsidorna, `assets/js/i18n.js` och `assets/css/styles.css`.

## Projektbilder och fork-länkar

Den senaste leveransen innehåller ett huvudfoto och sex galleribilder för Plant Growth Monitor, samt huvudbilden och tre galleribilder för Nordic Travel Chatbot. Gallerierna har svensk/engelsk bildtext, fullständiga alternativtexter och länkar till originalbildernas fulla storlek. De ligger i två kolumner på större skärmar och en kolumn på små skärmar.

Båda projekten har länkar till Jonas fork-repon på startsidan och projektsidorna. Länkarna använder de exakta adresser Jonas skickade; publik tillgänglighet kunde inte verifieras i denna miljö.

Projektbilderna ligger under `assets/images/projects/plant/` och `assets/images/projects/nordic/`. Bildernas innehåll är oförändrat; bara filnamnen har gjorts tydligare. Se `docs/PROJECT-GALLERIES.md` för urvalet.

För att uppdatera en tidigare version ersätter du `index.html`, båda grupprojektsidorna, `assets/css/styles.css` och `assets/js/i18n.js` och lägger till hela `assets/images/projects/`.

Kontrollerat: interna filreferenser, bilddimensioner, översättningar för bildtexter och alternativtexter, kopiornas byteinnehåll, JavaScript-syntax, språkväxling och ZIP-integritet. Visuell kontroll av själva hemsidan i webbläsare kunde inte köras här.
