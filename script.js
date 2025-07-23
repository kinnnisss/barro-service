const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

// Gestion du menu burger
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
      burger.classList.remove('active');
    }
  });
});

// Gestion de la page active
function setActivePage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a');
  
  links.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (currentPage === linkPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Appeler la fonction au chargement et quand l'historique change
window.addEventListener('load', setActivePage);
window.addEventListener('popstate', setActivePage);