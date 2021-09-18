(function () {
  const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];

  let rounds = 0;
  let playerWins = 0;
  let compWins = 0;

  function selectNumOfRounds() {
    rounds = getPlayerInput(
      'How many rounds do you want to play? (Up to 10)',
      isValidNumOfRounds
    );
  }

  function isValidNumOfRounds(input) {
    const number = parseInt(input);
    return (number > 0 && number <= 10);
  }

  function sanitisePlayerInput(input) {
    return input.trim().toUpperCase();
  }

  function isValidPlayerChoice(choice) {
    if (typeof choice === 'string') return CHOICES.includes(choice);
  }

  function getPlayerInput(message, validationHandler) {
    const input = prompt(message);
    const sanitisedInput = sanitisePlayerInput(input);
    const validInput = validationHandler(sanitisedInput) ?
      sanitisedInput : getPlayerInput(message, validationHandler);

    return validInput;
  }

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
  }

  function announceResults(result, playerChoice, compChoice) {
    console.log(result, `\nYou chose: ${playerChoice}\nComputer chose: ${compChoice}`);
    console.log('Current scores:', `\nPlayer: ${playerWins}\nComputer: ${compWins}`);
  }

  function announceFinalResult() {
    let finalResult = '';

    switch (true) {
      case (playerWins === compWins):
        finalResult = 'DRAW';
        break;
      case (playerWins > compWins):
        finalResult = 'PLAYER WINS';
        break;
      case (playerWins < compWins):
        finalResult = 'COMPUTER WINS';
        break;
    }

    console.log('FINAL SCORES', `\nPlayer: ${playerWins}\nComputer: ${compWins}`);
    console.log(finalResult);
  }

  function playRounds() {
    const playerChoice = getPlayerInput(
      "What's your choice? Rock, Paper, or Scissors?",
      isValidPlayerChoice
    );

    const compChoice = computerPlay();
    const result = resolveRound(playerChoice, compChoice);

    updateScores(result);
    announceResults(result, playerChoice, compChoice);
  }

  /*** Game begins here ***/

  selectNumOfRounds();

  for (round = 0; round < rounds; round++) {
    console.log('Round', round + 1);
    playRounds();
  }

  announceFinalResult();

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