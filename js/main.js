

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