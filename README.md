# Het Anghan — Full-Stack Portfolio

A clean, modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS v4**.

![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Features

- 🔍 **Search** projects by title, description, or tech stack
- 🏷️ **Filter** projects by category
- 📱 **Responsive** design (mobile, tablet, desktop)
- 🎨 **Modern UI** — soft shadows, gradient accents, smooth animations
- ♿ **Accessible** buttons and semantic HTML
- ⚡ **Fast** — static site, no backend required
- 🚀 **Deploy-ready** for Vercel

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed navbar with glass effect
│   │   ├── Hero.jsx          # Hero section with CTAs
│   │   ├── Controls.jsx      # Search bar + category filter
│   │   ├── ProjectCard.jsx   # Individual project card
│   │   ├── ProjectsGrid.jsx  # Responsive grid + empty state
│   │   └── Footer.jsx        # Footer with branding
│   ├── data/
│   │   └── projects.js       # Project data + categories
│   ├── App.jsx               # Main app with state management
│   ├── main.jsx              # React entry point
│   └── index.css             # Tailwind CSS + custom design tokens
├── index.html                # HTML shell with SEO meta tags
├── vite.config.js            # Vite + React + Tailwind plugins
├── vercel.json               # Vercel deployment config
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ installed
- **npm** 9+ installed

### Install & Run Locally

```bash
# Clone the repository
git clone https://github.com/hetanghan12/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deploy on Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration (Recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Vite — click **"Deploy"**
6. Your site will be live at `https://your-project.vercel.app`

---

## 🎨 Customization

### Update Project Data

Edit `src/data/projects.js` to add, remove, or modify projects.

### Update Links

- **GitHub & LinkedIn**: Update URLs in `Navbar.jsx`, `Hero.jsx`, and `Footer.jsx`
- **Project repos/live links**: Update in `src/data/projects.js`

### Change Colors

Modify the design tokens in `src/index.css` under the `@theme` block.

---

## 📄 License

© Het Anghan. Built with precision and passion.
