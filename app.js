(function () {
  const CHOICES = ['rock', 'paper', 'scissors'];
  const SCORE_TO_WIN = 5;

  const playerChoices = document.querySelector('#player-choices');
  const compChoices = document.querySelector('#comp-choices');
  const resultsZone = document.querySelector('#results-zone');

  const restartButtonHtml = `<div class="choice">
      <button id="restart" class="button">Restart</button>
    </div>`;

  let playerWins = 0;
  let compWins = 0;

  function randomNumber(max) {
    return Math.floor((Math.random() * max));
  }

  function computerPlay() {
    const max = CHOICES.length;
    return CHOICES[randomNumber(max)];
  }

  function resolveRound(playerChoice, compChoice) {
    let result = '';

    switch (true) {
      case (playerChoice === compChoice):
        result = 'DRAW';
        break;
      case (playerChoice === CHOICES[0]):
        result = compChoice === CHOICES[1] ? 'LOSE' : 'WIN';
        break;
      case (playerChoice === CHOICES[1]):
        result = compChoice === CHOICES[2] ? 'LOSE' : 'WIN';
        break;
      case (playerChoice === CHOICES[2]):
        result = compChoice === CHOICES[0] ? 'LOSE' : 'WIN';
        break;
    }

    return result;
  }

  function updateScores(result) {
    if (result === 'WIN') playerWins++;
    if (result === 'LOSE') compWins++;

    const playerScore = document.querySelector('#player-score');
    const compScore = document.querySelector('#comp-score');

    playerScore.textContent = playerWins;
    compScore.textContent = compWins;
  }

  function showResultsZone() {
    const finalResult = playerWins > compWins ? 'PLAYER WINS' : 'COMPUTER WINS';
    const resultsHtml = `<h1 id="final-score">${finalResult}</h1> ${restartButtonHtml}`

    resultsZone.innerHTML = resultsHtml;

    const restartButton = document.querySelector('#restart');
    restartButton.addEventListener('click', restartGame);

    playerChoices.setAttribute('hidden', '');
    compChoices.setAttribute('hidden', '');
    resultsZone.removeAttribute('hidden', '');
  }

  function restartGame() {
    playerWins = 0;
    compWins = 0;

    updateScores();

    playerChoices.removeAttribute('hidden', '');
    compChoices.removeAttribute('hidden', '');
    resultsZone.setAttribute('hidden', '');
  }

  function playRound(event) {
    // TODO: Visually show player and comp choices for 2 seconds
    // Disable buttons during the timeout, then reset

    let playerChoice = event.target.value;
    let compChoice = computerPlay();

    const result = resolveRound(playerChoice, compChoice);

    updateScores(result);

    if (playerWins === SCORE_TO_WIN || compWins === SCORE_TO_WIN) {
      showResultsZone();
    }
  }

  /*** Game begins here ***/

  const playerButtons = Array.from(document.querySelectorAll('#player-choices .button'));

  playerButtons.forEach(button => {
    button.addEventListener('click', playRound);
  });

  /*** Game ends here ***/

  /*** Testing random distribution ***/
  // let rockCount = 0;
  // let paperCount = 0;
  // let scissorsCount = 0;

  // for (i = 1; i <= 10000; i++) {
  //   switch (computerPlay()) {
  //     case 'Rock':
  //       rockCount++;
  //       break;
  //     case 'Paper':
  //       paperCount++;
  //       break;
  //     case 'Scissors':
  //       scissorsCount++;
  //       break;
  //   }
  // }

  // function logCounts() {
  //   console.log('Rock', rockCount);
  //   console.log('Paper', paperCount);
  //   console.log('Scissors', scissorsCount);
  // }

  // logCounts();
})();