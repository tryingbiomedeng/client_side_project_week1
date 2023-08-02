(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
async function runGame() {
    let score = 0, timer = 60;
    const boxes = [...document.querySelectorAll('.capital-box')];
    const updateText = (id, text) => document.getElementById(id).innerText = text;
    const startGameButton = document.getElementById('startGameButton');
    const playerNameInput = document.getElementById('playerName');

    startGameButton.disabled = true;
    playerNameInput.style.display = 'none'; 

    const intervalId = setInterval(async () => { 
        timer--;
        if (timer < 0) {
            finishGame();
        } else {
            updateText('timer', `Time left: ${timer} seconds`);
        }
    }, 1000);

    async function finishGame() {
        clearInterval(intervalId);
        await postScore(playerNameInput.value, score);
        await displayLeaderboard();
        document.getElementById('question').style.display = 'none';
        document.getElementById('options').style.display = 'none';
        document.getElementById('leaderboard-div').style.display = 'block';
    }

    const pullCountry = async () => {
        try {
            const response = await fetch('https://guess-the-capital-aswj.onrender.com/countries/random');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            const shuffledCapitals = data.map(d => d.capital_city).sort(() => 0.5 - Math.random());

            updateText('question', `What is the capital of ${data[0].country}?`);
            boxes.forEach((box, i) => box.innerText = shuffledCapitals[i]);

            return { [data[0].country]: data[0].capital_city };
        } catch (error) {
            console.error('Failed to fetch the data', error);
        }
    }

    const checkAnswerAndRefresh = async (e) => {
        const correctAnswer = Object.values(currentCountryCapitalMap)[0];
        if(e.target.innerText === correctAnswer) {
            alert("Correct Answer");
            updateText('score', `Score: ${++score}`);
        } else {
            alert(`Incorrect Answer, the correct answer was: ${correctAnswer}`);
        }
        currentCountryCapitalMap = await pullCountry();
    }

    let currentCountryCapitalMap = await pullCountry();
    boxes.forEach(box => box.addEventListener('click', checkAnswerAndRefresh));
}

const postScore = async (player, score) => {
    await fetch('https://guess-the-capital-aswj.onrender.com/players', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player, score: score.toString() }),
    });
}

const getScores = async () => {
    try {
        const response = await fetch('https://guess-the-capital-aswj.onrender.com/players');
        const scores = await response.json();
        return scores.sort((a, b) => Number(b.score) - Number(a.score));
    } catch (error) {
        console.error('Failed to fetch the scores', error);
    }
}

const displayLeaderboard = async () => {
    const leaderboard = await getScores();
    const leaderboardDiv = document.getElementById('leaderboard');

    while (leaderboardDiv.firstChild) leaderboardDiv.firstChild.remove();

    leaderboard.forEach(({player, score}) => {
        const p = document.createElement('p');
        p.textContent = `${player}: ${score}`;
        leaderboardDiv.appendChild(p);
    });

    setTimeout(() => location.reload(), 12000);
}

module.exports = { runGame }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiYXN5bmMgZnVuY3Rpb24gcnVuR2FtZSgpIHtcbiAgICBsZXQgc2NvcmUgPSAwLCB0aW1lciA9IDYwO1xuICAgIGNvbnN0IGJveGVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXBpdGFsLWJveCcpXTtcbiAgICBjb25zdCB1cGRhdGVUZXh0ID0gKGlkLCB0ZXh0KSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRHYW1lQnV0dG9uJyk7XG4gICAgY29uc3QgcGxheWVyTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllck5hbWUnKTtcblxuICAgIHN0YXJ0R2FtZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcGxheWVyTmFtZUlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IFxuXG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHsgXG4gICAgICAgIHRpbWVyLS07XG4gICAgICAgIGlmICh0aW1lciA8IDApIHtcbiAgICAgICAgICAgIGZpbmlzaEdhbWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVwZGF0ZVRleHQoJ3RpbWVyJywgYFRpbWUgbGVmdDogJHt0aW1lcn0gc2Vjb25kc2ApO1xuICAgICAgICB9XG4gICAgfSwgMTAwMCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmaW5pc2hHYW1lKCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICBhd2FpdCBwb3N0U2NvcmUocGxheWVyTmFtZUlucHV0LnZhbHVlLCBzY29yZSk7XG4gICAgICAgIGF3YWl0IGRpc3BsYXlMZWFkZXJib2FyZCgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9ucycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWFkZXJib2FyZC1kaXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICBjb25zdCBwdWxsQ291bnRyeSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZ3Vlc3MtdGhlLWNhcGl0YWwtYXN3ai5vbnJlbmRlci5jb20vY291bnRyaWVzL3JhbmRvbScpO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHNodWZmbGVkQ2FwaXRhbHMgPSBkYXRhLm1hcChkID0+IGQuY2FwaXRhbF9jaXR5KS5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpO1xuXG4gICAgICAgICAgICB1cGRhdGVUZXh0KCdxdWVzdGlvbicsIGBXaGF0IGlzIHRoZSBjYXBpdGFsIG9mICR7ZGF0YVswXS5jb3VudHJ5fT9gKTtcbiAgICAgICAgICAgIGJveGVzLmZvckVhY2goKGJveCwgaSkgPT4gYm94LmlubmVyVGV4dCA9IHNodWZmbGVkQ2FwaXRhbHNbaV0pO1xuXG4gICAgICAgICAgICByZXR1cm4geyBbZGF0YVswXS5jb3VudHJ5XTogZGF0YVswXS5jYXBpdGFsX2NpdHkgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB0aGUgZGF0YScsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrQW5zd2VyQW5kUmVmcmVzaCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBPYmplY3QudmFsdWVzKGN1cnJlbnRDb3VudHJ5Q2FwaXRhbE1hcClbMF07XG4gICAgICAgIGlmKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gY29ycmVjdEFuc3dlcikge1xuICAgICAgICAgICAgYWxlcnQoXCJDb3JyZWN0IEFuc3dlclwiKTtcbiAgICAgICAgICAgIHVwZGF0ZVRleHQoJ3Njb3JlJywgYFNjb3JlOiAkeysrc2NvcmV9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChgSW5jb3JyZWN0IEFuc3dlciwgdGhlIGNvcnJlY3QgYW5zd2VyIHdhczogJHtjb3JyZWN0QW5zd2VyfWApO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRDb3VudHJ5Q2FwaXRhbE1hcCA9IGF3YWl0IHB1bGxDb3VudHJ5KCk7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnRDb3VudHJ5Q2FwaXRhbE1hcCA9IGF3YWl0IHB1bGxDb3VudHJ5KCk7XG4gICAgYm94ZXMuZm9yRWFjaChib3ggPT4gYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tBbnN3ZXJBbmRSZWZyZXNoKSk7XG59XG5cbmNvbnN0IHBvc3RTY29yZSA9IGFzeW5jIChwbGF5ZXIsIHNjb3JlKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZ3Vlc3MtdGhlLWNhcGl0YWwtYXN3ai5vbnJlbmRlci5jb20vcGxheWVycycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBsYXllciwgc2NvcmU6IHNjb3JlLnRvU3RyaW5nKCkgfSksXG4gICAgfSk7XG59XG5cbmNvbnN0IGdldFNjb3JlcyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2d1ZXNzLXRoZS1jYXBpdGFsLWFzd2oub25yZW5kZXIuY29tL3BsYXllcnMnKTtcbiAgICAgICAgY29uc3Qgc2NvcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gc2NvcmVzLnNvcnQoKGEsIGIpID0+IE51bWJlcihiLnNjb3JlKSAtIE51bWJlcihhLnNjb3JlKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIHRoZSBzY29yZXMnLCBlcnJvcik7XG4gICAgfVxufVxuXG5jb25zdCBkaXNwbGF5TGVhZGVyYm9hcmQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbGVhZGVyYm9hcmQgPSBhd2FpdCBnZXRTY29yZXMoKTtcbiAgICBjb25zdCBsZWFkZXJib2FyZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWFkZXJib2FyZCcpO1xuXG4gICAgd2hpbGUgKGxlYWRlcmJvYXJkRGl2LmZpcnN0Q2hpbGQpIGxlYWRlcmJvYXJkRGl2LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cbiAgICBsZWFkZXJib2FyZC5mb3JFYWNoKCh7cGxheWVyLCBzY29yZX0pID0+IHtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGAke3BsYXllcn06ICR7c2NvcmV9YDtcbiAgICAgICAgbGVhZGVyYm9hcmREaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpLCAxMjAwMCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBydW5HYW1lIH1cbiIsImNvbnN0IHsgcnVuR2FtZSB9ID0gcmVxdWlyZSgnLi9hcHAuanMnKVxuXG5jb25zdCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnRHYW1lQnV0dG9uJylcbi8vIGNvbnN0IHF1aXogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpeicpO1xuXG5zdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBxdWl6LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHJ1bkdhbWUoKTtcbiAgICB0aGlzLnJlbW92ZSgpO1xufSlcbiJdfQ==
