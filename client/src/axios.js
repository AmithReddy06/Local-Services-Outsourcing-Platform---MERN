const axios = require('axios');

// var s1 = ''
// var s2 = ''

// fetch('https://jsonplaceholder.typicode.com/posts/21')
// .then(res => res.json())
// .then(json => console.log(json))
// .then(data => s1 =data)

axios.delete('https://jsonplaceholder.typicode.com/posts/21')
.then(res =>
    {
        console.log(res.data);
        s2 = res.data
    })
.catch(err => {
    console.log(err)
})


axios.get('https://jsonplaceholder.typicode.com/posts/21')
.then(res =>
    {
        console.log(res.data);
        s2 = res.data
    })
.catch(err => {
    console.log(err)
})


// console.log(s1 === s2)