const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    // For each question handle click
    toggle.addEventListener('click', () =>{
        // Toggle class active for parent element
        toggle.parentNode.classList.toggle('active')
    })
});