

document.addEventListener("DOMContentLoaded", function() {

    //Initialisation des joueurs
    let player = 10;

    let parent = document.getElementById('parent')

    let nom_joueurs = ['Rodrick', 'Joe', 'Marie', 'Sonix', 'Marion', 'David', 'Adrien', 'Jean', 'Tacos', 'William'];

    let colors = ['green', 'blue', 'pink', 'red', 'black', 'lime', 'cyan', 'brown', 'purple', 'white', 'yellow', 'orange'];

    let joueurs = new Map();

    for(var i=0; i<player;i++) {
        //Map
        //Création de l'objet player div
        let newPlayer = document.createElement("div");
        newPlayer.classList.add('player')
        newPlayer.id = i;
        console.log(newPlayer)

        //Création du lien de l'image
        let image = document.createElement("img");
        image

        parent.appendChild(newPlayer)
        joueurs.set(i, new Joueur(nom_joueurs[i], false));
        console.log(joueurs)
        console.log(joueurs.get(i))
    }

    parent.addEventListener('click', (e) => {
        //Attrape le joueur correspondant
        //et le zigouille
        console.log(e.target)
        zigouiller(e.target.id)
    })

    //console.log(player);

    function zigouiller(e) {
        i = parseInt(e)
        alert(joueurs.get(i).imposteur)
    }

    

   


});

class Joueur {

    constructor(nom, imposteur) {
        this.nom = nom;
        this.imposteur = imposteur;
    }

    getNom() {
        return this.nom;
    }

    getImposteur() {
        return this.imposteur;
    }

}