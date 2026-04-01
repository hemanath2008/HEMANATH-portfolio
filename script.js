/* ==========================================
   PREMIUM PORTFOLIO WEBSITE - JAVASCRIPT
   Advanced animations with GSAP, AOS, and Particles.js
   ========================================== */

// ========== EMAILJS CONFIGURATION ==========
const EMAIL_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAIL_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAIL_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

function initEmailJS() {
    if (EMAIL_PUBLIC_KEY && EMAIL_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAIL_PUBLIC_KEY);
    }
}

// ========== MOBILE DETECTION ==========
const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// ========== PAGE LOAD & INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initEmailJS();
    initGSAPAnimations();
    initAOS();
    setupNavigation();
    setupHeroAnimations();
    setupSkillsAnimations();
    setupProjectsAnimations();
    setupContactAnimations();
    setupParticles();
    setupScrollAnimations();
    setupContactForm();
    setupCustomCursor();
    
    // Fade in on page load
    gsap.to('body', { opacity: 1, duration: 0.8, delay: 0.2 });
});

// ========== GSAP & SCROLLTRIGGER INITIALIZATION ==========
function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);
}

// ========== AOS INITIALIZATION ==========
function initAOS() {
    AOS.init({
        duration: 800,
        offset: 100,
        once: false,
        easing: 'ease-in-out-cubic'
    });
}

// ========== NAVIGATION WITH PREMIUM EFFECTS ==========
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

    // Enhanced navbar scroll effect with GSAP
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Navbar shrink effect
        if (scrollY > 50) {
            gsap.to(navbar, {
                duration: 0.3,
                '--navbar-padding': '0.5rem',
                overwrite: 'auto'
            });
            navbar.classList.add('scrolled');
        } else {
            gsap.to(navbar, {
                duration: 0.3,
                '--navbar-padding': '1rem',
                overwrite: 'auto'
            });
            navbar.classList.remove('scrolled');
        }
        
        updateActiveNavLink();
        lastScrollY = scrollY;
    }, { passive: true });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(href);
                if (section) {
                    gsap.to(window, {
                        scrollTo: { y: section, offsetY: 80 },
                        duration: 1,
                        ease: 'power2.inOut'
                    });
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

// ========== HERO SECTION ANIMATIONS ==========
function setupHeroAnimations() {
    const heroSection = document.querySelector('.hero');
    const heroTitle = document.querySelector('.hero-title');
    const heroTagline = document.querySelector('.hero-tagline');
    const heroImage = document.querySelector('.image-container');
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (!isMobileDevice()) {
        // Typing animation for tagline
        if (heroTagline) {
            typeText(heroTagline, 0.05);
        }

        // Floating animation for profile image
        if (heroImage) {
            gsap.to(heroImage, {
                y: 20,
                duration: 3,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut'
            });

            // Glow effect on hero image hover
            heroImage.addEventListener('mouseenter', () => {
                gsap.to(heroImage, {
                    boxShadow: '0 0 40px 10px rgba(79, 70, 229, 0.8), 0 0 80px 20px rgba(168, 85, 247, 0.4)',
                    duration: 0.4
                });
            });

            heroImage.addEventListener('mouseleave', () => {
                gsap.to(heroImage, {
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                    duration: 0.4
                });
            });
        }

        // Parallax effect on hero content
        gsap.to(heroTitle, {
            scrollTrigger: {
                trigger: heroSection,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                markers: false
            },
            y: 100,
            opacity: 0.7,
            ease: 'none'
        });
    }

    // Animated gradient background
    if (heroSection) {
        animateGradientBackground(heroSection);
    }

    // Button hover effects with glow
    heroButtons.forEach((btn, index) => {
        btn.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            if (this.classList.contains('btn-primary')) {
                gsap.to(this, {
                    boxShadow: '0 0 30px rgba(79, 70, 229, 0.8), 0 0 60px rgba(168, 85, 247, 0.5)',
                    duration: 0.3
                });
            }
        });

        btn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            if (this.classList.contains('btn-primary')) {
                gsap.to(this, {
                    boxShadow: '0 10px 30px rgba(79, 70, 229, 0.3)',
                    duration: 0.3
                });
            }
        });
    });

    // Bounce animation for scroll indicator
    gsap.to(scrollIndicator, {
        y: 10,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
    });
}

// Typing animation function
function typeText(element, speed = 0.05) {
    const text = element.textContent;
    const originalText = text;
    
    // Only animate on first load and if not already animated
    if (element.dataset.animated) return;
    
    element.textContent = '';
    element.dataset.animated = 'true';
    
    let index = 0;
    function type() {
        if (index < originalText.length) {
            element.textContent += originalText.charAt(index);
            index++;
            setTimeout(type, speed * 1000);
        }
    }
    
    type();
}

// Animated gradient background
function animateGradientBackground(element) {
    const keyframes = `
        @keyframes gradientShift {
            0% {
                background: linear-gradient(180deg, rgba(79, 70, 229, 0.05) 0%, transparent 100%);
            }
            50% {
                background: linear-gradient(180deg, rgba(168, 85, 247, 0.08) 0%, rgba(236, 72, 153, 0.02) 100%);
            }
            100% {
                background: linear-gradient(180deg, rgba(79, 70, 229, 0.05) 0%, transparent 100%);
            }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
    
    element.style.animation = 'gradientShift 15s ease-in-out infinite';
}

// ========== SKILLS SECTION ANIMATIONS ==========
function setupSkillsAnimations() {
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach((card, index) => {
        // Floating animation
        gsap.to(card, {
            y: isMobileDevice() ? 5 : 15,
            duration: 2.5 + (Math.random() * 0.5),
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut'
        });

        // Scroll reveal with stagger
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=50px',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.05,
            ease: 'power2.out'
        });

        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out'
            });

            gsap.to(this, {
                boxShadow: '0 0 30px 5px rgba(79, 70, 229, 0.6), 0 0 60px 10px rgba(168, 85, 247, 0.4)',
                borderColor: 'rgba(79, 70, 229, 0.8)',
                duration: 0.3
            });

            // Slight rotate
            gsap.to(this, {
                rotationZ: 2,
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });

            gsap.to(this, {
                boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
                borderColor: 'rgba(255, 255, 255, 0.15)',
                duration: 0.3
            });

            gsap.to(this, {
                rotationZ: 0,
                duration: 0.3
            });
        });
    });
}

// ========== PROJECTS SECTION ANIMATIONS ==========
function setupProjectsAnimations() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        // Staggered scroll reveal
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100px',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            x: index % 2 === 0 ? -50 : 50,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power2.out'
        });

        // 3D tilt effect on mouse move
        if (!isMobileDevice()) {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const rotateX = (y - rect.height / 2) / 10;
                const rotateY = (rect.width / 2 - x) / 10;

                gsap.to(card, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    transformOrigin: 'center',
                    transformStyle: 'preserve-3d',
                    duration: 0.2,
                    overwrite: 'auto'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotationX: 0,
                    rotationY: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        }

        // Hover overlay animation
        const projectLinks = card.querySelector('.project-links');
        if (projectLinks) {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: 'power2.out'
                });

                gsap.to(projectLinks, {
                    opacity: 1,
                    duration: 0.3
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        }
    });
}

// ========== CONTACT SECTION ANIMATIONS ==========
function setupContactAnimations() {
    const contactForm = document.querySelector('.contact-form');
    const formGroups = document.querySelectorAll('.form-group');
    const infoCards = document.querySelectorAll('.info-card');

    // Info cards scroll animation
    infoCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=50px',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 40,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out'
        });

        // Hover glow effect
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                boxShadow: '0 0 30px 5px rgba(79, 70, 229, 0.6)',
                scale: 1.05,
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                boxShadow: '0 0 0',
                scale: 1,
                duration: 0.3
            });
        });
    });

    // Form inputs with floating labels effect
    formGroups.forEach((group, index) => {
        const input = group.querySelector('input, textarea');
        
        if (input) {
            gsap.from(group, {
                scrollTrigger: {
                    trigger: group,
                    start: 'top bottom-=30px',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                x: -20,
                duration: 0.5,
                delay: index * 0.08,
                ease: 'power2.out'
            });

            // Glow border on focus
            input.addEventListener('focus', () => {
                gsap.to(group, {
                    '--input-border-color': 'rgba(79, 70, 229, 1)',
                    '--input-glow': '0 0 20px rgba(79, 70, 229, 0.6)',
                    duration: 0.3
                });
            });

            input.addEventListener('blur', () => {
                gsap.to(group, {
                    '--input-border-color': 'rgba(255, 255, 255, 0.15)',
                    '--input-glow': '0 0 0',
                    duration: 0.3
                });
            });
        }
    });
}

// ========== SCROLL ANIMATIONS ==========
function setupScrollAnimations() {
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Setup Intersection Observer for additional animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate');
                
                if (entry.target.classList.contains('skill-card')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.05}s`;
                }
                if (entry.target.classList.contains('project-card')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll(
        '.skill-card, .project-card, .info-card, .education-card, .highlight-card'
    );
    elementsToObserve.forEach(element => observer.observe(element));
}

// ========== PARTICLES BACKGROUND ==========
function setupParticles() {
    if (window.particlesJS) {
        particlesJS('particleContainer', {
            particles: {
                number: {
                    value: isMobileDevice() ? 30 : 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#4f46e5'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#a855f7',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: !isMobileDevice(),
                        mode: 'grab'
                    },
                    onclick: {
                        enable: !isMobileDevice(),
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ========== CUSTOM CURSOR ==========
function setupCustomCursor() {
    if (isMobileDevice()) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorTrail = [];
    const trailLength = 15;

    for (let i = 0; i < trailLength; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.opacity = (i / trailLength) * 0.5;
        document.body.appendChild(trail);
        cursorTrail.push({ x: 0, y: 0, el: trail });
    }

    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursor, {
            x: mouseX - 10,
            y: mouseY - 10,
            duration: 0,
            overwrite: 'auto'
        });

        // Update trail
        let x = mouseX;
        let y = mouseY;

        cursorTrail.forEach((trail, index) => {
            const prevTrail = index > 0 ? cursorTrail[index - 1] : { x: mouseX, y: mouseY };
            trail.x += (prevTrail.x - trail.x) * 0.2;
            trail.y += (prevTrail.y - trail.y) * 0.2;

            gsap.to(trail.el, {
                x: trail.x - 5,
                y: trail.y - 5,
                duration: 0,
                overwrite: 'auto'
            });
        });
    });

    // Change cursor on hover of interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .skill-card, .project-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
}

// ========== CONTACT FORM ==========
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        clearFormErrors();

        if (!validateContactForm()) {
            return;
        }

        await sendEmail(nameInput.value, emailInput.value, messageInput.value);
    });

    nameInput.addEventListener('blur', () => validateField(nameInput, 'name'));
    emailInput.addEventListener('blur', () => validateField(emailInput, 'email'));
    messageInput.addEventListener('blur', () => validateField(messageInput, 'message'));
}

function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    if (!name) {
        showFormError('nameError', 'Please enter your name');
        isValid = false;
    } else if (name.length < 2) {
        showFormError('nameError', 'Name must be at least 2 characters');
        isValid = false;
    }

    if (!email) {
        showFormError('emailError', 'Please enter your email');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFormError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    if (!message) {
        showFormError('messageError', 'Please enter your message');
        isValid = false;
    } else if (message.length < 10) {
        showFormError('messageError', 'Message must be at least 10 characters');
        isValid = false;
    }

    return isValid;
}

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

    if (isValid) {
        clearFieldError(errorId);
    }
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearFieldError(errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

function clearFormErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
}

async function sendEmail(name, email, message) {
    const submitButton = document.querySelector('.contact-form .btn-primary');
    const formFeedback = document.getElementById('formFeedback');

    try {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        const response = await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, {
            from_name: name,
            from_email: email,
            message: message
        });

        if (response.status === 200) {
            showSuccessMessage('Message sent successfully! I\'ll get back to you soon.');
            document.getElementById('contactForm').reset();

            // Animate success feedback
            gsap.to(formFeedback, {
                opacity: 1,
                y: 0,
                duration: 0.4
            });

            setTimeout(() => {
                gsap.to(formFeedback, {
                    opacity: 0,
                    y: 20,
                    duration: 0.4
                });
            }, 4000);
        }
    } catch (error) {
        showErrorMessage('Failed to send message. Please try again.');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
}

function showSuccessMessage(message) {
    const formFeedback = document.getElementById('formFeedback');
    formFeedback.textContent = message;
    formFeedback.className = 'form-feedback success';
}

function showErrorMessage(message) {
    const formFeedback = document.getElementById('formFeedback');
    formFeedback.textContent = message;
    formFeedback.className = 'form-feedback error';
}

// ========== UTILITY FUNCTIONS ==========
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
