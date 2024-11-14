// Smooth scrolling for internal links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// List of sections to include
const sections = ['home', 'about', 'events', 'join', 'sdgs', 'resources', 'contact'];

sections.forEach(section => {
    fetch(`sections/${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(section).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${section}:`, error));
});
