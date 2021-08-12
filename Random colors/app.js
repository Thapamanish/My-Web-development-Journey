const h1 = document.querySelector('h1');
const btn = document.querySelector('button');

btn.addEventListener('click', () =>{
  const randomColor = makeRandomColor();
  h1.innerText = randomColor;
  document.body.style.backgroundColor = randomColor;

})


const makeRandomColor = () =>{
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
