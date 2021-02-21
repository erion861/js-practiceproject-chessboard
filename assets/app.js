// VARIABLES & DOM ACCESS

const board = document.querySelector('.board');
const btn = document.getElementById('submit');
const clearBtn = document.getElementById('clear');
const boardletters = document.querySelector('.letters');
const boardnumbers = document.querySelector('.numbers');
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let index = 0;
let black = false;
let num = 1;

// CREATING THE BOARD, LETTERS & NUMBERS

for (let i=0; i < 8; i++) {
  let letter = document.createElement('li');
  letter.textContent = letters[i];
  boardletters.appendChild(letter);
  let numbers = document.createElement('li');
  numbers.textContent = num++;
  boardnumbers.appendChild(numbers);
};

for (let i=1; i <= 64; i++) {
  const square = document.createElement('div');
  if (black) {
    square.classList.add('square');
    square.classList.add('black');
    index++;
    black = !black;
  } else {
    square.classList.add('square');
    square.classList.add('white');
    index++;
    black = !black;
  };

  board.appendChild(square);
  if (index === 8) {
    black = !black;
    index = 0;
  };
};

// PLACING A PIECE ON THE BOARD

function placeFigure(event) {
  event.preventDefault();
  let figure = document.getElementById('pieces').value;
  let number = document.getElementById('number').value;
  let letter = document.getElementById('letter').value;
  let square = document.querySelectorAll('.square');
  let squareIndex = (letter - 1) * 8 + (number-1);
  console.log(squareIndex);
  console.log(figure, number, letter);
  console.log(square);
  let p = document.createElement('p');
  p.textContent = figure;
  const squareWithPiece = square[squareIndex];

  if (squareWithPiece.hasChildNodes()) {
    return;
  }
  squareWithPiece.appendChild(p);
};

// CLEARS BOARD
function clearTable() {   
  p.parentNode.removeChild(p);
};


//EVENTLISTENERS

clearBtn.addEventListener('click', clearTable);
btn.addEventListener('click', placeFigure);