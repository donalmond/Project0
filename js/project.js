// Break the project down into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
// Use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
// Work through the lessons in class, ask questions and come to office hours when you need to. Think about adding relevant code to your Tic Tac Toe game each night, instead of, you know... procrastinating.
// Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
// Check out Tutorial and Documentation resources (jQuery tutorial) at home to better understand what you’ll be getting into.
// Don’t be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.
//
//functionality and logic /////   presentation ui
// current move             //      display current move
//clickhandlers             //      display move

//virtual version which logs the front end choices

$( document ).ready(function() {

// Changes color once box has been clicked
  $(".box").on("click", function () {
  $(this).css('background-color', 'firebrick');
  });
// once a box has been clicked and changed colour
// next clicked box changes to a different colour

//a function, array or something logs these colour changes
//and stores them

//once three of these are logged in a 3 then game returns winner
// if it is a tie without 3 in a row game calls tie

});
