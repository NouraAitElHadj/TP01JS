import readline from "readline-sync";
let prenom = readline.question("Saisir votre nom :");
let anneDeNaissance = readline.question("Saisir votre annee de naissance :");

let motDePasse = prenom + anneDeNaissance + "!" ;

console.log("votre mot de passe est :" + motDePasse);
