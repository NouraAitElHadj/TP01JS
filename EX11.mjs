import readline from "readline-sync";
let mot = readline.question("Entrez un mot :").toLowerCase();
let motInverse = mot.split("").reverse().join("");

if ( mot == motInverse){
    console.log(mot + " est un palindrome");
}else{
    console.log(mot + " N'est pas un palindrome");
}