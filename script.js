const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;

    const pink = document.querySelector('.pink');
    const purple = document.querySelector('.purple');

    if (pink && purple) {
        pink.style.transform = `translate(${x * 80}px, ${y * 80}px)`;
        purple.style.transform = `translate(${x * -80}px, ${y * -80}px)`;
    }
});