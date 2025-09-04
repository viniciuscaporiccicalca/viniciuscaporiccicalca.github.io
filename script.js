// Seleciona o ícone do menu hamburger e o menu de navegação
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Adiciona um evento de 'click' ao hamburger
hamburger.addEventListener("click", () => {
  // Adiciona ou remove a classe 'active' para mostrar/esconder o menu
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Fecha o menu quando um link é clicado (útil em mobile)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
