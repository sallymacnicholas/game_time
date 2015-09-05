const $ = require('jquery');
const Board = require('./board');

function Card(url, index) {
    this.image = url
    this.visible = false
    this.index = index
  }

module.exports = Card;
