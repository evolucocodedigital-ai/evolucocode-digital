
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("contactForm");
    const boton = document.getElementById("btnEnviar");
    const mensaje = document.getElementById("formMessage");

    if (!formulario || !boton || !mensaje) return;

    const contenidoOriginal = boton.innerHTML;

    formulario.addEventListener("submit", async function (event) {

        // Evita que el navegador cambie de página
        event.preventDefault();

        if (!formulario.reportValidity()) return;

        // Estado de envío
        boton.disabled = true;
        boton.textContent = "Enviando solicitud...";

        mensaje.style.display = "none";
        mensaje.textContent = "";

        try {

            const datos = new FormData(formulario);

            // Endpoint AJAX de FormSubmit
            const respuesta = await fetch(
                "https://formsubmit.co/ajax/evolucocodedigital@gmail.com",
                {
                    method: "POST",
                    body: datos,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (!respuesta.ok) {
                throw new Error("Error HTTP: " + respuesta.status);
            }

            const resultado = await respuesta.json();

            if (
                resultado.success !== true &&
                resultado.success !== "true"
            ) {
                throw new Error(
                    resultado.message || "No se confirmó el envío"
                );
            }

            // Mostrar confirmación
            mensaje.textContent =
                "¡Solicitud enviada correctamente! " +
                "Gracias por contactar a Evolucocode Digital. " +
                "Pronto nos pondremos en contacto contigo.";

            mensaje.className = "form-message success";
            mensaje.style.display = "block";

            // Limpiar campos
            formulario.reset();

        } catch (error) {

            console.error("Error al enviar formulario:", error);

            mensaje.textContent =
                "No fue posible enviar tu solicitud. " +
                "Por favor, intenta nuevamente.";

            mensaje.className = "form-message error";
            mensaje.style.display = "block";

        } finally {

            // Restaurar botón
            boton.disabled = false;
            boton.innerHTML = contenidoOriginal;

        }

    });

});
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");



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