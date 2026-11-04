
let menu = document.getElementById("menu");
let menuMovil = document.getElementById("menuMovil");
let formulario = document.getElementById("formulario");
let modal = document.getElementById("modal");
let cerrarModal = document.getElementById("cerrarModal");

menuMovil.addEventListener("click", function() {
    menu.classList.toggle("activo");
});

document.querySelectorAll(".menu a").forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        menu.classList.remove("activo");
    });
});

window.addEventListener("scroll", function() {
    let header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    modal.classList.add("activo");
    formulario.reset();
});

cerrarModal.addEventListener("click", function() {
    modal.classList.remove("activo");
});

modal.addEventListener("click", function(evento) {
    if (evento.target === modal) {
        modal.classList.remove("activo");
    }
});

let elementos = document.querySelectorAll(".tarjeta, .nosotros, .banner, .contacto-info");

elementos.forEach(function(elemento) {
    elemento.classList.add("revelar");
});

let observador = new IntersectionObserver(function(entradas) {
    entradas.forEach(function(entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observador.unobserve(entrada.target);
        }
    });
});

elementos.forEach(function(elemento) {
    observador.observe(elemento);
});
