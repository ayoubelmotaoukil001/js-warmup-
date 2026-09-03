const panier = [
 { nom: "Souris", prix: 150, quantite: 2 },
 { nom: "Casque", prix: 400, quantite: 1 },
 { nom: "Tapis", prix: 60, quantite: 3 },
 { nom: "Webcam", prix: 520, quantite: 1 }
];

const names  = panier.map(item => item.nom) ;
console.log(names) ;

const total  = panier.map(item => ({
    name  :item.nom ,
    total  : item.prix * item.quantite 
})) ;

 const prix100 = panier.filter(item => item.prix>100)  ;
 console.log(prix100.map(item => item.nom)) ;

 const totalprices = panier.reduce((res , acc) =>
{
    return res + (acc.prix * acc.quantite);
},0) ;
console.log(totalprices); 

const samequantite = panier.reduce((res  , acc ) =>
{
    return res + acc.quantite ;
} ,0) ;
console.log(samequantite) ;



