# Amer Hamdan - Personal Portfolio 🚀

A modern, animated, and friendly portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 Modern and beautiful UI with smooth animations
- 📱 Fully responsive design
- ⚡ Fast and optimized with Next.js 14
- 🎭 Framer Motion animations
- 🌙 Dark theme with gradient accents
- 🚀 Easy to deploy to GitHub Pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/amerhamdan3.git
cd amerhamdan3
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Contact Information

Edit `components/Contact.tsx` and update your contact details:

```typescript
const contactMethods = [
  {
    icon: '📧',
    label: 'Email',
    value: 'your.email@example.com',  // Update this
    href: 'mailto:your.email@example.com',  // Update this
    // ...
  },
  // Update other contact methods...
]
```

### Modify Content

- **Hero Section**: Edit `components/Hero.tsx`
- **About Section**: Edit `components/About.tsx`
- **Experience**: Edit `components/Experience.tsx`
- **Skills**: Edit `components/Skills.tsx`
- **Projects**: Edit `components/Projects.tsx`
- **Contact**: Edit `components/Contact.tsx`

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#3b82f6',    // Change primary color
  secondary: '#8b5cf6',  // Change secondary color
  dark: '#0f172a',       // Change background
  light: '#f8fafc',      // Change text color
}
```

## 📦 Deployment to GitHub Pages

1. Update the `basePath` in `next.config.js`:
```javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
```

2. Build and export:
```bash
npm run build
```

3. The static files will be in the `out` directory

4. Push to GitHub and enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select the branch with your `out` folder
   - Your site will be live at `https://yourusername.github.io/your-repo-name`

### Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 🎨 Features to Customize

- Add your own projects and experiences
- Update social media links
- Add or remove skills
- Change color schemes
- Add new sections
- Customize animations

## 📄 License

This project is open source and available for personal use.

## 🐱 Fun Fact

This portfolio was built with love, coffee ☕, and occasional keyboard assistance from a very opinionated cat who insists on cold tap water 🐱💧

---

Made with ❤️ by Amer Hamdan

