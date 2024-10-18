const socialIcons = document.querySelectorAll('.social-icon');


socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('active'); 
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.classList.remove('active'); 
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    document.getElementById('contactForm').reset();

    
    document.getElementById('responseMessage').style.display = 'block';
});