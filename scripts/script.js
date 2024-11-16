// Script pour le menu hamburger
document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active'); // Ajoute ou retire la classe 'active' au bouton hamburger
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden'); // Affiche ou cache le menu
});

// Fonction de connexion (ajoutée à titre d'exemple pour gérer l'authentification)
function handleLogin(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validation des identifiants (simplifiée)
    validateCredentials(username, password)
        .then(user => {
            // Si les identifiants sont valides, on redirige vers la page d'accueil
            window.location.href = 'index.html';
        })
        .catch(error => {
            // Si une erreur se produit (mauvais identifiants)
            console.error("Erreur lors de la connexion : ", error);
            alert('Nom d\'utilisateur ou mot de passe incorrect.');
        });
}

// Fonction pour valider les identifiants (simplifiée pour l'exemple)
function validateCredentials(username, password) {
    return new Promise((resolve, reject) => {
        // Vous pouvez intégrer une logique de vérification ici (via un appel API, par exemple)
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            resolve(user);
        } else {
            reject('Utilisateur non trouvé ou mot de passe incorrect');
        }
    });
}

// Logique de déconnexion (à ajouter si nécessaire)
function handleLogout() {
    // Ici, vous pouvez supprimer l'utilisateur de la session ou faire une redirection
    alert("Vous êtes maintenant déconnecté.");
    window.location.href = "index.html"; // Redirige vers la page d'accueil après déconnexion
}

// Vous pouvez ajouter d'autres fonctionnalités ici si nécessaire.
