// List of sections to include
const sections = ['home', 'about', 'events', 'join', 'sdgs', 'resources', 'contact'];

// Load each section into the corresponding div
sections.forEach(section => {
    fetch(`sections/${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(section).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${section}:`, error));
});

// Create bubbles on mouse move
document.addEventListener('mousemove', function(e) {
    createBubble(e.pageX, e.pageY);
});

function createBubble(x, y) {
    // Create a bubble element
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);

    // Set the position of the bubble
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    // Set random size for variation
    const size = Math.random() * 10 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Set random animation duration
    bubble.style.animationDuration = `${Math.random() * 0.5 + 0.8}s`;

    // Remove the bubble after the animation ends
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
