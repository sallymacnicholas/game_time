const $ = require('jquery');
const Board = require('./board');


//$(document).ready(function () {




//});


function Card(url, index) {
    this.image = url
    this.visible = false
    this.index = index
  }

module.exports = Card;
