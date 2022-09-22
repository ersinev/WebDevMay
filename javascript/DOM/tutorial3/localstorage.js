const userInput = document.querySelector(".userinput");

const saveBtn = document.querySelector(".savebtn");

const getBtn = document.querySelector(".getbtn");

// saveBtn.addEventListener("click", () => {
//   console.log("hello world ", userInput.value);

//   localStorage.setItem("username", userInput.value);
// });

// getBtn.addEventListener("click", () => {
//   let username = localStorage.getItem("username");

//   console.log(`username is ${username}`);
// });
let user;
// setTimeout(()=>{
//     user =prompt('enter your username')
// },2000)

setInterval;(()=>{
    user =prompt('enter your username')
},2000)



saveBtn.addEventListener("click", () => {
    let getStorageData =JSON.parse(localStorage.getItem('students'))
    getStorageData.push(userInput.value)
    localStorage.setItem('students',JSON.stringify(getStorageData))
  
    
  });
  
  getBtn.addEventListener("click", () => {
    let studentName =  JSON.parse(localStorage.getItem('students'))
    console.log(studentName)
    console.log(user)
  });
  

