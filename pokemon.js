const prompt = require('prompt-sync')()


// let attaqueUn = {
//     numero: 1,
//     nom: "Frappe rapide",
//     puissance: 10,
//     chance: 2,
// }

// let attaqueDeux = {
//     numero: 2,
//     nom: "Soin léger",
//     puissance: 15,
//     chance: 3,
// }

// let attaqueTrois = {
//     numero: 3,
//     nom: "Coup puissant",
//     puissance: 20,
//     chance: 3,
// }

// let attaqueQuatre = {
//     numero: 4,
//     nom: "Frappe dévastatrice",
//     puissance: 30,
//     chance: 4,
// }

// let sombre = {
//     nom: "Sombre Lutin",
//     pv: 100,
//     pvMax: 100,
//     atks: [attaqueUn, attaqueDeux, attaqueTrois, attaqueQuatre]
// }


// let guerrier = {
//     nom: "Guerrier du feu",
//     pv: 100,
//     pvMax: 100,
//     atks: [attaqueUn, attaqueDeux, attaqueTrois, attaqueQuatre]
// }

// let numAttaque = 0

// function promptJoueur() {
//     console.log("Choisissez une attaque :")
//     numAttaque = Number(prompt("1 : Frappe rapide, 2 : Soin léger, 3 : Coup puissant, 4 : Frappe dévastatrice "))
//     while (isNaN(numAttaque) || numAttaque < 1 || numAttaque > 4) {
//         console.log("Vous vous êtes trompé ! Choisissez un chiffre entre 1 et 4")
//         numAttaque = prompt("1 : Frappe rapide, 2 : Soin léger, 3 : Coup puissant, 4 : Frappe dévastatrice ")
//     }
//     //on met numAttaque - 1 car c'est un tableau donc le i = 0
//     return guerrier.atks[numAttaque - 1]
// }

//  function attaqueGuerrier (attakchoice) {
//     if (randomAttaque(attakchoice) == true) {
//         console.log(attakchoice.nom + " a réussi")
//         if (attakchoice.numero == 1 || attakchoice.numero == 3 || attakchoice.numero == 4) {
//             sombre.pv = sombre.pv - attakchoice.puissance
//             console.log(sombre.nom+" a "+sombre.pv+" PV.")
//         } else {
//                 guerrier.pv = guerrier.pv + attakchoice.puissance
//             if (guerrier.pv > guerrier.pvMax) {
//                 guerrier.pv = guerrier.pvMax
//             }
//             console.log("Vous avez "+guerrier.pv+" PV.")
//         }
//     } else {
//         console.log(attakchoice.nom + " a échoué")
//     }
//  }

//  function randomSombre () {
//     let numSombre = Number(random(1,4))
//     return sombre.atks[numSombre - 1]
//  }

//  function attaqueSombre (attakchoiceSombre) {
//     console.log("")
//     console.log("Sombre guerrier joue")
//     console.log("")
//     console.log("Sombre guerrier choisit "+attakchoiceSombre.nom)
//     console.log("")
//     if (randomAttaque(attakchoiceSombre) == true) {
//         console.log(attakchoiceSombre.nom + " a réussi")
//         if (attakchoiceSombre.numero == 1 || attakchoiceSombre.numero == 3 || attakchoiceSombre.numero == 4) {
//             guerrier.pv = guerrier.pv - attakchoiceSombre.puissance
//             console.log("Vous avez "+guerrier.pv+" PV.")
//         } else {
//                 sombre.pv = sombre.pv + attakchoiceSombre.puissance
//             if (sombre.pv > sombre.pvMax) {
//                 sombre.pv = sombre.pvMax
//             }
//             console.log(sombre.nom+" a "+sombre.pv+" PV.")
//         }
//     } else {
//         console.log(attakchoiceSombre.nom + " a échoué")
//     }
//  }


// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// //fonction permettant de déterminer si l'attaque touche ou rate pour le joueur ou pour l'IA
// function randomAttaque(atk) {
//     if (random(1, atk.chance) == atk.chance) { //retourne true ou false dès qu'on a ==
//         return true
//     } else {
//         return false
//     }
// }

// //Fonction principale qui contient le jeu et fait appel à de multiples petites fonctions
// function initGame () {
// console.log("!!!!Le combat entre le Guerier du Feu et Sombre Lutin commence!!!!")
// console.log("")
// console.log("Le guerrier de feu commence à jouer")
// console.log("")
// while (guerrier.pv > 0 && sombre.pv > 0) {
// attaqueGuerrier(promptJoueur())
// console.log("")
// console.log("************************************************")
// attaqueSombre(randomSombre())
// console.log("************************************************")
// }
// if (guerrier.pv <= 0) {
//     console.log("Sombre lutin écrase le Guerrier de feu comme un vulgaire moucheron")
// }else{
//     console.log("Vous avez vaincu Sombre lutin et vous récoltez une gloire éternelle")
// }
// }

// //Appel de la fonction d'initiation du jeu pour qu'elle soit exécutée
// initGame()



//**************************************************VERSION AVEC MATRICE*************************************** */


// let attaques = [
//     [1, "Frappe rapide", 10, 2],
//     [2, "Soin léger", 15, 3],
//     [3, "Coup puissant", 20, 3],
//     [4, "Frappe dévastatrice", 30, 4],
// ]

// let sombre = ["Sombre Lutin", 100, 100]

// let guerrier = ["Guerrier du feu", 100, 100]

// let numAttaque = 0

// //Fonction permettant de récupérer la saisie du joueur humain
// function promptJoueur() {
//     console.log("Choisissez une attaque :")
//     numAttaque = Number(prompt("1 : Frappe rapide, 2 : Soin léger, 3 : Coup puissant, 4 : Frappe dévastatrice "))
//     while (isNaN(numAttaque) || numAttaque < 1 || numAttaque > 4) {
//         console.log("Vous vous êtes trompé ! Choisissez un chiffre entre 1 et 4")
//         numAttaque = Number(prompt("1 : Frappe rapide, 2 : Soin léger, 3 : Coup puissant, 4 : Frappe dévastatrice "))
//     }
//     //on met numAttaque - 1 car c'est un tableau donc le i = 0
//     numAttaque = numAttaque - 1
//     return numAttaque
// }

// //Fonction qui permet d'être utilisée dans la fonction randomTouche
// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// //Fonction pemettant de dire si l'attaque a réusi ou si elle a échoué
// function randomTouche(choixAttaque) {
//     let reussite = Number(random(1, attaques[choixAttaque][3]))
//    if(reussite == 1) {
//     console.log("")
//     console.log(attaques[choixAttaque][1]+" a réussi")
//     return true
//    }else{
//     console.log("")
//     console.log(attaques[choixAttaque][1]+" a échoué")
//     return false
//    }
// }

// //Fonction décrivant le résultat de l'attaque du guerrier
// function resultatAttaqueGuerrier (booléen,attack) {
// if(booléen == true) {
//     if(attack == 1){
//        guerrier[1] = guerrier[1] + attaques[1][2]
//        console.log("")
//        console.log("Vous vous soignez de "+attaques[1][2]+" PV.")
//        if(guerrier[1] > guerrier[2]) {
//         guerrier[1] = guerrier[2]
//        }
//        console.log("Vous avez "+guerrier[1]+" PV.")
//     }else{
//         sombre[1] = sombre[1] - attaques[attack][2]
//         console.log("")
//         console.log("Sombre Lutin perd "+attaques[attack][2]+" PV.")
//        console.log("Sombre Lutin a "+sombre[1]+" PV.")
//     }
// }
// }

// function randomSombre () {
//     let numAttaqueSombre = Number(random(0,3))
//     console.log("Sombre Lutin choisit "+attaques[numAttaqueSombre][1])
//     return numAttaqueSombre
// }

// //Fonction décrivant le résultat de l'attaque de sombre lutin
// function resultatAttaqueSombre (booléen,attack) {
//     if(booléen == true) {
//         if(attack == 1){
//            sombre[1] = sombre[1] + attaques[1][2]
//            console.log("")
//            console.log("Sombre Lutin se soigne de "+attaques[1][2]+" PV.")
//            if(sombre[1] > sombre[2]) {
//             sombre[1] = sombre[2]
//            }
//            console.log("Sombre Lutin a "+sombre[1]+" PV.")
//         }else{
//             guerrier[1] = guerrier[1] - attaques[attack][2]
//             console.log("")
//             console.log("Vous perdez "+attaques[attack][2]+" PV.")
//            console.log("Vous avez "+guerrier[1]+" PV.")
//         }
//     }
//     }

// //Fonction principale qui contient le jeu et fait appel à de multiples petites fonctions
// function initGame () {
// console.log("!!!!Le combat entre le Guerier du Feu et Sombre Lutin commence!!!!")
// console.log("")
// console.log("Le guerrier de feu commence à jouer")
// console.log("")
// while (guerrier[1] >0 && sombre[1] > 0) {
// // La variable attaqueJoueur permet de stocker le résultat de la fonction promptJoueur MAIS IL LANCE AUSSI LA FONCTION PROMPTJOUEUR
// let attaqueJoueur = promptJoueur()
// let toucheGuerrier = randomTouche(attaqueJoueur)
// resultatAttaqueGuerrier(toucheGuerrier,attaqueJoueur)
// console.log("")
// console.log("******************************************")
// console.log("")
// console.log("Sombre Lutin joue")
// console.log("")
// let choixAttaqueSombre = randomSombre()
// let toucheSombre = randomTouche(choixAttaqueSombre)
// resultatAttaqueSombre(toucheSombre,choixAttaqueSombre)
// console.log("")
// console.log("******************************************")
// console.log("")
// }
//  if (guerrier[1] <= 0) {
//      console.log("Sombre lutin écrase le Guerrier de feu comme un vulgaire moucheron")
//  }else{
//      console.log("Vous avez vaincu Sombre lutin et vous récoltez une gloire éternelle")
//  }
// }

// //Appel de la fonction d'initiation du jeu pour qu'elle soit exécutée
// initGame()



//***********************************************VERSION AVEC OBJETS ET FICHES PERSONNAGES*********************************************************


let sombre = {
    nom: "Sombre Lutin",
    pv: 50,
    pvMax: 50,
}

let guerrier = {
    nom: "Guerrier de Feu",
    pv: 50,
    pvMax: 50,
}


attaques = {
    numero: [1, 2, 3, 4],
    nom: ["Frappe rapide", "Soin léger", "Coup puissant", "Frappe dévastatrice"],
    puissance: [10, 15, 20, 30],
    probabilite: [2, 3, 3, 4],
}


let numAttaque = 0

//Fonction permettant de récupérer la saisie du joueur humain
function promptJoueur() {
    console.log("Choisissez une attaque :")
    numAttaque = Number(prompt("1 : Frappe rapide, 2 : Soin léger, 3 : Coup puissant, 4 : Frappe dévastatrice "))
    while (isNaN(numAttaque) || numAttaque < 1 || numAttaque > 4) {
        console.log("Vous vous êtes trompé ! Choisissez un chiffre entre 1 et 4")
        numAttaque = Number(prompt("1 : Frappe rapide, 2 : Soin léger, 3 : Coup puissant, 4 : Frappe dévastatrice "))
    }
    //on met numAttaque - 1 car c'est un tableau donc le i = 0
    numAttaque = numAttaque - 1
    return numAttaque
}

//Fonction qui permet d'être utilisée dans la fonction randomTouche
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Fonction pemettant de dire si l'attaque a réusi ou si elle a échoué
function randomTouche(choixAttaque) {
    let reussite = Number(random(1, attaques.probabilite[choixAttaque]))
    if (reussite == 1) {
        console.log("")
        console.log(attaques.nom[choixAttaque] + " a réussi")
        return true
    } else {
        console.log("")
        console.log(attaques.nom[choixAttaque] + " a échoué")
        return false
    }
}

//Fonction décrivant le résultat de l'attaque du guerrier
function resultatAttaqueGuerrier(booléen, attack) {
    if (booléen == true) {
        if (attack == 1) {
            guerrier.pv = guerrier.pv + attaques.puissance[1]
            console.log("")
            console.log("Vous vous soignez de " + attaques.puissance[1] + " PV.")
            if (guerrier.pv > guerrier.pvMax) {
                guerrier.pv = guerrier.pvMax
            }
            console.log("Vous avez " + guerrier.pv + " PV.")
        } else {
            sombre.pv = sombre.pv - attaques.puissance[attack]
            console.log("")
            console.log("Sombre Lutin perd " + attaques.puissance[attack] + " PV.")
            console.log("Sombre Lutin a " + sombre.pv + " PV.")
        }
    }
}

function randomSombre () {
    let numAttaqueSombre = Number(random(0,3))
    console.log("Sombre Lutin choisit "+attaques.nom[numAttaqueSombre])
    return numAttaqueSombre
}

//Fonction décrivant le résultat de l'attaque de sombre lutin
function resultatAttaqueSombre (booléen,attack) {
    if(booléen == true) {
        if(attack == 1){
           sombre.pv = sombre.pv + attaques.puissance[attack]
           console.log("")
           console.log("Sombre Lutin se soigne de "+attaques.puissance[attack]+" PV.")
           if(sombre.pv > sombre.pvMax) {
            sombre.pv = sombre.pvMax
           }
           console.log("Sombre Lutin a "+sombre.pv+" PV.")
        }else{
            guerrier.pv = guerrier.pv - attaques.puissance[1]
            console.log("")
            console.log("Vous perdez "+attaques.puissance[1]+" PV.")
           console.log("Vous avez "+guerrier.pv+" PV.")
        }
    }
    }

//Fonction principale qui contient le jeu et fait appel à de multiples petites fonctions
function initGame() {
    console.log("!!!!Le combat entre le Guerier du Feu et Sombre Lutin commence!!!!")
    console.log("")
    console.log("Le guerrier de feu commence à jouer")
    console.log("")

    while (guerrier.pv > 0 && sombre.pv > 0) {
        // La variable attaqueJoueur permet de stocker le résultat de la fonction promptJoueur MAIS IL LANCE AUSSI LA FONCTION PROMPTJOUEUR
        let attaqueJoueur = promptJoueur()
        let toucheGuerrier = randomTouche(attaqueJoueur)
         resultatAttaqueGuerrier(toucheGuerrier,attaqueJoueur)
        console.log("")
        console.log("******************************************")
        console.log("")
        console.log("Sombre Lutin joue")
        console.log("")
        let choixAttaqueSombre = randomSombre()
         let toucheSombre = randomTouche(choixAttaqueSombre)
         resultatAttaqueSombre(toucheSombre,choixAttaqueSombre)
        console.log("")
        console.log("******************************************")
        console.log("")
        }
         if (guerrier.pv <= 0) {
             console.log("Sombre lutin écrase le Guerrier de feu comme un vulgaire moucheron")
         }else{
             console.log("Vous avez vaincu Sombre lutin et vous récoltez une gloire éternelle")
    }
}

//Appel de la fonction d'initiation du jeu pour qu'elle soit exécutée
initGame()