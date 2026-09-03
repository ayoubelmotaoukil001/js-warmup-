const commandes = [
    { montant: 150, statut: "standard" },
    { montant: 620, statut: "standard" },
    { montant: 1200, statut: "premium" }
];
function calculerCommande(montant, statut)
{
    let pourcentage = 0;
    if (montant >= 1000) {
        pourcentage = 15;
    }
    else if (montant >= 500) {
        pourcentage = 10;
    }
    else if (montant >= 200) {
        pourcentage = 5
    }
    if (statut == "premium") {
        pourcentage += 5;
    }
    if (pourcentage > 20) {
        pourcentage = 20;
    }
    const remise = montant * (pourcentage / 100);
    const total = montant - remise;

    let livraison = 30;
    if (total >= 300) {
        livraison = 0;
    }
    const totalTopay = total + livraison;


    return{
        montant, pourcentage, remise, total, livraison, totalTopay
    };
}
commandes.forEach(command =>
    {
        console.log(calculerCommande(command.montant , command.statut)) ;
    });