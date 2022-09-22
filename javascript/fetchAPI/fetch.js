//fetch API
// npm i json-server -g
//json-server data.json
////json-server data.json -p 5000 for changing port

// const { applyEach } = require("async")

// fetch('http://localhost:5000/api')
// .then(response =>{
//     setTimeout(()=>{
//         console.log("hello")
//     })
//      return response.json()
// })
// .then(data=>{
//     data.forEach(user =>{
//         console.log(user)
//     })
// })
// .catch(err=> console.log(err))

// fetch('http://localhost:5000/api')
// .then(res=>res.json())
// .then(data=>data)
// .then(data=>{
//     data.map(user=>{
//         user.username = user.username.toUpperCase() // 'atilla' = 'atilla'.toUpperCase()
//     })
//     return data
// })
// .then(data=>console.log(data))

// async function getUsers(){
//     let response = await fetch('http://localhost:5000/api')
//     return response.json()
// }
// getUsers()
// .then(data=>{
//     console.log(data)
// })
// const TbodyResult = document.getElementById('result')

// let getUsers = new Promise(resolve, reject)=>{
//     fetch('http://localhost:5000/api')
//     .then(res=>res.json())
//     then(data=>{
//         resolve(data)
//     })
//     .catch(err=>reject(err))
// }
// getUsers
// .then(data=>{
//     data.forEach(user=>{
//         TbodyResult.innerHTML+=` <tr>
//         <td>${user.id}</td>
//         <td>${user.username}</td>
//         <td>${user.password}test2</td>
//     </tr>`
//     })
//})

// async function users() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");

//   return response.json();
// }

// users()
//   .then((data) => {
//     return data;
//   })

//   .then((data) => {
//     const arr = [];
//     data.map((item) => {
//       const obj = {
//         fullname: item.name,
//       };

//       arr.push(obj);

//       console.log(arr);
//     });

// });

// fetch('dontreadme.txt')
// .then(res=>res.text())
// .then(data=>{
//     console.log(data)
// })
// let user;
async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  return data;
}

getUsers().then((data) => {
//   data.forEach((element) => {
//     let result = {
//       name: element.name,
//       id: element.id,
//     };
 data.map(function (item){
    const {name,id,username} =item
   
    console.log({name,id,username})
 })
    //console.log(result)
  });
 


