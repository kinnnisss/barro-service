
  document.getElementById("whatsapp-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const produit = document.getElementById("produit").value.trim();
    const message = document.getElementById("message").value.trim();

    // Construction du message
    const texteFinal = `Bonjour Fatou,%0AJe m'appelle ${nom} et je souhaite commander : ${produit}.%0A${message}`;

    // Numéro WhatsApp (avec indicatif sans +)
    const numero = "221775505523";

    // Redirection vers WhatsApp
    window.open(`https://wa.me/${numero}?text=${texteFinal}`, '_blank');
  });

