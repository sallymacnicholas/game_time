const $ = require('jquery');
const Card = require('./card');

var numberOfClicks = 0;

function Board(array) {
  this.deck = array;
  this.deck_for_game = [];
  this.selectedCards = [];
  this.matchedCards = 0;
};

Board.prototype.render = function() {
  this.shuffle();
  $('.click_count').css('display', 'block');
  $('.instructions').css('display', 'none');
  for(var i = 0; i < this.deck.length; i++) {
    var card = new Card(this.deck[i], i);
    this.deck_for_game.push(card);
    var deck = '<div class="card" id="card_' + i + '" data-card-index="' + i + '"></div>';
    document.getElementById('memory_board').innerHTML += deck;
  }
};


$(document).ready( function() {
  Board.prototype.bindCardListeners = function() {
    var board = this;
    var cards = document.querySelectorAll('.card')
    this.deck_for_game.forEach(function(card, index) {
      var card_div = document.querySelector('#card_' + index)
      card_div.addEventListener('click', function() {
        if (card.visible === false) {
          board.flipCard(card_div, card);
        }
        numberOfClicks++;
        $("#clicks").html(numberOfClicks);
      });
    });
  };
});

Board.prototype.shuffle = function() {
  for (var j, x, i = this.deck.length; i; j = Math.floor(Math.random() * i), x = this.deck[--i], this.deck[i] = this.deck[j], this.deck[j] = x);
  return this.deck;
};

Board.prototype.flipCard = function(div, card) {
  var board = this;
  if (this.selectedCards.length <= 1) {
    this.cardFadeOut(div, card);
    card.visible = true;
    this.selectedCards.push(div, card);

  } else if (this.selectedCards.length === 2) {
    this.cardFadeOut(div, card);
    card.visible = true;
    this.selectedCards.push(div, card);
    this.compare(board);
  }
};

Board.prototype.cardFadeOut = function (div, card) {
  $(div).fadeTo('fast', 0.5, function() {
    $(this).css('background-image', 'url(images/' + card.image + ')');
  }).fadeTo('slow', 1);
};

Board.prototype.compare = function (board) {
  var audio = new Audio('sounds/tada.wav');
  if (this.selectedCards[1].image === this.selectedCards[3].image) {
    this.matchedCards += 2;
    audio.play();
    this.checkIfGameWon(board);
    this.selectedCards = [];
  } else {
    this.mismatchedCards(board);
  };
};

Board.prototype.mismatchedCards = function(board) {
  var audio = new Audio('sounds/error.wav');
  audio.play();
  setTimeout(function() {
    $(board.selectedCards[0]).css('background-image', '');
    board.selectedCards[1].visible = false;
    $(board.selectedCards[2]).css('background-image', '');
    board.selectedCards[3].visible = false;
    board.selectedCards = [];
  }, 1000);
};

Board.prototype.checkIfGameWon = function(board) {
  if (this.matchedCards === this.deck.length) {
    setTimeout(function() {
      alert('You win! And you did it in ' + numberOfClicks + ' clicks!');
      window.location.reload();
      //document.getElementById('memory_board').innerHTML = 'index.html';
      //var newGame = new Board(pets_2);
      //numberOfClicks = 0;
      //$("#clicks").html(numberOfClicks);
      //newGame.render();
      //newGame.bindCardListeners();
    }, 700);
  }
};


module.exports = Board;





