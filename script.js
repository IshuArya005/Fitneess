// script.js - Mobile Menu Toggle Only

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link (mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

//Gentle parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    hero.style.backgroundPositionY = `${speed}px`;
});

// Keyboard support for cards
document.querySelectorAll('.class-card').forEach(card => {
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.querySelector('a').click();
        }
    });
});

//Footer 
// Auto-update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

//About Page Tabs
// Mobile Menu + Year
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.getElementById('current-year').textContent = new Date().getFullYear();
});

//Classes Page - Filter Classes by Level
// Mobile Menu + Year + Class Filter
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Class Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const classCards = document.querySelectorAll('.class-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter cards
            classCards.forEach(card => {
                const level = card.getAttribute('data-level');
                if (filter === 'all' || level === filter || (filter === 'special' && level === 'special')) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});

//Schedule Page - Mobile Menu + Year
// Mobile Menu + Year + Schedule Tabs
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Schedule Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const daySchedules = document.querySelectorAll('.day-schedule');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const day = button.getAttribute('data-day');

            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show selected day
            daySchedules.forEach(schedule => {
                schedule.classList.remove('active');
                if (schedule.id === day) {
                    schedule.classList.add('active');
                }
            });
        });
    });
});

//Gallery Page - Mobile Menu + Year
// Mobile Menu + Year + Gallery Filter
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Gallery Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Lightbox options
    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true,
        'disableScrolling': true,
        'fadeDuration': 400,
        'imageFadeDuration': 400
    });
});

//contact page - Mobile Menu + Year
// Mobile Menu + Year + Form
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.getElementById('current-year').textContent = new Date().getFullYear();

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your message has been sent. We’ll reply within 2 hours.');
            form.reset();
        });
    }
});