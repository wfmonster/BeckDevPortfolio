/**
 * Page Effects - Interactive micro-animations and enhancements
 * 
 * Features:
 * - Typing effect with role rotation
 * - 3D card tilt on hover
 * - Parallax starfield on scroll
 * - Scroll progress indicator
 */

(function() {
    'use strict';

    // ============================================
    // TYPING EFFECT
    // ============================================
    
    const typingConfig = {
        roles: [
            'Full-Stack AI Engineer',
            'Researcher',
            'Educator', 
            'Creative Technologist'
        ],
        typeSpeed: 80,
        deleteSpeed: 50,
        pauseBetween: 2000,
        pauseBeforeDelete: 1500
    };

    const typingElement = document.getElementById('typing-text');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!typingElement) return;

        const currentRole = typingConfig.roles[roleIndex];
        
        if (isDeleting) {
            // Deleting characters
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % typingConfig.roles.length;
                setTimeout(typeEffect, typingConfig.pauseBetween);
                return;
            }
            setTimeout(typeEffect, typingConfig.deleteSpeed);
        } else {
            // Typing characters
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeEffect, typingConfig.pauseBeforeDelete);
                return;
            }
            setTimeout(typeEffect, typingConfig.typeSpeed);
        }
    }

    // Start typing effect after initial pause
    if (typingElement) {
        setTimeout(typeEffect, typingConfig.pauseBeforeDelete);
    }

    // ============================================
    // CARD TILT EFFECT
    // ============================================
    
    const tiltConfig = {
        maxTilt: 8,
        scale: 1.02,
        perspective: 1000
    };

    function initCardTilt() {
        const cards = document.querySelectorAll('.tutorial-card, .project-card, .workshop-card, .publication-card');
        
        cards.forEach(card => {
            card.style.transformStyle = 'preserve-3d';
            card.style.transition = 'transform 0.15s ease-out';
            
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -tiltConfig.maxTilt;
                const rotateY = ((x - centerX) / centerX) * tiltConfig.maxTilt;
                
                card.style.transform = `
                    perspective(${tiltConfig.perspective}px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(${tiltConfig.scale})
                `;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    }

    initCardTilt();

    // ============================================
    // PARALLAX STARFIELD
    // ============================================
    
    const parallaxConfig = {
        layer1Speed: 0.05,  // Slower layer (further away)
        layer2Speed: 0.08   // Faster layer (closer)
    };

    const stars1 = document.getElementById('stars-1');
    const stars2 = document.getElementById('stars-2');

    function updateParallax() {
        const scrollY = window.scrollY;
        
        if (stars1) {
            stars1.style.transform = `translateY(${scrollY * parallaxConfig.layer1Speed}px)`;
        }
        if (stars2) {
            stars2.style.transform = `translateY(${scrollY * parallaxConfig.layer2Speed}px)`;
        }
    }

    // Throttle scroll events for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateParallax();
                updateScrollProgress();
                ticking = false;
            });
            ticking = true;
        }
    });

    // ============================================
    // SCROLL PROGRESS INDICATOR
    // ============================================
    
    const progressBar = document.getElementById('scroll-progress');

    function updateScrollProgress() {
        if (!progressBar) return;
        
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
    }

    // Initial call
    updateScrollProgress();

})();
