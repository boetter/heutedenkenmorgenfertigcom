# Arbejdsplan: Færdiggørelse af heutedenkenmorgenfertig.com

> Oprettet april 2026. Brug dette dokument som tjekliste og reference i det løbende arbejde med sitet.

## Status — hvad er gjort, hvad mangler

**Løst:**
- Forretningsprofil opdateret (Jacob alene, læringsforløb som primær ydelse)
- Team-sektion omskrevet til "Du får mig — og ingen andre"
- Ydelse "Udvikling af prototyper" fjernet
- Filterkategorier opdateret til dansk med korrekte tal
- HK Privat og HK Handel har rigtige projektbeskrivelser
- Filterfunktionalitet på projekter og eksperimenter siden fungerer nu

**Mangler stadig:**
1. **4 projekter har stadig placeholder-tekster** — Energinet, ConTech Lab, Novo Nordisk, Grundfos
2. **Visuelle aktiver** — mange sektioner bruger generiske billeder og video-placeholders fra skabelonen
3. **Mere indhold fra Jacob** — yderligere testimonials, bogstatus

---

## SEKTION A: Opgaver til Jacob (kræver dit input)

### A1 — Testimonials / anmeldelser
**Fil:** `mocks/reviews.tsx`

Nuværende indhold: 3 rigtige anmeldelser (Energinet, HK Privat, Molio) — godt udgangspunkt.

**Opgave:** Find og lever 2-4 yderligere testimonials fra kunder/forløb:
- Navn, titel og virksomhed
- Citat (2-4 sætninger)
- LinkedIn-profilbillede eller portræt-foto

Minimum 5-6 testimonials er ideelt for troværdighed på sitet.

---

### A2 — Projektbeskrivelser (KRITISK)
**Fil:** `mocks/projects.tsx`

Hvert projekt mangler:
- 3 indledende afsnit om projektet i sin helhed
- 4 uddybende detaljer om tilgang og udførelse
- Konkrete resultater (eller fjernelse af resultat-sektionen hvis der ikke er reelle tal)
- En rigtig anmeldelse tilknyttet det specifikke projekt

| Projekt | Status | Anmeldelse |
|---------|--------|------------|
| HK Privat | ✓ Tekst på plads | ✓ Christoffer Marckmann |
| HK Handel | ✓ Tekst på plads | ☐ Mangler — indhent fra Mette Høgh eller deltager |
| Energinet | ☐ Placeholder-tekst | ✓ Nicolaj Peulicke — klar til brug |
| ConTech Lab | ☐ Placeholder-tekst | ✓ Ole Berard — klar til brug |
| Novo Nordisk | ☐ Placeholder-tekst | ☐ Mangler — ny testimonial nødvendig |
| Grundfos | ☐ Placeholder-tekst | ☐ Mangler — ny testimonial nødvendig |

---

### A3 — Bogstatus
**Fil:** `templates/AboutPage/Values/index.tsx`

Tekst siger i dag: *"Forfatter til fem, næsten seks, bøger"* — bogen om AI og fagligheder var forventet udgivet "første halvår 2025".

**Opgave:** Bekræft om bogen er udkommet og opdater teksten tilsvarende:
- Hvis udkommet → "Forfatter til seks bøger" (med link til bogen)
- Hvis ikke udkommet → opdater forventing til ny dato eller fjern omtalen

---

## SEKTION B: Strukturelle indholds-ændringer

### B1 — Team-sektionen erstattes
**Filer:** `mocks/team.tsx` + `templates/AboutPage/Team/`

Nuværende: 8 teammedlemmer (Jacob + 7 eksterne rådgivere).
Virkelighed: Forretningen består i dag udelukkende af Jacob.

Team-sektionen på Om-siden skal erstattes med en sektion der tydeligt kommunikerer:
- "Når du hyrer Heute denken, morgen fertig, får du Jacob — og intet andet"
- Personlig og dedikeret leverance som et konkret løfte
- Jacobs baggrund og erfaring som det centrale argument

Teknisk: `mocks/team.tsx` reduceres til kun Jacob, og komponenten omskrives
fra en teamliste til en "hvem er jeg?"-sektion.

---

### B2 — Ydelser opdateres
**Fil:** `mocks/services.tsx`

**Nuværende 4 ydelser → ny liste:**

| Ydelse | Handling |
|--------|---------|
| Læringsforløb | BEHOLDER — fortsat øverst, primær ydelse |
| Rådgivning | BEHOLDER — teksten gennemgås og opdateres |
| Udvikling af prototyper | FJERNES |
| Foredrag | BEHOLDER — evt. tekst-opdatering |

Derudover skal to engelske subtitle-felter oversættes til dansk:
- `"Get focused with a learning program"` (Læringsforløb)
- `"Strategic AI Consulting"` (Rådgivning)

---

### B3 — Filterkategorier
**Fil:** `mocks/links.tsx`

Alle nuværende kategorier er engelske template-kategorier der intet har med sitet at gøre
("Marketing and Communication Plan", "Branding", "Digital Campaigns" osv.).

**Bør opdateres til:**

Projekter:
- "Alle projekter" (5)
- "Læringsforløb" (2)
- "Rådgivning" (2)
- "Foredrag" (1)

Eksperimenter:
- "Alle" (5)
- "AI eksperiment" (2)
- "No-code eksperiment" (2)
- "Julekalender" (1)

---

## SEKTION C: Visuelle aktiver — TODO-liste

> Brug denne liste til at planlægge foto-session og videoproduktion.
> Kryds af efterhånden som materiale er klar.

### C1 — Videoer

| Placering på sitet | Beskrivelse | Status |
|--------------------|-------------|--------|
| Forsiden — bred preview-sektion | Jacob i aktion: foredrag, undervisning eller møde | ☐ |
| Læringsforløb-siden | Undervisningssituation med deltagere | ☐ |
| Rådgivning-siden | Sparring eller mødesituation | ☐ |
| Foredrag-siden | Jacob på scene, gerne med publikum synligt | ☐ |
| HK Privat projektsiden | Video fra eller relateret til forløbet | ☐ |
| Energinet projektsiden | Video fra rådgivningsforløbet | ☐ |
| ConTech Lab projektsiden | Video fra SMV-træning | ☐ |
| Novo Nordisk projektsiden | Video fra projektet (eller generisk) | ☐ |
| Grundfos projektsiden | Video fra projektet (eller generisk) | ☐ |

> **Minimum:** 1-2 gode videoer fra foredrag/undervisning kan genbruges på tværs af sider.
> Projektspecifikke videoer er optionelt.

---

### C2 — Fotos af Jacob

| Placering på sitet | Beskrivelse | Format | Status |
|--------------------|-------------|--------|--------|
| Om virksomheden — stor preview-sektion | Professionelt foto, bred komposition | Landskab/panorama | ☐ |
| "Hvem er jeg?"-sektion | Portrætfoto | Portræt | ☐ |
| Læringsforløb — 3 galleribilleder | Jacob underviser, deltagere, klassemiljø | Blanding | ☐ |
| Rådgivning — 3 galleribilleder | Jacob i møde, whiteboard, sparring | Blanding | ☐ |
| Foredrag — 3 galleribilleder | Jacob på scene, publikum, backstage | Blanding | ☐ |
| Læringsforløb — preview-billede (servicekortet) | Enkelt billede | Kvadrat/portræt | ☐ |
| Rådgivning — preview-billede | Enkelt billede | Kvadrat/portræt | ☐ |
| Foredrag — preview-billede | Enkelt billede | Kvadrat/portræt | ☐ |

**Minimum til en god fotodag:**
- 3-5 situationsbilleder fra undervisning (gerne med deltagere)
- 3-5 billeder fra et foredrag (fra sal + bag scenen)
- 2-3 rene portrætfotos (neutral baggrund eller kontormiljø)
- 1 bredt hero-foto til de store preview-sektioner

---

### C3 — Projektbilleder

Hvert projekt har 1 hero-billede + 4 galleribilleder.

| Projekt | Hero-billede | 4 galleribilleder | Status |
|---------|-------------|-------------------|--------|
| HK Privat | Fra undervisningsforløbet | Fra forløbet | ☐ |
| Energinet | Fra rådgivningsforløbet | Fra møder/forløb | ☐ |
| ConTech Lab | Fra SMV-træning i byggebranchen | Fra forløbet | ☐ |
| Novo Nordisk | Generisk (hvis ingen projektbilleder) | Generisk | ☐ |
| Grundfos | Generisk (hvis ingen projektbilleder) | Generisk | ☐ |

> **Tip:** Billeder fra LinkedIn-opslag, præsentationer og foredrag kan bruges som erstatning
> hvis der ikke er projektspecifikke fotos til rådighed.

---

### C4 — Testimonial-fotos

Hver anmeldelse viser et lille portræt af anmelderen.

| Anmelder | Status |
|----------|--------|
| Nicolaj Nørgaard Peulicke (Energinet) | ✓ Har foto |
| Christoffer Marckmann (HK Privat) | ✓ Har foto |
| Ole Berard (Molio) | ✓ Har foto |
| Nye anmeldere (A1) | ☐ Indhent LinkedIn-foto eller portræt |

---

## SEKTION D: Hvad er allerede OK

Disse dele kræver ingen handling:

- `mocks/blogs.tsx` — 5 eksperimenter med rigtig dansk indhold
- `templates/HomePage/Main/` — Hero-tekst og CTA
- `templates/HomePage/AboutUs/` — Om-tekst
- `templates/HomePage/Advantages/` — Stats-bokse (20+ år, 500+ foredrag osv.)
- `templates/AboutPage/Story/` — Virksomhedshistorie (Kippenberger-anekdoten)
- `templates/ContactPage/Main/` — Kontaktoplysninger og formular
- `mocks/reviews.tsx` — 3 rigtige anmeldelser (udvides via A1)
- `mocks/companies.tsx` — Klientlogoer

---

## Anbefalet arbejdsrækkefølge

```
FASE 1 — Plan på plads  ✓ DONE
  [x] Opret docs/WEBSITE-PLAN.md i repo
  [x] Push til claude/new-company-website-Ax4Ng

FASE 2 — Tekniske rettelser  ✓ DONE
  [x] Fix mocks/links.tsx — danske kategorier, korrekte tæller-tal
  [x] Fix engelske subtitle-felter i mocks/services.tsx
  [x] Fjern "Udvikling af prototyper" fra services
  [x] Ret kategorier i mocks/projects.tsx (fjern "Udvikling af prototyper")
  [x] Fix URL i Projects-komponent: /projects → /projekter
  [x] Implementér filterfunktionalitet på projekter og eksperimenter-siden

FASE 3 — Strukturelle ændringer  ✓ DONE
  [x] Omskriv team-sektion til "Jacob alene"-sektion (B1)
  [x] Opdater stat-boks: "1000+ Prototyper bygget" → "20.000+ Mennesker undervist"
  [x] Fix billedvisning: next.config.js + Team SASS layout

FASE 4 — Projektindhold (delvist)
  [x] HK Privat — tekst og anmeldelse på plads
  [x] HK Handel — tekst på plads, testimonial mangler
  [ ] Energinet — afventer tekst fra Jacob
  [ ] ConTech Lab — afventer tekst fra Jacob
  [ ] Novo Nordisk — afventer tekst fra Jacob
  [ ] Grundfos — afventer tekst fra Jacob

FASE 5 — Kræver Jacob's input
  [ ] Indsaml yderligere testimonials (A1) → mocks/reviews.tsx
  [ ] HK Handel testimonial — Mette Høgh eller deltager
  [ ] Bekræft bogstatus og opdater tekst (A3)
  [ ] Planlæg og afhold foto/video-session (Sektion C)
  [ ] Indsæt nye billeder og videoer
```

---

## Teknisk reference

- **Framework:** Next.js 13.1.2 med TypeScript
- **Al indhold:** Hardcodet i `/mocks/*.tsx` — ingen CMS, alt redigeres i kode
- **Styling:** SASS modules (`.module.sass`)
- **Udviklingsserver:** `npm run dev`
- **Branch:** `claude/new-company-website-Ax4Ng`

---

## Netlify arkitektur — kendte problemer og anbefalinger

**Nuværende setup:**
- `@netlify/plugin-nextjs` v4.41.6 installeret som Netlify app-plugin (ikke i package.json)
- Seneste version er **5.15.9** — v4 bruger den ustabile IPX-funktion til billedoptimering
- Billeder serveres nu med `images: { unoptimized: true }` i `next.config.js` (omgår IPX)
- Lighthouse Performance-score er **99** med denne konfiguration ✓

**Anbefalet opgradering (valgfri — sitet virker fint som det er):**
1. Gå til **Site settings → Plugins** i Netlify-appen
2. Afinstallér `@netlify/plugin-nextjs` v4
3. Geninstallér fra plugin-biblioteket (installerer automatisk v5)
4. V5 bruger Netlify Edge Functions til billeder og er markant mere stabil
5. Når v5 er installeret kan `images: { unoptimized: true }` fjernes fra `next.config.js`

**Alternativ:** Behold `unoptimized: true` permanent — det virker og giver 99 i Lighthouse.
