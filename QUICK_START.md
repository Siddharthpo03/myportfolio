# 🎯 QUICK CUSTOMIZATION GUIDE

## ⚡ Must Update (Replace Placeholder Text)

### 1. Hero Section

**File:** `src/components/Hero.jsx`

- Line ~44: Replace "Your Name" with your actual name
- Lines ~90-94: Update social media URLs
  ```jsx
  { Icon: FaGithub, href: 'https://github.com/YOUR_USERNAME' },
  { Icon: FaLinkedin, href: 'https://linkedin.com/in/YOUR_USERNAME' },
  { Icon: FaTwitter, href: 'https://twitter.com/YOUR_USERNAME' },
  { Icon: FaEnvelope, href: 'mailto:YOUR_EMAIL@example.com' },
  ```

### 2. Contact Section

**File:** `src/components/Contact.jsx`

- Lines ~57-71: Update contact information

  ```jsx
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'your.email@example.com',  // ← Change this
    link: 'mailto:your.email@example.com',  // ← Change this
  },
  {
    icon: <FaPhone />,
    title: 'Phone',
    value: '+1 (555) 123-4567',  // ← Change this
    link: 'tel:+15551234567',  // ← Change this
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    value: 'Your City, Country',  // ← Change this
  },
  ```

- Lines ~75-78: Update social links
  ```jsx
  { icon: <FaGithub />, href: 'https://github.com/YOUR_USERNAME' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/YOUR_USERNAME' },
  { icon: <FaTwitter />, href: 'https://twitter.com/YOUR_USERNAME' },
  ```

### 3. Projects Section

**File:** `src/components/Projects.jsx`

- Lines ~30-84: Replace ALL 6 projects with your actual projects
- For each project, update:
  - `title`: Your project name
  - `description`: What the project does
  - `image`: Project screenshot URL or path
  - `tags`: Technologies used
  - `github`: Your GitHub repository URL
  - `demo`: Live demo URL

### 4. About Section

**File:** `src/components/About.jsx`

- Lines ~71-85: Customize the about text
- Lines ~88-100: Update your statistics

### 5. Skills Section

**File:** `src/components/Skills.jsx`

- Lines ~39-65: Update skills, levels, and add/remove as needed

### 6. Experience Section

**File:** `src/components/Experience.jsx`

- Lines ~36-82: Replace with your actual work experience and education

### 7. Page Title

**File:** `index.html`

- Line ~8: Change page title and description

---

## 🎨 Quick Color Changes

**File:** `src/App.css` (Lines 8-12)

```css
:root {
  --primary: #6366f1; /* Main brand color */
  --secondary: #ec4899; /* Accent color */
  --accent: #14b8a6; /* Highlight color */
}
```

**Popular Color Schemes:**

**Purple & Pink** (Current)

```css
--primary: #6366f1;
--secondary: #ec4899;
--accent: #14b8a6;
```

**Blue & Cyan**

```css
--primary: #3b82f6;
--secondary: #06b6d4;
--accent: #8b5cf6;
```

**Green & Emerald**

```css
--primary: #10b981;
--secondary: #059669;
--accent: #34d399;
```

**Orange & Red**

```css
--primary: #f97316;
--secondary: #ef4444;
--accent: #fb923c;
```

---

## 📸 Adding Your Project Images

### Option 1: Use Online Images (Easiest)

1. Upload your screenshots to [Imgur](https://imgur.com) or [Cloudinary](https://cloudinary.com)
2. Copy the image URL
3. Replace in `src/components/Projects.jsx`:
   ```jsx
   image: 'https://your-image-url.com/screenshot.png',
   ```

### Option 2: Use Local Images

1. Add images to `public/projects/` folder
2. Update path in `src/components/Projects.jsx`:
   ```jsx
   image: '/projects/my-project.png',
   ```

---

## 🚀 Testing Your Changes

1. Save all files
2. Browser should auto-reload
3. Check each section scrolling down the page
4. Test on mobile (right-click → Inspect → Toggle device toolbar)

---

## ✅ Checklist Before Deployment

- [ ] Changed "Your Name" in Hero
- [ ] Updated all social media links
- [ ] Added your email and contact info
- [ ] Replaced all 6 projects with yours
- [ ] Updated skills to match yours
- [ ] Added your work experience
- [ ] Changed about text
- [ ] Updated page title in index.html
- [ ] Added your project images
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] All links work correctly

---

## 🐛 Common Issues & Fixes

**Images not showing?**

- Check the image URL is correct
- Make sure image is publicly accessible
- Try using https:// URLs instead of http://

**Animations laggy?**

- Reduce number of particles in ParticlesBackground.jsx (line 41)
- Disable custom cursor on slower devices

**Page loads slowly?**

- Optimize your project images (use compressed JPG/PNG)
- Run `npm run build` for production version

---

## 🎓 Learning Resources

**React:** https://react.dev/learn
**Framer Motion:** https://www.framer.com/motion/
**CSS Gradients:** https://cssgradient.io/
**Icons:** https://react-icons.github.io/react-icons/

---

**Need Help?** Check PORTFOLIO_README.md for detailed documentation!
