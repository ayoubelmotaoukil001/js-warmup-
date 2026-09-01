const prenom = "Amina";
const ville = "Casablanca";
let age = 22;
let estEnFormation = true;
let staut;

if (age > 18) {
    staut = "majeur";
}
else {
    staut = "mineur";
}

console.log(` ${prenom}  , ${age} ans , habite a ${ville}`);
console.log(`statut : ${staut}`);
console.log(` formation en cours ${estEnFormation}`);

console.log(`prenom -> ${typeof prenom}`);
console.log(`age -> ${typeof age}`);
console.log(`estEnFormation -> ${typeof estEnFormation}`);