document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});

function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const btn = document.querySelector('.mode-toggle');
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', handleScroll);

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message && /\S+@\S+\.\S+/.test(email)) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
        document.querySelector('.submit-btn').classList.add('success');
        setTimeout(() => {
            document.querySelector('.submit-btn').classList.remove('success');
        }, 2000);
    } else {
        alert('Please fill all fields correctly!');
    }
});

function showSkillDetail(skill) {
    alert(`Mastered ${skill} during YCSAS Internship!\n\nKey Learnings:\n• Advanced concepts\n• Best practices\n• Real-world applications`);
}

function showProjectModal(project) {
    alert(`📂 ${project.toUpperCase()} PROJECT\n\n✅ GitHub: https://github.com/gitnick-7?tab=repositories \n✅ Tech Stack: HTML, CSS, JavaScript\n\nBuilt during YCSAS Internship!`);
}

function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}

handleScroll();
