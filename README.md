# Jonas Johansson — MLOps Portfolio

En fristående, responsiv portfolio med Navy + Cyan. Allt innehåll på själva sidan är på engelska. Byggd med HTML, CSS och JavaScript. Inga npm-paket, byggsteg, externa typsnitt eller backend behövs.

## Öppna sidan

Öppna `index.html` i din webbläsare. Alla sidor fungerar även från disk. För en lokal webbserver, kör från projektmappen:

```bash
python -m http.server 8000
```

Besök sedan `http://localhost:8000`.

## Mappstruktur

```text
jonas-portfolio/
├── index.html
├── projects/
│   ├── churn-predictor.html
│   └── fraud-detection.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   ├── documents/jonas-johansson-cv.pdf
│   └── images/
│       ├── favicon.svg
│       └── README.md
├── docs/
│   └── DESIGN.md
├── README.md
├── .gitignore
└── .nojekyll
```

## Lägg till dina bilder

Spara dessa filer i `assets/images/`:

| Filnamn | Användning | Rekommenderad storlek |
| --- | --- | --- |
| `hero-portrait.webp` | Rund porträttyta i hero | 1200 × 1200 px |
| `about-portrait.webp` | Bild i About | 1000 × 1250 px |
| `churn-preview.webp` | Churn-kort och projektsida | 1600 × 1000 px |
| `fraud-preview.webp` | Fraud-kort och projektsida | 1600 × 1000 px |

Bilderna visas automatiskt när filerna finns. Saknade bilder lämnar reservlayouten synlig. Inga projektbilder är genererade eller inkluderade. JavaScript krävs för automatisk bildinläsning; navigation och innehåll fungerar utan JavaScript. Om du vill använda JPG/PNG, ändra `data-image` i HTML-filerna. Anpassa också `data-alt` så texten beskriver den faktiska bilden.

Projektkort använder 16:10-format. Projektsidorna har en bredare bildyta och beskär samma bild med `object-fit: cover`. Välj bilder där det viktiga ligger centralt, eller ändra `object-position` / `.case-banner` i CSS. Porträttytorna beskär på samma sätt.

## Ändra innehållet

- Startsida: `index.html`.
- Projekttexter: respektive HTML-fil i `projects/`.
- Färger och layout: `assets/css/styles.css`. Färgerna finns i `:root` överst.
- Meny och bildinläsning: `assets/js/main.js`.
- CV: ersätt `assets/documents/jonas-johansson-cv.pdf` med en ny PDF med samma namn.
- Kontakt-, GitHub- och LinkedIn-länkar finns direkt i HTML. Uppdatera i alla tre filer vid ändringar.

Projektinnehållet bygger på ditt bifogade CV och de två projektarkiven. Inga erfarenhetssiffror, kundomdömen eller färdiga certifieringar har lagts till. Demo-URL:erna kommer från dina projekt; deras aktuella tillgänglighet är inte verifierad. PostgreSQL i Fraud beskrivs som ett konfigurationsval, inte automatisk failover.

## Lägg i GitHub

Packa upp ZIP-filen och lägg **innehållet i `jonas-portfolio/`** i roten av ditt repo. Då ligger `index.html` direkt i repo-roten. Inkludera även `.nojekyll` och `.gitignore` (dolda filer). Inga Pythonprojekt, modellfiler, träningsdata eller inspirationsbilder ska laddas upp med portfolion.

Detta är statiska filer som kan publiceras på GitHub Pages eller annan statisk hosting. Relativa länkar gör att sidan fungerar även under en undermapp, till exempel ett GitHub-projektrepo. Ingen sida har publicerats och inget repo har skapats eller ändrats av denna leverans.

## Före din lansering

1. Lägg in dina egna bilder och anpassa alternativtexterna.
2. Kontrollera kontaktuppgifter och aktuellt CV. Den medföljande PDF:en innehåller även ditt telefonnummer.
3. Öppna demo- och profillänkarna och kontrollera att du vill visa dem publikt.
4. Testa sidan på mobil och dator.
5. När du har en slutlig domän kan du lägga till absoluta canonical-URL:er och en sitemap. Sociala bildförhandsvisningar är inte skapade.

Se `docs/DESIGN.md` för designbeslut och `assets/images/README.md` för bildplatser.
