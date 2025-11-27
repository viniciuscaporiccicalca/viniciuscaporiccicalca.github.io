// --- Menu Hamburger (Funciona em todas as páginas) ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Verifica se os elementos do menu existem antes de adicionar eventos
if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// --- Carrossel (Funciona apenas na página do projeto) ---

const slides = document.getElementsByClassName("carousel-slide");
const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");

// Verifica se existe carrossel na página atual
if (slides.length > 0) {
  let slideIndex = 0;

  // Inicia mostrando o primeiro slide
  showSlides(slideIndex);

  // Adiciona eventos aos botões se eles existirem
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      changeSlide(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      changeSlide(1);
    });
  }

  // Função para mudar o slide (avançar ou voltar)
  function changeSlide(n) {
    slideIndex += n;

    // Loop infinito:
    if (slideIndex >= slides.length) {
      slideIndex = 0; // Volta para o primeiro
    }
    if (slideIndex < 0) {
      slideIndex = slides.length - 1; // Vai para o último
    }

    showSlides(slideIndex);
  }

  // Função para exibir o slide correto
  function showSlides(n) {
    // Esconde todos
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    // Mostra o atual
    slides[n].classList.add("active");
  }
}
