// 1. GESTION DU MENU MOBILE (Optionnel selon besoins)
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

// 2. SCROLL REVEAL ANIMATION
// Cette fonction ajoute la classe 'active' aux éléments au fur et à mesure du scroll
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

// 3. BOUTON RETOUR EN HAUT
const backToTopBtn = document.querySelector("#back-to-top");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 4. NAVIGATION ACTIVE LINK HIGHLIGHTING
// Change la couleur du lien dans le menu en fonction de la section visible
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .nav-container ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});
