// Add any JavaScript if needed
// Example: Automatic scrolling to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            behavior: 'smooth',
            top: section.offsetTop
        });
    });
});