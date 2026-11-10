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