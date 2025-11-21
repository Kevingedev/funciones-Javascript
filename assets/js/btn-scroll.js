// Boton para scroll
// Autor: Kevin Gerardo Ruiz
// Descripcion: Es un boton para volver al inicio de la pagina

// Back to top button functionality
const btnBackToTop = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnBackToTop.style.display = "block";
    } else {
        btnBackToTop.style.display = "none";
    }
}

btnBackToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});