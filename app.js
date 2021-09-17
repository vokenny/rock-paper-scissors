(function () {
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];

  function computerPlay() {
    return choices[randomNumber()];
  }

  function randomNumber(max = 3) {
    return Math.floor((Math.random() * max));
  }

  function playRound() {
    const playerChoice = getPlayerInput();
    const sanitisedInput = sanitiseInput(playerChoice);

    if (isValidPlayerChoice(sanitisedInput)) {
      announceResults(sanitisedInput, computerPlay())
    } else {
      console.log('Please submit a valid choice');
      playRound();
    }
  }

  function getPlayerInput(message = "What's your choice? Rock, Paper, or Scissors?") {
    return prompt(message);
  }

  function sanitiseInput(playerChoice) {
    return playerChoice.trim().toUpperCase();
  }

  function isValidPlayerChoice(choice) {
    return choices.includes(choice)
  }

  function announceResults(playerChoice, compChoice) {
    let result = '';

    switch (true) {
      case (playerChoice === compChoice):
        result = 'DRAW';
        break;
      case (playerChoice === choices[0]):
        result = compChoice === choices[1] ? 'LOSE' : 'WIN';
        break;
      case (playerChoice === choices[1]):
        result = compChoice === choices[2] ? 'LOSE' : 'WIN';
        break;
      case (playerChoice === choices[2]):
        result = compChoice === choices[0] ? 'LOSE' : 'WIN';
        break;
    }

    console.log(result, `\nYou chose: ${playerChoice}\nComputer chose: ${compChoice}`)
  }

  /* Game begins here */
  playRound();

  /* Testing random distribution */

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