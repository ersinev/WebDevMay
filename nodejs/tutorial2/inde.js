//custom modules
const {getName,getAge,getTodos} = require('./my_modules/sum')


// get result of sumModule
console.log(getName('john'))

getTodos()
.then(data=>{
    console.log(data)
})