const elements ={
    start : document.querySelector('[data-start]'),
    stop : document.querySelector('[data-stop]'),
    body : document.querySelector('body')
}
let timerId = null;
elements.stop.disabled = true;
elements.start.addEventListener('click', clickStart)
elements.stop.addEventListener('click', clickStop)
//функція зміни кольору боді
function changeBodyColor() {
  const bodyColor = getRandomHexColor();
  elements.body.style.backgroundColor = bodyColor;  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

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



