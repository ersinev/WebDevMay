const fetch = require('node-fetch')

//export string data
// module.exports = "Hello World"

//export array data
// module.exports = [1,2,4,5,6,7,8]

//export object data
//module.exports={id:1, name:"John Doe", age:25}

//export array of objects 
//module.exports = {
    //  users:['john', Jahn]

// }

//exportfunction
// module.exports = function(a,b){
//     return a+b
// }

//export multiple functions
module.exports ={
    getName: function(name){
        return name
    },
    getAge: function(age){
        return age
    },
    getTodos: async function(){
        let res =await fetch('https://jsonplaceholder.typicode.com/todos')
        let data = await res.json()
        return data
    }
}
