document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------
  // Menú responsive
  // -------------------------------
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  if(toggle && menu) toggle.addEventListener("click", () => menu.classList.toggle("activo"));

  // -------------------------------
  // Modal tarjetas
  // -------------------------------
  const infoSection = document.getElementById("info-section");
  const infoContent = document.getElementById("info-content");

  // Contenido para cada tarjeta (asegúrate que coincida con tus tarjetas)
  const cardsInfo = [
    `<h2>Pinturas y creación artística</h2><p>Los estudiantes elaboraron obras inspiradas en pintores reconocidos, fomentando la creatividad y apreciación del arte.</p>`,
    `<h2>Torneo de fútbol femenil</h2><p>Participación de alumnas en encuentros deportivos que fortalecen el trabajo en equipo.</p>`,
    `<h2>Torneo de fútbol varonil</h2><p>Competencias amistosas entre estudiantes y docentes que promueven hábitos saludables.</p>`,
    `<h2>Simulador "Conozca sus números"</h2><p>Actividad en colaboración con Caja Alianza para el desarrollo de capacidades financieras.</p>`,
    `<h2>Cumbre agroalimentaria</h2><p>Conferencias sobre producción agrícola sustentable y tecnologías del sector.</p>`,
    `<h2>Concurso de Catrinas</h2><p>Dulce María Reyes obtuvo el tercer lugar en la edición 2025.</p>`,
    `<h2>Encuentro Fiscal</h2><p>Participación en el 14° Encuentro Fiscal Universitario.</p>`,
    `<h2>Hackathon 2025</h2><p>Proyectos innovadores en programación, diseño y emprendimiento.</p>`,
    `<h2>Alumnos destacados</h2><p>Reconocimientos por participación sobresaliente en actividades tecnológicas.</p>`,
    `<h2>Visita al Banco de México</h2><p>Recorrido guiado para conocer el funcionamiento del sistema financiero.</p>`,
    `<h2>Aplicación de conocimientos</h2><p>Vinculación de teoría con práctica en un entorno profesional.</p>`,
    `<h2>Entrega de reconocimientos</h2><p>Reconocimientos por participación destacada en eventos académicos.</p>`,
    `<h2>Prácticas de inglés</h2><p>Presentaciones culturales y gastronómicas, trabajo en equipo e idioma.</p>`
  ];

  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      infoContent.innerHTML = `<button class="close-modal">×</button>${cardsInfo[index]}`;
      infoSection.style.display = "flex";

      document.querySelector(".close-modal").addEventListener("click", () => {
        infoSection.style.display = "none";
      });
    });
  });

  infoSection.addEventListener("click", e => { if(e.target === infoSection) infoSection.style.display = "none"; });

  // -------------------------------
  // Animación de secciones al hacer scroll
  // -------------------------------
  const secciones = document.querySelectorAll('.seccion');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.2 });
  secciones.forEach(sec => observer.observe(sec));

  // -------------------------------
  // Swiper vertical
  // -------------------------------
  const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: false,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    mousewheel: true,
  });

});
