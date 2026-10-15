# IWP Project Model — LBL Hosieries

An editorial, scrollytelling web experience built for **LBL Hosieries**, a direct undergarment manufacturer in Tiruppur, Tamil Nadu with over 20 years of textile heritage.

---

## 🌟 Project Highlights

- **Floating Glassmorphic Top Navigation Island**: Floating centered pill navigation with frosted glass (`backdrop-filter: blur(28px) saturate(190%)`), micro-bevel reflections, and responsive mobile adaptation.
- **Editorial Scrollytelling Architecture**: Pinned 100vh visual stage that smoothly crossfades through 6 textile chapters as the user scrolls:
  - `01 • The Field` — Selection of pure Shankar-6 virgin cotton.
  - `02 • The Spindle` — Ring-spun into 30s & 40s super-combed compact yarns.
  - `03 • The Loom` — 28-gauge circular knitting for seamless single-jersey stretch.
  - `04 • The Touch` — Bio-enzyme softening & felt compaction for <3% shrinkage.
  - `05 • The Seam` — Multi-needle flatlock seams and non-roll elastic attachment.
  - `06 • The Garments` — Finished everyday essentials.
- **Curated Collections Lookbook**:
  - High-fashion studio and flatlay photography (excluding packaging boxes).
  - Interactive shade palette swatches with live preview (Biscuit, Coffee, Charcoal Grey, Maroon, Deep Navy).
  - Kids Comfort Bloomers (Sizes 45–75).
  - Ladies Classic Bloomers (Sizes 75–100).
  - Heavy-Gauge Inclusive Cycling Shorts (Sizes S to 6XL).
  - Everyday Soft Panties (Sizes 80–100).
- **Textile Sizing Modal**: Detailed sizing matrix for age, waist inches/cm, and carton packing formats.
- **Tiruppur Mill Heritage Photo Essay**: Integrated showcase of the 25,000 sq. ft facility, Japanese multi-needle machines, and dispatch floors.
- **Wholesale Procurement Desk & Order Estimator**: Real-time calculator calculating master carton requirements, gross shipping weight, and express transit times to wholesale mandis across North India & Pan-India.
- **WhatsApp Integration**: Floating quick-chat desk and pre-filled inquiry triggers with dynamic product specification parameters.

---

## 📐 Technology & Design Stack

- **Semantic HTML5**: Fully accessible with structured schema metadata (`schema.org/Manufacturer`).
- **Vanilla CSS (Design Tokens)**:
  - **Glassmorphism**: Multi-layer frosted glass substrates, specular bevels, and ambient amber glows.
  - **Typography**: Professional typography pairing **Outfit** (architectural modern headings), **Playfair Display** (italic luxury accents), and **Plus Jakarta Sans** (high-clarity body copy).
  - **Colors**: Deep espresso slate (`#0D1017`), unbleached ecru cotton (`#F7F4EE`), and spun amber/raw copper (`#D4A373`).
- **Modular JavaScript**: Lightweight intersection observers, smooth scroll tracking, color swatch swappers, and wholesale calculation engines.

---

## 🚀 Running Locally

To run the project locally on any machine:

```bash
# Using Python
python -m http.server 8080

# Or using Node (npx)
npx serve .
```

Open your browser and navigate to `http://localhost:8080`.

---

## 📁 Repository Structure

```
├── .gitignore
├── README.md
├── index.html              # Main scrollytelling HTML document
├── css/
│   └── style.css           # Design tokens, glassmorphism, scrollytelling CSS
├── js/
│   └── main.js             # Sticky stage transitions, modal logic, calculators
├── public/
│   └── assets/
│       ├── Company-logo.jpeg
│       ├── LOGO/           # Brand vector logos (Joy, MeToo, Nicky, Micky, Perfect)
│       ├── manequin images/ # Real mannequin shade shots
│       ├── non product image/ # Real Tiruppur factory facility photos
│       └── editorial/      # Custom editorial photography (cotton fields, looms, flatlays)
└── idea.txt                # Project specifications and flow-map
```
