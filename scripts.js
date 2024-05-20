document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const items = document.querySelectorAll('.list .item');
    const dots = document.querySelectorAll('.indicators ul li');
    const numberIndicator = document.querySelector('.indicators .number');
    let activeIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            if (index === activeIndex) {
                item.classList.add('active');
                item.style.opacity = 1;
                item.style.visibility = 'visible';
            } else {
                item.classList.remove('active');
                item.style.opacity = 0;
                item.style.visibility = 'hidden';
            }
        });

        dots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        numberIndicator.textContent = `0${activeIndex + 1}`;
    }

    nextButton.addEventListener('click', () => {
        activeIndex = (activeIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        activeIndex = (activeIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    updateCarousel();
});
