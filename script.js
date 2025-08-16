/* ===================== SCRIPT.JS ===================== */
document.addEventListener("DOMContentLoaded", () => {

  /* ===================== MENU HAMBÚRGUER ===================== */
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if(menuToggle && menu){
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }

  /* ===================== EFEITO HOVER NOS CARDS ===================== */
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
  });

  /* ===================== FEED DINÂMICO ===================== */
  const feedItems = document.querySelectorAll('.feed-item');
  let currentFeed = 0;

  function showFeedItem(index){
    feedItems.forEach((item, i) => {
      item.style.display = i === index ? 'flex' : 'none';
    });
  }

  if(feedItems.length > 0){
    showFeedItem(currentFeed);
    setInterval(() => {
      currentFeed = (currentFeed + 1) % feedItems.length;
      showFeedItem(currentFeed);
    }, 4000); // troca a cada 4 segundos
  }

  /* ===================== FUNÇÃO PARA ATUALIZAR CARDS (FUTURA) ===================== */
  window.updateCard = function(index, image, title, description, link){
    const card = cards[index];
    if(!card) return;
    card.querySelector('img').src = image;
    card.querySelector('h3').textContent = title;
    card.querySelector('p').textContent = description;
    card.querySelector('a').href = link;
  }

  /* ===================== FUNÇÃO PARA ATUALIZAR BANNER ===================== */
  window.updateBanner = function(text, imgSrc){
    const banner = document.querySelector('.banner');
    if(!banner) return;
    banner.textContent = text;
    if(imgSrc){
      const img = document.createElement('img');
      img.src = imgSrc;
      banner.appendChild(img);
    }
  }

});
