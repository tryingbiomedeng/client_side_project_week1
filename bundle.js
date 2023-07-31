(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
const { getCountry } = require('./app.js')

// Event listener on buttons for actions here

// Remember to convert to bundle when finished

},{"./app.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gQXR0YWNoIGVsZW1lbnRzIGhlcmVcclxuXHJcblxyXG5jb25zdCBnZXRDb3VudHJ5ID0gKCkgPT4ge1xyXG4gICAgZmV0Y2goXCJodHRwczovL3lvdXJ1cmwuY29tXCIpIC8vIFJlcGxhY2Ugd2l0aCBzZXJ2ZXIganNvbiBVUkxcclxuICAgICAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHB1bGxDb3VudHJ5KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG59XHJcblxyXG5jb25zdCBwdWxsQ291bnRyeSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCByYW5kb21Db3VudHJ5ID0gZGF0YVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqZGF0YS5sZW5ndGgpXTtcclxuXHJcbiAgICBjb25zdCBjb3VudHJ5TmFtZSA9IHJhbmRvbUNvdW50cnkuY291bnRyeTsgLy8gUmVwbGFjZSB3aXRoIHRhZyB1c2VkIGZvciBjb3VudHJ5IG5hbWUgaW4ganNvblxyXG4gICAgY29uc3QgY2FwaXRhbENpdHkgPSByYW5kb21Db3VudHJ5LmNhcGl0YWxfY2l0eTsgLy8gUmVwbGFjZSB3aXRoIHRhZyB1c2VkIGZvciBjYXBpdGFsIGNpdHkgbmFtZSBpbiBqc29uXHJcblxyXG4gICAgY29uc3QgYWxsQ2l0aWVzID0gZGF0YS5tYXAoY291bnRyeSA9PiBjb3VudHJ5LmNhcGl0YWxfY2l0eSk7IC8vIFJlcGxhY2Ugd2l0aCB0YWcgdXNlZCBmb3IgY2FwaXRhbCBjaXR5IG5hbWUgaW4ganNvblxyXG4gICAgY29uc3QgcmFuZG9tQ2l0aWVzID0gW107XHJcblxyXG4gICAgd2hpbGUocmFuZG9tQ2l0aWVzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICBjb25zdCByYW5kb21DaXR5ID0gYWxsQ2l0aWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphbGxDaXRpZXMubGVuZ3RoKV07XHJcbiAgICAgICAgaWYocmFuZG9tQ2l0eSAhPT0gY2FwaXRhbENpdHkgJiYgIXJhbmRvbUNpdGllcy5pbmNsdWRlcyhyYW5kb21DaXR5KSkge1xyXG4gICAgICAgICAgICByYW5kb21DaXRpZXMucHVzaChyYW5kb21DaXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coY291bnRyeU5hbWUsIGNhcGl0YWxDaXR5LCAuLi5yYW5kb21DaXRpZXMpO1xyXG59XHJcbiAvLyBOZWVkIHRvIGNoYW5nZSBmaW5hbCBwcm9kdWN0IHNvIHRoYXQgdGhlICdjb3VudHJ5TmFtZScgaXMgYWxsb2NhcmVkIHRvIHRoZSBxdWVzdGlvblxyXG4gLy8gQW5kIHRoZSBjYXBpdGFsIGNpdHkgYW5kIHRocmVlIHJuYW9kbSBjYXBpdGFsIGNpdGllcyBhcmUgYWRkZWQgdG8gZm91ciBpZGVudGljYWwgYnV0dG9uIHNxdWFyZXNcclxuXHJcblxyXG4gbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBnZXRDb3VudHJ5XHJcbn1cclxuIiwiY29uc3QgeyBnZXRDb3VudHJ5IH0gPSByZXF1aXJlKCcuL2FwcC5qcycpXHJcblxyXG4vLyBFdmVudCBsaXN0ZW5lciBvbiBidXR0b25zIGZvciBhY3Rpb25zIGhlcmVcclxuXHJcbi8vIFJlbWVtYmVyIHRvIGNvbnZlcnQgdG8gYnVuZGxlIHdoZW4gZmluaXNoZWRcclxuIl19
