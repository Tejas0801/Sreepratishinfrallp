# Sree Pratish Infra LLP - Corporate Website

A modern, responsive, production-ready corporate website showcasing real estate development services, projects, and investor information.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 1024px, 1440px
- **Dynamic Content**: Projects, blog posts, and team data loaded from JSON files
- **SEO Optimized**: Semantic HTML, meta tags, Open Graph tags, and JSON-LD structured data
- **Accessible**: ARIA roles, keyboard navigation, semantic HTML5 elements
- **Performance**: Lazy loading, optimized images, smooth animations
- **Modern Stack**: React, TypeScript, Tailwind CSS, Vite

## 📋 Pages

1. **Home** - Hero section, spotlight cards, animated counters, trust bar, featured projects
2. **About** - Company intro, vision/mission, values, timeline, team preview
3. **Projects** - Filterable grid with dynamic data, search functionality, modal quick-view
4. **Services** - Service cards, development process, CTA sections
5. **Investor** - Investment highlights, case studies, legal process, investment journey
6. **Blog** - Filterable blog posts, search, category filters
7. **Contact** - Contact form with validation, office info, FAQ section

## 🎨 Design System

### Brand Colors
- **Primary (Terracotta)**: `#9b3411` - Main brand color for CTAs and accents
- **Secondary (Beige)**: `#e8deb3` - Soft backgrounds and cards
- All colors defined as HSL values in `src/index.css`

### Typography
- **Headings**: Playfair Display (serif) - loaded from Google Fonts
- **Body**: Inter (sans-serif) - loaded from Google Fonts
- Configuration in `tailwind.config.ts` and `index.html`

### Animations
- Fade in, slide up, scale in animations
- Hover lift effects on cards
- Animated counters on home page
- Smooth transitions throughout

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-directory>

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/           # Images and static assets (imported as ES6 modules)
├── components/       # Reusable React components
│   ├── ui/          # shadcn/ui components
│   ├── Navbar.tsx   # Navigation component
│   └── Footer.tsx   # Footer component
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   ├── Investor.tsx
│   ├── Blog.tsx
│   └── Contact.tsx
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── index.css        # Global styles & design tokens
└── App.tsx          # Main application component

public/
├── data/            # JSON data files
│   ├── projects.json
│   ├── posts.json
│   └── team.json
└── assets/          # Static files (PDFs, images for direct reference)
```

## 📊 Data Models

### Projects (`public/data/projects.json`)

```json
{
  "id": "sp-horizon-001",
  "title": "Horizon Greens",
  "category": "Horizons",
  "type": "Plotted Land",
  "location": "Visakhapatnam, AP",
  "status": "Upcoming",
  "priceRange": "₹12L - ₹35L",
  "images": ["/assets/projects/horizon-1.jpg"],
  "areaAcres": 25.4,
  "amenities": ["Roads", "Drainage", "Security"],
  "documents": [{ "label": "Title Report", "url": "/assets/docs/title.pdf" }],
  "summary": "Project description",
  "postedAt": "2024-09-10"
}
```

### Blog Posts (`public/data/posts.json`)

```json
{
  "id": "post-001",
  "title": "Article Title",
  "slug": "article-slug",
  "excerpt": "Short description",
  "content": "Full article content",
  "author": "Author Name",
  "date": "2024-10-10",
  "category": "Investment",
  "image": "/assets/blog/blog-1.jpg"
}
```

### Team (`public/data/team.json`)

```json
{
  "id": "team-001",
  "name": "Name",
  "role": "Position",
  "bio": "Short biography",
  "image": "/assets/team/team-1.jpg"
}
```

## 🎨 Customization

### Changing Brand Colors

Edit `src/index.css`:

```css
:root {
  /* Update these HSL values */
  --primary: 16 77% 34%;      /* Terracotta */
  --secondary: 42 54% 82%;    /* Beige */
}
```

### Updating Fonts

1. Edit `index.html` to change Google Fonts link
2. Update `tailwind.config.ts`:

```typescript
fontFamily: {
  'serif': ['Your Serif Font', 'serif'],
  'sans': ['Your Sans Font', 'sans-serif'],
}
```

### Adding New Assets

**For React components (recommended):**
- Place in `src/assets/`
- Import as: `import image from "@/assets/image.jpg"`

**For direct references (CSS, HTML):**
- Place in `public/images/` or `public/assets/`
- Reference as: `/images/image.jpg`

## 📝 API Endpoints (Optional Integration)

The contact form is currently mocked. To integrate with a backend:

**Contact Form Submission:**
```
POST /api/enquiry
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "phone": "string",
  "enquiryType": "sales|investor|careers|others",
  "message": "string"
}
```

**Newsletter Signup:**
```
POST /api/newsletter
Content-Type: application/json

{
  "email": "string"
}
```

## ✅ Accessibility & SEO Checklist

### Accessibility
- ✅ Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- ✅ ARIA roles for dynamic components (modals, carousels)
- ✅ Keyboard navigation (Tab, Esc keys)
- ✅ Color contrast meets WCAG AA standards
- ✅ All images have descriptive alt attributes
- ✅ Form labels properly associated with inputs

### SEO
- ✅ Proper meta tags (title, description, author)
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data for organization
- ✅ Semantic heading hierarchy (single H1 per page)
- ✅ Descriptive URLs and internal linking
- ✅ Mobile-responsive design
- ✅ Fast loading times

## 🔧 Environment Variables

Currently no environment variables required. For production deployment with backend:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_MAPS_API_KEY=your-google-maps-key
```

## 📦 Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)

```bash
npm run build
# Deploy the 'dist' folder
```

### With Custom Domain

1. Build the project
2. Upload `dist` folder to your hosting
3. Configure DNS settings to point to your host
4. Update meta tags and sitemap with your domain

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

© 2024 Sree Pratish Infra LLP. All rights reserved.

## 🤝 Support

For questions or support, contact:
- Email: info@sreepratishinfra.com
- Phone: +91 XXX XXX XXXX

## 🔄 Future Enhancements

- [ ] Headless CMS integration (Contentful/Netlify CMS)
- [ ] Multi-language support
- [ ] Advanced image optimization (WebP)
- [ ] Server-side rendering (Next.js migration)
- [ ] Admin dashboard for content management
- [ ] Payment gateway integration for bookings
- [ ] Virtual property tours (360° images)
- [ ] Live chat support integration
