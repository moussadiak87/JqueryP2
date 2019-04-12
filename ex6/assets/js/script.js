// jquery partie 2 - exercice 6
// Du code en jQuery va pouvoir être tapé ici !
$(document).ready(function(){
//  $('.color').mouseover(function (){
    //on crée une variable qui récupére l'id de la div
//    var color = $(this).attr('id');
//    $('#text').css('color',color);
//  }).mouseout(function(){
  //  $('#text').css('color','black');
//  });
  $('.color').hover(function(){
    var color = $(this).attr('id');
    $('#text').css('color',color);
  },function(){
    $('#text').css('color','black');
  });
});
