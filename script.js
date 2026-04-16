document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================
       1. GESTION DU MENU ACTIF AU SCROLL
       ========================================================== */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".sidebar-nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        // Identifie la section visible à l'écran
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            // Décalage pour activer le menu un peu avant
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        // Met à jour la surbrillance dans le menu de gauche
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    /* ==========================================================
       2. GESTION DU BOUTON "RETOUR EN HAUT"
       ========================================================== */
    const backToTopBtn = document.getElementById("back-to-top");

    // Vérifie si le bouton existe bien dans le HTML
    if (backToTopBtn) {
        
        // Affiche ou cache le bouton selon le défilement
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "flex"; // Affiche le bouton
            } else {
                backToTopBtn.style.display = "none"; // Cache le bouton
            }
        });

        // Action au clic : remonte tout en haut en douceur
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
