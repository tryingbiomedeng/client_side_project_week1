async function runGame() {
    let score = 0, timer = 60;
    const boxes = document.querySelectorAll('.capital-box');
    let currentCountryCapitalMap;
    
    const updateText = (id, text) => document.getElementById(id).innerText = text;

    updateText('score', `Score: ${score}`);
    updateText('timer', `Time left: ${timer} seconds`);
    document.getElementById('startGameButton').disabled = true;

    const intervalId = setInterval(() => {
        if (--timer <= 0) {
            clearInterval(intervalId);
            boxes.forEach(box => box.removeEventListener('click', checkAnswerAndRefresh));
            alert(`Time's up! Your score is ${score}`);
            location.reload();
        } else {
            updateText('timer', `Time left: ${timer} seconds`);
        }
    }, 1000);

    async function pullCountry() {
        try {
            const response = await fetch('https://guess-the-capital-aswj.onrender.com/countries/random');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();

            const capitals = data.map(d => d.capital_city);
            const country_capital_map = { [data[0].country]: data[0].capital_city };
            for(let i = capitals.length - 1; i > 0; i--){
                const j = Math.floor(Math.random() * i);
                [capitals[i], capitals[j]] = [capitals[j], capitals[i]];
            }

            updateText('question', `What is the capital of ${data[0].country}?`);
            boxes.forEach((box, i) => box.innerText = capitals[i]);
            return country_capital_map;
        } catch (error) {
            console.error('Failed to fetch the data', error);
        }
    }

    async function checkAnswerAndRefresh(e) {
        const correctAnswer = currentCountryCapitalMap[Object.keys(currentCountryCapitalMap)[0]];
        if(e.target.innerText === correctAnswer) {
            alert("Correct Answer");
            updateText('score', `Score: ${++score}`);
        } else {
            alert(`Incorrect Answer, the correct answer was: ${correctAnswer}`);
        }
        boxes.forEach(box => box.removeEventListener('click', checkAnswerAndRefresh));
        currentCountryCapitalMap = await pullCountry();
        boxes.forEach(box => box.addEventListener('click', checkAnswerAndRefresh));
    }

    currentCountryCapitalMap = await pullCountry();
    boxes.forEach(box => box.addEventListener('click', checkAnswerAndRefresh));
}

module.exports = {
    runGame
}
