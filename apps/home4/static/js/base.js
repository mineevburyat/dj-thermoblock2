// Split Screen Interaction
const splitScreen = document.getElementById('splitScreen');
const splitDivider = document.getElementById('splitDivider');
let isDragging = false;

splitDivider.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.body.style.cursor = 'col-resize';
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const rect = splitScreen.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 10), 90);
    
    splitScreen.style.setProperty('--split-position', `${percentage}%`);
    splitScreen.querySelector('.split-left').style.width = `${percentage}%`;
    splitScreen.querySelector('.split-right').style.width = `${100 - percentage}%`;
    splitScreen.querySelector('.split-right').style.left = `${percentage}%`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'default';
});

// Touch events for mobile
splitDivider.addEventListener('touchstart', (e) => {
    isDragging = true;
    e.preventDefault();
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    const rect = splitScreen.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 10), 90);
    
    splitScreen.style.setProperty('--split-position', `${percentage}%`);
    splitScreen.querySelector('.split-left').style.width = `${percentage}%`;
    splitScreen.querySelector('.split-right').style.width = `${100 - percentage}%`;
    splitScreen.querySelector('.split-right').style.left = `${percentage}%`;
});

document.addEventListener('touchend', () => {
    isDragging = false;
});

// Step Buttons Animation
document.querySelectorAll('.step-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const step = this.getAttribute('data-step');
        alert(`Запуск анимации для шага ${step}. В реальном лендинге здесь будет воспроизводиться видео или GIF.`);
        
        // Visual feedback
        const stepElement = document.getElementById(`step${step}`);
        stepElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            stepElement.style.transform = '';
        }, 300);
    });
});

// Video Placeholder
document.getElementById('videoPlaceholder').addEventListener('click', function() {
    alert('В реальном лендинге здесь будет запускаться видео-презентация технологии ThermoBlock.');
    
    // Visual feedback
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
        this.style.transform = '';
    }, 200);
});

// Form Submission
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    // Simple validation
    if (!name || !phone) {
        alert('Пожалуйста, заполните обязательные поля: Имя и Телефон');
        return;
    }
    
    // In a real application, here would be an AJAX request to the server
    alert(`Спасибо, ${name}! Ваша заявка принята. Наш технический специалист свяжется с вами в ближайшее время по телефону ${phone}.`);
    
    // Reset form
    this.reset();
    
    // Scroll to top for better UX
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Chatbot Button
document.getElementById('chatbotBtn').addEventListener('click', function() {
    alert('Добрый день! Я виртуальный помощник ThermoBlock. Ответьте на 2 вопроса, и я помогу вам избежать 5 типичных ошибок при выборе технологии строительства.\n\n1. Как часто вы планируете бывать на стройке?\n2. Разбираетесь ли вы в схемах армирования стен?');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize split screen position
window.addEventListener('DOMContentLoaded', () => {
    splitScreen.style.setProperty('--split-position', '50%');
    splitScreen.querySelector('.split-left').style.width = '50%';
    splitScreen.querySelector('.split-right').style.width = '50%';
    splitScreen.querySelector('.split-right').style.left = '50%';
    
    // Bootstrap tooltip initialization (if needed)
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.08)';
    }
});