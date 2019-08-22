let game = document.getElementById('game');
let drum = document.getElementById('drum');
let paint = document.getElementById('paint');
let todo = document.getElementById('todo');
let weather = document.getElementById('weather');


game.addEventListener('click', () => document.location.href = 'https://github.com/RobertoCastelli/game-of-life');
drum.addEventListener('click', () => document.location.href = 'https://github.com/RobertoCastelli/drum-machine');
paint.addEventListener('click', () => document.location.href = 'https://github.com/RobertoCastelli/simple-paint');
todo.addEventListener('click', () => document.location.href = 'https://github.com/RobertoCastelli/odd-dot-robot');
weather.addEventListener('click', () => alert('Work in progress, stay tuned!'));