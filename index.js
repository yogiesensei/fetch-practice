const container = document.getElementById('container')
const loader = document.getElementById('loader')
const errorContainer = document.getElementById('error')

function printUser(item) {
    return `
    <div class='item'>
    <p>Name:${item.name}</p>
    <p>Email:${item.email}</p>
    </div>
    `
}


async function fetchData() {
    // promise then
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(data => data.json())
    //     .then(item => {
    //         let content = ''
    //         item.map(dataUser => content += printUser(dataUser))
    //         container.innerHTML = content
    //         loader.style.display = 'none'
    //     })
    // try catch
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (response.status === 200) {
            response.json().then(item => {
                let content = ''
                item.map(dataUser => content += printUser(dataUser))
                container.innerHTML = content
                loader.style.display = 'none'
            })
        }
    } catch (error) {
        console.error(error)
        errorContainer.appendChild(`<p>Error: ${error}</p>`)
        loader.style.display = 'none'
    }
}

fetchData()