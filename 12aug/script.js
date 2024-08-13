async function fetchDataAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchDataAsync();
async function fetchAndDisplayData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        const tableBody = document.querySelector('#data-table tbody');
        tableBody.innerHTML = '';

        data.forEach(post => {
            const row = document.createElement('tr');
            const idCell = document.createElement('td');
            const titleCell = document.createElement('td');
            const bodyCell = document.createElement('td');

            idCell.textContent = post.id;
            titleCell.textContent = post.title;
            bodyCell.textContent = post.body;

            row.appendChild(idCell);
            row.appendChild(titleCell);
            row.appendChild(bodyCell);
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchAndDisplayData();

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        console.log(posts);
    } catch (error) {
        console.error('Failed to fetch posts:', error);
    }
}

fetchPosts();
async function fetchInvalidUrl() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Simulated Error:', error);
    }
}
fetchInvalidUrl();
