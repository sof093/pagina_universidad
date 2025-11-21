document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------
    // Menú responsive
    // -------------------------------
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("activo");
        });
    }

    // -------------------------------
    // Información de las tarjetas
    // -------------------------------
    const infoSection = document.getElementById("info-section");
    const infoContent = document.getElementById("info-content");

    const cardsInfo = [
        `<h2>Título card 1</h2><p>Descripción completa.</p>`,
        `<h2>Título card 2</h2><p>Texto detallado.</p>`,
        `<h2>Título card 3</h2><p>Información extra.</p>`,
        `<h2>Título card 4</h2><p>Datos a mostrar.</p>`
    ];

    const cards = document.querySelectorAll(".card");

    if (infoSection && infoContent && cards.length > 0) {
        cards.forEach((card, index) => {
            card.addEventListener("click", () => {
                infoContent.innerHTML = cardsInfo[index];
                infoSection.style.display = "block";
                infoSection.scrollIntoView({ behavior: "smooth" });
            });
        });
    }

    // -------------------------------
    // Animación de secciones al hacer scroll
    // -------------------------------
    const secciones = document.querySelectorAll('.seccion');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.2 });

    secciones.forEach(sec => observer.observe(sec));

    // -------------------------------
    // Navegación lateral por secciones
    // -------------------------------
    const dots = document.querySelectorAll('.side-nav .dot');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const activeDot = document.querySelector(`.side-nav .dot[href="#${id}"]`);
            if (entry.isIntersecting) {
                dots.forEach(d => d.style.backgroundColor = '#2c5f2d'); // reset
                if (activeDot) activeDot.style.backgroundColor = '#7f1f27'; // dot activo
            }
        });
    }, { threshold: 0.5 });

    secciones.forEach(sec => sectionObserver.observe(sec));
});
