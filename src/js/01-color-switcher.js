const elements ={
    start : document.querySelector('[data-start]'),
    stop : document.querySelector('[data-stop]'),
    body : document.querySelector('body')
}
elements.stop.disabled = true;
elements.start.addEventListener('click', clickStart)
elements.stop.addEventListener('click', clickStop)
//функція зміни кольору боді
function changeBodyColor() {
  elements.body.style.backgroundColor = getRandomHexColor();
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const timerId = null;
//функція старт
function clickStart () {
    elements.stop.disabled = false; // вмикаємо кнопку Стоп
    elements.start.disabled = true; // відключаємо кнопку Старт
    timerId = setInterval(() => {
           changeBodyColor();
    }, 1000);
    
}
//функція стоп 
function clickStop() {
    elements.start.disabled = false; // вмикаємо кнопку Старт
    elements.stop.disabled = true; // відключаємо кнопку Стоп 
    clearInterval(timerId);
}

//оформлення кнопок


elements.start.style.padding = '40px';
elements.start.style.width = '300px';
elements.start.style.fontSize = '50px';



elements.stop.style.padding = '40px';
elements.stop.style.width = '300px';
elements.stop.style.fontSize = '50px';


elements.body.style.display = 'flex';
elements.body.style.padding= '300px';
elements.body.style.alignItems = 'center';
elements.body.style.gap = '100px';