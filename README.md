# Hemanath S - Personal Portfolio Website

A modern, fully responsive personal portfolio website built with HTML5, CSS3, and vanilla JavaScript. Optimized for deployment on GitHub Pages with dark theme, glassmorphism UI, smooth animations, and contact form integration.

## 📋 Features

### ✨ Design & UX
- **Dark Theme**: Modern dark background with blue and purple gradient accents
- **Glassmorphism UI**: Transparent cards with blur effects for a premium look
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Fade-ins, hover effects, and scroll animations
- **Sticky Navigation**: Always-accessible navigation with active section highlighting
- **Animated Background**: Floating particle effects for visual interest

### 📱 Sections
1. **Hero Section**: Eye-catching introduction with profile image, tagline, and CTA buttons
2. **Navbar**: Sticky navigation with smooth scrolling and mobile hamburger menu
3. **About Me**: Personal introduction and highlight cards
4. **Skills**: Categorized skills with animated progress bars
5. **Projects**: Project cards with descriptions, tech stack, and live demo links
6. **Education**: Timeline-style education information
7. **Contact**: Contact information and fully functional contact form
8. **Footer**: Social media links and copyright

### 🔧 Functionality
- **Contact Form**: Client-side validation with EmailJS integration (optional)
- **Mobile Menu**: Responsive hamburger navigation
- **Scroll Detection**: Active nav link updates based on scroll position
- **Form Validation**: Real-time field validation with error messages
- **Smooth Scrolling**: Enhanced scrolling experience with CSS and JS
- **Lazy Loading**: Optimized image loading for better performance

## 📁 File Structure

```
HEMANATH-portfolio/
├── index.html          # Main HTML file with semantic structure
├── style.css           # Complete CSS styling with responsive design
├── script.js           # JavaScript for interactivity and form handling
├── profile.jpg         # Your profile image (add manually)
├── resume.pdf          # Your resume file (add manually)
└── README.md           # This file
```

## 🚀 Quick Start

### Prerequisites
- GitHub account
- Basic text editor or IDE
- Your profile image (JPG/PNG)
- Your resume file (PDF)

### Setup Instructions

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/hemanath2008/HEMANATH-portfolio.git
   cd HEMANATH-portfolio
   ```

2. **Add Your Assets**
   - Place your profile image as `profile.jpg` in the root directory
   - Place your resume as `resume.pdf` in the root directory

3. **Customize Content** (Optional)
   - Edit `index.html` to update personal information
   - Modify colors in `style.css` variables (`:root` section)
   - Update social media links in both `index.html` and `script.js`

4. **Configure EmailJS** (For Contact Form)
   - Visit [EmailJS](https://www.emailjs.com/)
   - Create a free account
   - Create a service (Gmail, Outlook, or custom)
   - Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Copy your credentials:
     - Service ID
     - Template ID
     - Public Key
   - Update these in `script.js`:
     ```javascript
     const EMAIL_SERVICE_ID = 'YOUR_SERVICE_ID';
     const EMAIL_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
     const EMAIL_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
     ```

## 🌐 Deploy to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com/new)
   - Name: `username.github.io` (replace username) OR any name like `portfolio`
   - Click "Create repository"

2. **Upload Files**
   - Drag and drop your files or use "Add file" → "Upload files"
   - Upload: `index.html`, `style.css`, `script.js`, `profile.jpg`, `resume.pdf`

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "main", Folder: "/" (root)
   - Click Save

4. **Access Your Site**
   - If repo is `username.github.io`: https://username.github.io
   - If repo is named differently: https://username.github.io/portfolio

### Method 2: Using Git Command Line

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio website"

# Add remote (replace USERNAME and REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Push to main branch
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in Settings → Pages.

## 🎨 Customization Guide

### Change Colors
Edit the CSS variables in `style.css` (top of file):
```css
:root {
    --primary-color: #4f46e5;        /* Main blue */
    --secondary-color: #a855f7;      /* Purple */
    --accent-color: #ec4899;         /* Pink */
    --background: #0a0e27;           /* Dark background */
    --text-primary: #ffffff;         /* Main text */
    --text-secondary: #b0b9c3;       /* Secondary text */
}
```

### Update Content
Edit `index.html` to change:
- Name, title, tagline in hero section
- Skills and skill levels
- Project details and links
- Education information
- Contact details

### Modify Fonts
Change Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;600;700&display=swap" rel="stylesheet">
```

## 📧 Contact Form Setup

### Without EmailJS
The contact form will still function and show a helpful message if not configured. Users can contact you via the provided email address.

### With EmailJS
Follow the configuration steps above to enable email notifications. The form will:
- Validate all inputs
- Send you an email notification
- Show a success message to the user
- Handle errors gracefully

## 🔍 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Optimization

The website includes:
- Minimal JavaScript (vanilla, no dependencies)
- Optimized CSS with minimal repaints
- Lazy loading support for images
- Smooth animations with GPU acceleration
- Responsive images and fonts
- Efficient particle background

## 📱 Responsive Design

- **Desktop** (1200px+): Full multi-column layout
- **Tablet** (768px - 1199px): Optimized grid layout
- **Mobile** (320px - 767px): Single column with hamburger menu

## 🛠 Troubleshooting

### Website Not Loading
- Check that all files are in the repository root
- Verify branch is set to "main" in GitHub Pages settings
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Styles Not Loading
- Ensure `style.css` is in the same directory as `index.html`
- Check file paths are relative (not absolute)
- Verify no typos in file names

### Contact Form Not Working
- Check EmailJS credentials are correct
- Verify email template variables match the code
- Check browser console for error messages
- Ensure JavaScript is enabled

### Images Not Showing
- Add `profile.jpg` and any other images to the root directory
- Verify file names match references in HTML
- Check image format is supported (JPG, PNG, WebP)

### Mobile Menu Not Working
- Clear browser cache
- Check that `script.js` is loaded correctly
- Verify hamburger element exists in HTML

## 📝 License

This portfolio template is free to use and modify for personal projects.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review the code comments in `script.js` and `style.css`
3. Check browser console for errors (F12)
4. Verify GitHub Pages is enabled in repository settings

## 🎯 Next Steps

1. Add your profile image and resume
2. Configure EmailJS (optional)
3. Customize colors and fonts to match your brand
4. Update all personal information
5. Test on different devices
6. Deploy to GitHub Pages
7. Share your portfolio!

---

**Created for Hemanath S** | AI & Data Science Student | 2024
