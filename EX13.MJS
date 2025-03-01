import readline from "readline-sync";
let heures = parseInt(readline.question("Entrez le nombres des heures :"));
let minutes = parseInt(readline.question("Entrez le nombres des minutes :"));
let seconds = parseInt(readline.question("Entrez le nombres des seconds :"));

let totaleSeconds = (heures * 3600) + (minutes * 60) + seconds ;

console.log("Le totale en seconds est :" + totaleSeconds);
