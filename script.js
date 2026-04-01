/* ==========================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   Interactive features and EmailJS integration
   ========================================== */

// ========== EMAILJS CONFIGURATION ==========
// Replace these with your actual EmailJS credentials
const EMAIL_SERVICE_ID = 'YOUR_SERVICE_ID';      // Get from EmailJS dashboard
const EMAIL_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Get from EmailJS dashboard
const EMAIL_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Get from EmailJS Account

// Initialize EmailJS
function initEmailJS() {
    if (EMAIL_PUBLIC_KEY && EMAIL_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAIL_PUBLIC_KEY);
    }
}

// ========== NAVIGATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initEmailJS();
    setupNavigation();
    setupScrollAnimations();
    setupContactForm();
    setupParticles();
});

// Sticky navbar on scroll
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNavLink();
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(href);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ========== SCROLL ANIMATIONS ==========
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate');
                // Stagger animations for multiple elements
                if (entry.target.classList.contains('skill-category')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
                if (entry.target.classList.contains('skill-card')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.05}s`;
                }
                if (entry.target.classList.contains('project-card')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
                if (entry.target.classList.contains('info-card')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);

    // Observe elements for scroll animation
    const elementsToObserve = document.querySelectorAll(
        '.skill-category, .skill-card, .project-card, .info-card, .education-card, .highlight-card'
    );
    elementsToObserve.forEach(element => observer.observe(element));
    
    // Setup skill card hover effects and tooltips
    setupSkillCardInteractions();
}

// ========== SKILL CARD INTERACTIONS ==========
function setupSkillCardInteractions() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        // Get proficiency value from data attribute
        const proficiency = card.getAttribute('data-proficiency');
        const skillName = card.getAttribute('data-skill');
        
        // Animate proficiency fill on page load
        card.addEventListener('animationend', () => {
            const proficiencyFill = card.querySelector('.proficiency-fill');
            if (proficiencyFill && proficiencyFill.style.width === '') {
                proficiencyFill.style.width = proficiency + '%';
            }
        });
        
        // Add hover event listeners for enhanced effects
        card.addEventListener('mouseenter', () => {
            // Trigger glow effect
            card.style.setProperty('--glow-opacity', '1');
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--glow-opacity', '0');
        });
    });
}

// ========== CONTACT FORM ==========
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear previous error messages
        clearFormErrors();

        // Validate form
        if (!validateContactForm()) {
            return;
        }

        // Send email
        await sendEmail(nameInput.value, emailInput.value, messageInput.value);
    });

    // Real-time validation
    nameInput.addEventListener('blur', () => validateField(nameInput, 'name'));
    emailInput.addEventListener('blur', () => validateField(emailInput, 'email'));
    messageInput.addEventListener('blur', () => validateField(messageInput, 'message'));
}

// Validate contact form
function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    // Name validation
    if (!name) {
        showFormError('nameError', 'Please enter your name');
        isValid = false;
    } else if (name.length < 2) {
        showFormError('nameError', 'Name must be at least 2 characters');
        isValid = false;
    }

    // Email validation
    if (!email) {
        showFormError('emailError', 'Please enter your email');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFormError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    // Message validation
    if (!message) {
        showFormError('messageError', 'Please enter your message');
        isValid = false;
    } else if (message.length < 10) {
        showFormError('messageError', 'Message must be at least 10 characters');
        isValid = false;
    }

    return isValid;
}

// Validate individual field
function validateField(field, fieldType) {
    let isValid = true;
    const errorId = `${fieldType}Error`;

    switch (fieldType) {
        case 'name':
            if (field.value.trim().length < 2) {
                showFormError(errorId, 'Name must be at least 2 characters');
                isValid = false;
            }
            break;
        case 'email':
            if (!isValidEmail(field.value.trim())) {
                showFormError(errorId, 'Please enter a valid email address');
                isValid = false;
            }
            break;
        case 'message':
            if (field.value.trim().length < 10) {
                showFormError(errorId, 'Message must be at least 10 characters');
                isValid = false;
            }
            break;
    }

    if (isValid && field.value.trim()) {
        document.getElementById(errorId).classList.remove('show');
    }

    return isValid;
}

// Check if email is valid
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form error
function showFormError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Clear all form errors
function clearFormErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(element => {
        element.classList.remove('show');
        element.textContent = '';
    });
}

// Send email via EmailJS
async function sendEmail(name, email, message) {
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    // Check if EmailJS is properly configured
    if (!EMAIL_PUBLIC_KEY || EMAIL_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        // Show error if not configured
        formFeedback.textContent = 'Email service not configured. Please check EmailJS credentials.';
        formFeedback.classList.add('error');
        formFeedback.classList.remove('success');
        console.error('EmailJS credentials not configured. Add your credentials to script.js');
        return;
    }

    // Disable submit button
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
        const response = await emailjs.send(
            EMAIL_SERVICE_ID,
            EMAIL_TEMPLATE_ID,
            {
                from_name: name,
                from_email: email,
                message: message,
                reply_to: email
            }
        );

        // Success message
        formFeedback.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
        formFeedback.classList.add('success');
        formFeedback.classList.remove('error');

        // Reset form
        contactForm.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            formFeedback.classList.remove('success');
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }, 5000);

    } catch (error) {
        console.error('EmailJS Error:', error);

        // Error message
        formFeedback.textContent = 'Failed to send message. Please try again or contact directly via email.';
        formFeedback.classList.add('error');
        formFeedback.classList.remove('success');

        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';

        // Hide error after 5 seconds
        setTimeout(() => {
            formFeedback.classList.remove('error');
        }, 5000);
    }
}

// ========== PARTICLES BACKGROUND ==========
function setupParticles() {
    const container = document.getElementById('particleContainer');
    const particleCount = window.innerWidth < 768 ? 20 : 40;

    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }

    // Add particles on window resize
    window.addEventListener('resize', () => {
        const currentParticles = container.children.length;
        const newCount = window.innerWidth < 768 ? 20 : 40;
        
        if (newCount < currentParticles) {
            // Remove excess particles
            for (let i = currentParticles; i > newCount; i--) {
                container.removeChild(container.lastChild);
            }
        } else if (newCount > currentParticles) {
            // Add new particles
            for (let i = currentParticles; i < newCount; i++) {
                createParticle(container);
            }
        }
    });
}

function createParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 5;

    particle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(79, 70, 229, 0.3));
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        pointer-events: none;
        z-index: -1;
        animation: float ${duration}s linear ${delay}s infinite;
        box-shadow: 0 0 ${size * 2}px rgba(79, 70, 229, 0.5);
    `;

    container.appendChild(particle);
}

// Add float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========== UTILITY FUNCTIONS ==========

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll fallback for older browsers
function smoothScroll(element, duration = 1000) {
    const start = window.scrollY;
    const target = element.offsetTop;
    const distance = target - start;
    const startTime = performance.now();

    function animation(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = elapsed / duration;

        if (progress < 1) {
            window.scrollTo(0, start + distance * easeInOutQuad(progress));
            requestAnimationFrame(animation);
        } else {
            window.scrollTo(0, target);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation);
}

// ========== PERFORMANCE OPTIMIZATION ==========

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Prefetch resources on hover
document.querySelectorAll('a[href^="https"]').forEach(link => {
    link.addEventListener('mouseenter', () => {
        const prefetch = document.createElement('link');
        prefetch.rel = 'prefetch';
        prefetch.href = link.href;
        document.head.appendChild(prefetch);
    });
});

// ========== ACCESSIBILITY ==========

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Skip to main content on Tab + Alt
    if (e.altKey && e.code === 'KeyM') {
        const mainContent = document.querySelector('main') || document.querySelector('section');
        if (mainContent) {
            mainContent.focus();
        }
    }
});

// ========== GITHUB PAGES DEPLOYMENT INSTRUCTIONS ==========
/*
DEPLOYING TO GITHUB PAGES:

Step 1: Prepare Your Files
- Ensure you have: index.html, style.css, script.js
- Add your profile image as "profile.jpg" in the root folder
- Add your resume as "resume.pdf" in the root folder

Step 2: Configure EmailJS (OPTIONAL)
- Go to https://www.emailjs.com/
- Create a free account
- Create a service (Gmail, Outlook, or custom SMTP)
- Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
- Copy your Service ID, Template ID, and Public Key
- Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' in this file

Step 3: Push to GitHub
- Create a GitHub repository named "username.github.io" or "portfolio"
- Push all files to the main branch
- For non-username repos, enable GitHub Pages from Settings

Step 4: Enable GitHub Pages
- Go to repository Settings
- Scroll to "Pages" section
- Select "Deploy from a branch"
- Choose "main" branch and "/" (root) folder
- Save

Step 5: Visit Your Portfolio
- Your site will be live at: https://username.github.io (or your custom domain)
- Allow a few minutes for GitHub to build and deploy

NOTES:
- All paths in this project are relative, so they work on GitHub Pages
- No backend is required - everything runs on the client
- EmailJS integration is optional - contact form will show config warning if not set up
- Images and assets must be committed to the repository
- Changes are deployed automatically after each push

TROUBLESHOOTING:
- If pages don't load: Check that all files are in the root directory
- If styles don't load: Clear browser cache and check file paths
- If contact form doesn't work: Verify EmailJS credentials are correct
*/
