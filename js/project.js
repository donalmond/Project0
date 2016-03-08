// Break the project down into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
// Use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
// Work through the lessons in class, ask questions and come to office hours when you need to. Think about adding relevant code to your Tic Tac Toe game each night, instead of, you know... procrastinating.
// Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
// Check out Tutorial and Documentation resources (jQuery tutorial) at home to better understand what you’ll be getting into.
// Don’t be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

$(document).ready(function() {


  var counter = 0;
  // Array is created to check against player classes to determine winner.
  var player1Array = [];
  var player2Array = [];
  // if a box is clicked counter is up by one
  // if another box is clicked counter goes down by one

  // CHECKING HORIZONTALS
  var checkWin = function(playerArray, winner) {

    if (playerArray.includes("#1") && playerArray.includes("#2"), playerArray.includes ("#3")) {
      alert(winner + " wins");
    // } else
    // if (playerArray.includes("#4" && "#5" && "#6")) {
    //   alert(winner + " wins");
    // } else
    // if (playerArray.includes("#7" && "#8" && "#9")) {
    //   alert(winner + " wins");
    // } else
    //
    // // CHECKING VERTICALS
    // if (playerArray.includes("#1" && "#4" && "#7")) {
    //   alert(winner + " wins");
    // } else
    // if (playerArray.includes("#2" && "#5" && "#8")) {
    //   alert(winner + " wins");
    // } else
    // if (playerArray.includes("#3" && "#6" && "#9")) {
    //   alert(winner + " wins");
    // } else
    //
    // // CHECKING DIAGONALS
    //
    // if (playerArray.includes("#7" && "#5" && "#3")) {
    //   alert(winner + " wins");
    // } else
    // if (playerArray.includes("#9" && "#5" && "#1")) {
    //   alert(winner + " wins");
    }
  };


  // Counter alternates between player one and player 2
  // Changes color once box has been clicked
  $(".box").on("click", function() {
    if (counter < 1) {
      counter++;
      $(this).css('background-color', 'red');
      // Adds the player class
      $(this).addClass('player1');
      // Turns off click function after initial click
      $(this).off("click");
      // adds the current boxes id to relevent array
      player1Array.push('#' + this.id);
      // runs function to check win
      checkWin(player1Array, "player 1");
      console.log(player1Array);
    } else if (counter === 1) {
      counter -= 1;
      $(this).css('background-color', 'blue');
      // Adds the player class
      $(this).addClass('player2');
      // Turns off click function after initial click
      $(this).off("click");
      // adds the current boxes id to relevent array
      player2Array.push('#' + this.id);
      // runs function to check win
      checkWin(player2Array, "player 2");
          console.log(player2Array);
    }
  });



  // if it is a tie without 3 in a row game calls tie

});
