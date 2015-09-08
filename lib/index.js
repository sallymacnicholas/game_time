const $ = require('jquery');
require('./board');

const Board = require('./board');

$(document).ready( function () {

  var shapes = ['triangle.png', 'triangle.png', 'circle.png', 'circle.png'];

  var letters = ['a.png', 'a.png', 'b.png', 'b.png']

  var staff = ['horace.png', 'horace.png', 'mike.png', 'mike.png', 'jeff.png', 'jeff.png', 'andrew.png', 'andrew.png'];

  var paws = ['marshall.png', 'marshall.png', 'chase.png', 'chase.png']

  var shapesDeck = document.getElementById('shapes');

  shapesDeck.addEventListener('click', function() {
    var board = new Board(shapes);
    board.render();
    board.bindCardListeners();
    $("button.deck" ).remove();
  });


  var staffDeck = document.getElementById('staff');
  staffDeck.addEventListener('click', function() {
    var board = new Board(staff);
    board.render();
    board.bindCardListeners();
    $("button.deck" ).remove();
  });

  var pawsDeck = document.getElementById('paws');
  pawsDeck.addEventListener('click', function() {
    var board = new Board(paws);
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

  var quit = document.getElementById('quit');
  quit.addEventListener('click', function() {
    location.reload();
  });

});
