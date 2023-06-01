// Listes citation
let listCitation = [
    "Bondié i puni pa le roche",
    "Boug la i bat' la mer pou gainn' l'ékim'",
    "Cochon y commande pas la corde",
];

// Au clic
next.addEventListener("click", nextCitation);

// Fonction
function nextCitation() {
    //  Création de l'aléatoire des citations
    let citationRandom = Math.floor(Math.random() * listCitation.length);
    // Afficher la citation
    citation.textContent = listCitation[citationRandom];
}

// Appel initial à la fonction
nextCitation();
