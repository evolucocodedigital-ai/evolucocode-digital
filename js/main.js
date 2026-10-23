

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");



const formulario = document.getElementById("contactForm");
const boton = document.getElementById("btnEnviar");
const mensaje = document.getElementById("formMessage");

formulario.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!formulario.reportValidity()) return;

    boton.disabled = true;
    boton.textContent = "Enviando...";

    mensaje.style.display = "none";

    try {
        const datos = new FormData(formulario);

        const respuesta = await fetch(
            "https://formsubmit.co/ajax/TU_CORREO@ejemplo.com",
            {
                method: "POST",
                body: datos,
                headers: {
                    "Accept": "application/json"
                }
            }
        );

        const resultado = await respuesta.json();

        if (!respuesta.ok || resultado.success === false ||
            resultado.success === "false") {
            throw new Error("No se pudo enviar la solicitud");
        }

        mensaje.textContent =
            "¡Solicitud enviada correctamente! " +
            "Pronto nos pondremos en contacto contigo.";

        mensaje.className = "form-message success";
        mensaje.style.display = "block";

        formulario.reset();

    } catch (error) {
        mensaje.textContent =
            "No pudimos enviar tu solicitud. " +
            "Por favor, intenta nuevamente.";

        mensaje.className = "form-message error";
        mensaje.style.display = "block";

        console.error("Error al enviar:", error);

    } finally {
        boton.disabled = false;
        boton.textContent = "Enviar solicitud";
    }
});


menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});

document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });


const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


const contactForm =
    document.getElementById("contactForm");


const currentYear =
    document.getElementById("currentYear");

currentYear.textContent =
    new Date().getFullYear();



const observerOptions = {

    threshold: 0.15

};


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        observerOptions
    );



const animatedElements =
    document.querySelectorAll(
        ".service-card, " +
        ".template-card, " +
        ".project-card, " +
        ".process-item"
    );


animatedElements.forEach(element => {

    element.classList.add(
        "animate-on-scroll"
    );

    observer.observe(element);

});