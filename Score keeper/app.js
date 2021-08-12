const player1display = document.querySelector('#player1display');
const player2display = document.querySelector('#player2display');
const winPoints = document.querySelector('#winPoints')
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const reset = document.querySelector('#reset')

let count1 = 0
let count2 = 0
let isGameOver = false;
let winingScore = 3;


winPoints.addEventListener('change', function(){
  winingScore = parseInt(this.value);
  resetall();

})

button1.addEventListener('click', function() {
  if (!isGameOver) {
    count1++;
    if (count1 == winingScore) {
      isGameOver = true
      player1display.classList.add('winner');
      player2display.classList.add('loser');
      button1.disabled = true;
      button2.disabled = true;
    }
    player1display.innerText = count1;
  }
})

button2.addEventListener('click', function() {
  if (!isGameOver) {
    count2++;
    if (count2 == winingScore) {
      isGameOver = true
      player2display.classList.add('winner');
      player1display.classList.add('loser');
      button1.disabled = true;
      button2.disabled = true;
    }
    player2display.innerText = count2;
  }
})

reset.addEventListener('click', resetall)

function resetall(){
  count1 =0;
  count2 = 0;
  isGameOver = false;
  player1display.innerText = count1;
  player2display.innerText = count2;
  player1display.classList.remove('winner', 'loser');
  player2display.classList.remove('winner', 'loser');
  button1.disabled = false;
  button2.disabled = false;
}
