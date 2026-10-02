# AI Career Coach — nuläge

Underlag: ai_career_coach-main.zip från användaren. Granskning av källkod och struktur; inga externa API-anrop, ingen databasåtkomst och ingen verifierad körning av projektet. Supabase-projektets faktiska tabeller, policies och driftsättning har inte inspekterats.

## Finns i koden

| Del | Underlag |
| --- | --- |
| Next.js/React-gränssnitt | Login, signup, dashboard och upload |
| Supabase Auth | Inloggning/registrering och användarkontroller i frontend |
| CV-uppladdning | PDF till cv-files-bucket och metadata i cvs-tabellen |
| Senaste uppladdade CV | Frontend filtrerar på user_id |
| PDF-textextraktion | FastAPI-route /cv/extract/{cv_id}, pypdf och extraction_status |
| CV-analys | LLM-anrop via OpenRouter, JSON-parsning och Pydantic-resultat |
| Jobbmatchning | CV-text jämförs med jobbannons; resultatschema och frontendvisning |
| Poängvalidering | CV- och matchningspoäng valideras till intervallet 1–100 |

Det är tillräckligt konkret för att visas som ett pågående portfolio-projekt. Det är inte samma sak som att hela appens flöde är körningsverifierat.

## Konkreta delar att arbeta vidare med

1. **Backendbehörighet:** De lästa CV- och analysrouterna tar ett cv_id utan synlig verifiering av inloggad användare eller CV-ägare. Backendklienten använder inställningen supabase_service_role_key, och frontend-anropen till analys-API:t skickar ingen användartoken. Frontendens inloggningskontroller ersätter inte kontroll i dessa API-routes. Detta bör lösas innan en offentlig demo med riktiga CV:n.
2. **Uppladdning till extraktion:** Uppladdningssidan sparar fil och metadata, men anropar inte extraktionsendpointen i det lästa flödet. Analysrouterna kräver redan färdig extraktion. Hur steget triggas i den faktiska miljön behöver fastställas.
3. **Databasschema och policies:** Dokumentationsfilen för schemat är tom och inga migrationer/RLS-policies följer med. Databasens nuvarande behörigheter kan därför inte bedömas från arkivet.
4. **AI-svar:** Promptarna begär exakt tre punkter per lista, men Pydantic-schemana validerar inte listlängden. Ingen evalueringssvit eller verifierad kvalitetsskala följer med. Poäng bör beskrivas som modellens återkoppling, inte ett validerat rekryteringsmått.
5. **Dokumentation och paketering:** Dockerfile, docker-compose och flera dokument-/säkerhets-/modellfiler är tomma. Root-README innehåller bara projektnamnet. En egen installationsguide och tester saknas i underlaget.
6. **Career Roadmap:** Dashboarden visar en beskrivning, men ingen separat implementerad roadmap-funktion hittades. Funktionen lyfts därför inte som färdig.

## Portfolio-text och robotstatus

AI Career Coach ersätter roboten i On the workbench, som en prototyp under utveckling. Webbtexten lyfter kodens faktiska innehåll: Next.js, FastAPI, Supabase, PDF-flöde och AI-feedback/jobbmatchning.

Roboten är pausad enligt användaren och marknadsförs inte längre som det aktuella bygget. Ingen ekonomisk förklaring läggs på sidan. Den bifogade CV-PDF:en har inte ändrats i denna uppdatering.

Ingen offentlig demo- eller GitHub-URL har gissats. Om en länk ska läggas till behöver den exakta adressen anges.
