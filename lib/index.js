var $ = require('jquery');
var memory_array = ['puppy.png','puppy.png','dj.png','dj.png'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function newBoard(){
  tiles_flipped = 0;
  var output = '';
shuffle(memory_array);
    document.getElementById('memory_board').innerHTML = '';
  for(var i = 0; i < memory_array.length; i++){
    var output = '<div class="tile" id="' + memory_array[i] + '"></div>';
    document.getElementById('memory_board').innerHTML += output;
  }
  flipTile();
}

function flipTile() {
  $(".tile").on("click", function(){
      var name = this.id
      console.log(name)
       $(this).css('background-image', 'url(images/' + name + ')');
  })
}

newBoard();
