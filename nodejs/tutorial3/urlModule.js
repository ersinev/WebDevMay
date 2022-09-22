var url = require('url');

let parsedUrl = url.parse('http://localhost:3000/?name=Joe&age=20',true)
console.log(parsedUrl)
console.log(parsedUrl.query)
console.log(parsedUrl.query.name)
console.log(parsedUrl.query.age)
console.log(parsedUrl.hostname)


//__dirname
console.log(__dirname) //C:\WebDevMay\nodejs\tutorial3
console.log(__filename) //C:\WebDevMay\nodejs\tutorial3\urlModule.js

//path module

var path =require('path')
console.log(path.basename(__dirname)) //tutorial3
console.log(path.basename(__filename)) //urlModule.js
console.log(path.join('/company',__filename)) //\company\C:\WebDevMay\nodejs\tutorial3\urlModule.js ======= its like concat //// dosyanin basina yeni bir dosya ekliyo


console.log(path.join(__dirname,'/downloaded'))