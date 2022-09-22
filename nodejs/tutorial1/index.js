console.log('hello node')
var a =5 
var b =10
console.log(`Sum of this numbers is ${a+b}`)
const myArr =['a','b','c', 'd', 0,2,3,4,5,6]
myArr.forEach(item=>{
    console.log(item)
})

const fetch = require('node-fetch')


// node -v
// npm i nodemon -g
// nodemon index.js 
// npm init
//npm start  bir kere baslatip duruyor 
//npm run dev surekli calisiyor
//npm install node-fetch@2 fetch yapmadan once kullaniyoruz

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

