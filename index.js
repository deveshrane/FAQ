const faqToggle = document.querySelectorAll('.faq-toggle');

faqToggle.forEach(btn => {
    btn.addEventListener('click', (e) => {
        btn.parentNode.classList.toggle('active');
    });
}, false);