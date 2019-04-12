$(document).ready(function(){
// ici la fonction .click permet d'activé un clic une fonction qui va affiché le texte
  $('#show').click(function(){
      $('#text').show();
  });
 // ici la fonction permet de cacher le taxte
  $('#hide').click(function(){
      $('#text').hide();
  });
});