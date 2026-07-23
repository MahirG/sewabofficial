# Sewab Travel Designers

The site now runs on Next.js using the App Router.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

The original `index.html` remains the visual source during the first migration stage. The Next.js server page extracts its CSS, body markup, and interaction script at build time, so the current design and behavior remain unchanged while the project gains a standard Next.js structure for future component-by-component development.
