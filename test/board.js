//const chai = require('chai');
const assert = require('chai').assert;
const Board  = require('../lib/board');
const Card   = require('../lib/card');


describe('the board', function() {

  it('is an object', function() {
    assert(new Board());
  });

  it('is made up of a deck of cards (array)', function() {
    var board = new Board();
    assert.equal(board.deck_for_game.length, [].length);
  });

  it('shuffles the deck before rendering board', function() {
    var deck = ['card_1', 'card_2', 'card_3', 'card_4']
    var board = new Board(deck);
    assert.notEqual(board.shuffle, ['card_1', 'card_2', 'card_3', 'card_4']);
  });

  it('can flip a hidden card', function() {
    var deck = ['card_1', 'card_2', 'card_3', 'card_4']
    var div = 'div#card_1.card';
    var card = new Card("dolphin.png", 1);
    assert.equal(card.visible, false);

    var board = new Board(deck);
    board.flipCard(div, card);

    assert.equal(card.visible, true);
  });
//
  it('cannot flip a visible card to hidden', function() {
    var deck = ['card_1', 'card_2', 'card_3', 'card_4']
    var div = 'div#card_1.card';
    var card = new Card("dolphin.png", 1);
    card.visible = true;
    assert.equal(card.visible, true);

    var board = new Board(deck);
    board.flipCard(div, card);

    assert.equal(card.visible, true);
  });

  it('does not allow players to click visible cards as their guessing choice', function() {
    var deck = ['card_1', 'card_2', 'card_3', 'card_4']
    var div = 'div#card_1.card';
    var card = new Card("dolphin.png", 1);

    var div_2 = 'div#card_2.card';
    var card_2 = new Card("dolphin.png", 2);

    var board = new Board(deck);
    board.flipCard(div, card);
    board.flipCard(div_2, card_2);

    assert.equal(card.visible, true);
    assert.equal(card_2.visible, true);

    assert.equal(matchedCards, 2);
    board.checkIfGameWon();
    board.flipCard(div_2, card_2);

  });

  it('can compare two flipped cards', function() {
    var deck = ['card_1', 'card_2', 'card_3', 'card_4']
    var div = 'div#card_1.card';
    var card = new Card("dolphin.png", 1);

    var div_2 = 'div#card_2.card';
    var card_2 = new Card("dog.png", 2);

    var board = new Board(deck);
    board.flipCard(div, card);
    board.flipCard(div_2, card_2);

    board.compare(board)

    assert.equal(card.visible, true);
    assert.equal(card_2.visible, true);

    assert.equal(matchedCards, 2);
  });

  it('flips the two visible cards back if they do not match', function() {

  });

  it('ends game once all cards are flipped and directs player to index to select another deck', function() {

  });

});
