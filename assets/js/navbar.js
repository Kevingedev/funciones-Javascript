document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById("navbar-container");

    if (navbarContainer) {
        navbarContainer.innerHTML = `
        <nav>
            <button class="hamburger" id="hamburger" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul id="nav-menu">
                <li><a href="#">INICIO</a></li>
                <li><a href="sintaxis.html">SINTAXIS</a></li>
                <li><a href="../variables/variables.html">VARIABLES</a></li>
                <li><a href="../variables-constantes/tipado-dinamico.html">TIPADO</a></li>
                <li><a href="funciones-basicas.html">FUNCIONES BÁSICAS</a></li>
                <li><a href="../funciones-organicas/funciones-organicas.html">FUNCIONES ORGANICAS</a></li>
            </ul>
        </nav>
        `;

        // Hamburger menu functionality
        const hamburger = document.getElementById("hamburger");
        const navMenu = document.getElementById("nav-menu");

        if (hamburger && navMenu) {
            hamburger.addEventListener("click", function () {
                hamburger.classList.toggle("active");
                navMenu.classList.toggle("active");
            });

            // Close menu when clicking on a link
            const navLinks = document.querySelectorAll("#nav-menu a");
            navLinks.forEach(link => {
                // Highlight active link
                if (link.href === window.location.href) {
                    link.classList.add("nav-active");
                }

                link.addEventListener("click", function () {
                    hamburger.classList.remove("active");
                    navMenu.classList.remove("active");

                    // Update active state on click (for anchor links on same page)
                    navLinks.forEach(l => l.classList.remove("nav-active"));
                    this.classList.add("nav-active");
                });
            });
        }
    }
});
