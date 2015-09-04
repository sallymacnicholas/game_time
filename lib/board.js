var $ = require('jquery');
//var deck = require('./deck');

$(document).ready(function () {
  var selectedCards = [];
  var matchedCards = 0;

  var pets = ['dog.png', 'dog.png', 'dolphin.png', 'dolphin.png'];
  var pets_2 = ['dog.png', 'dog.png', 'dolphin.png', 'dolphin.png', 'cat.png', 'cat.png', 'capybara.png', 'capybara.png'];
  var staff = ['horace.png', 'horace.png', 'mike.png', 'mike.png', 'jeff.png', 'jeff.png', 'andrew.png', 'andrew.png'];

  //var petsDeck = document.getElementById('pets');
  //
  //
  //petsDeck.addEventListener('click', function() {
  //  var board = new Board(pets);
  //  board.render();
  //  bindCardListeners(board);
  //  petsDeck.remove();
  //});

  function decks() {
    $(".deck").on("click", function() {
      //var deck = $(this);
      var name = this.id;
      console.log(typeof name);
      console.log(name)
      var board = new Board(name.replace(/['"]+/g,''));
      board.render();
      bindCardListeners(board);
      //(this.id).remove();
    });
  };

  decks();

      //var deckNames = [];
      //function bindDeckListeners() {
      //  var decks = document.querySelectorAll('.deck');
      //  decks.deckNames.forEach( function(decks, index) {
      //    var card_div = document.querySelector('#card_' + index)
      //    card_div.addEventListener('click', function() {
      //      if (card.visible === false) {
      //        flipCard(card_div, card, board);
      //      }
      //    });
      //  });
      //};
      //
      //
      //function listOfDecks() {
      //  for (var i = 0; i < decks.length; i++) {
      //    decks[i].addEventListener('click', function() {
      //      console.log(i);
      //      var board = new Board(pets);
      //      board.render();
      //      bindCardListeners(board);
      //      petsDeck.remove();
      //    });
      //  }
      //}


    function bindCardListeners(board) {
      var cards = document.querySelectorAll('.card')
      board.deck_for_game.forEach( function(card, index) {
        var card_div = document.querySelector('#card_' + index)
        card_div.addEventListener('click', function() {
          if (card.visible === false) {
            flipCard(card_div, card, board);
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

    function flipCard(div, card, board) {
      if (selectedCards.length === 0) {
        $(div).css('background-image', 'url(images/' + card.image + ')');
        card.visible = true;
        selectedCards.push(div, card);
      } else if (selectedCards.length === 2) {
        $(div).css('background-image', 'url(images/' + card.image + ')');
        card.visible = true;
        selectedCards.push(div, card);

        if (selectedCards[1].image === selectedCards[3].image) {
          matchedCards += 2;
          if (matchedCards === board.deck.length) {
            alert('You win!')
          }
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
    };

    Board.prototype.render = function() {
      this.shuffle();
      for(var i = 0; i < this.deck.length; i++) {
        var card = new Card(this.deck[i], i);
        this.deck_for_game.push(card);
        var deck = '<div class="card" id="card_' + i + '" data-card-index="' + i + '"></div>';
        document.getElementById('memory_board').innerHTML += deck;
      }
    };
  });


//Card -- image, flipped(visible or hidden)
//Deck -- stores cards, shuffle
//BoardGames -- renders deck, matches cards (num of matched cards === num of cards in deck)
//Game -- renders board, determine if game won?, number of clicks



