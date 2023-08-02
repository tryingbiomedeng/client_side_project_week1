const { runGame } = require('./app.js')

const startGameButton = document.querySelector('#startGameButton')
const playerNameInput = document.getElementById('playerName');

startGameButton.addEventListener('click', function() {
    if (playerNameInput.value.trim() === "") {
        alert("Please input a name");
    } else {
        runGame();
        this.remove();
    }
})
