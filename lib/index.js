const $ = require('jquery');
require('./board');

const Board = require('./board');

$(document).ready( function () {

  var shapes = ['triangle.png', 'triangle.png', 'circle.png', 'circle.png', 'star.png', 'star.png', 'square.png', 'square.png'];

  var letters = ['a.png', 'a.png', 'b.png', 'b.png', 'c.png', 'c.png', 'd.png', 'd.png'];

  var mystery = ['horace.png', 'horace.png', 'mike.png', 'mike.png', 'jeff.png', 'jeff.png', 'andrew.png', 'andrew.png'];

  var sesame = ['elmo.jpg', 'elmo.jpg', 'berternie.jpg', 'berternie.jpg', 'cookie.jpg', 'cookie.jpg', 'bigbird.jpg', 'bigbird.jpg'];

  var colors = ['red.jpg', 'red.jpg', 'blue.jpg', 'blue.jpg', 'green.jpg', 'green.jpg', 'yellow.jpg', 'yellow.jpg'];

  var shapesDeck = document.getElementById('shapes');
  shapesDeck.addEventListener('click', function() {
    var board = new Board(shapes);
    board.render();
    board.bindCardListeners();
    $("button.deck" ).remove();
  });

  var mysteryDeck = document.getElementById('mystery');
  mysteryDeck.addEventListener('click', function() {
    var board = new Board(mystery);
    board.render();
    board.bindCardListeners();
    $("button.deck" ).remove();
  });

  var sesameDeck = document.getElementById('sesame');
  sesameDeck.addEventListener('click', function() {
    var board = new Board(sesame);
    board.render();
    board.bindCardListeners();
    $("button.deck" ).remove();
  });

  var lettersDeck = document.getElementById('letters');
  lettersDeck.addEventListener('click', function() {
    var board = new Board(letters);
    board.render();
    board.bindCardListeners();
    $("button.deck" ).remove();
  });

  var colorsDeck = document.getElementById('colors');
  colorsDeck.addEventListener('click', function() {
    var board = new Board(colors);
    board.render();
    board.bindCardListeners();
    $("button.deck" ).remove();
  });

  var quit = document.getElementById('quit');
  quit.addEventListener('click', function() {
    location.reload();
  });

});
