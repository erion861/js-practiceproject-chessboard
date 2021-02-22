// VARIABLES & DOM ACCESS

const board = document.querySelector('.board');
const btn = document.getElementById('submit');
const clearBtn = document.getElementById('clear');
const posBtn = document.getElementById('position');
const boardletters = document.querySelector('.letters');
const boardnumbers = document.querySelector('.numbers');
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let index = 0;
let black = false;
let num = 1;
let myJsonArray = 
[
  {
    "piece": "&#9815;",
    "number": "4",
    "letter": "5"
  },
  {
    "piece": "&#9817;",
    "number": "1",
    "letter": "1"
  },
  {
    "piece": "&#9819;",
    "number": "3",
    "letter": "7"
  },
  {
    "piece": "&#9822;",
    "number": "6",
    "letter": "2"
  }
];

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

function placePiece(event) {
  event.preventDefault();
  let figure = document.getElementById('pieces').value;
  let number = document.getElementById('number').value;
  let letter = document.getElementById('letter').value;
  let square = document.querySelectorAll('.square');
  let squareIndex = (letter - 1) * 8 + (number-1);
  let p = document.createElement('p');
  p.textContent = figure;
  const squareWithPiece = square[squareIndex];

  if (squareWithPiece.hasChildNodes()) {
    return;
  }
  squareWithPiece.appendChild(p);

};

// RETRIEVING A POSITION FROM JSON FILE 

function setPieces(event) {
  event.preventDefault();
  let p2 = document.querySelectorAll('p');
  console.log(p2);
  for(let i = 0; i < myJsonArray.length; i++) {
    let obj = myJsonArray[i];
    const square = document.querySelectorAll('.square');
    let squareIndex = (obj.letter - 1) * 8 + (obj.number-1);
    let p = document.createElement('p');
    p.innerHTML = obj.piece;
    const squareWithPiece = square[squareIndex];
    if (squareWithPiece.hasChildNodes()){
      squareWithPiece.innerHTML = '';
    };
    squareWithPiece.appendChild(p);
  };
};

// CLEARING BOARD
function clearTable() {   
  p.parentNode.removeChild(p);
};


// EVENTLISTENERS

clearBtn.addEventListener('click', clearTable);
btn.addEventListener('click', placePiece);
posBtn.addEventListener('click', setPieces);