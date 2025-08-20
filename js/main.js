document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation on scroll
    const fadeInElements = document.querySelectorAll('.fade-in');

    if (fadeInElements.length > 0) {
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // 10% of the item must be visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once it's visible
                }
            });
        }, observerOptions);

        fadeInElements.forEach(el => {
            observer.observe(el);
        });
    }
});
