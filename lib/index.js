const $ = require('jquery');
require('./board');

const Board = require('./board');

$(document).ready( function () {

  var tileSets = {
    shapes: ['triangle.png', 'triangle.png', 'circle.png', 'circle.png', 'star.png', 'star.png', 'square.png', 'square.png'],
    letters: ['a.png', 'a.png', 'b.png', 'b.png', 'c.png', 'c.png', 'd.png', 'd.png'],
    mystery: ['horace.png', 'horace.png', 'mike.png', 'mike.png', 'jeff.png', 'jeff.png', 'andrew.png', 'andrew.png'],
    sesame: ['elmo.jpg', 'elmo.jpg', 'berternie.jpg', 'berternie.jpg', 'cookie.jpg', 'cookie.jpg', 'bigbird.jpg', 'bigbird.jpg'],
    colors: ['red.jpg', 'red.jpg', 'blue.jpg', 'blue.jpg', 'green.jpg', 'green.jpg', 'yellow.jpg', 'yellow.jpg']
  };

  for (var tileSet in tileSets) {
    createNewGameListener(tileSet, tileSets[tileSet]);
  }

  function createNewGameListener(setName, tiles) {
  	var el = document.getElementById(setName);
  	el.addEventListener('click', function() {
 	    var board = new Board(tiles);
      board.render();
      board.bindCardListeners();
      $("button.deck" ).remove();
    });
  }

  var quit = document.getElementById('quit');
  quit.addEventListener('click', function() {
    location.reload();
  });

});
