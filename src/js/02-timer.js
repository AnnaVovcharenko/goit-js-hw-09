import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector("#datetime-picker"),
    start: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
};

let intervalId = null;
refs.start.disabled = true;
//вибір дати
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] < new Date()) {
            refs.start.disabled = true;
            Notify.failure('Qui timide rogat docet negare');
        }
        else {
            // Notify.success('Sol lucet omnibus');
            refs.start.disabled = false;            
        }
        refs.start.addEventListener('click', clickStart)
        //кнопка старт
        function clickStart() {
            intervalId = setInterval(() => {
                const inTima = selectedDates[0] - new Date();
                if (inTima < 1000) {
                    clearInterval(intervalId);
                }
                const result = convertMs(inTima);
                countdown(result); 
                refs.start.disabled = true;               
            }, 1000);
        };
    },
};
flatpickr(refs.input, options);



//функція для підрахунку часу
function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
    return String(value).padStart(2,'0');
}

//таймер 
function countdown({ days, hours, minutes, seconds }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
}





console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}