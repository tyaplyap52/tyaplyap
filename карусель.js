    let slideIndex2 = 0;
    const slider2 = document.querySelector('.slider');
    const slides2 = document.querySelectorAll('.slide');
    const slideWidth2 = slides2[0].offsetWidth; // Ширина одного слайда
    let translateX2 = 0; // Текущее смещение слайдера

    function prevSlide() {
        slideIndex2--;
        if (slideIndex2 < 0) {
            slideIndex2 = slides2.length - 1;
        }
        updateSlider2();
    }

    function nextSlide() {
        slideIndex2++;
        if (slideIndex2 >= slides2.length) {
            slideIndex2 = 0;
        }
        updateSlider2();
    }

    function updateSlider2() {
        translateX2 = -slideIndex2 * slideWidth2;
        slider2.style.transform = `translateX(${translateX2}px)`;
    }

    // Обработчики событий для кнопок слайдера 2
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
