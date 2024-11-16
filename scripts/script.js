// Script pour le menu hamburger
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Vérifie si le bouton et le menu existent
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            // Ajoute ou retire la classe "hidden" pour afficher/masquer le menu
            menu.classList.toggle('hidden');

            // Ajoute une classe pour animer le bouton hamburger
            menuToggle.classList.toggle('active');
        });
    } else {
        console.error("Le bouton ou le menu n'a pas été trouvé.");
    }
});

// Gestion de la connexion
window.onload = function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Vérifie si l'utilisateur est connecté
    const loginButton = document.getElementById('login-button');

    if (loginButton) {
        if (isLoggedIn) {
            // Si l'utilisateur est connecté, remplace le bouton par une icône de compte
            loginButton.innerHTML = '<i class="fas fa-user"></i>';
            loginButton.setAttribute('href', 'admin.html'); // Lien vers la page admin
        } else {
            // Sinon, garde le bouton de connexion classique
            loginButton.innerHTML = 'Se connecter';
            loginButton.setAttribute('href', 'pages/connexion.html'); // Lien vers la page de connexion
        }
    }
};

// Fonction de connexion (appelée lors de la soumission du formulaire)
function handleLogin(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validation des identifiants
    validateCredentials(username, password)
        .then(user => {
            // Si les identifiants sont valides
            localStorage.setItem('isLoggedIn', true); // Marque l'utilisateur comme connecté
            window.location.href = '../index.html'; // Redirige vers la page principale
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
        // Vous pouvez intégrer une logique de vérification ici (via un appel API ou JSON local)
        const users = [
            { username: 'admin', password: '1234' },
            { username: 'user', password: 'password' }
        ];

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            resolve(user);
        } else {
            reject('Utilisateur non trouvé ou mot de passe incorrect');
        }
    });
}

// Fonction de déconnexion
function handleLogout() {
    localStorage.removeItem('isLoggedIn'); // Supprime l'état de connexion
    window.location.href = "index.html"; // Redirige vers la page principale après déconnexion
}
