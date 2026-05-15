// Typing
var words = ['full stack apps.', 'web experiences.', 'software solutions.', 'clean interfaces.', 'real-world products.'];
var wordIdx = 0, charIdx = 0, isDeleting = false;
var typingEl = document.getElementById('typingText');
function type() {
    var word = words[wordIdx];
    typingEl.textContent = word.substring(0, isDeleting ? --charIdx : ++charIdx);
    if (!isDeleting && charIdx === word.length) { setTimeout(function () { isDeleting = true; type(); }, 1800); return; }
    if (isDeleting && charIdx === 0) { isDeleting = false; wordIdx = (wordIdx + 1) % words.length; }
    setTimeout(type, isDeleting ? 40 : 90);
}
type();

// Navbar scroll
var navbar = document.getElementById('mainNav');
var backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    backToTop.style.display = window.scrollY > 500 ? 'flex' : 'none';
    var scrollPos = window.scrollY + 120;
    document.querySelectorAll('section[id]').forEach(function (sec) {
        var top = sec.offsetTop, height = sec.offsetHeight, id = sec.getAttribute('id');
        var link = document.querySelector('.nav-link[href="#' + id + '"]');
        if (link) {
            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-link').forEach(function (l) { l.classList.remove('active'); });
                link.classList.add('active');
            }
        }
    });
});
backToTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// Close mobile menu
document.querySelectorAll('#navMenu .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        var collapse = bootstrap.Collapse.getInstance(document.getElementById('navMenu'));
        if (collapse) collapse.hide();
    });
});

// Project Filtering
document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach(function (card) {
            card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
        });
    });
});

// Counter
var statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-count]').forEach(function (el) {
                var count = 0, target = parseInt(el.dataset.count);
                var interval = setInterval(function () {
                    count++;
                    el.textContent = count + '+';
                    if (count >= target) clearInterval(interval);
                }, 120);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
statsObserver.observe(document.getElementById('aboutStats'));

// Skill Bars
document.querySelectorAll('.progress-bar[data-width]').forEach(function (bar) {
    bar.style.width = '0%';
    bar.style.transition = 'width 1.2s ease-in-out';
});
var skillObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            document.querySelectorAll('.progress-bar[data-width]').forEach(function (bar) {
                bar.style.width = bar.dataset.width + '%';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
skillObserver.observe(document.getElementById('skills'));


// ===============================
// 🚀 UPDATED CONTACT FORM (EMAILJS) small backend 
// ===============================
var contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (contactForm.checkValidity()) {

        let name = document.getElementById("nameInput").value;
        let email = document.getElementById("emailInput").value;
        let subject = document.getElementById("subjectInput").value;
        let message = document.getElementById("messageInput").value;

        let templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        emailjs.send("service_h1zrxkw", "template_glri3ds", templateParams)
            .then(function (response) {

                // Show success toast
                new bootstrap.Toast(document.getElementById('successToast')).show();

                contactForm.reset();
                contactForm.classList.remove('was-validated');

            }, function (error) {
                alert("❌ Failed to send message. Try again!");
                console.log(error);
            });

    } else {
        contactForm.classList.add('was-validated');
    }
});