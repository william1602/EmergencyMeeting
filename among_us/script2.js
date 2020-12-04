

document.addEventListener("DOMContentLoaded", function() {

    //Initialisation des joueurs
    let player = 10;

    let parent = document.getElementById('parent')

    let count_impostors = 0

    let nom_joueurs = ['Rodrick', 'Joe', 'Marie', 'Sonix', 'Marion', 'David', 'Adrien', 'Jean', 'Tacos', 'William'];

    let colors = ['Green', 'Blue', 'Pink', 'Red', 'Black', 'Lime', 'Cyan', 'Brown', 'Purple', 'White', 'Yellow', 'Orange'];

    let joueurs = new Map();

    let resultat = document.getElementById('resultat')
    let resultat2 = document.getElementById('resultat2')
    let resultat3 = document.getElementById('resultat3')
    let j = 0;

    for(var i=0; i<player;i++) {
        //CREATION DES JOUEURS AFFICHES A LECRAN
        //Map
        //Création de l'objet player div
        let newBox = document.createElement("div")
        newBox.style.textAlign = "center"

        let newPlayer = document.createElement("div");
        newPlayer.classList.add('player')
        console.log(newPlayer)

        //Affichage du nom
        let nomSpan = document.createElement('span')
        nomSpan.innerHTML = nom_joueurs[i]
        nomSpan.style.display = "inline-block"

        newBox.appendChild(nomSpan)

        //Création du lien de l'image
        let image = document.createElement("img");
        image.setAttribute('src', `./personnages/webp/${colors[i]}.webp`)
        image.alt = `${colors[i]}.png`
        image.id = i

        newPlayer.appendChild(image)

        newBox.appendChild(newPlayer)

        parent.appendChild(newBox)
        joueurs.set(i, new Joueur(nom_joueurs[i], false));
        console.log(joueurs)
        console.log(joueurs.get(i))
    }

    //Aléatoire imposteur
    for(var i=0;i<2;i++) {
        let r = Math.floor(Math.random() * 11)
        if(joueurs.get(r).imposteur) {
            i--;
        } else {
            joueurs.get(r).imposteur = true;
        }
        
    }

    parent.addEventListener('click', (e) => {
        //Attrape le joueur correspondant
        //et le zigouille
        console.log(e.target)
        zigouiller(e.target)
    })


    function zigouiller(e) {
        i = parseInt(e.id)
        //Si le joueur est déjà mort on ne le retue pas
        if(!joueurs.get(i).dead) {
            //Anomation mort
            e.setAttribute('src', `./personnages/dead_standing_up/Red.png`)
            setTimeout( () => {
                e.setAttribute('src', `./personnages/dead/red.png`)
            }, 1000)
            
            joueurs.get(i).dead = true
            //On affiche son rôle
            if (joueurs.get(i).imposteur) {
                resultat.innerHTML = joueurs.get(i).nom + " was zigouilled and was an impostor"
                count_impostors ++
            } else {
                resultat.innerHTML = joueurs.get(i).nom + " was zigouilled and was not an impostor"
            }

            if(count_impostors == 2 && j>0) {
                resultat3.innerHTML = "Arrêtez le massacre bondiou !"
                j++
            }
            //Si on a tué les 2 imposteurs on affiche gagné
            if(count_impostors == 2) {
                resultat2.innerHTML = "Vous avez gagné !"
                j++
            }

            



        }
        
    }

    

   


});

class Joueur {

    constructor(nom, imposteur) {
        this.nom = nom;
        this.imposteur = imposteur;
        this.dead = false;
    }

    getNom() {
        return this.nom;
    }

    getImposteur() {
        return this.imposteur;
    }

}