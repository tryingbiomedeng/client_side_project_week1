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

        // Update the DOM
        document.getElementById('question').innerText = `What is the capital of ${data[0].country}?`;

        for(let i = 0; i < 4; i++) {
            document.getElementById(`box${i+1}`).innerText = capitals[i];
        }

    } catch (error) {
        console.error('Failed to fetch the data', error);
    }
}

pullCountry()

module.exports = {
    pullCountry
}
