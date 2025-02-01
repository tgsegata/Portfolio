// TASK: Scale the figures using js

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hoverOnJs');

    elements.forEach(element => {
        // to add the effect
        element.addEventListener('mouseover', function() {
            this.classList.add('scale-up');
        });
        // to rmeove it
        element.addEventListener('mouseout', function() {
            this.classList.remove('scale-up');
        });
    });
});



