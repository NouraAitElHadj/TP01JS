import readline from "readline-sync";
let note1 = parseFloat(readline.question("Entrez la premiere note :"));
let coef1 = parseFloat(readline.question("Entrez le coefficient de la premiere note :"));

let note2 = parseFloat(readline.question("Entrez la deuxieme note :"));
let coef2 = parseFloat(readline.question("Entrez le coefficient de la deuxieme note :"));

let note3 = parseFloat(readline.question("Entrez la troixieme note :"));
let coef3 = parseFloat(readline.question("Entrez le coefficient de la troixieme note :"));

let sommeDeProduit = (note1 * coef1) + (note2 * coef2) + (note3 * coef3) ;
let sommeCoef = coef1 + coef2 + coef3 ;
let moyenne = sommeDeProduit / sommeCoef ;

console.log("le moyenne des notes est :" + moyenne);
