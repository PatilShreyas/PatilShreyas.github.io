// Main JavaScript for portfolio functionality

document.addEventListener('DOMContentLoaded', function() {
    // Animated headlines cycling with reduced-motion and visibility checks
    initAnimatedHeadlines();
    
    // Accessible mobile menu functionality
    initMobileMenu();
    
    // Hash navigation and focus management
    initSmoothScrolling();
    
    // Navbar scroll effect using IntersectionObserver
    initNavbarScrollEffect();
    
    // Scrollspy for active nav state
    initScrollspy();
    
    // Accessible WAI-ARIA tabs for Work section
    initWorkTabs();
});

// Animated headlines functionality
function initAnimatedHeadlines() {
    const animatedText = document.getElementById('animated-text');
    if (!animatedText) return;
    
    // Respect user's motion preferences (WCAG 2.2.2)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const headlines = [
        "❤️ Android",
        "💜 Kotlin & KMP",
        "😍 Open Source",
        "👨🏻‍💻 Enthusiast",
        "✍️ Blogger",
        "🇮🇳 Indian"
    ];
    
    let currentIndex = 0;
    let timerId = null;
    
    function changeHeadline() {
        animatedText.style.opacity = '0';
        animatedText.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % headlines.length;
            animatedText.textContent = headlines[currentIndex];
            animatedText.style.opacity = '1';
            animatedText.style.transform = 'translateY(0)';
        }, 300);
    }
    
    animatedText.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    function startTimer() {
        if (!timerId) {
            timerId = setInterval(changeHeadline, 3000);
        }
    }
    
    function stopTimer() {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
        }
    }
    
    // Page Visibility API - pause interval when page is in background
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopTimer();
        } else {
            startTimer();
        }
    });
    
    startTimer();
}

// Accessible mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuBtn || !mobileMenu) return;
    
    function toggleMenu(isOpen) {
        const currentlyOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        const open = typeof isOpen === 'boolean' ? isOpen : !currentlyOpen;
        
        mobileMenuBtn.setAttribute('aria-expanded', String(open));
        mobileMenu.classList.toggle('hidden', !open);
        
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.className = open ? 'fas fa-times text-2xl' : 'fas fa-bars text-2xl';
        }
    }
    
    mobileMenuBtn.addEventListener('click', () => {
        toggleMenu();
    });
    
    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
            toggleMenu(false);
            mobileMenuBtn.focus();
        }
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            toggleMenu(false);
        }
    });
}

// Native smooth scrolling & focus management for internal anchors
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Update URL hash without causing an instant jump
                if (history.pushState) {
                    history.pushState(null, '', targetId);
                } else {
                    location.hash = targetId;
                }
                
                // Move focus to target section for keyboard/screen reader users
                if (!targetSection.hasAttribute('tabindex')) {
                    targetSection.setAttribute('tabindex', '-1');
                }
                targetSection.focus({ preventScroll: true });
            }
        });
    });
}

// Navbar scroll effect using IntersectionObserver
function initNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    if (!navbar || !('IntersectionObserver' in window)) return;
    
    // Sentinel element at top of page
    const sentinel = document.createElement('div');
    sentinel.id = 'navbar-sentinel';
    sentinel.style.cssText = 'position: absolute; top: 0; left: 0; width: 1px; height: 60px; pointer-events: none; visibility: hidden;';
    document.body.prepend(sentinel);
    
    const observer = new IntersectionObserver((entries) => {
        const isAtTop = entries[0].isIntersecting;
        if (!isAtTop) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }, { rootMargin: '0px', threshold: 0 });
    
    observer.observe(sentinel);
}

// Scrollspy to synchronize active nav state and aria-current
function initScrollspy() {
    if (!('IntersectionObserver' in window)) return;
    
    const sections = document.querySelectorAll('section[id], div[id="home"]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-link');
    if (sections.length === 0 || navLinks.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === '#' + id) {
                        link.classList.add(':target-current');
                        link.setAttribute('aria-current', 'location');
                    } else {
                        link.classList.remove(':target-current');
                        link.removeAttribute('aria-current');
                    }
                });
            }
        });
    }, {
        rootMargin: '-20% 0px -70% 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

// WAI-ARIA accessible tabs pattern for Work section
function initWorkTabs() {
    const tabList = document.querySelector('[role="tablist"]');
    const tabButtons = document.querySelectorAll('.work-tab-btn');
    const tabPanels = document.querySelectorAll('.work-content');
    
    if (!tabButtons.length || !tabPanels.length) return;
    
    function switchTab(newTab) {
        const targetTabId = newTab.getAttribute('data-tab');
        
        tabButtons.forEach(btn => {
            const isSelected = btn === newTab;
            btn.classList.toggle('active', isSelected);
            btn.setAttribute('aria-selected', String(isSelected));
            btn.setAttribute('tabindex', isSelected ? '0' : '-1');
        });
        
        tabPanels.forEach(panel => {
            const isTarget = panel.id === targetTabId + '-content';
            panel.classList.toggle('hidden', !isTarget);
            panel.setAttribute('aria-hidden', String(!isTarget));
        });
        
        newTab.focus();
    }
    
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            switchTab(button);
        });
        
        button.addEventListener('keydown', (e) => {
            let nextIndex = null;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                nextIndex = (index + 1) % tabButtons.length;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
            } else if (e.key === 'Home') {
                nextIndex = 0;
            } else if (e.key === 'End') {
                nextIndex = tabButtons.length - 1;
            }
            
            if (nextIndex !== null) {
                e.preventDefault();
                switchTab(tabButtons[nextIndex]);
            }
        });
    });
}
