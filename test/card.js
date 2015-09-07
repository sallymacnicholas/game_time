const assert = require('chai').assert;
const Card   = require('../lib/card');


describe('a card', function(){

  it('should exist', function(){
    assert(Card);
  });

  it('is an object', function(){
    assert(new Card());
  });

  it('has an image', function() {
    var card = new Card('dog.jpg', 1);
    assert.equal(card.image, 'dog.jpg');
  });

  it('has a default visible value of false, but can be changed', function(){
    var card = new Card();
    assert.equal(card.visible, false);
    card.visible = true;
    assert.equal(card.visible, true);
  });

  it('has an index', function() {
    var card_1 = new Card('dog.jpg', 0);
    var card_2 = new Card('cat.jpg', 1);
    assert.equal(card_1.index, 0);
    assert.equal(card_2.index, 1);
  });


});
