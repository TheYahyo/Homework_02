document.getElementById('userId').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action of submitting the form
        getUserInfo();
    }
});

document.getElementById('getUserButton').addEventListener('click', getUserInfo);

function getUserInfo() {
    const userId = document.getElementById('userId').value;

    // Проверка, что введено число от 1 до 10
    if (userId < 1 || userId > 10 || isNaN(userId)) {
        alert('Введите число от 1 до 10');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            const userInfoDiv = document.getElementById('user-info');
            userInfoDiv.innerHTML = `
                <h2>User Info</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Username:</strong> ${data.username}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}