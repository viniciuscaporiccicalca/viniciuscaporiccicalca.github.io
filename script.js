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

// --- Lógica do Modal e Carrossel do Projeto Fênix ---

// Elementos do DOM
const modal = document.getElementById("fenix-modal");
const btnOpenModal = document.getElementById("open-fenix-modal");
const spanClose = document.getElementsByClassName("close-modal")[0];
const slides = document.getElementsByClassName("carousel-slide");
const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");

let slideIndex = 0; // Começa na primeira imagem

// Função para abrir o modal
if (btnOpenModal) {
  btnOpenModal.addEventListener("click", () => {
    modal.style.display = "block";
    slideIndex = 0;
    showSlides(slideIndex);
    document.body.style.overflow = "hidden"; // Bloqueia scroll da página
  });
}

// Função para fechar o modal no botão X
if (spanClose) {
  spanClose.addEventListener("click", () => {
    closeModal();
  });
}

// Função para fechar o modal clicando fora
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Reabilita scroll
}

// --- Controles do Carrossel ---

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

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides(slideIndex);
}

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[n].classList.add("active");
}
