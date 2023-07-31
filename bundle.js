(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
const { pullCountry } = require('./app.js')

},{"./app.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImFzeW5jIGZ1bmN0aW9uIHB1bGxDb3VudHJ5KCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZ3Vlc3MtdGhlLWNhcGl0YWwtYXN3ai5vbnJlbmRlci5jb20vY291bnRyaWVzL3JhbmRvbScpO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgbGV0IGNhcGl0YWxzID0gW2RhdGFbMF0uY2FwaXRhbF9jaXR5LCBkYXRhWzFdLmNhcGl0YWxfY2l0eSwgZGF0YVsyXS5jYXBpdGFsX2NpdHksIGRhdGFbM10uY2FwaXRhbF9jaXR5XTtcblxuICAgICAgICBsZXQgY291bnRyeV9jYXBpdGFsX21hcCA9IHtcbiAgICAgICAgICAgIFtkYXRhWzBdLmNvdW50cnldOiBkYXRhWzBdLmNhcGl0YWxfY2l0eVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvcihsZXQgaSA9IGNhcGl0YWxzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pe1xuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpXG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gY2FwaXRhbHNbaV1cbiAgICAgICAgICAgIGNhcGl0YWxzW2ldID0gY2FwaXRhbHNbal1cbiAgICAgICAgICAgIGNhcGl0YWxzW2pdID0gdGVtcFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJGaXJzdCBDb3VudHJ5OiBcIiwgZGF0YVswXS5jb3VudHJ5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTaHVmZmxlZCBDYXBpdGFsczogXCIsIGNhcGl0YWxzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb3VudHJ5IENhcGl0YWwgTWFwOiBcIiwgY291bnRyeV9jYXBpdGFsX21hcCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBET01cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uJykuaW5uZXJUZXh0ID0gYFdoYXQgaXMgdGhlIGNhcGl0YWwgb2YgJHtkYXRhWzBdLmNvdW50cnl9P2A7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJveCR7aSsxfWApLmlubmVyVGV4dCA9IGNhcGl0YWxzW2ldO1xuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdGhlIGRhdGEnLCBlcnJvcik7XG4gICAgfVxufVxuXG5wdWxsQ291bnRyeSgpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHB1bGxDb3VudHJ5XG59XG4iLCJjb25zdCB7IHB1bGxDb3VudHJ5IH0gPSByZXF1aXJlKCcuL2FwcC5qcycpXG4iXX0=
