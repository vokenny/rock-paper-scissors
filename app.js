(function () {
  const CHOICES = ['rock', 'paper', 'scissors'];
  const SCORE_TO_WIN = 5;

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

  function showResultsScreen() {
    const playerZone = document.querySelector('#player-zone');
    const compZone = document.querySelector('#comp-zone');
    const resultsZone = document.querySelector('#results-zone');

    resultsZone.textContent = playerWins > compWins ? 'PLAYER WINS' : 'COMPUTER WINS';

    playerZone.setAttribute('hidden', '');
    compZone.setAttribute('hidden', '');
    resultsZone.removeAttribute('hidden', '');

    // TODO: add 'Restart game' button with JS to reset state of game and scores
  }

  function playRound(event) {
    // TODO: Visually show player and comp choices for 2 seconds
    // Disable buttons during the timeout, then reset

    let playerChoice = event.target.value;
    let compChoice = computerPlay();

    const result = resolveRound(playerChoice, compChoice);

    updateScores(result);

    if (playerWins === SCORE_TO_WIN || compWins === SCORE_TO_WIN) {
      showResultsScreen();
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