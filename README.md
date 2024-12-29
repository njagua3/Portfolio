# Modern Portfolio Website

A professional, responsive portfolio website built with React and Tailwind CSS, featuring dark mode support and smooth animations.

## 🚀 Features

- Modern, responsive design optimized for all devices
- Dark/Light mode with system preference detection
- Smooth scroll animations and transitions
- Contact form with validation
- Social media integration
- SEO optimized
- Accessible (WCAG compliant)
- Scroll to top functionality
- Loading animations
- Form validation

## 🛠️ Tech Stack

- React 18
- Tailwind CSS
- Lucide React Icons
- Vite

## 📦 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🔧 Configuration

Update your personal information in the following files:

- `src/data/personalInfo.js` - Personal details and social links
- `src/data/projects.js` - Portfolio projects
- `src/data/skills.js` - Technical skills
- `src/data/experience.js` - Work experience

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Laptops (1024px+)
- Desktops (1280px+)

## 🎨 Customization

- Modify colors in `tailwind.config.js`
- Update dark mode styles
- Customize component styles in their respective files

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/     # Layout components
│   ├── sections/   # Main page sections
│   └── ui/         # Reusable UI components
├── contexts/       # React contexts
├── data/          # Content data
├── hooks/         # Custom hooks
└── utils/         # Utility functions
```

## 🔒 Security

- Input sanitization
- Form validation
- Secure external links
- XSS protection

## 🌐 SEO

- Semantic HTML
- Meta tags
- Open Graph tags
- Proper heading hierarchy
- Image alt texts