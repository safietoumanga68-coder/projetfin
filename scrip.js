const btnMenu = document.getElementById("btnMenu");

const menuMobile = document.getElementById("menuMobile");

btnMenu.addEventListener("click", function() {

    menuMobile.classList.toggle("hidden");

});
// LIENS ACTIFS

const liens = document.querySelectorAll(".nav-link");

liens.forEach(function(lien) {

    if (lien.href === window.location.href) {

        lien.classList.add("text-amber-300");

    }

});

const boutonsWhatsApp = document.querySelectorAll(".whatsapp-btn");

boutonsWhatsApp.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        const nom = bouton.dataset.nom;
        const telephone = bouton.dataset.telephone;
        const produits = bouton.dataset.produits;
        const montant = bouton.dataset.montant;

        const message = `Bonjour ${nom} !

Nous vous rappelons que vous avez acheté les produits suivants :
${produits}.

Le montant total à régler est de ${montant} FCFA.

Merci pour votre confiance.`;

        const lien = `https://wa.me/${telephone}?text=${encodeURIComponent(message)}`;

        window.open(lien, "_blank");
    });

});

// Récupérer les éléments/formulaire
const btnAjouterClient = document.getElementById("btnAjouterClient");

const formulaireClient = document.getElementById("formulaireClient");

const btnFermer = document.getElementById("btnFermer");

const formClient = document.getElementById("formClient");

const listeClients = document.getElementById("listeClients");


// Afficher le formulaire
btnAjouterClient.addEventListener("click", function() {

    formulaireClient.classList.toggle("hidden");

});


// Fermer le formulaire
btnFermer.addEventListener("click", function() {

    formulaireClient.classList.add("hidden");

});


// Enregistrer le client
formClient.addEventListener("submit", function(event) {

    event.preventDefault();

    // Récupérer les informations
    const prenom = document.getElementById("prenom").value;

    const nom = document.getElementById("nom").value;

    const date = document.getElementById("date").value;

    const telephone = document.getElementById("telephone").value;

    const produit = document.getElementById("produit").value;

    const quantite = document.getElementById("quantite").value;

    const montant = document.getElementById("montant").value;


    // Créer une nouvelle ligne
    const nouvelleLigne = document.createElement("tr");

    nouvelleLigne.className = "border-b";


    // Ajouter les informations dans la ligne
    nouvelleLigne.innerHTML = `
    
        <td class="p-3">
            ${prenom} ${nom}
        </td>

        <td class="p-3">
            ${telephone}
        </td>

        <td class="p-3">
            ${produit}
        </td>

        <td class="p-3">
            ${quantite}
        </td>

        <td class="p-3">
            ${Number(montant).toLocaleString("fr-FR")} FCFA
        </td>

        <td class="p-3">
            ${date}
        </td>

    `;


    // Ajouter le client dans le tableau
    listeClients.appendChild(nouvelleLigne);


    // Message
    alert("Client ajouté avec succès !");


    // Vider le formulaire
    formClient.reset();


    // Fermer le formulaire
    formulaireClient.classList.add("hidden");

});



