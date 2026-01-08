// Основной JavaScript файл

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('ThermoBlock website loaded');
    
    // Инициализация всех компонентов
    initNavbar();
    initModals();
    initForms();
    initAnimations();
    initChatbot();
    
    // Отслеживание событий
    trackUserActions();
});

// Навигация
function initNavbar() {
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Активный пункт меню при скролле
    window.addEventListener('scroll', function() {
        const currentPosition = window.scrollY + 100;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Плавная прокрутка
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Закрываем мобильное меню
                const navbarCollapse = document.querySelector('.navbar-collapse.show');
                if (navbarCollapse) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            }
        });
    });
}

// Модальные окна
function initModals() {
    // Обработка успешной отправки форм
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.addEventListener('hidden.bs.modal', function() {
            // Сброс форм при закрытии
            const forms = document.querySelectorAll('form');
            forms.forEach(form => form.reset());
        });
    }
}

// Формы
function initForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Валидация
            if (!validateForm(this)) {
                return;
            }
            
            // Имитация отправки
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Отправка...';
            submitBtn.disabled = true;
            
            // Здесь будет AJAX запрос
            setTimeout(() => {
                // Показываем успешное сообщение
                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
                
                // Сбрасываем форму
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    });
}

// Валидация формы
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('is-invalid');
            isValid = false;
            
            // Убираем ошибку при вводе
            field.addEventListener('input', function() {
                this.classList.remove('is-invalid');
            });
        }
    });
    
    return isValid;
}

// Анимации
function initAnimations() {
    // Lazy loading для изображений
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Чатбот
function initChatbot() {
    // Инициализация уже в компоненте чатбота
}

// Отслеживание действий пользователя
function trackUserActions() {
    // Открытие модального окна калькулятора
    const calculatorButtons = document.querySelectorAll('[data-bs-target="#calculatorModal"]');
    calculatorButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Calculator opened');
            // Здесь можно добавить аналитику
        });
    });
    
    // Прокрутка к секциям
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Section ${entry.target.id} viewed`);
                // Здесь можно добавить аналитику
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => observer.observe(section));
}

// Утилиты
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Экспорт для использования в других файлах
window.ThermoBlock = {
    initNavbar,
    initModals,
    initForms,
    initAnimations,
    initChatbot,
    debounce
};