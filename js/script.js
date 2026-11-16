// Récupérer les éléments HTML
let prix = document.getElementById("prix");
let quantite = document.getElementById("quantite");

let btnValider = document.getElementById("btnValider");

let resultat = document.getElementById("resultat");

// Événement au clic sur le bouton
btnValider.addEventListener("click", function () {
  // Récupérer les valeurs saisies
  let p = Number(prix.value);

  let q = Number(quantite.value);

  // Vérifier si les champs sont vides
  if (prix.value === "" || quantite.value === "") {
    resultat.innerHTML = `
<div class="alert alert-warning">
Veuillez remplir tous les champs !
</div>
`;

    return;
  }

  // Vérifier les valeurs
  if (p <= 0 || q <= 0) {
    resultat.innerHTML = `
<div class="alert alert-danger">
Le prix et la quantité doivent être positifs !
</div>
`;

    return;
  }

  // Vérifier que la quantité est entière
  if (!Number.isInteger(q)) {
    resultat.innerHTML = `
<div class="alert alert-danger">
La quantité doit être un nombre entier !
</div>
`;

    return;
  }

  // Calculer le prix total
  let total = p * q;

  // Afficher le résultat
  resultat.innerHTML = `
<div class="alert alert-success">
Prix total :
<strong>${total.toFixed(2)} DT</strong>
</div>
`;

  // Afficher les informations dans la console
  console.log("Prix unitaire :", p);

  console.log("Quantité :", q);

  console.log("Prix total :", total);
});