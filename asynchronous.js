setTimeout(() => {
    console.log('this will log in 2 seconds')
}, 2000);


function greet(){
    console.log('hello from greet function')
}
setTimeout(greet, 2000)

setTimeout(() => {
    console.log('data fetched')
}, 2000)

console.log('data fetching')

setTimeout(() => {
    console.log('datas')
},4000)

const sampleData = [
    {Id:1, name: 'Item 1', description: 'Description for item 1'},
    {Id:2, name: 'Item 2', description: 'Description for item 2'},
    {Id:3, name: 'Item 3', description: 'Description for item 3'}
]

async function fetchData(){
    console.log('Fetching data..........')

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sampleData)
            console.log('data fetched successfully', sampleData)
        }, 4000)
    });
}
fetchData();