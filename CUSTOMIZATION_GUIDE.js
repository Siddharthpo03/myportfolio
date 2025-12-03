// ============================================
// PORTFOLIO CUSTOMIZATION CHECKLIST
// ============================================
// Follow this step-by-step guide to personalize your portfolio

/* 
   STEP 1: HERO SECTION - src/components/Hero.jsx
   ------------------------------------------------
*/
// Line 44: Replace with YOUR name
// <span className="gradient-text">Your Name</span>
// Change to:
// <span className="gradient-text">John Doe</span>

// Line 48-52: Update your title/role
<h2 className="hero-title">
  Full Stack Developer
</h2>
// You can change to: Web Developer, UI/UX Designer, etc.

// Lines 56-58: Customize your tagline
<motion.p className="hero-description" variants={itemVariants}>
  I craft exceptional digital experiences with modern technologies.
  <br />
  Passionate about creating innovative solutions that make a difference.
</motion.p>

// Lines 90-94: Update social media links
{ Icon: FaGithub, href: 'https://github.com/yourusername' },      // ← YOUR GitHub
{ Icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername' }, // ← YOUR LinkedIn
{ Icon: FaTwitter, href: 'https://twitter.com/yourusername' },      // ← YOUR Twitter
{ Icon: FaEnvelope, href: 'mailto:your.email@example.com' },        // ← YOUR Email

/* 
   STEP 2: ABOUT SECTION - src/components/About.jsx
   ------------------------------------------------
*/
// Lines 71-85: Customize your bio
<h3 className="about-heading">
  I'm a passionate developer who loves creating amazing web experiences
</h3>
<p>
  With a strong foundation in modern web technologies... [YOUR STORY]
</p>

// Lines 88-100: Update your statistics
<div className="stat">
  <h4 className="gradient-text">50+</h4>  // ← Your project count
  <p>Projects Completed</p>
</div>
<div className="stat">
  <h4 className="gradient-text">3+</h4>   // ← Your experience years
  <p>Years Experience</p>
</div>

/* 
   STEP 3: SKILLS SECTION - src/components/Skills.jsx
   ------------------------------------------------
*/
// Lines 39-65: Update skills and proficiency levels
{
  title: 'Frontend',
  skills: [
    { name: 'React', icon: <FaReact />, color: '#61DAFB', level: 95 }, // ← Your level
    // Add or remove skills as needed
  ],
}

/* 
   STEP 4: PROJECTS SECTION - src/components/Projects.jsx
   ------------------------------------------------
*/
// Lines 30-84: Replace with YOUR projects
{
  title: 'E-Commerce Platform',              // ← Your project name
  description: 'A full-stack e-commerce...', // ← Your description
  image: 'https://...',                       // ← Your screenshot
  tags: ['React', 'Node.js', 'MongoDB'],     // ← Your tech stack
  github: 'https://github.com/you/project',  // ← Your repo
  demo: 'https://demo-link.com',             // ← Your live site
}

/* 
   STEP 5: EXPERIENCE SECTION - src/components/Experience.jsx
   ------------------------------------------------
*/
// Lines 36-82: Add your work history
{
  type: 'work',                              // 'work' or 'education'
  title: 'Senior Full Stack Developer',     // ← Your job title
  company: 'Tech Innovations Inc.',          // ← Company name
  period: '2022 - Present',                  // ← Time period
  description: 'Leading development of...', // ← Your description
  achievements: [
    'Improved application performance by 40%', // ← Your achievements
  ],
}

/* 
   STEP 6: CONTACT SECTION - src/components/Contact.jsx
   ------------------------------------------------
*/
// Lines 57-71: Update contact information
{
  icon: <FaEnvelope />,
  title: 'Email',
  value: 'your.email@example.com',          // ← YOUR email
  link: 'mailto:your.email@example.com',    // ← YOUR email
},
{
  icon: <FaPhone />,
  title: 'Phone',
  value: '+1 (555) 123-4567',               // ← YOUR phone
  link: 'tel:+15551234567',                 // ← YOUR phone
},
{
  icon: <FaMapMarkerAlt />,
  title: 'Location',
  value: 'Your City, Country',              // ← YOUR location
}

// Lines 75-78: Update social links (again)
{ icon: <FaGithub />, href: 'https://github.com/yourusername' },
{ icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourusername' },
{ icon: <FaTwitter />, href: 'https://twitter.com/yourusername' },

/* 
   STEP 7: PAGE METADATA - index.html
   ------------------------------------------------
*/
// Line 8: Update page title and description
<title>My Portfolio | Full Stack Developer</title>
<meta name="description" content="Professional portfolio..." />

/* 
   STEP 8: COLORS (OPTIONAL) - src/App.css
   ------------------------------------------------
*/
// Lines 8-12: Change color scheme
:root {
  --primary: #6366f1;    // Main color (buttons, accents)
  --secondary: #ec4899;  // Secondary color (gradients)
  --accent: #14b8a6;     // Highlight color
}

/* 
   ============================================
   DEPLOYMENT STEPS
   ============================================
*/

// OPTION 1: Vercel (Easiest)
// 1. Push code to GitHub
// 2. Go to vercel.com
// 3. Import your repository
// 4. Click Deploy!

// OPTION 2: Netlify
// 1. Run: npm run build
// 2. Go to netlify.com
// 3. Drag & drop 'dist' folder

// OPTION 3: GitHub Pages
// 1. Run: npm install -D gh-pages
// 2. Add to package.json scripts:
//    "deploy": "npm run build && gh-pages -d dist"
// 3. Run: npm run deploy

/* 
   ============================================
   FINAL CHECKLIST
   ============================================
*/
// [ ] Changed name in Hero section
// [ ] Updated all social media links (appears 2x)
// [ ] Added email, phone, location
// [ ] Replaced all 6 projects
// [ ] Updated skills to match yours
// [ ] Added work experience & education
// [ ] Customized about text
// [ ] Changed page title
// [ ] Added project screenshots
// [ ] Tested on desktop & mobile
// [ ] All links working
// [ ] Ready to deploy!

/* 
   ============================================
   PRO TIPS
   ============================================
*/
// 1. Use high-quality project screenshots (1200x800px recommended)
// 2. Keep descriptions concise (2-3 sentences max)
// 3. Use action verbs in experience section
// 4. Link to live demos when possible
// 5. Add Google Analytics after deployment
// 6. Update regularly with new projects

// GOOD LUCK! 🚀
