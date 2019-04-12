$(document).ready(function(){
  //Ici on selectionne la div qui a la classe color à qui on donne la fonction .click()
  $('.color').click(function(){
    //On récupere la valeur de l'attribut class avec la fonction attr.
    var classValue = $(this).attr('class');
    //On utilise .split pour éclater la chaîne de caractères contenant les 2 classes de la div sur laquelle on a cliqué
    var classArray = classValue.split(' ');
    $('#text').css('color', classArray[1]);
  });
});
