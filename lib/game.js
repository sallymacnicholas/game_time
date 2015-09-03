var $ = require('jquery');
$(document).ready(function () {
var pets = ['dog.png','dog.png','dolphin.png','dolphin.png', 'cat.png', 'cat.png', 'capybara.png', 'capybara.png'];

var petsDeck = document.getElementById('pets');
  petsDeck.addEventListener('click', function() {
    var board = new Board(pets);
    board.render();
    bindCardListeners();
  });

function bindCardListeners() {
  var cards = document.querySelectorAll('.card')
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
      console.log(this.flipCard);
      // change the card visible attribute to be true or false
      // then have the board re-render
      // a card was clicked; can we tell the board to flip
      // the appropriate card for that... index? x/y?
    });  
  }
}

function Card(url, index) {
  this.image = url
  this.visible = false
  this.index = index
}

// Card.prototype.flipped = function() {
  
//   if (this.visisble === false) {
//     this.visible = true
//     flippedCards.push()
//   };

// };

Board.prototype.shuffle = function() {
  for(var j, x, i = this.deck.length; i; j = Math.floor(Math.random() * i), x = this.deck[--i], this.deck[i] = this.deck[j], this.deck[j] = x);
    return this.deck;
}

function Board(array) {
  this.deck = array
  this.deck_for_game = [];
}

Card.prototype.flipCard = function(index) {
  if (this.visible === false) {
    this.visible = true
  };
}

Board.prototype.rerender = function() {
  for(var i = 0; i < this.deck_for_game.length; i++) {
    var deck = '<div class="card" id="' + this.deck_for_game[i] + '" data-card-index="' + i + '"></div>';
    document.getElementById('memory_board').innerHTML += deck;  
  }
}

Board.prototype.render = function() {
  this.shuffle();
  console.log(this.deck.length)
  for(var i = 0; i < this.deck.length; i++) {
    var card = new Card(this.deck[i], i);
    this.deck_for_game.push(card);
    var deck = '<div class="card" id="' + this.deck[i] + '" data-card-index="' + i + '"></div>';
    document.getElementById('memory_board').innerHTML += deck;  
  }
  console.log(this.deck_for_game);
}
});
//Card -- image, flipped(visible or hidden)
//Deck -- stores cards, shuffle
//BoardGames -- renders deck, matches cards (num of matched cards === num of cards in deck)
//Game -- renders board, determine if game won?, number of clicks