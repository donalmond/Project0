// Break the project down into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
// Use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
// Work through the lessons in class, ask questions and come to office hours when you need to. Think about adding relevant code to your Tic Tac Toe game each night, instead of, you know... procrastinating.
// Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
// Check out Tutorial and Documentation resources (jQuery tutorial) at home to better understand what you’ll be getting into.
// Don’t be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

$(document).ready(function() {
//!!!! even or odd to determine player
//!!!! when counter gets to 9 then board resets
  var counter = 0;

  // GLOBAL WIN COUNTER TESTS
  // var p1Counter = 0;
  // var p2Counter = 0;

  // Array is created to check against player classes to determine winner.
  var player1Array = [];
  var player2Array = [];
  // if a box is clicked counter is up by one
  // if another box is clicked counter goes down by one

  var resetGame = function() {
    counter = 0;
    player1Array = [];
    player2Array = [];
    $('div.box').removeClass('player1');
    $('div.box').removeClass('player2');

  };

  var checkWin = function(playerArray, winner) {
  // CHECKING HORIZONTALS

           if (playerArray.includes("#1") &&
               playerArray.includes("#2") &&
               playerArray.includes("#3")) {
                alert(winner + " wins");
                resetGame();
    } else if (playerArray.includes("#4") &&
               playerArray.includes("#5") &&
               playerArray.includes("#6")) {
                alert(winner + " wins");
                 resetGame();
    } else if (playerArray.includes("#4") &&
               playerArray.includes("#5") &&
               playerArray.includes("#6")) {
                alert(winner + " wins");
                 resetGame();
    } else if (playerArray.includes("#7") &&
               playerArray.includes("#8") &&
               playerArray.includes("#9")) {
                alert(winner + " wins");
                 resetGame();

     // // CHECKING VERTICALS
    } else if (playerArray.includes("#1") &&
               playerArray.includes("#4") &&
               playerArray.includes("#7")) {
                alert(winner + " wins");
                 resetGame();
    } else if (playerArray.includes("#2") &&
               playerArray.includes("#5") &&
               playerArray.includes("#8")) {
                alert(winner + " wins");
                 resetGame();
    } else if (playerArray.includes("#3") &&
               playerArray.includes("#6") &&
               playerArray.includes("#9")) {
                alert(winner + " wins");
                 resetGame();

    // // CHECKING DIAGONALS
    } else if (playerArray.includes("#7") &&
               playerArray.includes("#5") &&
               playerArray.includes("#3")) {
                alert(winner + " wins");
                 resetGame();
    } else if (playerArray.includes("#9") &&
               playerArray.includes("#5") &&
               playerArray.includes("#1")) {
                alert(winner + " wins");
                 resetGame();
    } else if (counter === 9) {
               alert(" The Game is a Tie!");
                resetGame();
    }
    // GLOBAL WIN COUNTER TESTS
    // if  (winner === "player 1") {
    //   p1Counter ++;
    // console.log(p1Counter);
    // }
  };

  $(".box").on("click", function() {
      // Turns off click function after initial click
    if ($(this).hasClass('player1') || $(this).hasClass('player2')) {
      return false;
    }

    if (counter % 2 === 0) {
      counter++;
      // Adds the player class
      $(this).addClass('player1');
      // adds the current boxes id to relevent array
      player1Array.push('#' + this.id);
      // runs function to check win
      checkWin(player1Array, "player 1");
      console.log(player1Array);
    } else if (counter % 2 !== 0) {
      counter  ++;
      // Adds the player class
      $(this).addClass('player2');
      // adds the current boxes id to relevent array
      player2Array.push('#' + this.id);
      // runs function to check win
      checkWin(player2Array, "player 2");
          console.log(player2Array);
    }
  });
});
