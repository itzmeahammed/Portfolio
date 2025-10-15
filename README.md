# 🚀 3D Animated Portfolio

A stunning, interactive portfolio website built with React, Three.js, and Tailwind CSS featuring 3D models, smooth animations, and a clean dual-theme design.

## ✨ Features

- **3D Interactive Elements**: Immersive 3D models and animations using React Three Fiber
- **Smooth Animations**: Flying cards, scroll-triggered animations, and page transitions with Framer Motion
- **Custom Cursor**: Interactive cursor with magnetic effects and hover states
- **Dual Theme**: Clean light/dark mode with smooth transitions
- **Responsive Design**: Fully responsive across all devices
- **Modern Tech Stack**: Built with React, TypeScript, Vite, and Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS

### 3D & Animation
- Three.js / React Three Fiber
- @react-three/drei
- Framer Motion
- GSAP

### State Management & Routing
- Zustand
- React Router DOM

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-3d.git
cd portfolio-3d
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🎨 Customization

### Update Personal Information
Edit the following files to add your personal details:
- `src/pages/Home.jsx` - Update name and tagline
- `src/pages/About.jsx` - Add your bio and experience
- `src/pages/Projects.jsx` - Add your projects
- `src/pages/Contact.jsx` - Update contact information

### Theme Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  light: {
    bg: '#FFFFFF',
    text: '#111111',
    // ... other colors
  },
  dark: {
    bg: '#0A0A0A', 
    text: '#EAEAEA',
    // ... other colors
  }
}
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroModel.jsx
│   │   │   ├── SkillIcon3D.jsx
│   │   │   └── ParticleField.jsx
│   │   ├── Layout.jsx
│   │   └── ProjectCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   └── useCustomCursor.js
│   ├── store/
│   │   └── themeStore.js
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## 🚀 Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 👨‍💻 Author

Your Name - Full Stack Developer

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
