       document.addEventListener('DOMContentLoaded', function() {
            // Обработка формы консультации
            document.getElementById('consultationForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Простая имитация отправки
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Отправка...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в течение 15 минут.');
                    
                    // Закрываем модальное окно
                    const modal = bootstrap.Modal.getInstance(document.getElementById('consultationModal'));
                    if (modal) {
                        modal.hide();
                    }
                    
                    // Сбрасываем форму
                    this.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            });
            
            // Анимация при скролле
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-up');
                    }
                });
            }, observerOptions);
            
            // Наблюдаем за элементами с анимацией
            document.querySelectorAll('.benefit-item, .path-card').forEach(el => {
                observer.observe(el);
            });
            
            // Отслеживание кликов по путям (для аналитики)
            document.querySelectorAll('a[href^="/"]').forEach(link => {
                link.addEventListener('click', function(e) {
                    // В реальном проекте здесь будет отправка в аналитику
                    console.log('Переход в приложение:', this.getAttribute('href'));
                    
                    // Сохраняем выбор пользователя
                    const path = this.getAttribute('href').replace('/', '');
                    localStorage.setItem('userPath', path);
                });
            });
        });