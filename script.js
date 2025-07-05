
        // Убираем прелоадер после загрузки страницы
        window.addEventListener('load', function() {
            const preloader = document.querySelector('.preloader');
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });

        // Плавная прокрутка для якорных ссылок
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Анимация появления элементов при скролле
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.feature-card, .rule-card, .step-card, .gallery-item, .about-image img');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Инициализация анимаций
        window.addEventListener('scroll', animateOnScroll);
        
        // Первоначальный вызов для элементов, уже видимых при загрузке
        document.querySelectorAll('.feature-card, .rule-card, .step-card, .gallery-item, .about-image img').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        animateOnScroll();