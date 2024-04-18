var animatedH2s = document.querySelectorAll('.animated-h2');

// Add event listeners to each element
animatedH2s.forEach(function(h2) {
    h2.addEventListener('mouseover', function() {
        // On hover, set the underline width to 100%
        this.style.setProperty('--underline-width', '100%');
    });

    h2.addEventListener('mouseout', function() {
        // On mouseout, set the underline width back to 0
        this.style.setProperty('--underline-width', '0');
    });
});