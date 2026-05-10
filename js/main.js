document.addEventListener('DOMContentLoaded', () => {
    console.log("Site de l'EFREI chargé !");

    // 1. Interactivité : Menu de navigation actif dynamique
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        if(item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    // 2. Validation de Formulaire (Page Contact)
    const contactForm = document.getElementById('main-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche l'envoi par défaut (Vu en cours)
            
            let isValid = true;
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Simple validation email
            if (!email.value.includes('@')) {
                alert("Veuillez entrer un email valide.");
                isValid = false;
            }

            if (isValid) {
                // Simulation d'envoi asynchrone (Fetch concept)
                const btn = this.querySelector('button');
                btn.textContent = "Envoi en cours...";
                btn.disabled = true;

                setTimeout(() => {
                    alert(`Merci ${document.getElementById('nom').value}, votre message a été envoyé avec succès !`);
                    contactForm.reset();
                    btn.textContent = "Envoyer le message";
                    btn.disabled = false;
                }, 1500);
            }
        });
    }

    // 3. Animation au scroll (Interactivité avancée)
    const sections = document.querySelectorAll('section');
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.6s ease-out";
        observer.observe(section);
    });
});