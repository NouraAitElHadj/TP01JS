import readline from "readline-sync";
let prixHT = parseFloat(readline.question("Entrez le prix hors taxe :"));
let tauxTVA = parseFloat(readline.question("Entrez le taux de TVA en pourcentage :"));

if (isNaN(prixHT) || isNaN(tauxTVA)) {
    console.log("Veuillez entrer des valeurs numeriques validee.");
} else {
    let prixTTC = prixHT * (1 + tauxTVA / 100);

    console.log(`Le prix TTC est : ${prixTTC.toFixed(2)} dh`);
}
