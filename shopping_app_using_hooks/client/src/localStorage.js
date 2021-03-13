const myObjectToStore = { name: 'Akash' }

// To Set Item to Local Storage

window.localStorage.setItem('myItem',
    JSON.stringify(myObjectToStore)
)

// To Get Item from Local Storage

const myRetrivedObject = window.localStorage.getItem('myItem')
JSON.parse(myRetrivedObject); // Convert To Object Again

