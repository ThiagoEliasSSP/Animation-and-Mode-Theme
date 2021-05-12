const boxAnimate = document.querySelector('.box-animation');

function rain() {
    const drop = document.createElement('li')

    const random = (max, min) => Math.random() * (max - min) + min;
    const size = random(100, 10);
    const position = random(100, 0);
    const delay = random(2, 0.1);
    const duration = random(12, 7);

    drop.style.width = `${size}px`;
    drop.style.height = `${size}px`;
    drop.style.left = `${position}%`;
    drop.style.backgroundColor = 'var(--Color-secondary)';
    drop.style.animationDelay = `${delay}s`;
    drop.style.animationDuration = `${duration}s`;
    drop.style.borderRadius = '1rem'

    boxAnimate.appendChild(drop);

    setTimeout(function (){
        boxAnimate.removeChild(drop);
    }, (delay + position) * 1000);
} 

setInterval(rain, 200);