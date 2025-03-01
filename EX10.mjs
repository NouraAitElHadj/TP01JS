import readline from "readline-sync";
let mot = readline.question("Entrez le mot :");
let motInverse = mot.split("").reverse().join("");
console.log("Le mot inverser est :" + motInverse);
