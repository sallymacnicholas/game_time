var $ = require('jquery');

var memory_array = ['puppy.png','puppy.png','dj.png','dj.png'];
var memory_values = [];
var memory_cards_ids = [];
var selected_cards = [];
var cards_flipped = 0;

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function newBoard() {
  cards_flipped = 0;
  var output = '';
  shuffle(memory_array);
  document.getElementById('memory_board').innerHTML = '';
  for (var i = 0; i < memory_array.length; i++) {
    var output = '<div class="card" id="' + memory_array[i] + '"></div>';
    document.getElementById('memory_board').innerHTML += output;
    //document.getElementById(memory_array[i]).addEventListener('click', flipCards(document.getElementById(memory_array[i]), i));
  }
  flipCards();
}

//function flipCards() {
//  $(".card").on("click", function(){
//      var name = this.id
//      console.log(name)
//       $(this).css('background-image', 'url(images/' + name + ')');
//  })
//}


var setVisible = function(input) {
  if (input === true) {
    style.visibility = 'visible';
  } else {
    css('background-image', '');
  }
}



function flipCards() {
  $(".card").on("click", function(){
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
      } else {
        setTimeout(function() {
          selected_cards[0].css('background-image', '');
          selected_cards[1].css('background-image', '');
          selected_cards = [];
        }, 1000);
      }
    }
  });
};


function flipTileDown() {
  $(".card").on("click", function(){
    var name = this.id
    console.log(name)
    $(this).css('background: #000');
  })
}

newBoard();

