/* ── Mobile menu ──────────────────────────────────────────────────────────── */
const toggle = document.getElementById('nav-toggle');
const menu   = document.getElementById('nav-mobile');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    const open = menu.classList.contains('open');
    toggle.setAttribute('aria-expanded', open);
  });

  document.querySelectorAll('#nav-mobile a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });

  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
    }
  });
}

/* ── Active nav link ──────────────────────────────────────────────────────── */
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});
