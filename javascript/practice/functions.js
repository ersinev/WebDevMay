// console.log("functions.js");

// function GetSum()
// {   var getResult=1+1;
//     console.log("GetSum function", getResult);
//     return 5;
// }

// GetSum();
// console.log(GetSum()); 
// function GetSum(n1,n2)
// {
//     console.log(n1,n2)
//     return n1+n2;
// }

// //GetSum({id:1},null);
// console.log(GetSum(5,10));

// var Student={
//     name:"sachin",
//     age:30,
// }

// function GetStudentName(studentObkj){
//     console.log(studentObkj.name);
// }

// GetStudentName(Student);

// var Student={
//     name:"sachin",
//     age:30,
//     isStudent:true,
//     isTeacher:false,
//     scores:[10,20,30],
//     }

//     function VerifyStudent(studentParam){
//         console.log(studentParam);
//         let isStudent=studentParam.isStudent;
//         console.log(isStudent);
//         return isStudent ? `Name: ${studentParam.name}\nAge: ${studentParam.age}\nScores: ${studentParam.scores}`:`${studentParam.name} is not a student`;
//     }

//     const VerifyStudent2= studentParam=>{
//         console.log(studentParam);
//         let isStudent=studentParam.isStudent;
//         console.log(isStudent);
//         return isStudent ? `Name: ${studentParam.name}\nAge: ${studentParam.age}\nScores: ${studentParam.scores}`:`${studentParam.name} is not a student`;
//     }

//     const GetsumOfNumebers= (n1,n2) => n1+n2;


//     console.log(VerifyStudent(Student));


// function Bmi(){
//     var height=1.81
//     var weight=69
//     var bmi=weight/(height*height);
//     console.log(bmi);
// }


const Bmi= (weight,height) => weight/(height*height);
console.log(Bmi(69,1.81));

console.log(Bmi(70,1.81));
const netSalary= (brutSalary,tax) => brutSalary-(brutSalary*tax);
console.log(netSalary(3000,0.21));


