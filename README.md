# Ethnic Boutique - React Vite Project

A beautiful, modern website for an ethnic clothing boutique built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🏠 **Home Page**: Hero section, features, latest designs, testimonials, and more
- 📖 **About Page**: Company story, values, team, and why choose us
- 📞 **Contact Page**: Contact form, location map, and FAQ
- 🖼️ **Gallery Page**: Image gallery with category filtering
- 👗 **Collection Pages**: Dynamic collection pages for different categories
  - Western
  - Indo Western
  - Bridal Blouse
  - Salwar
  - Kids
  - Lehenga
  - Pattu Pavada
  - Ready to Wear Sarees

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library

## Installation

1. Navigate to the project directory:
```bash
cd ethnic-boutique
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
ethnic-boutique/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   └── Collection.jsx
│   ├── assets/         # Images and other assets
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Key Features & Animations

### Animations
- Smooth scroll animations using Framer Motion
- Hover effects on cards and buttons
- Page transitions
- Stagger animations for lists
- Filter animations in gallery

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Responsive grid layouts
- Touch-friendly interactions

### Design Elements
- Gradient backgrounds
- Glassmorphism effects
- Custom scrollbar
- Smooth transitions
- Modern card designs

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: '#2D2D2D',
  secondary: '#FFB6C1',
  accent: '#FFC0CB',
}
```

### Fonts
The project uses:
- **Playfair Display** for headings (serif)
- **Inter** for body text (sans-serif)

Change fonts in `index.html` or `tailwind.config.js`

### Images
Replace placeholder images with your own in the respective page components.

## Pages Overview

### Home
- Hero section with call-to-action
- Features/Services section
- Latest designs showcase
- Ethnic essence section
- How we work process
- Aari work section
- Image gallery preview
- Newsletter subscription
- Customer testimonials
- Contact information

### About
- Company story
- Core values
- Why choose us
- Meet the team
- Call-to-action

### Gallery
- Filterable image gallery
- Categories: All, Sarees, Lehenga, Bridal, Blouse, Salwar, Kids
- Smooth filter animations
- Hover effects on images

### Collection
- Dynamic collection pages
- Product grid with hover effects
- Category-specific content
- Enquiry buttons
- Features section

### Contact
- Contact form
- Contact information cards
- Google Maps integration
- FAQ section
- Working hours

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes.

## Credits

- Images: Unsplash
- Icons: Lucide React
- Animations: Framer Motion
