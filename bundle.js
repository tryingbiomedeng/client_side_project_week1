(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
const { runGame } = require('./app.js')

const startGameButton = document.querySelector('#startGameButton')

startGameButton.addEventListener('click', function() {
    runGame();
    this.remove();
})

},{"./app.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJhc3luYyBmdW5jdGlvbiBydW5HYW1lKCkge1xuICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcGl0YWwtYm94Jyk7XG4gICAgbGV0IGN1cnJlbnRDb3VudHJ5Q2FwaXRhbE1hcDtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHB1bGxDb3VudHJ5KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9ndWVzcy10aGUtY2FwaXRhbC1hc3dqLm9ucmVuZGVyLmNvbS9jb3VudHJpZXMvcmFuZG9tJyk7XG5cbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGxldCBjYXBpdGFscyA9IFtkYXRhWzBdLmNhcGl0YWxfY2l0eSwgZGF0YVsxXS5jYXBpdGFsX2NpdHksIGRhdGFbMl0uY2FwaXRhbF9jaXR5LCBkYXRhWzNdLmNhcGl0YWxfY2l0eV07XG5cbiAgICAgICAgICAgIGxldCBjb3VudHJ5X2NhcGl0YWxfbWFwID0ge1xuICAgICAgICAgICAgICAgIFtkYXRhWzBdLmNvdW50cnldOiBkYXRhWzBdLmNhcGl0YWxfY2l0eVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gY2FwaXRhbHMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSl7XG4gICAgICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IGNhcGl0YWxzW2ldXG4gICAgICAgICAgICAgICAgY2FwaXRhbHNbaV0gPSBjYXBpdGFsc1tqXVxuICAgICAgICAgICAgICAgIGNhcGl0YWxzW2pdID0gdGVtcFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpcnN0IENvdW50cnk6IFwiLCBkYXRhWzBdLmNvdW50cnkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaHVmZmxlZCBDYXBpdGFsczogXCIsIGNhcGl0YWxzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bnRyeSBDYXBpdGFsIE1hcDogXCIsIGNvdW50cnlfY2FwaXRhbF9tYXApO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb24nKS5pbm5lclRleHQgPSBgV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiAke2RhdGFbMF0uY291bnRyeX0/YDtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGJveGVzW2ldLmlubmVyVGV4dCA9IGNhcGl0YWxzW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY291bnRyeV9jYXBpdGFsX21hcDtcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIHRoZSBkYXRhJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY2hlY2tBbnN3ZXJBbmRSZWZyZXNoKGUpIHtcbiAgICAgICAgaWYoZS50YXJnZXQuaW5uZXJUZXh0ID09PSBjdXJyZW50Q291bnRyeUNhcGl0YWxNYXBbT2JqZWN0LmtleXMoY3VycmVudENvdW50cnlDYXBpdGFsTWFwKVswXV0pIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiQ29ycmVjdCBBbnN3ZXJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIkluY29ycmVjdCBBbnN3ZXIsIHRoZSBjb3JyZWN0IGFuc3dlciB3YXM6IFwiICsgY3VycmVudENvdW50cnlDYXBpdGFsTWFwW09iamVjdC5rZXlzKGN1cnJlbnRDb3VudHJ5Q2FwaXRhbE1hcClbMF1dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgYm94IG9mIGJveGVzKSB7XG4gICAgICAgICAgICBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0Fuc3dlckFuZFJlZnJlc2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudENvdW50cnlDYXBpdGFsTWFwID0gYXdhaXQgcHVsbENvdW50cnkoKTtcblxuICAgICAgICBmb3IobGV0IGJveCBvZiBib3hlcykge1xuICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tBbnN3ZXJBbmRSZWZyZXNoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGN1cnJlbnRDb3VudHJ5Q2FwaXRhbE1hcCA9IGF3YWl0IHB1bGxDb3VudHJ5KCk7XG5cbiAgICBmb3IobGV0IGJveCBvZiBib3hlcykge1xuICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0Fuc3dlckFuZFJlZnJlc2gpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcnVuR2FtZVxufVxuIiwiY29uc3QgeyBydW5HYW1lIH0gPSByZXF1aXJlKCcuL2FwcC5qcycpXG5cbmNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydEdhbWVCdXR0b24nKVxuXG5zdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBydW5HYW1lKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbn0pXG4iXX0=
