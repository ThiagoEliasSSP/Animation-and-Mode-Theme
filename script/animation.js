const ul = document.querySelector('ul')

const createdDiv = () => {
  const newLi = document.createElement('li')

  const random = (max, min) => Math.random() * (max - min) + min;

  const size = Math.floor(random(10, 100));
  const position = random(1, 50);
  const delay = random(5, 0.1);
  const duration = random(10, 5);

  newLi.setAttribute('class', 'animation-li')
  newLi.style.width = `${size}px`;
  newLi.style.height = `${size}px`;
  newLi.style.bottom = `-${size}px`;
  newLi.style.left = `${position}%`;

  newLi.style.animationDelay = `${delay}s`
  newLi.style.animationDuration = `${duration}s`

  ul.appendChild(newLi)
  
  let removeDiv = setTimeout(function(){
    newLi.remove()
  }, Math.floor((duration + delay) * 1000))
}

const createBrian = setInterval(createdDiv, 500)