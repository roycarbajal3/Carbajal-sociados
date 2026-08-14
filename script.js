// =====================================
// MENÚ RESPONSIVE
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("open");

});


// Cerrar menú al seleccionar una opción

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

    });

});


// =====================================
// FORMULARIO DE CONTACTO
// =====================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const nombre =
        document.querySelector(
            'input[name="nombre"]'
        ).value;


    const telefono =
        document.querySelector(
            'input[name="telefono"]'
        ).value;


    const mensaje =
        document.querySelector(
            'textarea[name="mensaje"]'
        ).value;


    const texto =
        `Hola, soy ${nombre}.

Mi teléfono es:
${telefono}

Deseo realizar una consulta jurídica:

${mensaje}`;


    const whatsappURL =
        "https://wa.me/51948489482?text=" +
        encodeURIComponent(texto);


    window.open(
        whatsappURL,
        "_blank"
    );

});