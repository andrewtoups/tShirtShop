var init = function() {

  var shirt = document.getElementsByClassName('shirt')[0];
  for(var i in shirt) {
    // var shirt = document.getElementsByClassName('shirt')[0];

    document.getElementsByClassName('flip')[0].addEventListener( 'click', function(){
      shirt.toggleClassName('flipped');
    }, false);
  };
};


window.addEventListener('DOMContentLoaded', init, false);
