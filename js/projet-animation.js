// Animation d'apparition des cartes au chargement
gsap.from(".card", {  
    opacity: 0,
    scale: 0.8,  // Commence plus petit
    y: 50,       // Descend légèrement en arrivant
    duration: 1,
    ease: "power3.out", // transition plus naturelle avec une animation rapide qui ralentit à la fin
    stagger: 0.2 // Les cartes apparaissent les unes après les autres avec 2 secondes d'écart
});

// Sélectionner toutes les cartes que l'on stocke dans une variable
const cards = document.querySelectorAll(".card");

// Effet au survol
cards.forEach(card => { // boucle sur chaque carte
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { 
            scale: 1.05, // Grossit légèrement
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)", // Ajoute une ombre
            duration: 0.3,
            ease: "power2.out" // trasition fluide
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, { 
            scale: 1, // Retour à la taille normale
            boxShadow: "0px 5px 10px rgba(0,0,0,0.1)", // Réduit l’ombre
            duration: 0.3,
            ease: "power2.out"
        });
    });
});