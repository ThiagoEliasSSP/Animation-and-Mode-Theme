const html = document.querySelector('html');
const mode = document.getElementById('mode');
const img = document.getElementById('background')

mode.addEventListener('click', function() {
  html.classList.toggle('dark-mode')
  html.classList == 'dark-mode' ? img.setAttribute('src', '/img/background_dark.png') : img.setAttribute('src', '/img/background_light.png')
  html.classList == 'dark-mode' ? mode.innerHTML = 'LightMode' : mode.innerHTML = 'DarkMode'
})
