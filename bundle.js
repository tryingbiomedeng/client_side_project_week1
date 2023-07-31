(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
const { pullCountry } = require('./app.js')

// Event listener on buttons for actions here

// Remember to convert to bundle when finished

},{"./app.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImFzeW5jIGZ1bmN0aW9uIHB1bGxDb3VudHJ5KCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZ3Vlc3MtdGhlLWNhcGl0YWwtYXN3ai5vbnJlbmRlci5jb20vY291bnRyaWVzL3JhbmRvbScpO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgbGV0IGZpcnN0X2NvdW50cnkgPSBkYXRhWzBdLmNvdW50cnk7XG4gICAgICAgIGxldCBmaXJzdF9jYXBpdGFsID0gZGF0YVswXS5jYXBpdGFsX2NpdHk7XG5cbiAgICAgICAgbGV0IGNhcGl0YWxzID0gW2ZpcnN0X2NhcGl0YWwsIGRhdGFbMV0uY2FwaXRhbF9jaXR5LCBkYXRhWzJdLmNhcGl0YWxfY2l0eSwgZGF0YVszXS5jYXBpdGFsX2NpdHldO1xuXG4gICAgICAgIGxldCBjb3VudHJ5X2NhcGl0YWxfbWFwID0ge1xuICAgICAgICAgICAgW2ZpcnN0X2NvdW50cnldOiBmaXJzdF9jYXBpdGFsXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yKGxldCBpID0gY2FwaXRhbHMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSl7XG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSlcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBjYXBpdGFsc1tpXVxuICAgICAgICAgICAgY2FwaXRhbHNbaV0gPSBjYXBpdGFsc1tqXVxuICAgICAgICAgICAgY2FwaXRhbHNbal0gPSB0ZW1wXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpcnN0IENvdW50cnk6IFwiLCBmaXJzdF9jb3VudHJ5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTaHVmZmxlZCBDYXBpdGFsczogXCIsIGNhcGl0YWxzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb3VudHJ5IENhcGl0YWwgTWFwOiBcIiwgY291bnRyeV9jYXBpdGFsX21hcCk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdGhlIGRhdGEnLCBlcnJvcik7XG4gICAgfVxufVxuXG5wdWxsQ291bnRyeSgpO1xuXG4gbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcHVsbENvdW50cnlcbn1cbiIsImNvbnN0IHsgcHVsbENvdW50cnkgfSA9IHJlcXVpcmUoJy4vYXBwLmpzJylcblxuLy8gRXZlbnQgbGlzdGVuZXIgb24gYnV0dG9ucyBmb3IgYWN0aW9ucyBoZXJlXG5cbi8vIFJlbWVtYmVyIHRvIGNvbnZlcnQgdG8gYnVuZGxlIHdoZW4gZmluaXNoZWRcbiJdfQ==
