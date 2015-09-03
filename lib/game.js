var $ = require('jquery');
$(document).ready(function () {
var pets = ['dog.png','dog.png','dolphin.png','dolphin.png', 'cat.png', 'cat.png', 'capybara.png', 'capybara.png'];

var petsDeck = document.getElementById('pets');
  petsDeck.addEventListener('click', function() {
    var board = new Board(pets);
    board.render();
  });

function Card(url) {
  this.image = url
  this.flipped = false
}

Board.prototype.shuffle = function() {
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function Board(array) {
  this.deck = array
}

Board.prototype.render = function() {
  this.shuffle;
  console.log(this.deck.length)
  for(var i = 0; i < this.deck.length; i++) {
    new Card(this.deck[i]);
    var deck = '<div class="card" id="' + this.deck[i] + '"></div>';
    document.getElementById('memory_board').innerHTML += deck;  
  }
}
});
//Card -- image, flipped(visible or hidden)
//Deck -- stores cards, shuffle
//BoardGames -- renders deck, matches cards (num of matched cards === num of cards in deck)
//Game -- renders board, determine if game won?, number of clicks