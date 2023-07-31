// Attach elements here


const getCountry = () => {
    fetch("https://yoururl.com") // Replace with server json URL
        .then(resp => resp.json())
        .then(pullCountry)
        .catch(error => console.log(error));
}

const pullCountry = (data) => {
    const randomCountry = data[Math.floor(Math.random()*data.length)];

    const countryName = randomCountry.country; // Replace with tag used for country name in json
    const capitalCity = randomCountry.capital_city; // Replace with tag used for capital city name in json

    const allCities = data.map(country => country.capital_city); // Replace with tag used for capital city name in json
    const randomCities = [];

    while(randomCities.length < 3) {
        const randomCity = allCities[Math.floor(Math.random()*allCities.length)];
        if(randomCity !== capitalCity && !randomCities.includes(randomCity)) {
            randomCities.push(randomCity);
        }
    }

    console.log(countryName, capitalCity, ...randomCities);
}
 // Need to change final product so that the 'countryName' is allocared to the question
 // And the capital city and three rnaodm capital cities are added to four identical button squares


 module.exports = {
    getCountry
}
