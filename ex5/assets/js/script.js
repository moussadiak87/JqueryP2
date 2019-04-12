// jquery partie 2 - exercice 4
// Du code en jQuery va pouvoir être tapé ici !
$(document).ready(function(){
  $('input').focus(function(){
    $(this).css('border','1px solid green');
  });
  //méthode focus qui permet de viser l'événement pendant le focus
  $('input').blur(function(){
    $(this).css('border','1px solid red');
  });
  //méthode blur qui permet de viser l'événement après le focus
});
