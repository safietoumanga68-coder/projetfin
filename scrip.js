// menu bar
const btnMenu = document.getElementById("btnMenu");

const menuMobile = document.getElementById("menuMobile");

btnMenu.addEventListener("click", function() {

    menuMobile.classList.toggle("hidden");

});
// LIENS ACTIFS fonction du button watsap

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

const btnAjouterClient = document.getElementById("btnAjouterClient");
const formulaireClient = document.getElementById("formulaireClient");
const btnFermer = document.getElementById("btnFermer");

if (btnAjouterClient && formulaireClient && btnFermer) {

    // Ouvrir le formulaire
    btnAjouterClient.addEventListener("click", function() {

        formulaireClient.classList.remove("hidden");
        formulaireClient.classList.add("flex");

    });

    // Fermer le formulaire
    btnFermer.addEventListener("click", function() {

        formulaireClient.classList.add("hidden");
        formulaireClient.classList.remove("flex");

    });

}


// Fermer en cliquant sur le fond sombre
formulaireClient.addEventListener("click", function(event) {

    if (event.target === formulaireClient) {

        formulaireClient.classList.add("hidden");
        formulaireClient.classList.remove("flex");

    }

});


// Récupérer les clients enregistrés
let clients = JSON.parse(localStorage.getItem("clients")) || [];


// Fonction pour afficher les clients
function afficherClients() {

    if (!listeClients) return;

    listeClients.innerHTML = "";

    clients.forEach(function(client) {

        const nouvelleLigne = document.createElement("tr");

        nouvelleLigne.className = "border-b";

        nouvelleLigne.innerHTML = `
            <td class="p-3">${client.prenom} ${client.nom}</td>
            <td class="p-3">${client.telephone}</td>
            <td class="p-3">${client.produit}</td>
            <td class="p-3">${client.quantite}</td>
            <td class="p-3">${Number(client.montant).toLocaleString("fr-FR")} FCFA</td>
            <td class="p-3">${client.date}</td>
        `;

        listeClients.appendChild(nouvelleLigne);

    });

}


// Enregistrer le client
if (formClient) {

    formClient.addEventListener("submit", function(event) {

        event.preventDefault();

        const nouveauClient = {

            prenom: document.getElementById("prenom").value,
            nom: document.getElementById("nom").value,
            date: document.getElementById("date").value,
            telephone: document.getElementById("telephone").value,
            produit: document.getElementById("produit").value,
            quantite: document.getElementById("quantite").value,
            montant: document.getElementById("montant").value

        };

        // Ajouter le nouveau client
        clients.push(nouveauClient);

        // Enregistrer dans localStorage
        localStorage.setItem("clients", JSON.stringify(clients));

        // Actualiser le tableau
        afficherClients();

        alert("Client ajouté avec succès !");

        // Vider le formulaire
        formClient.reset();

        // Fermer le POP-UP
        formulaireClient.classList.add("hidden");
        formulaireClient.classList.remove("flex");

    });

}


// Afficher les clients au chargement de la page
afficherClients();


