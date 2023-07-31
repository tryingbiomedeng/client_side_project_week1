const { runGame } = require('./app.js')

const startGameButton = document.querySelector('#startGameButton')

startGameButton.addEventListener('click', function() {
    runGame();
    this.remove();
})
