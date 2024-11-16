// Script pour le menu hamburger
document.getElementById('menu-toggle').addEventListener('click', function() {
    // Bascule entre la classe 'active' pour le bouton hamburger
    this.classList.toggle('active');

    // Affiche ou cache le menu en ajoutant ou retirant la classe 'hidden'
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
});

// Optionnel: Ajout d'une fonctionnalité pour gérer la connexion et le menu après la connexion

// Si l'utilisateur est déjà connecté, changer le bouton de connexion pour l'icône de compte
window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Vérifie si l'utilisateur est connecté
    const loginButton = document.getElementById('login-button');

    if (isLoggedIn) {
        // Si l'utilisateur est connecté, remplace le bouton par une icône de compte
        loginButton.innerHTML = '<i class="fas fa-user"></i>';
        loginButton.setAttribute('href', 'admin.html'); // Lien vers la page admin
    } else {
        // Sinon, garde le bouton de connexion classique
        loginButton.innerHTML = 'Se connecter';
        loginButton.setAttribute('href', 'pages/connexion.html'); // Lien vers la page de connexion
    }
};

// Fonction de connexion (ajoutée à titre d'exemple pour gérer l'authentification)
function handleLogin(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validation des identifiants (simplifiée)
    validateCredentials(username, password)
        .then(user => {
            // Si les identifiants sont valides, on redirige vers la page d'accueil
            localStorage.setItem('isLoggedIn', true); // Marque l'utilisateur comme connecté
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

// Fonction de déconnexion (ajoutée si vous avez une page admin pour se déconnecter)
function handleLogout() {
    localStorage.removeItem('isLoggedIn'); // Supprime la connexion
    window.location.href = "index.html"; // Redirige vers la page d'accueil après déconnexion
}
