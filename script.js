// Import DOM elements
const word = document.getElementById('word'),
  text = document.getElementById('text'),
  scoreEl = document.getElementById('score'),
  timeEl = document.getElementById('time'),
  endgameEl = document.getElementById('end-game'),
  settingsBtn = document.getElementById('settings-btn'),
  settings = document.getElementById('settings'),
  settingsForm = document.getElementById('settings-form'),
  difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sense', 'planes', 'position',
  'circle', 'vase', 'nation',
  'fruit', 'advertisement', 'cat',
  'harbor', 'cakes', 'use',
  'brother', 'bike', 'example',
  'playground', 'lettuce', 'smile',
  'summer', 'dress', 'vest',
  'nest', 'protest', 'deer',
  'rail', 'suit', 'look', 'hour',
  'plants', 'stretch', 'governer',
  'sail', 'hope', 'hair', 'design',
  'dirt', 'field', 'button'
];

// Initialize State
let randomWord;
let score = 0;
let time = 10;

// Get random word
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDom() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

addWordToDom();