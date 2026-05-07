window.addEventListener('scroll', () => {
    const arrow = document.querySelector('.scroll-arrow');
    
    if (window.scrollY > 50) {
        if(arrow) arrow.style.opacity = '0';
    } else {
        if(arrow) arrow.style.opacity = '1';
    }

    const images = document.querySelectorAll('.fade-in-img, .zoom-img');
    images.forEach(img => {
        const rect = img.parentElement.getBoundingClientRect();
        if (rect.top <= 0) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
});

document.getElementById('nextTrigger').addEventListener('click', () => {
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = "Restaurant.html";
    }, 1000);
});