/* script.js
   - controla o menu mobile do cabeçalho
   - compatível com Tailwind (usa classes hidden)
   - funcionalidades: abrir/fechar menu mobile, aria-expanded, animação, fechar ao redimensionar, clique fora e Esc
*/
(function () {
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (!navToggle || !mobileNav) return;

  function openMobileNav() {
    mobileNav.classList.remove('hidden');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Fechar menu');

    // animação suave
    mobileNav.style.transition = 'transform 220ms ease, opacity 220ms ease';
    mobileNav.style.transformOrigin = 'top center';
    mobileNav.style.opacity = '0';
    mobileNav.style.transform = 'translateY(-6px)';

    requestAnimationFrame(() => {
      mobileNav.style.opacity = '1';
      mobileNav.style.transform = 'translateY(0)';
    });
  }

  function closeMobileNav() {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menu');

    mobileNav.style.opacity = '1';
    mobileNav.style.transform = 'translateY(0)';

    requestAnimationFrame(() => {
      mobileNav.style.opacity = '0';
      mobileNav.style.transform = 'translateY(-6px)';
    });

    // adiciona a classe hidden após a animação
    setTimeout(() => {
      mobileNav.classList.add('hidden');
    }, 220);
  }

  // toggle ao clicar no botão
  navToggle.addEventListener('click', () => {
    if (mobileNav.classList.contains('hidden')) openMobileNav();
    else closeMobileNav();
  });

  // fecha o menu ao redimensionar para desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      mobileNav.classList.add('hidden');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menu');
    }
  });

  // fecha ao clicar fora do menu
  document.addEventListener('click', (e) => {
    if (
      !mobileNav.contains(e.target) &&
      !navToggle.contains(e.target) &&
      window.getComputedStyle(navToggle).display !== 'none'
    ) {
      if (!mobileNav.classList.contains('hidden')) closeMobileNav();
    }
  });

  // fecha com Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileNav.classList.contains('hidden')) {
      closeMobileNav();
    }
  });
})();
