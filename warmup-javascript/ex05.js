    const produit = {
    nom: "Clavier mecanique",
    prix: 450,
    stock: 12,
    categorie: "Informatique"
    };

    let phrase = Object.values(produit).join("-") ;
    console.log(phrase) ;

    const newprice = produit.prix *1.1   ;
    produit.prix = newprice;

    console.log(`new price is ${produit.prix}`) ;
    const k  =  "enprmotion" ;
    produit[k] = false  ;

    for (const key  in produit)
    {
        console.log(`${key} : ${produit[key]}`) ;
    }

    function estDesponible(produit)
    {
        if(produit.stock  > 0)
        {
            return true ;
        }
        else
        {
            return false; 
        }
    }

    console.log(`estDisponible(produit) -> ${estDesponible(produit)}`) ;
    // const key  = Object.keys(produit) ;
    // const value  = Object.values(produit) ;
    // const entry =  Object.entries(produit) ;
    // console.log(key) ;
    // console.log(value) ;
    // console.log(entry) ;   
