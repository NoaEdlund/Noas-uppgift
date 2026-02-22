# Produktlista – Tillgänglighet & LCP-optimering

## 📌 Översikt

Detta projekt är en optimerad version av en befintlig produktsida.  
Syftet var att förbättra:

- Tillgänglighet enligt WCAG 2.1 AA
- Largest Contentful Paint (LCP)
- Upplevd prestanda (perceived performance)
- Semantisk HTML-struktur
- Automatiserad testning med axe-core

Alla förbättringar har genomförts inom befintlig projektstruktur:
- index.html
- styles.css
- script.js

---

## ♿ Tillgänglighetsförbättringar

- Införde semantiska element (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Endast ett `<h1>` i dokumentet
- Lade till beskrivande `alt`-texter
- Ersatte klickbara `<div>` med `<button>`
- Införde korrekta `<label>`-element i formulär
- Lade till `lang="sv"`
- Tog bort `outline: none`
- Implementerade `:focus-visible`
- Förbättrade färgkontrast till WCAG AA-nivå
- Lade till `required` i formulär

Testning genomfördes med axe-core.

Slutresultat:  
✅ 0 tillgänglighetsfel

---

## 🚀 LCP-optimering

### Före optimering
- Hero-bild: 5184 × 3456 px (2,24 MB)
- LCP (Slow 3G): 26 sekunder

### Genomförda åtgärder
- Nedskalning till 1200 px
- Komprimering till 183 KB (92% reducering)
- `fetchpriority="high"`
- `loading="lazy"` på bilder under folden
- `defer` på script
- Borttagning av blockerande JavaScript
- Satta `width` och `height` på bilder

### Efter optimering
- LCP (Slow 3G): 4,15 sekunder
- ≈ 84% förbättring

---

## 🧪 Testning

Test genomfördes i:
- Microsoft Edge
- Mozilla Firefox

Förbättringarna var konsekventa i båda webbläsarna.

---

## 🎯 Resultat

Sidan uppfyller WCAG 2.1 AA och har avsevärt förbättrad prestanda, särskilt på långsamma nätverk.
