const html = document.querySelector('html');
const btn = document.getElementById('btn');
const icon = document.querySelector('#icon');

btn.addEventListener('click', ModeTheme);

const hours = new Date().getHours();
hours < 6  ? ModeTheme() : null;
hours > 18 ? ModeTheme() : null;

function ModeTheme(){
    html.classList.toggle('dark');
    html.classList == 'dark' ? btn.setAttribute("class", 'slide-dark') : btn.setAttribute("class", 'slide-light');
    html.classList == 'dark' ? icon.href = "./icons/moon.svg" : icon.href = "./icons/sun.svg";
}