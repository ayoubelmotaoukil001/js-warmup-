const inscription = {
    nom: "",
    email: "aminaexample.com",
    motDePasse: "123",
    age: 17
};

function validateInscription(donnees) {
    const errors = [];

    if (donnees.nom.length < 2) {
        errors.push("the name must contail  2 characters at least");
    }

    if (!donnees.email.includes("@") || !donnees.email.includes(".")) {
        errors.push("email unvalid");
    }
    if (donnees.motDePasse.length < 8) {
        errors.push("the password must b 8 char at least")
    }
    if (typeof donnees.age !== "number" || donnees.age < 18) 
    {
        errors.push("u need to be 18 yo at least ");
    }

  return {
    valide: errors.length == 0,
    erreur: errors
  };

}
console.log(validateInscription(inscription)) ;