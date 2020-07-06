const body = document.querySelector('body');
const button = document.querySelector('.btn');

const changeBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = '#' + randomColor;
};

button.addEventListener('click', changeBg);
