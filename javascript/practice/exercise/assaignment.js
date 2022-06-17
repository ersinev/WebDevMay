var _students = [
  {
    id: 1,
    name: "avarel",
    course: "javascript",
    score: 45,
  },
  {
    id: 1,
    name: "mike",
    course: "java",
    score: 55,
  },
  {
    id: 1,
    name: "george",
    course: "javascript",
    score: 66,
  },
  {
    id: 1,
    name: "joe",
    course: "python",
    score: 70,
  },
];

// whoPassedExam?
function whoPassedExam(value) {
  return value.filter((value) => value.score >= 50);
}
var result = whoPassedExam(_students);
for (var i = 0; i < result.length; i++) {
  console.log(result[i]["name"]);
}


// function whoFailedExam(value){
//     return value.filter(value => value.score < 50)

// }
// var whopassed = whoPassedExam(_students);

// for(var i=0; i<whopassed.length; i++){
//     console.log(whopassed[i]['name'] + " passed the exam" + " with a score of " + whopassed[i]['score']);
// }
// var whofailed = whoFailedExam(_students);
// for(var i=0; i<whofailed.length; i++){
//     console.log(whofailed[i]['name'] + " failed the exam" + " with a score of " + whofailed[i]['score']);
// }

// function whoTakesJavascript(value){
//     return value.filter(value => value.course == 'javascript')

// }
// var javascript = whoTakesJavascript(_students)
// for(var i=0; i<javascript.length; i++){
//     console.log(javascript[i]['name'] + " takes javascript");
// }
