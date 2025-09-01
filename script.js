// Viser en velkomstmelding når siden er lastet
window.addEventListener("DOMContentLoaded", function() {
    console.log("Klassens nettside er klar!");
});

// Enkel smooth scroll for navigasjonslenker
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').replace('#', '');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});