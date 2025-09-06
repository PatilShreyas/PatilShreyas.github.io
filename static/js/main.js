// Main JavaScript for portfolio functionality

document.addEventListener('DOMContentLoaded', function() {
    // Animated headlines cycling
    initAnimatedHeadlines();
    
    // Mobile menu functionality
    initMobileMenu();
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Navbar scroll effect
    initNavbarScrollEffect();
    
    // Work section tabs
    initWorkTabs();
});

// Animated headlines functionality
function initAnimatedHeadlines() {
    const headlines = [
        "❤️ Android",
        "💜 Kotlin & KMP",
        "😍 Open Source",
        "👨🏻‍💻 Enthusiast",
        "✍️ Blogger",
        "🇮🇳 Indian"
    ];
    
    const animatedText = document.getElementById('animated-text');
    if (!animatedText) return;
    
    let currentIndex = 0;
    
    function changeHeadline() {
        // Fade out
        animatedText.style.opacity = '0';
        animatedText.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % headlines.length;
            animatedText.textContent = headlines[currentIndex];
            
            // Fade in
            animatedText.style.opacity = '1';
            animatedText.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Set initial styles
    animatedText.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    // Change headline every 3 seconds
    setInterval(changeHeadline, 3000);
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuBtn || !mobileMenu) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        
        // Toggle icon
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.className = 'fas fa-bars text-xl';
        } else {
            icon.className = 'fas fa-times text-xl';
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars text-xl';
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Use getBoundingClientRect() with requestAnimationFrame to avoid forced reflow
                requestAnimationFrame(() => {
                    const rect = targetSection.getBoundingClientRect();
                    const offsetTop = window.scrollY + rect.top;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                });
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScrollY = window.scrollY;
    
    function handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        
        // Keep navbar always visible (sticky behavior)
        navbar.style.transform = 'translateY(0)';
        
        lastScrollY = currentScrollY;
    }
    
    // Throttle scroll events
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Work section tabs functionality
function initWorkTabs() {
    const tabButtons = document.querySelectorAll('.work-tab-btn');
    const tabContents = document.querySelectorAll('.work-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });
            
            // Show target tab content
            const targetContent = document.getElementById(targetTab + '-content');
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });
}





