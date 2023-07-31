async function pullCountry() {
    try {
        const response = await fetch('https://guess-the-capital-aswj.onrender.com/countries/random');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        let first_country = data[0].country;
        let first_capital = data[0].capital_city;

        let capitals = [first_capital, data[1].capital_city, data[2].capital_city, data[3].capital_city];

        let country_capital_map = {
            [first_country]: first_capital
        };

        for(let i = capitals.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = capitals[i]
            capitals[i] = capitals[j]
            capitals[j] = temp
        }

        console.log("First Country: ", first_country);
        console.log("Shuffled Capitals: ", capitals);
        console.log("Country Capital Map: ", country_capital_map);

    } catch (error) {
        console.error('Failed to fetch the data', error);
    }
}

pullCountry();

 module.exports = {
    pullCountry
}
