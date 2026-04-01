# 🚀 Quick Start Guide - Portfolio Website

## 5-Minute Setup

### Step 1: Add Your Files (2 minutes)
```
1. Add profile.jpg (your profile picture) to the portfolio folder
2. Add resume.pdf (your resume) to the portfolio folder
```

### Step 2: Deploy to GitHub (3 minutes)
```bash
# Initialize and push to GitHub
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository Settings.

---

## Before You Deploy

### Essential Tasks
- ✅ Add profile image (profile.jpg)
- ✅ Add resume file (resume.pdf)
- ✅ Test locally (open index.html in browser)
- ✅ Check all links work

### Optional but Recommended
- 🔧 Set up EmailJS for contact form (5 minutes)
  - Go to emailjs.com
  - Create account and email service
  - Get credentials and add to script.js

### Nice to Have
- 🎨 Customize colors in style.css if desired
- 📝 Update any text that needs personalization

---

## Quick Links

📖 **Full Documentation**: `README.md`
✅ **Deployment Checklist**: `DEPLOYMENT_CHECKLIST.md`
📊 **Implementation Summary**: `IMPLEMENTATION_SUMMARY.md`

---

## What's Included

✨ **Modern Dark Theme** - Professional look with glassmorphism UI
📱 **Fully Responsive** - Works perfectly on mobile, tablet, desktop
⚡ **No Backend Required** - 100% static, GitHub Pages ready
🎯 **All Features** - Navigation, contact form, animations, social links
📚 **Well Documented** - Clean code with helpful comments

---

## File Structure

```
HEMANATH-portfolio/
├── index.html              ← Main website file
├── style.css               ← All styling
├── script.js               ← All interactivity
├── profile.jpg             ← ADD YOUR PHOTO
├── resume.pdf              ← ADD YOUR RESUME
├── README.md               ← Full guide
├── DEPLOYMENT_CHECKLIST.md ← Deploy checklist
├── IMPLEMENTATION_SUMMARY.md ← What was built
└── .gitignore             ← Git config
```

---

## Contact Form Setup (Optional)

1. Visit https://www.emailjs.com
2. Sign up (free)
3. Create email service (Gmail/Outlook)
4. Create template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
5. Get your Service ID, Template ID, Public Key
6. Update in `script.js`:
   ```javascript
   const EMAIL_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAIL_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAIL_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```

Without this, the contact form still works but won't send emails.

---

## Your Site URL

After deployment:
- **If repo is named `username.github.io`**: `https://username.github.io`
- **If repo is named something else**: `https://username.github.io/repo-name`

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Site doesn't load | Wait 2-3 min, clear cache, check Settings > Pages |
| Styles missing | Clear cache (Ctrl+Shift+Delete), hard refresh (Ctrl+Shift+R) |
| Images not showing | Ensure profile.jpg and resume.pdf are in root folder |
| Contact form not working | Check EmailJS credentials in script.js |
| Mobile menu broken | Clear cache and refresh |

---

## Next Steps

```
1. ✅ Add profile image
2. ✅ Add resume PDF
3. ⏳ Push to GitHub
4. ⏳ Enable GitHub Pages
5. 🎉 Share your portfolio!
```

---

## Support Resources

- 📖 See README.md for detailed instructions
- ✅ See DEPLOYMENT_CHECKLIST.md for step-by-step
- 💬 Code has helpful comments throughout
- 🔍 Check script.js and style.css for setup notes

---

## You're All Set! 🎉

Your professional portfolio is ready. Just add your files and deploy!

**Questions?** Check README.md or the code comments.

Good luck! 🚀

---

*Created: April 1, 2026*
*For: Hemanath S - AI & Data Science Student*
