const ventes = [
 { vendeur: "Amina", produit: "Ordinateur portable", montant: 8500, mois: "janvier" },
 { vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
 { vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
 { vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
 { vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
 { vendeur: "Sara", produit: "Ecran 27 pouces", montant: 2600, mois: "mars" }
];

function calculateTotal(some,vente)
{
    return some+vente.montant  ;
}
const totalVentes = ventes.reduce(calculateTotal ,0) ;

const theMust = ventes.reduce(theMax,ventes[0]) ;

function theMax(max, vente)
{
    if(vente.montant > max.montant)
    {
       return vente ;
    }
    return max;
}


function allventes(total , vente)
{
    const name= vente.vendeur ;
    if(total[name])
    {
        total[name]+= vente.montant ;
    }
    else{
        total[name] = vente.montant ;
    }
    return total ;
}
const allVentes = ventes.reduce(allventes , {}) ;


const vendeurs = Object.keys(allVentes) ;
const moyenne = totalVentes / vendeurs.length

const higherThanMoyenne = vendeurs.filter(nom=>allVentes[nom] >moyenne)




const salesBySeller = vendeurs.map(name => ` ${name}: ${allVentes[name]} DH`).join("\n");

const report = `=== SALES REPORT ===
Total Revenue: ${totalVentes} DH
Best Sale: ${theMust.produit} (${theMust.vendeur}) - ${theMust.montant} DH
Revenue by Seller:
${salesBySeller}
Average per Seller: ${moyenne} DH
Above Average: ${higherThanMoyenne.join(", ")}`;

console.log(report);