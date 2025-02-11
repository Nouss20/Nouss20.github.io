$(document).ready(function(){ // fonction JQuery qui  fonction jQuery qui s'assure que tout le contenu HTML est chargé avant que le JavaScript s'exécute.
  $('.photo').slick({ // sélection d'élement en JQuery qui va permettre l'initialisation du slick sur l'élement photo que l'on a récupéré
    infinite: true,   // Défilement infini
    slidesToShow: 1,  // Affiche une seule image à la fois
    slidesToScroll: 1, // Fait défiler une image à la fois
    dots: true,       // Affiche les points de navigation
    arrows: true,     // Ajoute les flèches de navigation
    autoplay: true,   // Défilement automatique
    autoplaySpeed: 2000 // Change d'image toutes les 2 secondes
  });
});