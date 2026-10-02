# Granskning av gruppprojekten

Underlag: de två uppladdade ZIP-arkiven, README, relevanta källfiler, Docker-konfiguration, befintliga screenshots och Jonas individuella rapporter. Projekten har inte startats eller hårdvaran testats i denna granskning. Uppgifter om personlig insats och tidigare Azure-driftsättning bygger på rapporterna och Jonas beskrivning.

## Nordic Travel Chatbot

Passar som portfolio-case för LLMOps och samarbete kring en fullstack-applikation. Koden visar Streamlit, FastAPI, Pydantic-AI, strukturerade scheman, en lokal JSON-källa med filtrering/rankning, promptregistrering och ett MLflow-utvärderingsscript. Det finns lokal Docker Compose för frontend, backend och MLflow, samt material om Azure.

Avgränsningar som påverkar portfolio-texten:

- Ingen vektordatabas eller embeddingsökning används i rekommendationsflödet. Projektet beskrivs därför som en agent med kuraterad data, inte ett komplett RAG-system.
- Frontend sätter Google Maps till avstängt i det demonstrerade flödet. Integrationskod finns, men live Maps beskrivs inte som kärnfunktion.
- Utvärderingsscriptets loader returnerar `records[:1]`. Detta visar en utvärderingsstruktur, inte bred kvalitetssäkring.
- Utvärderingen skickar frågetext utan separata stadsfält till ChatRequest, medan agenten använder Stockholm när stad saknas. Inför bredare stadsutvärdering bör strukturerad resekontext kontrolleras.
- Ett promptversionsfält används i metadata, men systemprompten laddas när agenten skapas. Runtime-byte mellan promptversioner ska inte utlovas utan verifiering.
- Tester finns för datafiltrering och health, men deras importvägar och körbarhet har inte verifierats.

Den inkluderade bilden kommer från `README_images/Streamlit1.png` och är oförändrad. Ingen publik repo- eller demo-URL har gissats.

## Plant Growth Monitor

Passar som portfolio-case för edge computing, meddelandeflöden och tidsseriedata. Koden visar Pico/MicroPython, fuktmätning, ultraljudsavstånd, beräknad växthöjd/tillväxt, OLED/LED/buzzer, MQTT, en Python-consumer, TimescaleDB och Grafana i Docker Compose. Wokwi-simulationsmaterial ingår.

Avgränsningar som påverkar portfolio-texten:

- Projektet är en sensorprototyp, inte en ML-modell eller validerad bevattningsrådgivare.
- Fuktvärden normaliseras med kalibreringskonstanter; höjd räknas från fasta avstånd/placeringsmått. Tillväxt är därför en uppskattning som påverkas av placering och brus.
- Ultraljudskodens vänteloopar saknar timeout, vilket kan ge blockerande mätning om signalen uteblir.
- MQTT-consumern läser JSON och värden direkt; meddelandevalidering och felhantering är möjliga förbättringar.
- Arkivet innehåller ingen automatisk testsuite, långtidstillväxtdataset eller dashboard-provisionering för Grafana.
- Den individuella rapporten beskriver Azure-server, VM och konfiguration av fyra containrar. Enligt Jonas kördes projektet i Azure under kursen. Miljön är nu avstängd av kostnadsskäl; ingen fungerande live-demo utlovas.

Kodarkivet saknar screenshot/foto. Den individuella PDF-rapporten innehåller bilder från bygget och Azure. Portfolion visar tills vidare systemöversikten; fler bilder och repo-länkar inväntas för nästa uppdatering.

## Personlig insats och tidigare driftsättning

Uppdaterat med de individuella rapporterna den 2 oktober 2026.

### Nordic Travel Chatbot

Källa: `Individuell rapport.odt`. Jonas ansvarade huvudsakligen för Streamlit-frontend, integration med backend, JSON-datakällan, stora delar av Azure-driftsättningen samt strukturering och felsökning. Backend och agenten presenteras fortfarande som delar av gruppens gemensamma system.

### Plant Growth Monitor

Källa: `Jonas Johansson (grupp 7).pdf`. Jonas ansvarade huvudsakligen för fysisk hårdvara, kopplingar, sensortestning och kalibrering, den valda Wokwi-simuleringen, ultraljudssensorns ställning, Azure-server/VM och arbete med kommunikationssäkerhet. Han justerade också konfigurationen för de fyra containrarna och dokumenterade bygget. Gruppkamraterna arbetade främst med containrar, databas, consumer och Grafana. Inget specifikt säkerhetsprotokoll eller resultatmått tillskrivs Jonas utan mer underlag.

### Återstår

Jonas har förklarat att båda Azure-miljöerna stängts av för att undvika kostnader. Detta visas på båda projektsidorna, på engelska och svenska. Ingen avstängd miljö länkas som fungerande demo.

- Exakta länkar till Jonas två fork-repon inväntas; inga adresser gissas.
- Fler bilder inväntas. Plan: ett tydligt huvudfoto/screenshot och ett mindre galleri med bildtexter som visar bygge, funktion och tidigare Azure-driftsättning. Vid galleriurval ska eventuella uppgifter som inte ska publiceras i serverbilder granskas.
- Originalrapporterna distribueras inte med hemsidan. De används som underlag för texten.

## Nya bildarkiv och repo-länkar

Båda bildarkiven har gåtts igenom visuellt. Den nya leveransen använder sju Plant-bilder (huvudfoto och sex galleribilder) och fyra Nordic-bilder (befintlig huvudbild och tre nya galleribilder). Bilderna ger underlag för fysisk konstruktion, testning, Grafana och tidigare Azure-resurser. De visar inte att tjänsterna fortfarande är online.

De två exakta fork-länkar som Jonas skickade är nu införda både på startsidan och respektive projektsida. Tidigare punkter om att länkar och bilder inväntas är därmed hanterade.

Nordics Azure-screenshot innehåller ett synligt prenumerations-ID och ingår inte i publiceringspaketet. En kodbyggd översikt visar i stället miljöns tjänster. Plants Azure-resursgruppsbild har redan dolt prenumerations-ID och är inkluderad. CSV, dashboardexport och databasbackup distribueras inte med portfolion.
