// On sélectionne toutes les sections et tous les liens du menu
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

// On écoute l'événement de défilement (scroll) de la page
window.addEventListener('scroll', () => {
    let current = '';

    // Pour chaque section, on vérifie si elle est visible à l'écran
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Si on a défilé jusqu'à cette section (avec une marge de 100px pour le menu)
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    // On met à jour la classe "active" dans le menu
    navLinks.forEach(link => {
        link.classList.remove('active'); // On retire l'effet sur tous les liens
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active'); // On l'ajoute sur la section visible
        }
    });
});