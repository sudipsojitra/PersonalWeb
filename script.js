// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeatson scroll use this
        else {
            sec.classList.remove('show-animate');
        }


    });
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links(scrolls)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', (this.innerHeight + this.scrollY + 1) >= document.scrollingElement.scrollHeight);
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyzJcBo6U04T9D8v-gJcRv9cw8SA1EIGtYJNOaCYn-6C82fqQt1w8e0O59nMKuXlw1a/exec'
const form = document.forms['submitForm']
const msg = document.getElementById('msg')
const submitButton = document.getElementById('submitBtn');
const loader = document.getElementById('loader');

form.addEventListener('submit', e => {
    e.preventDefault()
    submitButton.disabled = true;
    loader.style.display = 'inline-block';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })

    .then(response => {
            msg.innerHTML = "Message send successfully"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 4000)
            submitButton.disabled = false;
            loader.style.display = 'none';
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

var moon = document.getElementById('iconDark');
var favIcon = document.getElementById('favIcon');
moon.onclick = function() {
    document.body.classList.toggle("light-theam");
    if (document.body.classList.contains("light-theam")) {
        moon.innerHTML = 'Dark Mode';
        favIcon.src = "assets/img/alight.png";
    } else {
        moon.innerHTML = 'Light mode';
        favIcon.src = "assets/img/favicon.png";

    }
}

ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 1500,
    delay: 100
});
// ScrollReveal().reveal('.navbar, .logo-img, .logo', { reset: false, origin: 'right' });
// ScrollReveal().reveal('.logo-img, .logo', { reset: false, origin: 'left' });


ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.home-content, .about-content, .message, .submit, .bachelor-projects', { origin: 'bottom' });
ScrollReveal().reveal('.heading-name, .about-img, .education-column-left, .coding-skills, .firstname, .mobile-no, .company-projects', { origin: 'left' });
ScrollReveal().reveal('.education-column-right, .professional-skills, .email, .email-sub, .master-projects', { origin: 'right' });