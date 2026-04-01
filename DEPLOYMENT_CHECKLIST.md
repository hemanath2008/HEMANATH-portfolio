# Portfolio Deployment Checklist

Complete this checklist before deploying to GitHub Pages.

## Pre-Deployment Setup

### 1. Asset Files
- [ ] Add `profile.jpg` (300x300px recommended) to the root directory
- [ ] Add `resume.pdf` to the root directory
- [ ] Test profile image displays correctly in browser
- [ ] Ensure resume PDF is readable and up-to-date

### 2. Content Customization
- [ ] Verify all personal information is correct in `index.html`
- [ ] Check all social media links are correct (GitHub, LinkedIn, Email)
- [ ] Verify phone number is correct (+91 9444818643)
- [ ] Update email address if different
- [ ] Review all project descriptions and links
- [ ] Ensure all tech stack badges are accurate

### 3. Email Configuration (Optional but Recommended)
- [ ] Create EmailJS account at https://www.emailjs.com
- [ ] Set up email service (Gmail/Outlook/Custom SMTP)
- [ ] Create email template with variables: {{from_name}}, {{from_email}}, {{message}}
- [ ] Copy Service ID
- [ ] Copy Template ID
- [ ] Copy Public Key
- [ ] Update `script.js` with credentials:
  ```javascript
  const EMAIL_SERVICE_ID = 'YOUR_SERVICE_ID';
  const EMAIL_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const EMAIL_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
  ```
- [ ] Test contact form locally

### 4. Local Testing
- [ ] Open `index.html` in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices or use DevTools mobile emulation
- [ ] Verify all sections load correctly
- [ ] Test navigation menu (hamburger on mobile)
- [ ] Test smooth scrolling between sections
- [ ] Test contact form validation
  - [ ] Empty name field shows error
  - [ ] Invalid email shows error
  - [ ] Short message shows error
  - [ ] Valid form submits successfully
- [ ] Verify all external links work (projects, social media)
- [ ] Check font sizes are readable on all devices
- [ ] Verify colors are visible and readable
- [ ] Test animations and hover effects
- [ ] Check footer social icons work

### 5. File Structure
- [ ] All files are in the correct directory:
  - [ ] `index.html`
  - [ ] `style.css`
  - [ ] `script.js`
  - [ ] `profile.jpg`
  - [ ] `resume.pdf`
  - [ ] `README.md`
  - [ ] `.gitignore`

## GitHub Setup

### 1. Repository Creation
- [ ] Create GitHub account if you don't have one
- [ ] Create new repository with name:
  - [ ] `username.github.io` (for username page) OR
  - [ ] `portfolio` (or any custom name)
- [ ] Initialize with no README (you have one)
- [ ] Add .gitignore (you have one)

### 2. Push Code to GitHub
- [ ] Initialize git in your local folder:
  ```bash
  git init
  ```
- [ ] Add all files:
  ```bash
  git add .
  ```
- [ ] Create first commit:
  ```bash
  git commit -m "Initial portfolio website"
  ```
- [ ] Add remote (replace USERNAME and REPO):
  ```bash
  git remote add origin https://github.com/USERNAME/REPO.git
  ```
- [ ] Rename branch to main if needed:
  ```bash
  git branch -M main
  ```
- [ ] Push to GitHub:
  ```bash
  git push -u origin main
  ```

### 3. Enable GitHub Pages
- [ ] Go to repository Settings
- [ ] Scroll to "Pages" section
- [ ] Select "Deploy from a branch"
- [ ] Branch: Select "main"
- [ ] Folder: Select "/" (root)
- [ ] Click "Save"
- [ ] Wait for deployment (usually 1-2 minutes)
- [ ] GitHub will provide your site URL

## Post-Deployment

### 1. Verify Deployment
- [ ] Visit your site URL in browser
- [ ] All content loads correctly
- [ ] All images display
- [ ] All links work
- [ ] All sections are accessible
- [ ] Navigation works on mobile
- [ ] Contact form displays

### 2. Test Functionality
- [ ] Verify navigation links work
- [ ] Test contact form (if EmailJS configured)
- [ ] Test external project links
- [ ] Test social media links
- [ ] Test resume download link
- [ ] Verify smooth scrolling works

### 3. Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Test in mobile Chrome
- [ ] Test in mobile Safari (iOS)

### 4. SEO & Meta Tags
- [ ] Title tag is visible
- [ ] Meta description is appropriate
- [ ] Keywords are relevant
- [ ] Open Graph tags work (for social sharing)

### 5. Performance Check
- [ ] Pages load quickly
- [ ] No broken images
- [ ] No console errors
- [ ] Network requests are minimal

## Maintenance

### Regular Updates
- [ ] Update portfolio content as you complete new projects
- [ ] Review and update skills regularly
- [ ] Keep resume.pdf current
- [ ] Update social media links if changed
- [ ] Monitor contact form messages (if EmailJS enabled)

### Git Workflow
- [ ] Make changes locally
- [ ] Test thoroughly
- [ ] Commit: `git add . && git commit -m "Update portfolio"`
- [ ] Push: `git push origin main`
- [ ] GitHub auto-deploys within 1-2 minutes

## Troubleshooting

### If Site Doesn't Load
- [ ] Check GitHub Pages is enabled in Settings
- [ ] Verify branch is set to "main"
- [ ] Verify folder is set to "/" (root)
- [ ] Wait 2-3 minutes for initial deployment
- [ ] Try clearing browser cache (Ctrl+Shift+Delete)

### If Styles Don't Load
- [ ] Clear browser cache completely
- [ ] Hard refresh (Ctrl+Shift+R)
- [ ] Check that style.css is in root directory
- [ ] Verify no typos in filename

### If Images Don't Show
- [ ] Ensure profile.jpg is in root directory
- [ ] Verify filename matches (case-sensitive)
- [ ] Check file format is .jpg or .png
- [ ] Verify file size is reasonable

### If Contact Form Doesn't Work
- [ ] Check EmailJS credentials in script.js
- [ ] Verify email template is set up correctly
- [ ] Check browser console for error messages
- [ ] Ensure JavaScript is enabled in browser
- [ ] Verify form validation passes

## Ready to Go! 🎉

Once all checkboxes are complete, your portfolio is live and ready to share!

### Share Your Portfolio
- [ ] Add portfolio link to GitHub profile bio
- [ ] Add portfolio link to LinkedIn
- [ ] Share on Twitter/X
- [ ] Add to resume/CV
- [ ] Share with friends and mentors

### Next Steps
- [ ] Monitor traffic with GitHub Pages stats
- [ ] Update portfolio with new projects
- [ ] Improve based on feedback
- [ ] Consider adding blog section (future enhancement)
- [ ] Optimize SEO further

---

**Portfolio URL:** https://username.github.io (or custom domain)

Good luck with your portfolio! 🚀
