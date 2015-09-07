const $ = require('jquery');
require('./board');

const Board = require('./board');

$(document).ready( function () {

  var pets = ['dog.png', 'dog.png', 'dolphin.png', 'dolphin.png'];

  var staff = ['horace.png', 'horace.png', 'mike.png', 'mike.png', 'jeff.png', 'jeff.png', 'andrew.png', 'andrew.png'];

  var paws = ['rubble.png', 'rubble.png', 'rocky.png', 'rocky.png', 'skye.png', 'skye.png', 'zuma.png', 'zuma.png', 'marshall.png', 'marshall.png', 'chase.png', 'chase.png']

  var petsDeck = document.getElementById('pets');

  petsDeck.addEventListener('click', function() {
    var board = new Board(pets);
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

  var quit = document.getElementById('quit');
  quit.addEventListener('click', function() {
    location.reload();
  });

});
