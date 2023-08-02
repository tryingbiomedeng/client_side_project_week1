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
            await finishGame();
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

    const homeButton = document.getElementById('homeButton');
    homeButton.style.display = 'block';
    homeButton.onclick = () => location.reload();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImFzeW5jIGZ1bmN0aW9uIHJ1bkdhbWUoKSB7XG4gICAgbGV0IHNjb3JlID0gMCwgdGltZXIgPSA2MDtcbiAgICBjb25zdCBib3hlcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FwaXRhbC1ib3gnKV07XG4gICAgY29uc3QgdXBkYXRlVGV4dCA9IChpZCwgdGV4dCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0R2FtZUJ1dHRvbicpO1xuICAgIGNvbnN0IHBsYXllck5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJOYW1lJyk7XG5cbiAgICBzdGFydEdhbWVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHBsYXllck5hbWVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcblxuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7IFxuICAgICAgICB0aW1lci0tO1xuICAgICAgICBpZiAodGltZXIgPCAwKSB7XG4gICAgICAgICAgICBhd2FpdCBmaW5pc2hHYW1lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGVUZXh0KCd0aW1lcicsIGBUaW1lIGxlZnQ6ICR7dGltZXJ9IHNlY29uZHNgKTtcbiAgICAgICAgfVxuICAgIH0sIDEwMDApO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmluaXNoR2FtZSgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgYXdhaXQgcG9zdFNjb3JlKHBsYXllck5hbWVJbnB1dC52YWx1ZSwgc2NvcmUpO1xuICAgICAgICBhd2FpdCBkaXNwbGF5TGVhZGVyYm9hcmQoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVhZGVyYm9hcmQtZGl2Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgY29uc3QgcHVsbENvdW50cnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2d1ZXNzLXRoZS1jYXBpdGFsLWFzd2oub25yZW5kZXIuY29tL2NvdW50cmllcy9yYW5kb20nKTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCBzaHVmZmxlZENhcGl0YWxzID0gZGF0YS5tYXAoZCA9PiBkLmNhcGl0YWxfY2l0eSkuc29ydCgoKSA9PiAwLjUgLSBNYXRoLnJhbmRvbSgpKTtcblxuICAgICAgICAgICAgdXBkYXRlVGV4dCgncXVlc3Rpb24nLCBgV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiAke2RhdGFbMF0uY291bnRyeX0/YCk7XG4gICAgICAgICAgICBib3hlcy5mb3JFYWNoKChib3gsIGkpID0+IGJveC5pbm5lclRleHQgPSBzaHVmZmxlZENhcGl0YWxzW2ldKTtcblxuICAgICAgICAgICAgcmV0dXJuIHsgW2RhdGFbMF0uY291bnRyeV06IGRhdGFbMF0uY2FwaXRhbF9jaXR5IH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdGhlIGRhdGEnLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0Fuc3dlckFuZFJlZnJlc2ggPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjb3JyZWN0QW5zd2VyID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50Q291bnRyeUNhcGl0YWxNYXApWzBdO1xuICAgICAgICBpZihlLnRhcmdldC5pbm5lclRleHQgPT09IGNvcnJlY3RBbnN3ZXIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiQ29ycmVjdCBBbnN3ZXJcIik7XG4gICAgICAgICAgICB1cGRhdGVUZXh0KCdzY29yZScsIGBTY29yZTogJHsrK3Njb3JlfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoYEluY29ycmVjdCBBbnN3ZXIsIHRoZSBjb3JyZWN0IGFuc3dlciB3YXM6ICR7Y29ycmVjdEFuc3dlcn1gKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50Q291bnRyeUNhcGl0YWxNYXAgPSBhd2FpdCBwdWxsQ291bnRyeSgpO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50Q291bnRyeUNhcGl0YWxNYXAgPSBhd2FpdCBwdWxsQ291bnRyeSgpO1xuICAgIGJveGVzLmZvckVhY2goYm94ID0+IGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQW5zd2VyQW5kUmVmcmVzaCkpO1xufVxuXG5jb25zdCBwb3N0U2NvcmUgPSBhc3luYyAocGxheWVyLCBzY29yZSkgPT4ge1xuICAgIGF3YWl0IGZldGNoKCdodHRwczovL2d1ZXNzLXRoZS1jYXBpdGFsLWFzd2oub25yZW5kZXIuY29tL3BsYXllcnMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwbGF5ZXIsIHNjb3JlOiBzY29yZS50b1N0cmluZygpIH0pLFxuICAgIH0pO1xufVxuXG5jb25zdCBnZXRTY29yZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9ndWVzcy10aGUtY2FwaXRhbC1hc3dqLm9ucmVuZGVyLmNvbS9wbGF5ZXJzJyk7XG4gICAgICAgIGNvbnN0IHNjb3JlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHNjb3Jlcy5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYi5zY29yZSkgLSBOdW1iZXIoYS5zY29yZSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB0aGUgc2NvcmVzJywgZXJyb3IpO1xuICAgIH1cbn1cblxuY29uc3QgZGlzcGxheUxlYWRlcmJvYXJkID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGxlYWRlcmJvYXJkID0gYXdhaXQgZ2V0U2NvcmVzKCk7XG4gICAgY29uc3QgbGVhZGVyYm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVhZGVyYm9hcmQnKTtcblxuICAgIHdoaWxlIChsZWFkZXJib2FyZERpdi5maXJzdENoaWxkKSBsZWFkZXJib2FyZERpdi5maXJzdENoaWxkLnJlbW92ZSgpO1xuXG4gICAgbGVhZGVyYm9hcmQuZm9yRWFjaCgoe3BsYXllciwgc2NvcmV9KSA9PiB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJ9OiAke3Njb3JlfWA7XG4gICAgICAgIGxlYWRlcmJvYXJkRGl2LmFwcGVuZENoaWxkKHApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lQnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBob21lQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IHJ1bkdhbWUgfVxuIiwiY29uc3QgeyBydW5HYW1lIH0gPSByZXF1aXJlKCcuL2FwcC5qcycpXG5cbmNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydEdhbWVCdXR0b24nKVxuLy8gY29uc3QgcXVpeiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6Jyk7XG5cbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vIHF1aXouc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgcnVuR2FtZSgpO1xuICAgIHRoaXMucmVtb3ZlKCk7XG59KVxuIl19
