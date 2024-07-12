// Smooth scrolling per ancoraggi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Funzione per rilevare se un elemento è visibile nel viewport
function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Aggiungi la classe 'fade-in' agli elementi visibili
function handleScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        if (isVisible(element)) {
            element.classList.add('fade-in');
        }
    });
}

// Ascolta l'evento di scroll
window.addEventListener('scroll', handleScroll);

// Attiva l'animazione per gli elementi visibili al caricamento della pagina
document.addEventListener('DOMContentLoaded', handleScroll);
