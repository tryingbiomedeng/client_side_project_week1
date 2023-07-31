async function runGame() {
    const boxes = document.querySelectorAll('.capital-box');
    let currentCountryCapitalMap;

    async function pullCountry() {
        try {
            const response = await fetch('https://guess-the-capital-aswj.onrender.com/countries/random');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            let capitals = [data[0].capital_city, data[1].capital_city, data[2].capital_city, data[3].capital_city];

            let country_capital_map = {
                [data[0].country]: data[0].capital_city
            };

            for(let i = capitals.length - 1; i > 0; i--){
                const j = Math.floor(Math.random() * i)
                const temp = capitals[i]
                capitals[i] = capitals[j]
                capitals[j] = temp
            }

            console.log("First Country: ", data[0].country);
            console.log("Shuffled Capitals: ", capitals);
            console.log("Country Capital Map: ", country_capital_map);

            document.getElementById('question').innerText = `What is the capital of ${data[0].country}?`;

            for(let i = 0; i < 4; i++) {
                boxes[i].innerText = capitals[i];
            }

            return country_capital_map;

        } catch (error) {
            console.error('Failed to fetch the data', error);
        }
    }

    async function checkAnswerAndRefresh(e) {
        if(e.target.innerText === currentCountryCapitalMap[Object.keys(currentCountryCapitalMap)[0]]) {
            alert("Correct Answer");
        } else {
            alert("Incorrect Answer, the correct answer was: " + currentCountryCapitalMap[Object.keys(currentCountryCapitalMap)[0]]);
        }

        for(let box of boxes) {
            box.removeEventListener('click', checkAnswerAndRefresh);
        }

        currentCountryCapitalMap = await pullCountry();

        for(let box of boxes) {
            box.addEventListener('click', checkAnswerAndRefresh);
        }
    }

    currentCountryCapitalMap = await pullCountry();

    for(let box of boxes) {
        box.addEventListener('click', checkAnswerAndRefresh);
    }
}

module.exports = {
    runGame
}
