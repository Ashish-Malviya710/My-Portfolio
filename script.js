// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 80
    });
}

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

// Navbar scroll & Scroll-down indicator
var navbar = document.getElementById('mainNav');
var backToTop = document.getElementById('backToTop');
var scrollDownEl = document.querySelector('.scroll-down');

window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    backToTop.style.display = window.scrollY > 400 ? 'flex' : 'none';
    
    if (scrollDownEl) {
        scrollDownEl.style.opacity = window.scrollY > 60 ? '0' : '1';
        scrollDownEl.style.pointerEvents = window.scrollY > 60 ? 'none' : 'auto';
    }
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
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
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
function animateSkillBars() {
    document.querySelectorAll('.progress-bar[data-width]').forEach(function (bar) {
        var w = bar.dataset.width || bar.getAttribute('data-width');
        if (w) {
            bar.style.width = w + '%';
        }
    });
}
animateSkillBars();

var skillSection = document.getElementById('skills');
if (skillSection) {
    var skillObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });
    skillObserver.observe(skillSection);
}


// ===============================
// 🚀 CONTACT FORM (EMAILJS INTEGRATION)
// ===============================
var contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (contactForm.checkValidity()) {
            var submitBtn = contactForm.querySelector('button[type="submit"]');
            var originalBtnHtml = submitBtn ? submitBtn.innerHTML : 'Send Message';

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
            }

            let name = document.getElementById("nameInput").value.trim();
            let email = document.getElementById("emailInput").value.trim();
            let subject = document.getElementById("subjectInput").value;
            let message = document.getElementById("messageInput").value.trim();

            let templateParams = {
                from_name: name,
                from_email: email,
                reply_to: email,
                subject: subject,
                message: message
            };

            emailjs.send("service_h1zrxkw", "template_glri3ds", templateParams)
                .then(function (response) {
                    var toastEl = document.getElementById('successToast');
                    if (toastEl) {
                        new bootstrap.Toast(toastEl).show();
                    }

                    contactForm.reset();
                    contactForm.classList.remove('was-validated');
                })
                .catch(function (error) {
                    alert("❌ Failed to send message. Please check your internet connection or try again later.");
                    console.error("EmailJS Error:", error);
                })
                .finally(function () {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalBtnHtml;
                    }
                });

        } else {
            contactForm.classList.add('was-validated');
        }
    });
}