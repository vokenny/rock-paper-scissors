(function () {
  const choices = ['Rock', 'Paper', 'Scissors'];

  function computerPlay() {
    return choices[randomNumber()];
  }

  function randomNumber(max = 3) {
    return Math.floor((Math.random() * max));
  }

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