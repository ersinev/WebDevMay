







// var _students = [
//     {
//       id: 1,
//       name: "avarel",
//       course: "javascript",
//       score: 45,
//     },
//     {
//       id: 1,
//       name: "mike",
//       course: "java",
//       score: 55,
//     },
//     {
//         id: 1,
//         name: "mike",
//         course: "java",
//         score: 45,
//       },
//     {
//       id: 1,
//       name: "george",
//       course: "javascript",
//       score: 66,
//     },
//     {
//       id: 1,
//       name: "joe",
//       course: "python",
//       score: 70,
//     },
//   ];
// //   var input, btn, getresult; 
// var input = document.getElementById("input");
// var btn = document.getElementById("btn");
// var getresult = document.getElementById("getresult");
// //var result = whoPassedExam(_students);

// // all students
// function allstudents(value){
//     return value.filter(value => value.name);
// }
//     var allst = allstudents(_students);
//     console.log(allst);

// //   // whoPassedExam?
// //   function whoPassedExam(value) {
// //     return value.filter((value) => value.score >= 50);
// //   }


// //   function whopassed(){
// //   for (var i = 0; i < result.length; i++) {
    
// //     if(result[i]["name"] == input.value){
// //       getresult.innerHTML = "You passed the exam with a score of " + result[i]["score"];
// //     }
   
// //     }
// //     }
// //     for (var i = 0; i < allstudents.length; i++) {
// //     console.log(allstudents[i]["score"]);}

// //let whoPassedArray = []
// function whopassed(){
//     //let inputValue = input.value;
//    //console.log(inputValue);
//     let getStudent = _students.filter(student=>student.name == input.value);
//     console.log(getStudent.length);
    
//     // if(getStudent.length > 0){
//     //     let isStudentPassedExam = getStudent[0].score >=50? 'Student passed the exam':'Student failed the exam';
//     //     console.log(isStudentPassedExam)
//     // }else{
//     //     console.log('Student not found')
//     // }

//     let result = getStudent.length > 0 ? (getStudent[0].score >=50? 'Student passed the exam':'Student failed the exam') : 'Student not found';
//     //console.log(getStudent);
//    console.log(result)    
//     // _students.forEach(student=>{
//     //    student.score >=50? whoPassedArray.push(student):console.log(`${student.name} failed the exam`);
//     // })

//     // //console.log(whoPassedArray);
//     // whoPassedArray.forEach(student=>{
//     //     console.log(`${student.name} passed the exam with a score of ${student.score}`)
//     // })
// }
// var btn = document.getElementById("btn");
// btn.addEventListener("click", whopassed);



// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 5 == 0 && numbers[i]  <= 150){
//     console.log(numbers[i]);
//   }
// }



// while(numbers[i] %5== 0 && numbers[i] <=150){
    
// }
// const numbers = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]
// const filteredNumbers = numbers.filter(number => number %5 === 0);
// const doubleFilter = filteredNumbers.filter(number => number <= 150);
// console.log(doubleFilter);

// let number= [1,2,3,4,5,6,7,8,9,10];
// while(number <= 10){
    
//     number = number +3;
//     console.log(number);
// } 
   
// function factoriel(n){
//   if (n == 0) {
//     return 1;
//   }
//   return n * factoriel(n - 1);
// }
// console.log(factoriel(0));
// let sum=0;
// for (let i = 0; i < 10; i++, sum+=i) {
//    console.log(sum);
// }

// let sum1 = 0;
// for (let i = 0; i <= 9; i++, sum += i);
// console.log(sum);

// function Factorial(n){

//   var result = n;
  
//   if(n ===0 || n === 1){
  
//   return 1;
  
//   }
  
//   total = 1
  
//   for (var i = n; i > 0; i-=1) {
  
//   result = total *= i
  
//   }
  
//   return result
  
//   }
//   console.log(Factorial());\

console.log("helo");