const titre = " Mon     Premier Projet MERN ";
const phrase = "Le JavaScript est la base du stack MERN";
const nomComplet = "amina el idrissi";

function genererSlug(titre) {
    const newtitle = titre.trim().toLowerCase().split(" ").filter(char => char !== "").join("-");
    return newtitle;
}
console.log(genererSlug(titre));

function compterMots(phrase) {
    const num = phrase.trim().split(" ").filter(char => char !== "").length;
    return num;
}
console.log(compterMots(phrase));


function initiales(nomComplet) {
    const initiale = nomComplet.trim().split(" ").filter(char => char !== "").map(c => c[0].toUpperCase() + ".").join("");
    return initiale;
}
console.log(initiales(nomComplet)) ;