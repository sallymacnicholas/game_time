var $ = require('jquery');

$(document).ready( function () {
  var pets = ['dog.png','dog.png','dolphin.png','dolphin.png', 'cat.png', 'cat.png', 'capybara.png', 'capybara.png'];
  var staff = ['andrew.png', 'andrew.png', 'jeff.png', 'jeff.png', 'horace.png', 'horace.png', 'mike.png', 'mike.png']
  var selected_cards = [];
  var matched_cards = 0;
  var cards_flipped = 0;

  var petsDeck = document.getElementById('pets');
  petsDeck.addEventListener('click', function() {
    newBoard(pets);
  });

  var staffDeck = document.getElementById('staff');
  staffDeck.addEventListener('click', function() {
    newBoard(staff);
  });


function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function newBoard(deck) {
  cards_flipped = 0;
  var output = '';
  shuffle(deck);
  document.getElementById('memory_board').innerHTML = '';
  for (var i = 0; i < deck.length; i++) {
    var output = '<div class="card" id="' + deck[i] + '"></div>';
    document.getElementById('memory_board').innerHTML += output;
    //document.getElementById(game_cards[i]).addEventListener('click', flipCards(document.getElementById(game_cards[i]), i));
  }
  flipCards(deck);
}




var setVisible = function(input) {
  if (input === true) {
    style.visibility = 'visible';
  } else {
    css('background-image', '');
  }
}



function flipCards(deck) {
  $(".card").on("click", function() {
    if (selected_cards.length === 0) {
      var card = $(this);
      var name = card.attr('id'); //
      console.log(name);
      $(this).css('background-image', 'url(images/' + name + ')');
      selected_cards.push(card);

    } else if (selected_cards.length === 1) {
      var card = $(this);
      var name = card.attr('id');
      $(this).css('background-image', 'url(images/' + name + ')');
      selected_cards.push(card);

      if (selected_cards[0].attr('id') == selected_cards[1].attr('id')) {
        selected_cards = [];
        matched_cards += 2;
      } else {
        setTimeout(function() {
          selected_cards[0].css('background-image', '');
          selected_cards[1].css('background-image', '');
          selected_cards = [];
        }, 1000);
      }
    }
    if (matched_cards === deck.length) {
      alert("You've won! Do you want to play the next level?");
      location.reload();
    };
  });

};

});



//newBoard();

