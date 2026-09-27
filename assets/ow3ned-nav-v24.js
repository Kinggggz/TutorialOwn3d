(() => {
  const header = document.querySelector('.site-header, .guildNav, .guild-nav');
  if (!header) return;
  const nav = header.querySelector('nav');
  if (!nav) return;

  header.classList.add('ow-header');
  nav.classList.add('ow-nav');
  if (!nav.id) nav.id = 'ow-primary-nav';

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'ow-nav-toggle';
  toggle.setAttribute('aria-label', 'Abrir menu');
  toggle.setAttribute('aria-controls', nav.id);
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  header.insertBefore(toggle, nav);

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    toggle.innerHTML = open
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) setOpen(false);
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
  window.matchMedia('(min-width: 981px)').addEventListener?.('change', (event) => {
    if (event.matches) setOpen(false);
  });
})();
