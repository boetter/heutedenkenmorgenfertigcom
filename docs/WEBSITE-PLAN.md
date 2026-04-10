# Arbejdsplan: Færdiggørelse af heutedenkenmorgenfertig.com

> Oprettet april 2026. Brug dette dokument som tjekliste og reference i det løbende arbejde med sitet.

## Status i dag — tre overordnede problemer

1. **Alle 5 projektsider har generiske placeholder-tekster** (dansk og engelsk skabelontekst der intet har med forretningen at gøre)
2. **Forretningsprofilen er forældet** — virksomheden er i dag Jacob alene, og fokus er læringsforløb
3. **Mange sektioner bruger generiske billeder og video-placeholders** fra den originale skabelon

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

Alle 5 projekter har i dag identiske placeholder-tekster. Hvert projekt mangler:
- 3 indledende afsnit om projektet i sin helhed
- 4 uddybende detaljer om tilgang og udførelse
- Konkrete resultater (eller fjernelse af resultat-sektionen hvis der ikke er reelle tal)
- En rigtig anmeldelse tilknyttet det specifikke projekt

| Projekt | Hvad mangler | Anmeldelse |
|---------|-------------|------------|
| HK Privat | Beskrivelse af læringsforløbet, hvad deltagerne lærte, hvordan det foregik | Christoffer Marckmann (HK Privat) — findes i reviews.tsx |
| Energinet | Beskrivelse af rådgivningsforløbet 2023-2025, konkrete milepæle | Nicolaj Peulicke (Energinet) — findes i reviews.tsx |
| ConTech Lab | Beskrivelse af SMV-træning i byggebranchen | Ole Berard (Molio) — findes i reviews.tsx |
| Novo Nordisk | Beskrivelse af ekstern rådgivning på digitale produktionsprojekter | Mangler — ny testimonial nødvendig |
| Grundfos | Beskrivelse af AI-rådgivning og startup scouting | Mangler — ny testimonial nødvendig |

> **OBS:** Alle 5 projektsider viser i dag den SAMME anmeldelse fra Energinet — også på HK Privat, ConTech, Novo og Grundfos. Det skal rettes.

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

FASE 2 — Tekniske rettelser (ingen nyt indhold nødvendig)
  [x] Fix mocks/links.tsx — danske kategorier, korrekte tæller-tal
  [x] Fix engelske subtitle-felter i mocks/services.tsx
  [x] Fjern "Udvikling af prototyper" fra services

FASE 3 — Strukturelle ændringer
  [x] Omskriv team-sektion til "Jacob alene"-sektion (B1)
  [x] Opdater stat-boks: "1000+ Prototyper bygget" → "20.000+ Mennesker undervist"
  [ ] Opdater services-tekster til 2025-2026 positionering (B2 — kræver Jacob's godkendelse)

FASE 4 — Kræver Jacob's input (kan ske parallelt med Fase 2-3)
  [ ] Indsaml yderligere testimonials — A1
  [ ] Bekræft bogstatus og opdater tekst — A3
  [ ] Planlæg og afhold foto/video-session — Sektion C
  [ ] Skriv eller godkend projektbeskrivelser — A2

FASE 5 — Indsæt nyt indhold
  [ ] Opdater mocks/projects.tsx med rigtige tekster
  [ ] Tilføj nye testimonials i mocks/reviews.tsx
  [ ] Indsæt nye billeder og videoer
```

---

## Teknisk reference

- **Framework:** Next.js 13.1.2 med TypeScript
- **Al indhold:** Hardcodet i `/mocks/*.tsx` — ingen CMS, alt redigeres i kode
- **Styling:** SASS modules (`.module.sass`)
- **Udviklingsserver:** `npm run dev`
- **Branch:** `claude/new-company-website-Ax4Ng`
