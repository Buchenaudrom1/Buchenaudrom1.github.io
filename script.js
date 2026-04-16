document.addEventListener("DOMContentLoaded", () => {
    
    // 1. GESTION DU MENU ACTIF AU SCROLL
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".sidebar-nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        // On parcourt chaque section pour voir si on est dessus
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            
            // Le "- 150" permet d'activer le menu un peu avant que la section ne touche tout à fait le haut de l'écran
            if (scrollY >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        // On met à jour les liens du menu
        navLinks.forEach((link) => {
            // On enlève la couleur bleue de base sur tous les liens
            link.classList.remove("active");
            
            // Si le lien correspond à la section actuelle, on lui ajoute la classe 'active'
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

});
