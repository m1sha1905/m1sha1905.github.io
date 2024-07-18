const $circle = document.getElementById("kara");
const $score = document.getElementById("score");

function start () {
  setScore(getScore());
  setImage();
}

function setScore (score) {
  localStorage.setItem('score', score);
  $score.textContent = score;
}

function setImage () {
  if (getScore() >= 50) {
    $circle.setAttribute('src', 'img/tema_final1.png')
  }
}

function getScore() {
  return Number(localStorage.getItem('score')) ?? 0;
}

function addOne () {
  setScore(getScore() + 1);
  setImage();
}

$circle.addEventListener('click', (event) => {
  const rect = $circle.getBoundingClientRect();

  const offSetX = event.clientX - rect.left - rect.width / 2;
  const offSetY = event.clientY - rect.top - rect.height /2;

  const DEG = 40;

  const tiltX = (offSetX / rect.height) * DEG;
  const tiltY = (offSetY / rect. width) * -DEG;

  $circle.style.setProperty('--tiltX', `${tiltX}deg`);
  $circle.style.setProperty('--tiltY', `${tiltY}deg`);

  setTimeout(() => {
    $circle.style.setProperty('--tiltX', `0deg`);
    $circle.style.setProperty('--tiltY', `0deg`);
  }, 300);


  const plusOne = document.createElement('dic');
  plusOne.classList.add('plus-one');
  plusOne.textContent = '+1';
  plusOne.style.left = `${event.clientX - rect.left}px`;
  plusOne.style.top = `${event.clientY - rect.top}px`;

  $circle.parentElement.appendChild(plusOne);

  addOne();

  setTimeout(() => {
    plusOne.remove();
  }, 2000);
});

start();