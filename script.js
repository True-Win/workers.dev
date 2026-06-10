// TrueWin - mobile burger menu only
(function () {
  function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav') || document.querySelector('.main-nav');
    const header = document.querySelector('.site-header');

    if (!navToggle || !mainNav || navToggle.dataset.burgerReady === '1') return;
    navToggle.dataset.burgerReady = '1';

    const setOpen = (open) => {
      mainNav.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
      if (header) header.classList.toggle('menu-open', open);
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    navToggle.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      setOpen(!mainNav.classList.contains('open'));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });

    document.addEventListener('click', function (event) {
      if (!mainNav.classList.contains('open')) return;
      if (header && header.contains(event.target)) return;
      setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setOpen(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 700) setOpen(false);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
