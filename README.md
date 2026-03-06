# Portfolio – Abdolhak Staouni

A modern, responsive portfolio website built with **Astro** and deployed on **Vercel**. Featuring real-time analytics, smooth animations, and a professional design optimized for all devices.

**Live Demo:** [portfolio-abdolhak-staouni.vercel.app](https://portfolio-abdolhak-staouni.vercel.app)

---

## 🚀 Features

- **Modern Design** – Dark theme with glassmorphism effects, gradient accents, and smooth animations
- **Fully Responsive** – Mobile, tablet, and desktop optimized
- **Smooth Scroll Reveal** – Elements animate in as you scroll
- **Sticky Navigation** – Auto-highlighting active sections with IntersectionObserver
- **Mobile Hamburger Menu** – Animated menu drawer for mobile devices
- **Contact Form** – Functional contact form via Formspree.co
- **Vercel Analytics** – Track visitor counts, page views, and referrers
- **Social Links** – GitHub, LinkedIn, and email integration
- **Dark Mode** – Professional dark theme with custom CSS variables
- **Performance** – Fast load times and optimized Astro build

---

## 📁 Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Header.astro    # Navigation with hamburger menu
│   ├── Hero.astro      # Hero section with profile & stats
│   ├── About.astro     # About section
│   ├── Skills.astro    # Technical & soft skills
│   ├── Education.astro # Academic journey
│   ├── Projects.astro  # Featured projects grid
│   ├── Contact.astro   # Contact info & form
│   ├── Footer.astro    # Footer with links & credits
│   └── BackToTop.astro # Floating scroll-to-top button
├── data/
│   └── student.ts      # **SINGLE SOURCE OF TRUTH** - All portfolio content
├── layouts/
│   └── Layout.astro    # Main layout with global styles & Vercel Analytics
└── pages/
    └── index.astro     # Home page - assembles all components

public/
├── avatar.jpg          # Profile photo (replace with your image)
└── favicon.svg         # Site favicon

vercel.json            # Vercel configuration with custom URL alias
```

---

## ✏️ How to Customize

### 1. **Update Your Information**

All portfolio content is centralized in **`src/data/student.ts`**. This is the **only file** you need to modify:

```typescript
export const studentData: StudentData = {
  personal: {
    firstName: "Abdolhak",
    lastName: "Staouni Ben Abdellah",
    email: "a.staounibenabdellah@esisa.ac.ma",
    title: "Software Engineering Student",
    subtitle: "AI & Machine Learning Enthusiast",
    bio: "I am a passionate...",
    location: "Fez, Morocco",
  },
  stats: [
    { label: "Projects Completed", value: 5 },
    // Add more stats...
  ],
  skills: {
    technical: [
      {
        category: "AI & Machine Learning",
        icon: "Brain",
        skills: ["Deep Learning", "Machine Learning", ...],
      },
      // Add more categories...
    ],
    // Add soft skills...
  },
  education: [
    {
      degree: "Bachelor's Degree",
      field: "Software Engineering",
      institution: "ESISA",
      // ...
    },
  ],
  projects: [
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio...",
      tags: ["Astro", "TypeScript", "CSS"],
    },
    // Add more projects...
  ],
  social: [
    { platform: "GitHub", url: "https://github.com/...", icon: "Github" },
    // Add more social links...
  ],
};
```

### 2. **Add Your Profile Photo**

1. Replace `public/avatar.jpg` with your photo (recommended: 300x300px, jpg/png)
2. The image automatically appears in the Hero section with a gradient border

### 3. **Update Social Links**

Modify the `social` array in `student.ts` with your actual profile URLs.

### 4. **Customize Styling**

Global styles are in `src/layouts/Layout.astro`:
- **Colors**: Modify CSS custom properties (e.g., `--accent-color`, `--primary-gradient`)
- **Fonts**: Change `--font-sans` and `--font-mono`
- **Spacing**: Adjust `--spacing-*` variables
- **Animations**: Modify keyframes like `pulse`, `drift`, `hueRotate`, etc.

---

## 🛠️ Installation & Development

### Prerequisites
- **Node.js** (v18+)
- **npm** or **yarn**

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/astaounibenabdellah-ux/portfolio.git
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
   Visit [http://localhost:4321](http://localhost:4321) in your browser.

### Available Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Format code (if prettier is configured)
npm run format
```

---

## 📊 Vercel Analytics

The portfolio includes **Vercel Analytics** for tracking:
- **Visitor counts**
- **Page views**
- **Referrers** (where visitors come from)
- **Real-time insights**

Analytics are automatically collected and visible in your Vercel dashboard.

---

## 🚀 Deployment

### Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel automatically detects Astro and configures the build

3. **Custom Domain**
   - In Vercel dashboard → Project Settings → Domains
   - Add your custom domain or use the default `portfolio-abdolhak-staouni.vercel.app`

### Manual Deployment (via Vercel CLI)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

---

## 📝 Customization Tips

### Adding New Sections

1. Create a new component in `src/components/NewSection.astro`
2. Add data to `src/data/student.ts` (if needed)
3. Import and use the component in `src/pages/index.astro`
4. Update navigation in `Header.astro`

### Changing Colors

Edit CSS custom properties in `src/layouts/Layout.astro`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #667eea;
  --bg-primary: #0a0f1e;
  --text-primary: #f0f4f8;
  /* ... more variables ... */
}
```

### Modifying the Contact Form

The contact form uses **Formspree.co** (free tier, up to 50 submissions/month):

1. Visit [formspree.co](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Update the `action` attribute in `src/components/Contact.astro`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 🎨 Styling & Design System

- **Font Stack**: Inter (sans-serif) + JetBrains Mono (monospace)
- **Color Palette**: Dark blue/purple theme with gradient accents
- **Spacing**: Consistent 0.25rem to 4rem scale
- **Shadows**: Subtle to glowing effects
- **Animations**: Smooth transitions (0.3s–3s) with easing functions
- **Responsive Breakpoints**: 768px (mobile) and below

---

## 📱 Browser Support

- Chrome/Chromium (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Feel free to fork, modify, and improve this portfolio template. Contributions and feedback are welcome!

---

## 📧 Support

For questions or issues:
- **Email**: a.staounibenabdellah@esisa.ac.ma
- **GitHub**: [astaounibenabdellah-ux](https://github.com/astaounibenabdellah-ux)
- **LinkedIn**: [LinkedIn Profile](https://linkedin.com/in/abdolhak-staouni)

---

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build) – The web framework for building fast, content-focused websites
- Deployed on [Vercel](https://vercel.com) – The platform for frontend deployment
- Analytics by [Vercel Analytics](https://vercel.com/analytics)
- Form handling by [Formspree](https://formspree.io)

---

**Last Updated**: March 6, 2026  
**Version**: 1.0.0