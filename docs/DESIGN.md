# Designriktning

## Identitet

En teknisk, personlig portfolio för Jonas Johansson, MLOps Engineer-student. Målgruppen är team och rekryterare som överväger en LIA-plats under våren 2027.

## Färger

| Roll | HEX |
| --- | --- |
| Bakgrund | `#0B1120` |
| Kort och ytor | `#111827` |
| Upphöjd yta | `#162033` |
| Huvudtext | `#F8FAFC` |
| Sekundärtext | `#A6B4C8` |
| Accent | `#38BDF8` |
| Accent hover | `#7DD3FC` |
| Kantlinjer | `#253046` |
| Tillgänglighetsdetalj | `#2DD4BF` |
| Pågående projekt | `#FBBF24` |

Sekundärtexten är något ljusare än den första temasissen för bättre läsbarhet. Cyan-knappar använder mörk text för god kontrast.

## Koppling till inspirationsbilderna

- Delad hero med stor typografi och en rund porträttyta.
- Diskreta cyanljus, tunna kantlinjer och små flytande informationskort.
- Tydlig rytm mellan hero, projekt, bakgrund, verktyg och kontakt.
- Mörka projektkort med stora bildytor och egna detaljsidor.

Glöd används sparsamt. Sidan saknar färdighetsprocent, påhittade erfarenhetssiffror och kundomdömen. Layouten bygger på din faktiska profil och ger plats åt projektens tekniska innehåll.

## Typografi och format

Lokal sans-serif-stack: Inter om installerat, annars Segoe UI / Arial. Ingen extern font laddas. Stora rubriker med tät bokstavsplacering, läsbar brödtext och små avsnittsetiketter. Maximalt innehållsmått 1160 px. Mobilen får en kolumn och en meny som öppnas med en knapp.

## Tillgänglighet

Semantiska HTML-element, en huvudrubrik per sida, synlig tangentbordsfokus, hopplänk, riktig mobilmeny med `aria-expanded`, stängning via Escape och stöd för reducerad rörelse. Menyn förblir tillgänglig när JavaScript är avstängt.

## Bildstatus

Projektbilderna är riktiga, oförändrade screenshots från användaren. Projektkorten visar hela bilden med `object-fit: contain`. Projektsidorna visar dem med naturliga proportioner och en länk till originalstorleken. De siffror som syns är en del av respektive screenshot, inte aktuell statistik från portfolion.

Churn-bilden visar gränssnittet innan exempeldata genererats. Fraud-bilden visar en dashboard med simulerade transaktioner. Porträttytorna kan fyllas separat. Avataren och dess layout har tagits bort.
