/* script.js
   - controla o menu mobile do cabeçalho
   - responsabilidade: abrir/fechar menu mobile, atualizar aria-expanded, fechar ao redimensionar
   - arquivo carregado no final do HTML
*/
(function () {
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (!navToggle || !mobileNav) return;

  function openMobileNav() {
    mobileNav.hidden = false;
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Fechar menu');
    // animação simples
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
    // esconde após animação
    setTimeout(() => {
      mobileNav.hidden = true;
    }, 220);
  }

  navToggle.addEventListener('click', function () {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    if (expanded) closeMobileNav();
    else openMobileNav();
  });

  // Fecha o menu mobile ao redimensionar a janela para desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 992) {
      mobileNav.hidden = true;
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menu');
    }
  });

  // Fecha o menu se o usuário clicar fora (UX)
  document.addEventListener('click', function (e) {
    if (!mobileNav.contains(e.target) && !navToggle.contains(e.target) && window.getComputedStyle(navToggle).display !== 'none') {
      if (!mobileNav.hidden) closeMobileNav();
    }
  });

  // Permite fechar com Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !mobileNav.hidden) {
      closeMobileNav();
    }
  });
})();
