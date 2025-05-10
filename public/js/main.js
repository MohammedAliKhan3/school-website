document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    });

    // Scroll animations
    const scrollElements = document.querySelectorAll('[data-scroll]');

    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            }
        });
    };

    // Initialize scroll animations
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Check on load
    handleScrollAnimation();

    // GSAP animations for feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        const delay = card.dataset.delay || 0;
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: parseFloat(delay),
            ease: "power2.out"
        });
    });

    // Color shift animation for background
    const colors = [
        '#4361ee', '#3a0ca3', '#7209b7', '#f72585',
        '#4cc9f0', '#4895ef', '#560bad', '#b5179e'
    ];

    let currentIndex = 0;
    const gradientBg = document.querySelector('.color-gradient-bg');

    function shiftGradient() {
        const color1 = colors[currentIndex % colors.length];
        const color2 = colors[(currentIndex + 1) % colors.length];
        const color3 = colors[(currentIndex + 2) % colors.length];
        const color4 = colors[(currentIndex + 3) % colors.length];

        gradientBg.style.setProperty('--gradient-1', color1);
        gradientBg.style.setProperty('--gradient-2', color2);
        gradientBg.style.setProperty('--gradient-3', color3);
        gradientBg.style.setProperty('--gradient-4', color4);

        currentIndex = (currentIndex + 1) % colors.length;
    }

    // Change gradient every 10 seconds
    setInterval(shiftGradient, 10000);

    // Hero text animation
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroImage = document.querySelector('.hero-image');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    gsap.timeline()
        .from(heroTitle, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
        .from(heroSubtitle, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.5")
        .from(heroButtons, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4")
        .from(heroImage, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        }, "-=0.8")
        .from(scrollIndicator, {
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        }, "-=0.5");
});

// Counter animation for stats
function animateCounters() {
    const statCards = document.querySelectorAll('.stat-card');

    statCards.forEach(card => {
        if (elementInView(card)) {
            const valueElement = card.querySelector('.stat-value');
            const target = parseInt(valueElement.dataset.value);
            const suffix = valueElement.dataset.value.replace(/[0-9]/g, '');
            let current = 0;
            const increment = target / 50;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                valueElement.textContent = Math.floor(current) + suffix;
            }, 20);

            // Prevent re-animation
            card.dataset.animated = 'true';
        }
    });
}

// Add to scroll event listener
window.addEventListener('scroll', () => {
    handleScrollAnimation();
    animateCounters();
});
