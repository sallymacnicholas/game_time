var $ = require('jquery');
$(document).ready(function () {
var pets = ['dog.png','dog.png','dolphin.png','dolphin.png', 'cat.png', 'cat.png', 'capybara.png', 'capybara.png'];
//var pets = ['dolphin','dolphin','dolphin','dolphin'];
var selectedCards = [];

var petsDeck = document.getElementById('pets');
  petsDeck.addEventListener('click', function() {
    var board = new Board(pets);
    board.render();
    bindCardListeners(board);
  });
  // change the card visible attribute to be true or false
  // then have the board re-render
  // a card was clicked; can we tell the board to flip
  // the appropriate card for that... index? x/y?
function bindCardListeners(board) {
  var cards = document.querySelectorAll('.card')
  board.deck_for_game.forEach( function(card, index) {
    var card_div = document.querySelector('#card_' + index)
    card_div.addEventListener('click', function() {
      if (card.visible === false) {
        flipCard(card_div, card);
      }
    });
  });
};

function Card(url, index) {
  this.image = url
  this.visible = false
  this.index = index
}


Board.prototype.shuffle = function() {
  for(var j, x, i = this.deck.length; i; j = Math.floor(Math.random() * i), x = this.deck[--i], this.deck[i] = this.deck[j], this.deck[j] = x);
    return this.deck;
}

function Board(array) {
  this.deck = array
  this.deck_for_game = [];
}

function flipCard(div, card) {
  if (selectedCards.length === 0) {
    $(div).css('background-image', 'url(images/' + card.image + ')');
    card.visible = true;
    selectedCards.push(div, card);
    console.log(selectedCards);
  } else if (selectedCards.length === 2) {
    $(div).css('background-image', 'url(images/' + card.image + ')');
    card.visible = true;
    selectedCards.push(div, card);

    if (selectedCards[1].image === selectedCards[3].image) {
      //matchedCards += 2;
      selectedCards = [];
    } else {
      setTimeout(function() {
        $(selectedCards[0]).css('background-image', '');
        selectedCards[1].visible = false;
        $(selectedCards[2]).css('background-image', '');
        selectedCards[3].visible = false;
        selectedCards = [];
      }, 800);
    }
  }






  //if (selectedCards < 2) {
  //  selectedCards.push(div, card)
  //} else if (selectedCards.length === 2) {
  //  if (selectedCards[0].second.card.image === selectedCards[1].second.card.image) {
  //    selectedCards = [];
  //  } else {
  //    setTimeout(function() {
  //      selectedCards[0].div.css('background-image', '');
  //      selectedCards[1].div.css('background-image', '');
  //      selectedCards = [];
  //    }, 800);
  //  }
  //};
};

Board.prototype.render = function() {
  this.shuffle();
  for(var i = 0; i < this.deck.length; i++) {
    var card = new Card(this.deck[i], i);
    this.deck_for_game.push(card);
    var deck = '<div class="card" id="card_' + i + '" data-card-index="' + i + '"></div>';
    document.getElementById('memory_board').innerHTML += deck;
  }
}
});
//Card -- image, flipped(visible or hidden)
//Deck -- stores cards, shuffle
//BoardGames -- renders deck, matches cards (num of matched cards === num of cards in deck)
//Game -- renders board, determine if game won?, number of clicks
