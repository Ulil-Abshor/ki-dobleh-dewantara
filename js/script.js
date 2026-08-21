//toggle class active menu
const navbarnav = document.querySelector('.navbar-nav');

//ketika menu di klik
document.querySelector('#menu').onclick = (e) => {
    navbarnav.classList.toggle('active');
    e.preventDefault();
};

// toggle class active search
const searchform = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchform.classList.toggle('active');
    searchbox.focus();
    e.preventDefault();
}

// Fungsi search website
function lakukanPencarian() {
    const keyword = searchbox.value.trim().toLowerCase();

    if (keyword === '') {
        return;
    }

    // Ambil semua section di website
    const sections = document.querySelectorAll('section');

    let ditemukan = false;

    sections.forEach(function(section) {
        if (!ditemukan && section.textContent.toLowerCase().includes(keyword)) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            ditemukan = true;
        }
    });

    // Jika tidak ditemukan
    if (!ditemukan) {
        alert('Kata "' + keyword + '" tidak ditemukan.');
    }
}


// Tekan Enter untuk mencari
searchbox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        lakukanPencarian();
    }
});


// Klik ikon 🔍 untuk mencari
const searchIcon = document.querySelector('.search-form label');

searchIcon.addEventListener('click', function(e) {
    e.preventDefault();
    lakukanPencarian();
});

//klik di  luar elemen
const menu = document.querySelector('#menu');
const sb = document.querySelector('#search-button')

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }

    if(!sb.contains(e.target) && !searchform.contains(e.target)) {
        searchform.classList.remove('active');
    }
});

// Form kontak ke WhatsApp
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.querySelector('#nama').value;
    const email = document.querySelector('#email').value;
    const pesan = document.querySelector('#pesan').value;

    // nomer whatsapp
    const nomorWhatsApp = '6285601642505';

    const text =
        `Halo, saya ${nama}.%0A` +
        `Email: ${email}%0A` +
        `Pesan: ${pesan}.%0A%0A` +
        'Terima Kasih';

    const url = `https://wa.me/${nomorWhatsApp}?text=${text}`;

    window.open(url, '_blank');
});