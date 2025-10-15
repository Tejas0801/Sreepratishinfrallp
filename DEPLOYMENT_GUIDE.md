# Deployment Guide - Sree Pratish Infra Website

## Pre-Deployment Checklist

### 1. Content Updates

Before deploying, update these placeholder values:

#### Contact Information
- [ ] Update phone number in `src/components/Footer.tsx` (line 42)
- [ ] Update email in `src/components/Footer.tsx` (line 47)
- [ ] Update address in `src/components/Footer.tsx` (line 38)
- [ ] Update contact info in `src/pages/Contact.tsx` (lines 29-31)

#### Social Media Links
- [ ] Add Facebook URL in `src/components/Footer.tsx` (line 53)
- [ ] Add Instagram URL in `src/components/Footer.tsx` (line 58)
- [ ] Add LinkedIn URL in `src/components/Footer.tsx` (line 63)

#### Logo & Branding
- [ ] Replace placeholder logo with actual company logo
- [ ] Add favicon.ico in `public/` folder
- [ ] Generate and add og-image.jpg for social media sharing
- [ ] Update meta image in `index.html` (line 13)

#### Company Documents
- [ ] Add actual project images in `public/assets/projects/`
- [ ] Add legal documents (PDFs) in `public/assets/docs/`
- [ ] Add team member photos in `public/assets/team/`
- [ ] Add blog post images in `public/assets/blog/`
- [ ] Add company profile PDF for download

#### JSON Data Files
- [ ] Update `public/data/projects.json` with real project data
- [ ] Update `public/data/posts.json` with actual blog posts
- [ ] Update `public/data/team.json` with real team information

### 2. API Integration

If connecting to a backend:

```typescript
// Create .env file
VITE_API_URL=https://api.yourdomain.com
VITE_GOOGLE_MAPS_KEY=your_key_here
```

Update form submissions in:
- `src/pages/Contact.tsx` (contact form)
- `src/components/Footer.tsx` (newsletter signup)

### 3. Google Maps Integration

To add interactive map in Contact page:

```bash
npm install @googlemaps/react-wrapper
```

Update `src/pages/Contact.tsx` to replace the placeholder map div.

### 4. SEO Configuration

Update `index.html`:
```html
<!-- Update canonical URL -->
<link rel="canonical" href="https://yourdomain.com" />

<!-- Update site name -->
<meta property="og:site_name" content="Sree Pratish Infra LLP" />

<!-- Add Twitter handle if available -->
<meta name="twitter:site" content="@yourhandle" />
```

Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Add all pages -->
</urlset>
```

## Deployment Options

### Option 1: Netlify (Recommended)

1. **Setup**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

3. **Or via Netlify UI**
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Configure Custom Domain**
   - Go to Domain Settings
   - Add your domain
   - Update DNS records as instructed

### Option 2: Vercel

1. **Deploy via Vercel CLI**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Or via Vercel Dashboard**
   - Import Git repository
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Update vite.config.ts** for GitHub Pages:
   ```typescript
   export default defineConfig({
     base: '/repo-name/',
     // ... rest of config
   });
   ```

### Option 4: Traditional Hosting (cPanel, etc.)

1. **Build**
   ```bash
   npm run build
   ```

2. **Upload**
   - FTP/SFTP the entire `dist` folder contents to `public_html/`
   - Or use cPanel File Manager

3. **.htaccess for React Router**
   Create `.htaccess` in root:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## Post-Deployment Tasks

### 1. Performance Optimization

- [ ] Enable Gzip/Brotli compression on server
- [ ] Configure CDN (Cloudflare recommended)
- [ ] Enable HTTP/2
- [ ] Set up caching headers

### 2. Monitoring & Analytics

**Google Analytics**
```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Facebook Pixel** (if needed)
```html
<!-- Add to index.html <head> -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### 3. SEO Verification

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify structured data with Google Rich Results Test
- [ ] Test mobile-friendliness with Google Mobile-Friendly Test
- [ ] Check page speed with Google PageSpeed Insights

### 4. Security

- [ ] Enable HTTPS (SSL certificate)
- [ ] Configure security headers:
  ```
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  ```
- [ ] Set up CORS if using API
- [ ] Regular dependency updates: `npm audit fix`

### 5. Backup & Version Control

- [ ] Set up automated backups
- [ ] Tag release versions in Git
- [ ] Document deployment process for team

## Environment-Specific Configurations

### Development
```bash
npm run dev
# Runs on http://localhost:8080
```

### Staging
```bash
npm run build -- --mode staging
# Create staging environment variables in .env.staging
```

### Production
```bash
npm run build
# Uses .env.production if present
```

## Troubleshooting

### White Screen After Deployment
- Check browser console for errors
- Verify base URL in `vite.config.ts`
- Ensure all assets are correctly referenced
- Check .htaccess for correct routing rules

### 404 on Page Refresh
- Add server-side routing configuration
- For Netlify: Create `public/_redirects`:
  ```
  /*    /index.html   200
  ```

### Images Not Loading
- Verify image paths (use `/assets/` for public folder)
- Check if build process includes all assets
- Confirm CORS settings if images from external CDN

### Form Submissions Failing
- Check API endpoint URLs
- Verify CORS configuration on backend
- Ensure HTTPS for production API calls
- Check browser console for specific errors

## Maintenance Schedule

- **Daily**: Monitor analytics and error logs
- **Weekly**: Check contact form submissions
- **Monthly**: Update dependencies, review security patches
- **Quarterly**: Content refresh, project portfolio update
- **Yearly**: SSL certificate renewal, full security audit

## Support Contacts

For deployment issues:
- Technical Support: tech@sreepratishinfra.com
- Emergency Contact: +91 XXX XXX XXXX

## Rollback Procedure

If issues occur after deployment:

1. **Quick Rollback**
   ```bash
   # For Netlify
   netlify rollback
   
   # For Vercel  
   vercel rollback
   ```

2. **Manual Rollback**
   - Deploy previous Git commit
   - Restore database backup if applicable
   - Clear CDN cache

## Testing Checklist

Before marking deployment as complete:

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Forms submit successfully
- [ ] Images display properly
- [ ] Responsive design works on mobile/tablet
- [ ] No console errors
- [ ] Page load times < 3 seconds
- [ ] Contact information is correct
- [ ] Social media links work
- [ ] Download links function
- [ ] Analytics tracking works
- [ ] SEO meta tags present on all pages

---

**Deployed Successfully?** Update this guide with your specific deployment steps and configurations for future reference.
