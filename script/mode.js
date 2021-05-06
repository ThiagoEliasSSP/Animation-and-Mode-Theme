const html = document.querySelector('html');
const btn = document.getElementById('btn')
const icon = document.querySelector('#icon')

btn.addEventListener('click', function () {
    html.classList.toggle('dark')
})
