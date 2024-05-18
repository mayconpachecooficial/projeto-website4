let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = document.querySelectorAll('ul li');

let active = 0;

function setSlider() {
    // Remover a classe 'active' de todos os itens e pontos
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Adicionar a classe 'active' ao item e ponto correspondentes
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // Atualizar o indicador numérico
    indicator.querySelector('.number').innerHTML = '0' + (((active + 1) % items.length) || items.length);
}

nextButton.onclick = () => {
    active = (active + 1) % items.length;
    setSlider();
}

prevButton.onclick = () => {
    active = (active - 1 + items.length) % items.length;
    setSlider();
}
