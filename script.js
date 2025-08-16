/* ===================== SCRIPT.JS ===================== */
/* Este arquivo controla interações do site, menu mobile e prepara efeitos futuros */

/* ===================== MENU HAMBURGUE ===================== */
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.createElement('span');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '&#9776;'; // Ícone de hamburguer
    const nav = document.querySelector('nav');
    nav.prepend(menuToggle);

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active'); // Adiciona ou remove a classe 'active' para mostrar/esconder menu
    });
});

/* ===================== PREPARAÇÃO FUTURA ===================== */
/* Aqui podemos adicionar futuras interações, como animações nos cards ou efeitos scroll */

/* Exemplo: animação simples de hover nos cards via JS (opcional) */
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 8px 12px rgba(0,0,0,0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
});

/* ===================== FIM SCRIPT.JS ===================== */