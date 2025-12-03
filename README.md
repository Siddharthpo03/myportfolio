# ✨ Professional Portfolio Website

A stunning, interactive portfolio website with a Star Wars-inspired theme, built with modern web technologies. Features smooth animations, responsive design, and exceptional user experience.

![Portfolio Preview](preview.png)

## 🚀 Live Demo

[View Live Site](https://yourportfolio.com) _(Update with your deployed URL)_

## ✨ Features

- **Stunning Animations**: Smooth transitions using Framer Motion
- **Interactive Starfield**: Dynamic space-themed background
- **Custom Cursor**: Millennium Falcon cursor with particle effects
- **Responsive Design**: Perfect on all devices and screen sizes
- **Loading Sequence**: Immersive hyperspace entrance animation
- **Modern UI**: Glassmorphism effects and neon gradients
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- **Performance**: Lazy loading, optimized assets, fast load times

## 🛠️ Tech Stack

### Frontend

- **React 19** - Latest version with modern features
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Powerful animation library
- **React Icons** - Comprehensive icon library
- **Typed.js** - Typing animation effect

### Styling

- **CSS3** - Custom CSS with modern features
- **CSS Variables** - Easy theming
- **Glassmorphism** - Modern glass-like effects

### Tools

- **ESLint** - Code quality and consistency
- **npm** - Package management

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`

## 🎨 Customization

### Quick Start

See [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) for detailed instructions.

### Essential Updates

1. **Personal Information** (`src/components/Hero.jsx`)

   - Line 81-82: Your name
   - Lines 127-130: Social media links

2. **Projects** (`src/components/Projects.jsx`)

   - Lines 30-115: Replace with your actual projects
   - Update images, descriptions, GitHub links, and demo URLs

3. **Contact Info** (`src/components/Contact.jsx`)

   - Lines 76-89: Email, phone, location
   - Lines 95-107: Social media links

4. **About Section** (`src/components/About.jsx`)

   - Lines 79-111: Your bio and statistics

5. **Skills** (`src/components/Skills.jsx`)

   - Lines 48-103: Update skills and proficiency levels

6. **Meta Tags** (`index.html`)
   - Lines 8-48: Update SEO information and social preview

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── vite.svg
│   └── assets/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Starfield.jsx
│   │   ├── UniverseCursor.jsx
│   │   └── [other components]
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Option 2: Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder

### Option 3: GitHub Pages

1. Install gh-pages:

   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:

   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:

   ```js
   export default defineConfig({
     plugins: [react()],
     base: "/your-repo-name/",
   });
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Unsplash](https://unsplash.com/) for placeholder images

---

**⭐ Star this repo if you found it helpful!**

Made with ❤️ and the Force
