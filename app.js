async function runGame() {
    let score = 0, timer = 60;
    const boxes = [...document.querySelectorAll('.capital-box')];
    const updateText = (id, text) => document.getElementById(id).innerText = text;
    const startGameButton = document.getElementById('startGameButton');
    const playerNameInput = document.getElementById('playerName');

    startGameButton.disabled = true;
    playerNameInput.style.display = 'none'; 

    const intervalId = setInterval(async () => { 
        timer--;
        if (timer < 0) {
            await finishGame();
        } else {
            updateText('timer', `Time left: ${timer} seconds`);
        }
    }, 1000);

    async function finishGame() {
        clearInterval(intervalId);
        await postScore(playerNameInput.value, score);
        await displayLeaderboard();
        document.getElementById('question').style.display = 'none';
        document.getElementById('options').style.display = 'none';
        document.getElementById('leaderboard-div').style.display = 'block';
    }

    const pullCountry = async () => {
        try {
            const response = await fetch('https://guess-the-capital-aswj.onrender.com/countries/random');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            const shuffledCapitals = data.map(d => d.capital_city).sort(() => 0.5 - Math.random());

            updateText('question', `What is the capital of ${data[0].country}?`);
            boxes.forEach((box, i) => box.innerText = shuffledCapitals[i]);

            return { [data[0].country]: data[0].capital_city };
        } catch (error) {
            console.error('Failed to fetch the data', error);
        }
    }

    const checkAnswerAndRefresh = async (e) => {
        const correctAnswer = Object.values(currentCountryCapitalMap)[0];
        if(e.target.innerText === correctAnswer) {
            updateText('score', `Score: ${++score}`);
        } else {
            alert(`Incorrect Answer, the correct answer was: ${correctAnswer}`);
        }
        currentCountryCapitalMap = await pullCountry();
    }

    let currentCountryCapitalMap = await pullCountry();
    boxes.forEach(box => box.addEventListener('click', checkAnswerAndRefresh));
}

const postScore = async (player, score) => {
    await fetch('https://guess-the-capital-aswj.onrender.com/players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player, score: score.toString() }),
    });
}

const getScores = async () => {
    try {
        const response = await fetch('https://guess-the-capital-aswj.onrender.com/players');
        const scores = await response.json();
        return scores.sort((a, b) => Number(b.score) - Number(a.score));
    } catch (error) {
        console.error('Failed to fetch the scores', error);
    }
}

const displayLeaderboard = async () => {
    const leaderboard = await getScores();
    const leaderboardDiv = document.getElementById('leaderboard');

    while (leaderboardDiv.firstChild) leaderboardDiv.firstChild.remove();

    leaderboard.forEach(({player, score}) => {
        const p = document.createElement('p');
        p.textContent = `${player}: ${score}`;
        leaderboardDiv.appendChild(p);
    });

    const homeButton = document.getElementById('homeButton');
    homeButton.style.display = 'block';
    homeButton.onclick = () => location.reload();
}

module.exports = { runGame }














