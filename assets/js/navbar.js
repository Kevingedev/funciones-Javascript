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
                <li><a href="#sintaxis">SINTAXIS</a></li>
                <li><a href="../variables/variables.html">VARIABLES</a></li>
                <li><a href="#variables">TIPADO</a></li>
                <li><a href="#funciones-basicas">FUNCIONES BÁSICAS</a></li>
                <li><a href="#funciones-organicas">FUNCIONES ORGANICAS</a></li>
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
                link.addEventListener("click", function () {
                    hamburger.classList.remove("active");
                    navMenu.classList.remove("active");
                });
            });
        }
    }
});
