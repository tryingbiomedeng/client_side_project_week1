const { runGame } = require('./app.js')

const startGameButton = document.querySelector('#startGameButton')
// const quiz = document.getElementById('quiz');

startGameButton.addEventListener('click', function() {
    // quiz.style.opacity = 1;
    runGame();
    this.remove();
})
