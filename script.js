/* ============================================
   Mobile navigation toggle
   ============================================ */
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', isOpen);
});

// Close the mobile menu automatically after a nav link is tapped
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

/* ============================================
   Active nav-link highlighting on scroll
   Uses IntersectionObserver to detect which
   section is currently in view and highlights
   the matching nav link.
   ============================================ */
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('is-active', link.dataset.section === id);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' } // triggers when section is roughly centred
);

sections.forEach((section) => sectionObserver.observe(section));

/* ============================================
   Back-to-top button
   Appears after the user scrolls past the hero,
   scrolls smoothly to the top when clicked.
   ============================================ */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('is-visible', window.scrollY > 480);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================
   Dynamic footer year
   Keeps the copyright year current without
   needing a manual edit every year.
   ============================================ */
document.getElementById('year').textContent = new Date().getFullYear();
