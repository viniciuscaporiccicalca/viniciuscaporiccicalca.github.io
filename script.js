const pageName = window.location.pathname.split("/").pop() || "index.html";

const translations = {
  en: {
    lang: "en",
    common: {
      backHome: "← Back to Home",
      footer: "&copy; 2025 Vinicius Caporicci Calça. All rights reserved.",
    },
    pages: {
      "index.html": {
        title: "Vinicius Caporicci Calça | Software Engineer",
        nav: ["Projects", "Resume", "Instagram", "LinkedIn"],
        heroRole: "Software Engineer",
        heroText:
          "Hi! I am a software engineer passionate about creating efficient, scalable solutions. With full-stack development experience, I turn complex ideas into digital products with a focus on clean code, performance, and the best possible user experience.",
        projectsTitle: "My Projects",
        cards: [
          {
            title: "Currency Converter",
            alt: "Currency Converter project image",
            buttons: ["View App", "View Code"],
          },
          {
            title: "Expense Reimbursement",
            alt: "Expense Reimbursement project image",
            buttons: ["View App", "View Code"],
          },
          {
            title: "Fenix AI Assistant - Tax Reform",
            alt: "Fenix AI Assistant project cover",
            buttons: ["View Images"],
          },
          {
            title: "ServiceApp: Google Play",
            alt: "ServiceApp cover",
            buttons: ["View Images", "Open on Google Play"],
          },
          {
            title: "Swift Tracker",
            alt: "Swift Tracker cover",
            buttons: ["View Images", "Visit Website"],
          },
          {
            title: "From Draft to 1000",
            alt: "From Draft to 1000 cover",
            buttons: ["View Images"],
          },
        ],
      },
      "projeto-fenix.html": {
        title: "Fenix Assistant | Project Details",
        h1: "Fenix AI Assistant - Tax Reform",
        headings: ["About the Project"],
        paragraphs: [
          "Project developed at Unimake Software to support the Customer Technical Support team (STI) and other company departments in adapting to Brazil's Tax Reform.",
          "The system was built with <strong>TypeScript, Next.js, and Python</strong> as a RAG AI platform - Retrieval-Augmented Generation - that provides information about the company's software products and the Tax Reform.",
          "I also developed tools for the new tax model: XML Auditor, Rejection Error Translator, NCM X-Ray, Split Payment Simulator, and an Interactive Tax Reform Timeline.",
        ],
      },
      "projeto-serviceapp.html": {
        title: "ServiceApp | Project Details",
        h1: "ServiceApp: Google Play",
        headings: [
          "About the Project",
          "Technical Highlights & Challenges Solved:",
          "Tech Stack:",
        ],
        paragraphs: [
          "I developed and published Versa ServiceApp, a complete SaaS solution for service providers, using a modern hybrid architecture that combines web performance with native mobile capabilities.",
          "The project was built from scratch, from database design to Play Store deployment, solving real management needs such as service orders, financial control, and inventory.",
          "<strong>Available on the Play Store.</strong>",
        ],
        items: [
          "<strong>Hybrid Architecture:</strong> I used Next.js with Capacitor to create a single codebase that runs on both Web (Vercel) and Android (Native), optimizing development time.",
          "<strong>Backend & Security:</strong> Supabase (PostgreSQL) with Row Level Security (RLS) to ensure complete data isolation between users (multi-tenant) and Google OAuth authentication with native deep linking.",
          "<strong>Monetization:</strong> Complex integration with RevenueCat and Google Play Billing for recurring subscription management and real-time notifications via Google Cloud Pub/Sub.",
          "<strong>Integrations:</strong> NF-e issuing via REST API and dynamic PDF generation on the frontend.",
          "<strong>Frontend:</strong> React, Next.js, Tailwind CSS, TypeScript.",
          "<strong>Mobile:</strong> Capacitor, Android Studio.",
          "<strong>Backend/BaaS:</strong> Supabase (Auth, DB, Storage, Edge Functions).",
          "<strong>Infra:</strong> Vercel, Google Cloud Platform.",
          "<strong>APIs:</strong> RevenueCat, Focus NFe.",
        ],
      },
      "projeto-swifttracker.html": {
        title: "Swift Tracker | Project Details",
        h1: "Swift Tracker",
        headings: [
          "About the Project",
          "Main Features:",
          "Technologies Used:",
        ],
        paragraphs: [
          "I developed a robust full-stack application for real-time monitoring and forecasting of the Dollar exchange rate (USD/BRL). The system uses a decoupled architecture to ensure performance and scalability.",
          'The key differentiator is its intelligence core, which analyzes 41 macroeconomic indicators (including commodities, U.S. interest rates/Treasuries, global indexes, and cryptocurrencies) to project short-term trends.',
        ],
        items: [
          "<strong>Real-Time Monitoring:</strong> Integration with AwesomeAPI for live quotes, updated every 5 seconds.",
          '<strong>Weighted Algorithm:</strong> Python backend that collects and processes 41 market variables via Yahoo Finance to generate an "AI Target".',
          "<strong>Accuracy History:</strong> Automatic Supabase logging system that compares past forecasts with actual results, generating an auditable accuracy list.",
          "<strong>Interactive Dashboard:</strong> Modern dark-mode interface with charts and visual trend indicators.",
          "<strong>Frontend:</strong> Next.js, TypeScript, Tailwind CSS.",
          "<strong>Backend:</strong> Python, FastAPI, Pandas, yfinance.",
          "<strong>Infrastructure:</strong> Render (microservice hosting), Vercel (frontend).",
          "<strong>Database:</strong> Supabase (PostgreSQL) for historical logs and performance analysis.",
        ],
      },
      "projeto-dorascunhoaomil.html": {
        title: "From Draft to 1000 | Project Details",
        h1: "From Draft to 1000 (EdTech SaaS)",
        headings: ["About the Project", "Highlights and Features:"],
        paragraphs: [
          "I developed the full digital infrastructure for From Draft to 1000, an education SaaS platform focused on preparing students for ENEM. The project involved creating a scalable, secure architecture centered on a smooth and intuitive user experience.",
          "<strong>Technology Stack:</strong> Implementation using Next.js 16, Supabase (Auth, SSR, and Database), and TypeScript.",
        ],
        items: [
          "<strong>Subscription Management:</strong> Complete Stripe API integration for recurring payment processing and secure checkout.",
          "<strong>Data Dashboards:</strong> Development of dynamic line charts with Recharts to monitor student performance metrics.",
          "<strong>Security and Routes:</strong> Route protection logic via Middleware/Proxy to manage different access levels for students, teachers, and administrators.",
          "<strong>Interactive Interface:</strong> Landing page and dashboards with entrance animations and smooth transitions using Framer Motion.",
        ],
      },
    },
  },
};

const ptSnapshot = new Map();

function capturePortugueseContent() {
  const selectors = [
    ".nav-link",
    ".about-me-text h2",
    ".about-me-text p",
    ".projects h2",
    ".project-card h3",
    ".project-button",
    "footer p",
    ".details-container h1",
    ".project-full-description h3",
    ".project-full-description p",
    ".project-full-description li",
  ];

  document.querySelectorAll(selectors.join(",")).forEach((element) => {
    ptSnapshot.set(element, element.innerHTML);
  });

  document.querySelectorAll(".project-image").forEach((image) => {
    image.dataset.ptAlt = image.getAttribute("alt") || "";
  });
}

function setLanguageButtons(language) {
  document.querySelectorAll(".language-button").forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function restorePortuguese() {
  document.documentElement.lang = "pt-br";
  document.title = document.querySelector("title").dataset.ptTitle;

  ptSnapshot.forEach((content, element) => {
    element.innerHTML = content;
  });

  document.querySelectorAll(".project-image").forEach((image) => {
    image.setAttribute("alt", image.dataset.ptAlt || "");
  });
}

function applyEnglish() {
  const english = translations.en;
  const page = english.pages[pageName];

  document.documentElement.lang = english.lang;
  document.title = page?.title || document.title;

  const backLink = document.querySelector(".details-page")
    ? document.querySelector(".nav-link")
    : null;
  if (backLink) {
    backLink.innerHTML = english.common.backHome;
  }

  const footer = document.querySelector("footer p");
  if (footer) {
    footer.innerHTML = english.common.footer;
  }

  if (!page) {
    return;
  }

  if (pageName === "index.html") {
    document.querySelectorAll(".nav-menu .nav-link").forEach((link, index) => {
      if (page.nav[index]) {
        link.innerHTML = page.nav[index];
      }
    });

    const heroRole = document.querySelector(".about-me-text h2");
    const heroText = document.querySelector(".about-me-text p");
    const projectsTitle = document.querySelector(".projects h2");

    if (heroRole) heroRole.innerHTML = page.heroRole;
    if (heroText) heroText.innerHTML = page.heroText;
    if (projectsTitle) projectsTitle.innerHTML = page.projectsTitle;

    document.querySelectorAll(".project-card").forEach((card, index) => {
      const cardText = page.cards[index];
      if (!cardText) return;

      const title = card.querySelector("h3");
      const image = card.querySelector(".project-image");
      const buttons = card.querySelectorAll(".project-button");

      if (title) title.innerHTML = cardText.title;
      if (image) image.setAttribute("alt", cardText.alt);
      buttons.forEach((button, buttonIndex) => {
        if (cardText.buttons[buttonIndex]) {
          button.innerHTML = cardText.buttons[buttonIndex];
        }
      });
    });

    return;
  }

  const h1 = document.querySelector(".details-container h1");
  if (h1 && page.h1) h1.innerHTML = page.h1;

  document
    .querySelectorAll(".project-full-description h3")
    .forEach((heading, index) => {
      if (page.headings?.[index]) heading.innerHTML = page.headings[index];
    });

  document
    .querySelectorAll(".project-full-description p")
    .forEach((paragraph, index) => {
      if (page.paragraphs?.[index]) paragraph.innerHTML = page.paragraphs[index];
    });

  document
    .querySelectorAll(".project-full-description li")
    .forEach((item, index) => {
      if (page.items?.[index]) item.innerHTML = page.items[index];
    });
}

function setLanguage(language) {
  if (language === "en") {
    applyEnglish();
  } else {
    restorePortuguese();
  }

  localStorage.setItem("portfolioLanguage", language);
  setLanguageButtons(language);
}

function createLanguageSwitcher() {
  const navLogo = document.querySelector(".nav-logo");
  const existingSwitcher = document.querySelector(".language-switcher");
  if (existingSwitcher) {
    existingSwitcher.querySelectorAll(".language-button").forEach((button) => {
      button.addEventListener("click", () =>
        setLanguage(button.dataset.language),
      );
    });
    return;
  }

  if (!navLogo) return;

  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.setAttribute("aria-label", "Language selector");

  [
    { language: "en", label: "English" },
    { language: "pt", label: "Português" },
  ].forEach(({ language, label }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "language-button";
    button.dataset.language = language;
    button.textContent = label;
    button.addEventListener("click", () => setLanguage(language));
    switcher.appendChild(button);
  });

  navLogo.insertAdjacentElement("afterend", switcher);
}

capturePortugueseContent();
document.querySelector("title").dataset.ptTitle = document.title;
createLanguageSwitcher();
setLanguage(localStorage.getItem("portfolioLanguage") || "pt");

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
