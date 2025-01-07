document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const closeDrawer = document.querySelector('.close-drawer');

    // Toggle drawer
    hamburger.addEventListener('click', () => {
        navLinks.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when drawer is open
    });

    // Close drawer with X button
    closeDrawer.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });

    // Close drawer when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close drawer when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = '#1a2f5f';
        } else {
            navbar.style.background = '#244184';
        }
    });
});

// Inisialisasi EmailJS
(function() {
    emailjs.init("BzMlsxGxuRe1vo9a-"); // Ganti dengan public key EmailJS Anda
})();

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Tampilkan loading state
        const submitBtn = document.querySelector('.send-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Persiapkan parameter untuk EmailJS
        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            to_email: 'anthiskep@gmail.com'
        };

        // Kirim email menggunakan EmailJS
        emailjs.send('service_ha6ejlx', 'template_dnvu4qn', templateParams)
            .then(function(response) {
                if(response.status === 200) {
                    // Redirect ke halaman sent setelah berhasil
                    window.location.href = '../SENT/SENT SECTION.html';
                } else {
                    alert('Terjadi kesalahan. Silakan coba lagi.');
                }
            })
            .catch(function(error) {
                alert('Terjadi kesalahan: ' + error.text);
            })
            .finally(() => {
                // Kembalikan tombol ke state awal
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
});