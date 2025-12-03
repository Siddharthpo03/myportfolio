# ✅ PRE-DEPLOYMENT CHECKLIST

## 🎯 PERSONALIZATION REQUIRED (Before Going Live)

### 1. Social Media Links (4 locations to update)

#### Hero Section (`src/components/Hero.jsx`)

- [ ] Line 127: Update GitHub URL - `https://github.com/yourusername`
- [ ] Line 128: Update LinkedIn URL - `https://linkedin.com/in/yourusername`
- [ ] Line 129: Update Twitter URL - `https://twitter.com/yourusername`
- [ ] Line 130: Update Email - `mailto:your.email@example.com`

#### Contact Section (`src/components/Contact.jsx`)

- [ ] Line 76: Update Email - `your.email@example.com`
- [ ] Line 77: Update Email link - `mailto:your.email@example.com`
- [ ] Line 82: Update Phone - `+1 (555) 123-4567`
- [ ] Line 83: Update Phone link - `tel:+15551234567`
- [ ] Line 88: Update Location - `Your City, Country`
- [ ] Line 96: Update GitHub URL
- [ ] Line 101: Update LinkedIn URL
- [ ] Line 106: Update Twitter URL
- [ ] Line 134: Update Email link

### 2. Projects Section (`src/components/Projects.jsx`)

**All 6 projects need updating:**

For each project (lines 30-115):

- [ ] Update `title` - Your project name
- [ ] Update `description` - Your project details (2-3 sentences)
- [ ] Update `image` - Your screenshot URL (1200x800px recommended)
- [ ] Update `tags` - Your actual tech stack
- [ ] Update `github` - Your GitHub repository URL
- [ ] Update `demo` - Your live demo URL
- [ ] Update `stars` - Actual GitHub stars (or remove)
- [ ] Update `forks` - Actual GitHub forks (or remove)

### 3. Personal Information

#### Hero Section (`src/components/Hero.jsx`)

- [ ] Line 81-82: Replace "Siddharth Pulugujja" with your name
- [ ] Line 63: Add CV file to `/public` folder
- [ ] Line 63: Update CV download handler with actual file path

#### Meta Tags (`index.html`)

- [ ] Line 9: Update page title with your name
- [ ] Line 11: Update meta title
- [ ] Line 19: Update author name
- [ ] Line 23: Update your portfolio URL
- [ ] Line 27: Update preview image URL
- [ ] Line 30: Update Twitter URL
- [ ] Line 34: Update Twitter preview image

#### Footer (`src/components/Contact.jsx`)

- [ ] Line 238: Replace "Your Name" with your name

### 4. Content Customization (Optional)

#### About Section (`src/components/About.jsx`)

- [ ] Lines 81-96: Customize your bio
- [ ] Lines 99-107: Update statistics (projects, years, clients)

#### Skills Section (`src/components/Skills.jsx`)

- [ ] Lines 48-103: Update skills and proficiency levels

#### Experience Section (`src/components/Experience.jsx`)

- [ ] Lines 36-120: Replace with your actual work history and education

### 5. Assets & Media

- [ ] Add your CV/resume PDF to `/public/resume.pdf`
- [ ] Replace `/public/vite.svg` with your favicon
- [ ] Add preview image for social sharing: `/public/preview.png` (1200x630px)
- [ ] Replace project placeholder images with actual screenshots
- [ ] Optional: Add your logo/brand assets

### 6. Configuration Files

#### `README.md`

- [ ] Line 6: Add your deployed URL
- [ ] Line 148: Update GitHub username
- [ ] Line 186: Update contact information
- [ ] Line 188: Update project link

#### `package.json` (Optional)

- [ ] Update `name` field if desired
- [ ] Update `version` if tracking

### 7. SEO & Analytics (Before Deployment)

- [ ] Update all URLs in `sitemap.xml` with your domain
- [ ] Update URL in `robots.txt` with your domain
- [ ] Sign up for Google Analytics (optional)
- [ ] Sign up for Google Search Console (optional)
- [ ] Create social preview images (1200x630px)

---

## 🚀 DEPLOYMENT STEPS

### Before Deploying:

1. ✅ Complete all items in this checklist
2. ✅ Test locally: `npm run dev`
3. ✅ Build successfully: `npm run build`
4. ✅ Preview build: `npm run preview`
5. ✅ Check all links work
6. ✅ Test on mobile device
7. ✅ Run: `npm run lint` (should be clean)

### Deploy to Vercel:

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy"
7. Wait for deployment
8. Visit your live site! 🎉

### After Deployment:

- [ ] Update all `yourportfolio.com` URLs with actual domain
- [ ] Submit sitemap to Google Search Console
- [ ] Test site on multiple devices
- [ ] Share on social media
- [ ] Add to your resume/CV

---

## 📝 QUICK FIND & REPLACE

Use your editor's find & replace to quickly update:

1. **Find:** `yourusername` → **Replace with:** `your-github-username`
2. **Find:** `your.email@example.com` → **Replace with:** `your@email.com`
3. **Find:** `yourportfolio.com` → **Replace with:** `yourdomain.com`
4. **Find:** `Your Name` → **Replace with:** `Your Actual Name`
5. **Find:** `Your City, Country` → **Replace with:** `Your Location`

---

## ✨ VERIFICATION

After customization, verify:

- [ ] All social links open correctly
- [ ] CV downloads when button clicked
- [ ] Contact form email goes to you
- [ ] All project links work
- [ ] Mobile responsive
- [ ] No console errors
- [ ] All images load
- [ ] Lighthouse score > 90

---

## 🎊 YOU'RE ALMOST THERE!

Only personalization left. All technical issues are fixed. Your portfolio is production-ready!

**Estimated time to complete checklist: 30-60 minutes**

Good luck! 🚀
