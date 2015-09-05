//function decks() {
//  $(".deck").on("click", function() {
//    var name = this.id;
//    console.log(typeof name);
//    console.log(name)
//    //var board = new Board(name.replace(/['"]+/g,''));
//    var board = new Board(name);
//    board.render();
//    bindCardListeners(board);
//    //(this.id).remove();
//  });
//};
//
//decks();

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
