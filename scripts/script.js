// script.js
async function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        // Appel à la fonction validateCredentials définie dans auth.js
        const isValid = await validateCredentials(username, password);

        if (isValid) {
            sessionStorage.setItem("isLoggedIn", true);
            window.location.href = "admin.html";  // Redirection vers admin.html
        } else {
            alert("Nom d'utilisateur ou mot de passe incorrect !");
        }
    } catch (error) {
        console.error("Erreur lors de la connexion :", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
    }
}

// Ajout de l'événement de soumission du formulaire
document.getElementById("login-form").addEventListener("submit", handleLogin);
