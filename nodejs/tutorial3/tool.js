//=============================  process object  ========================
let commands = process.argv
// console.log(commands)
// function GetSumOfTwoNumbers(a,b){
//     return a+b

// }

// console.log(GetSumOfTwoNumbers(parseInt(commands[2]), parseInt(commands[3])))

// let users=['jane','joe','jack']
// function GetUser(name){
//     return users.filter(user=>user===name)
// }

// let result = GetUser(commands[2])
// console.log(result)

// =================  https://www.npmjs.com/package/dotenv  ================= To secure your info
// require('dotenv').config()
// console.log(process.env.TOKEN)

const link = commands[3]
const fileFormat = commands[5]

console.log(`--link ${link} -- convert ${fileFormat}`)

const fs = require('fs');
const ytdl = require('ytdl-core');


// //ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
// .pipe(fs.createWriteStream('video.mp4'));


ytdl(link)
  .pipe(fs.createWriteStream(fileFormat));