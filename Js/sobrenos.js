// script.js
document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.icon');

    icons.forEach(icon => {
        icon.addEventListener('focus', function () {
            toggleLabel(this, true);
        });

        icon.addEventListener('blur', function () {
            toggleLabel(this, false);
        });

        icon.addEventListener('mouseenter', function () {
            toggleLabel(this, true);
        });

        icon.addEventListener('mouseleave', function () {
            toggleLabel(this, false);
        });
    });

    function toggleLabel(icon, show) {
        const label = icon.nextElementSibling;
        if (show) {
            label.style.opacity = '1';
            label.style.bottom = '-40px';
        } else {
            label.style.opacity = '0';
            label.style.bottom = '-20px';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carousel) => {
        const carouselContainer = carousel.querySelector('.carousel-container');
        const carouselImages = carousel.querySelectorAll('.carousel-image');
        const prevButton = carousel.querySelector('.prev-button');
        const nextButton = carousel.querySelector('.next-button');

        let currentIndex = 0;
        const totalImages = carouselImages.length;

        // Atualiza a posição do carrossel
        function updateCarousel() {
            const offset = -currentIndex * 100;
            carouselContainer.style.transform = `translateX(${offset}%)`;
        }

        // Função para ir para a imagem anterior
        function showPrevious() {
            if (currentIndex === 0) {
                currentIndex = totalImages - 1;
            } else {
                currentIndex--;
            }
            updateCarousel();
        }

        // Função para ir para a próxima imagem
        function showNext() {
            if (currentIndex === totalImages - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            updateCarousel();
        }

        // Adiciona eventos aos botões
        prevButton.addEventListener('click', function(e) {
            e.preventDefault();
            showPrevious();
        });
        nextButton.addEventListener('click', function(e) {
            e.preventDefault();
            showNext();
        });
    });
});