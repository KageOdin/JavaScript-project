/* const sampleData = [
    {Id:1, name: 'item 1', description: 'Description for item 1'},
    {Id:2, name: 'item 2', description: 'Description for item 2'},
    {Id:3, name: 'item 3', description: 'Description for item 3'}
]

async function fetchData() {
    console.log('Fetching data..........')

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sampleData)
            console.log('data fetched successfully', sampleData)
        }, 2000)
    });
}
fetchData();

async function displayData() {
    const datalist = document.getElementById('data-list')
    try {
        const data = await fetchData()
        const listItems = data.map(item=> `<li>${item.name}:
             ${item.description}</li>`).join('');
             datalist.innerHTML = listItems;
    } catch (error) {
        console.log(error)
    }
}
displayData() */

// function to fetch user data
async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('User data contains error')
    }
    return response.json();
}

// function to display data in HTML
async function displayUserData() {
    const userList = document.getElementById('user-list');
    try{
        const users = await fetchUserData();
        const listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`)
        userList.innerHTML = listItems;
    } catch (error) {
        console.log('error fetching data', error)
        userList.innerHTML = '<li> Error fetching user data, pls try again later. </li>'
    }
}

displayUserData();

const viewButton = document.getElementById('view');
const hideButton = document.getElementById('hide');
const userList = document.getElementById('user-list');


viewButton.addEventListener('click', () => { 
    userList.style.display = 'block'; 
    displayUserData(); 
});


hideButton.addEventListener('click', () => {
    userList.style.display = 'none'; 
});