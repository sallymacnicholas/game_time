const $ = require('jquery');

function Card(url, index) {
    this.image = url;
    this.visible = false;
    this.index = index;
  }

module.exports = Card;
