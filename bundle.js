(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
async function runGame() {
    let score = 0, timer = 60;
    const boxes = document.querySelectorAll('.capital-box');
    let currentCountryCapitalMap;

    const playerNameInput = document.getElementById('playerName');
    const playerName = playerNameInput.value; 
    playerNameInput.style.display = 'none'; 

    const updateText = (id, text) => document.getElementById(id).innerText = text;

    updateText('score', `Score: ${score}`);
    updateText('timer', `Time left: ${timer} seconds`);
    document.getElementById('startGameButton').disabled = true;

    const intervalId = setInterval(async () => { 
        if (--timer <= 0) {
            clearInterval(intervalId);
            boxes.forEach(box => box.removeEventListener('click', checkAnswerAndRefresh));
            alert(`Time's up! Your score is ${score}`);

            
            await postScore(playerName, score);

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

async function postScore(player, score) {
    const response = await fetch('https://guess-the-capital-aswj.onrender.com/players', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            player,
            score: score.toString() 
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJhc3luYyBmdW5jdGlvbiBydW5HYW1lKCkge1xuICAgIGxldCBzY29yZSA9IDAsIHRpbWVyID0gNjA7XG4gICAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FwaXRhbC1ib3gnKTtcbiAgICBsZXQgY3VycmVudENvdW50cnlDYXBpdGFsTWFwO1xuXG4gICAgY29uc3QgcGxheWVyTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllck5hbWUnKTtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gcGxheWVyTmFtZUlucHV0LnZhbHVlOyBcbiAgICBwbGF5ZXJOYW1lSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgXG5cbiAgICBjb25zdCB1cGRhdGVUZXh0ID0gKGlkLCB0ZXh0KSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJUZXh0ID0gdGV4dDtcblxuICAgIHVwZGF0ZVRleHQoJ3Njb3JlJywgYFNjb3JlOiAke3Njb3JlfWApO1xuICAgIHVwZGF0ZVRleHQoJ3RpbWVyJywgYFRpbWUgbGVmdDogJHt0aW1lcn0gc2Vjb25kc2ApO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEdhbWVCdXR0b24nKS5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4geyBcbiAgICAgICAgaWYgKC0tdGltZXIgPD0gMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgIGJveGVzLmZvckVhY2goYm94ID0+IGJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQW5zd2VyQW5kUmVmcmVzaCkpO1xuICAgICAgICAgICAgYWxlcnQoYFRpbWUncyB1cCEgWW91ciBzY29yZSBpcyAke3Njb3JlfWApO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGF3YWl0IHBvc3RTY29yZShwbGF5ZXJOYW1lLCBzY29yZSk7XG5cbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXBkYXRlVGV4dCgndGltZXInLCBgVGltZSBsZWZ0OiAke3RpbWVyfSBzZWNvbmRzYCk7XG4gICAgICAgIH1cbiAgICB9LCAxMDAwKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHB1bGxDb3VudHJ5KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9ndWVzcy10aGUtY2FwaXRhbC1hc3dqLm9ucmVuZGVyLmNvbS9jb3VudHJpZXMvcmFuZG9tJyk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBjb25zdCBjYXBpdGFscyA9IGRhdGEubWFwKGQgPT4gZC5jYXBpdGFsX2NpdHkpO1xuICAgICAgICAgICAgY29uc3QgY291bnRyeV9jYXBpdGFsX21hcCA9IHsgW2RhdGFbMF0uY291bnRyeV06IGRhdGFbMF0uY2FwaXRhbF9jaXR5IH07XG4gICAgICAgICAgICBmb3IobGV0IGkgPSBjYXBpdGFscy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKXtcbiAgICAgICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XG4gICAgICAgICAgICAgICAgW2NhcGl0YWxzW2ldLCBjYXBpdGFsc1tqXV0gPSBbY2FwaXRhbHNbal0sIGNhcGl0YWxzW2ldXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlVGV4dCgncXVlc3Rpb24nLCBgV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiAke2RhdGFbMF0uY291bnRyeX0/YCk7XG4gICAgICAgICAgICBib3hlcy5mb3JFYWNoKChib3gsIGkpID0+IGJveC5pbm5lclRleHQgPSBjYXBpdGFsc1tpXSk7XG4gICAgICAgICAgICByZXR1cm4gY291bnRyeV9jYXBpdGFsX21hcDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB0aGUgZGF0YScsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5zd2VyQW5kUmVmcmVzaChlKSB7XG4gICAgICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXIgPSBjdXJyZW50Q291bnRyeUNhcGl0YWxNYXBbT2JqZWN0LmtleXMoY3VycmVudENvdW50cnlDYXBpdGFsTWFwKVswXV07XG4gICAgICAgIGlmKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gY29ycmVjdEFuc3dlcikge1xuICAgICAgICAgICAgYWxlcnQoXCJDb3JyZWN0IEFuc3dlclwiKTtcbiAgICAgICAgICAgIHVwZGF0ZVRleHQoJ3Njb3JlJywgYFNjb3JlOiAkeysrc2NvcmV9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChgSW5jb3JyZWN0IEFuc3dlciwgdGhlIGNvcnJlY3QgYW5zd2VyIHdhczogJHtjb3JyZWN0QW5zd2VyfWApO1xuICAgICAgICB9XG4gICAgICAgIGJveGVzLmZvckVhY2goYm94ID0+IGJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQW5zd2VyQW5kUmVmcmVzaCkpO1xuICAgICAgICBjdXJyZW50Q291bnRyeUNhcGl0YWxNYXAgPSBhd2FpdCBwdWxsQ291bnRyeSgpO1xuICAgICAgICBib3hlcy5mb3JFYWNoKGJveCA9PiBib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0Fuc3dlckFuZFJlZnJlc2gpKTtcbiAgICB9XG5cbiAgICBjdXJyZW50Q291bnRyeUNhcGl0YWxNYXAgPSBhd2FpdCBwdWxsQ291bnRyeSgpO1xuICAgIGJveGVzLmZvckVhY2goYm94ID0+IGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQW5zd2VyQW5kUmVmcmVzaCkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0U2NvcmUocGxheWVyLCBzY29yZSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZ3Vlc3MtdGhlLWNhcGl0YWwtYXN3ai5vbnJlbmRlci5jb20vcGxheWVycycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgc2NvcmU6IHNjb3JlLnRvU3RyaW5nKCkgXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHJ1bkdhbWVcbn1cbiIsImNvbnN0IHsgcnVuR2FtZSB9ID0gcmVxdWlyZSgnLi9hcHAuanMnKVxuXG5jb25zdCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnRHYW1lQnV0dG9uJylcbi8vIGNvbnN0IHF1aXogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpeicpO1xuXG5zdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyBxdWl6LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHJ1bkdhbWUoKTtcbiAgICB0aGlzLnJlbW92ZSgpO1xufSlcbiJdfQ==
