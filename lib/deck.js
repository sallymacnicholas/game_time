//var $ = require('jquery');
//var Board = require('./board');
//
////$(document).ready( function () {
//
//
//  var pets = ['dog.png', 'dog.png', 'dolphin.png', 'dolphin.png'];
//  var pets_2 = ['dog.png', 'dog.png', 'dolphin.png', 'dolphin.png', 'cat.png', 'cat.png', 'capybara.png', 'capybara.png'];
//  var staff = ['horace.png', 'horace.png', 'mike.png', 'mike.png', 'jeff.png', 'jeff.png', 'andrew.png', 'andrew.png'];
//
//  var petsDeck = document.getElementById('pets');
//
//
//  petsDeck.addEventListener('click', function() {
//    var board = new Board(pets);
//    board.render();
//    bindCardListeners(board);
//    petsDeck.remove();
//  });
//
//function bindCardListeners(board) {
//  var cards = document.querySelectorAll('.card')
//  board.deck_for_game.forEach( function(card, index) {
//    var card_div = document.querySelector('#card_' + index)
//    card_div.addEventListener('click', function() {
//      if (card.visible === false) {
//        flipCard(card_div, card, board);
//        //card.flipCard
//      }
//    });
//  });
//};
//
////});
