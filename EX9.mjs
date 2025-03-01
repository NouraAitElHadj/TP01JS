import readline from "readline-sync";
let prefixe = readline.question("Entrez le prefixe de la facteur :");
let numBase = readline.question("Entrez le numero de base :");
let suffixe = readline.question("Entrez le suffixe :");

let numFacteur = prefixe + "-" + numBase + "-" + suffixe ;

console.log("le numero de facteur genere est :" + numFacteur);

