// Функція для отримання даних з URL за допомогою Fetch API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Функція для відображення списку користувачів на index.html
async function displayUserList() {
  const userListElement = document.getElementById('userList');
  const users = await fetchData('https://jsonplaceholder.typicode.com/users');

  users.forEach(user => {
    const userElement = document.createElement('div');
    userElement.classList.add('user');
    userElement.innerHTML = `
            <h2>${user.name}</h2>
            <p>ID: ${user.id}</p>
            <a href="user-details.html?id=${user.id}">Details</a>
        `;
    userListElement.appendChild(userElement);
  });
}

// Функція для відображення деталей користувача на user-details.html
async function displayUserDetails() {
  const userId = new URLSearchParams(window.location.search).get('id');
  const userInfoElement = document.getElementById('userInfo');
  const user = await fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`);

  userInfoElement.innerHTML = `
        <h2>${user.name}</h2>
        <p>ID: ${user.id}</p>
        <p>Email: ${user.email}</p>
        <!-- Додайте інші властивості користувача, які вам потрібно відобразити -->
    `;

  const postsButton = document.getElementById('postsButton');
  postsButton.addEventListener('click', () => {
    // Редірект на сторінку з постами поточного користувача
    window.location.href = `posts-details.html?userId=${user.id}`;
  });
}

// Отримання ID користувача з URL і відображення деталей користувача на user-details.html
if (window.location.pathname === '/user-details.html') {
  displayUserDetails();
}

// Запуск відображення списку користувачів на index.html
if (window.location.pathname === '/index.html') {
  displayUserList();
}
