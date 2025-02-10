$(document).ready(function(){
  $('.photo').slick({
    infinite: true,   // Défilement infini
    slidesToShow: 1,  // Affiche une seule image à la fois
    slidesToScroll: 1, // Fait défiler une image à la fois
    dots: true,       // Affiche les points de navigation
    arrows: true,     // Ajoute les flèches de navigation
    autoplay: true,   // Défilement automatique
    autoplaySpeed: 2000 // Change d'image toutes les 2 secondes
  });
});