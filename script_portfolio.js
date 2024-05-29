// Ottieni tutti i contenitori dei progetti
const projects = document.querySelectorAll('.project');

// Per ogni contenitore del progetto, calcola l'altezza del contenitore del testo e aggiungi un margine superiore al pulsante
projects.forEach(project => {
    const textContainer = project.querySelector('p');
    const button = project.querySelector('button');

    if (textContainer && button) {
        const textContainerHeight = textContainer.clientHeight;
        const buttonMargin = textContainerHeight + 20; // Aggiungi spazio tra il testo e il pulsante

        button.style.marginTop = buttonMargin + 'px';
    }
});
