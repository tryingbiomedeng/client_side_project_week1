(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
const { runGame } = require('./app.js')

const startGameButton = document.querySelector('#startGameButton')
// const quiz = document.getElementById('quiz');

startGameButton.addEventListener('click', function() {
    // quiz.style.opacity = 1;
    runGame();
    this.remove();
})

},{"./app.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiYXN5bmMgZnVuY3Rpb24gcnVuR2FtZSgpIHtcbiAgICBsZXQgc2NvcmUgPSAwLCB0aW1lciA9IDYwO1xuICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcGl0YWwtYm94Jyk7XG4gICAgbGV0IGN1cnJlbnRDb3VudHJ5Q2FwaXRhbE1hcDtcbiAgICBcbiAgICBjb25zdCB1cGRhdGVUZXh0ID0gKGlkLCB0ZXh0KSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIHVwZGF0ZVRleHQoJ3Njb3JlJywgYFNjb3JlOiAke3Njb3JlfWApO1xuICAgIHVwZGF0ZVRleHQoJ3RpbWVyJywgYFRpbWUgbGVmdDogJHt0aW1lcn0gc2Vjb25kc2ApO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEdhbWVCdXR0b24nKS5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoLS10aW1lciA8PSAwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICAgICAgYm94ZXMuZm9yRWFjaChib3ggPT4gYm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tBbnN3ZXJBbmRSZWZyZXNoKSk7XG4gICAgICAgICAgICBhbGVydChgVGltZSdzIHVwISBZb3VyIHNjb3JlIGlzICR7c2NvcmV9YCk7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVwZGF0ZVRleHQoJ3RpbWVyJywgYFRpbWUgbGVmdDogJHt0aW1lcn0gc2Vjb25kc2ApO1xuICAgICAgICB9XG4gICAgfSwgMTAwMCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBwdWxsQ291bnRyeSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZ3Vlc3MtdGhlLWNhcGl0YWwtYXN3ai5vbnJlbmRlci5jb20vY291bnRyaWVzL3JhbmRvbScpO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgY29uc3QgY2FwaXRhbHMgPSBkYXRhLm1hcChkID0+IGQuY2FwaXRhbF9jaXR5KTtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50cnlfY2FwaXRhbF9tYXAgPSB7IFtkYXRhWzBdLmNvdW50cnldOiBkYXRhWzBdLmNhcGl0YWxfY2l0eSB9O1xuICAgICAgICAgICAgZm9yKGxldCBpID0gY2FwaXRhbHMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSl7XG4gICAgICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpO1xuICAgICAgICAgICAgICAgIFtjYXBpdGFsc1tpXSwgY2FwaXRhbHNbal1dID0gW2NhcGl0YWxzW2pdLCBjYXBpdGFsc1tpXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZVRleHQoJ3F1ZXN0aW9uJywgYFdoYXQgaXMgdGhlIGNhcGl0YWwgb2YgJHtkYXRhWzBdLmNvdW50cnl9P2ApO1xuICAgICAgICAgICAgYm94ZXMuZm9yRWFjaCgoYm94LCBpKSA9PiBib3guaW5uZXJUZXh0ID0gY2FwaXRhbHNbaV0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50cnlfY2FwaXRhbF9tYXA7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdGhlIGRhdGEnLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjaGVja0Fuc3dlckFuZFJlZnJlc2goZSkge1xuICAgICAgICBjb25zdCBjb3JyZWN0QW5zd2VyID0gY3VycmVudENvdW50cnlDYXBpdGFsTWFwW09iamVjdC5rZXlzKGN1cnJlbnRDb3VudHJ5Q2FwaXRhbE1hcClbMF1dO1xuICAgICAgICBpZihlLnRhcmdldC5pbm5lclRleHQgPT09IGNvcnJlY3RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiQ29ycmVjdCBBbnN3ZXJcIik7XG4gICAgICAgICAgICB1cGRhdGVUZXh0KCdzY29yZScsIGBTY29yZTogJHsrK3Njb3JlfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoYEluY29ycmVjdCBBbnN3ZXIsIHRoZSBjb3JyZWN0IGFuc3dlciB3YXM6ICR7Y29ycmVjdEFuc3dlcn1gKTtcbiAgICAgICAgfVxuICAgICAgICBib3hlcy5mb3JFYWNoKGJveCA9PiBib3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0Fuc3dlckFuZFJlZnJlc2gpKTtcbiAgICAgICAgY3VycmVudENvdW50cnlDYXBpdGFsTWFwID0gYXdhaXQgcHVsbENvdW50cnkoKTtcbiAgICAgICAgYm94ZXMuZm9yRWFjaChib3ggPT4gYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tBbnN3ZXJBbmRSZWZyZXNoKSk7XG4gICAgfVxuXG4gICAgY3VycmVudENvdW50cnlDYXBpdGFsTWFwID0gYXdhaXQgcHVsbENvdW50cnkoKTtcbiAgICBib3hlcy5mb3JFYWNoKGJveCA9PiBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0Fuc3dlckFuZFJlZnJlc2gpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcnVuR2FtZVxufVxuIiwiY29uc3QgeyBydW5HYW1lIH0gPSByZXF1aXJlKCcuL2FwcC5qcycpXG5cbmNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydEdhbWVCdXR0b24nKVxuLy8gY29uc3QgcXVpeiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6Jyk7XG5cbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIHF1aXouc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgcnVuR2FtZSgpO1xuICAgIHRoaXMucmVtb3ZlKCk7XG59KVxuIl19
