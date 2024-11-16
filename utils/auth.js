// auth.js
async function validateCredentials(username, password) {
    const response = await fetch('../data/utilisateurs.json');
    const users = await response.json();
    return users.some(user => user.username === username && user.password === password);
}
