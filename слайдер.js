
const slider1 = document.querySelector('.slider1');
const slides1 = document.querySelectorAll('.slide1');
const slideCount1 = slides1.length;
let currentSlide1 = 0;
const slideWidth1 = slides1[0].offsetWidth + 40; // Ширина слайда + margin

function updateSlider1() {
    const translateX = -currentSlide1 * slideWidth1;
    slider1.style.transform = `translateX(${translateX}px)`;

    // Блюр
    slides1.forEach((slide, index) => {
        if (index < currentSlide1 - 1 || index > currentSlide1 + 1) {
            slide.classList.add('blurred1');
        } else {
            slide.classList.remove('blurred1');
        }
    });

    // Сброс и добавление класса active
    slides1.forEach(slide => slide.classList.remove('active1'));
    slides1[currentSlide1].classList.add('active1');
}

function nextSlide1() {
    currentSlide1 = (currentSlide1 + 1) % slideCount1;
    updateSlider1();
}

function prevSlide1() {
    currentSlide1 = (currentSlide1 - 1 + slideCount1) % slideCount1;
    updateSlider1();
}


setInterval(nextSlide1, 1500);


updateSlider1();