/* ================================================================
   THEME TOGGLE
   ================================================================
   3-state cycle: system → light → dark → system
   Setting is persisted in localStorage under 'hb-theme'.

   To add a new theme:
     1. Add the theme name to the THEMES array below
     2. Add the corresponding icon SVG in index.html with id="icon-<name>"
     3. Add the CSS block [data-theme="<name>"] { ... } in index.css
   ================================================================ */

const THEME_KEY = 'hb-theme';
const THEMES    = ['system', 'light', 'dark'];

let themeSetting = localStorage.getItem(THEME_KEY) || 'system';

const themeIcons = {
  system: document.getElementById('icon-system'),
  light:  document.getElementById('icon-light'),
  dark:   document.getElementById('icon-dark'),
};

const themeLabels = {
  system: 'System theme (auto)',
  light:  'Light theme',
  dark:   'Dark theme',
};

function applyTheme(setting) {
  themeSetting = setting;
  localStorage.setItem(THEME_KEY, setting);

  const prefersDark  = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const effectiveTheme = setting === 'system' ? (prefersDark ? 'dark' : 'light') : setting;

  document.documentElement.setAttribute('data-theme', effectiveTheme);
  document.documentElement.setAttribute('data-theme-setting', setting);

  Object.entries(themeIcons).forEach(([key, el]) => {
    if (el) el.style.display = key === setting ? 'block' : 'none';
  });

  const btn = document.getElementById('themeToggle');
  if (btn) btn.setAttribute('title', themeLabels[setting]);
}

document.getElementById('themeToggle')?.addEventListener('click', () => {
  const idx  = THEMES.indexOf(themeSetting);
  const next = THEMES[(idx + 1) % THEMES.length];
  applyTheme(next);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (themeSetting === 'system') applyTheme('system');
});

applyTheme(themeSetting);


/* ================================================================
   MOBILE NAVIGATION
================================================================ */

const menuBtn  = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.classList.toggle('active', isOpen);
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks?.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (
    navLinks.classList.contains('open') &&
    !navLinks.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    navLinks.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});


/* ================================================================
   SCROLL REVEAL
   Adds .visible to .reveal elements as they enter the viewport.
================================================================ */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ================================================================
   ACTIVE NAV HIGHLIGHT ON SCROLL
   Highlights the nav link matching the currently visible section.
================================================================ */

const sections    = document.querySelectorAll('section[id]');
const navLinkEls  = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinkEls.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(section => sectionObserver.observe(section));


/* ================================================================
   NAV SCROLL SHADOW
   Adds a subtle shadow to the nav when the user scrolls down.
================================================================ */

const header = document.getElementById('header');

const headerObserver = new IntersectionObserver(
  ([entry]) => {
    header.style.boxShadow = entry.isIntersecting ? '' : '0 1px 24px rgba(0,0,0,0.15)';
  },
  { threshold: 1 }
);

const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const sentinel = document.createElement('div');
sentinel.style.cssText = 'position:absolute;top:1px;height:1px;width:1px;pointer-events:none;';
document.body.prepend(sentinel);
headerObserver.observe(sentinel);
