var result;
var myArr=[];
var mynumbers=[10,20,11,4,50];
var myletters=["d","c","b","a","e","f"];
result= myArr;

//push() method
myArr.push(1);
myArr.push("a");
myArr.push(true);
myArr.push(null);
myArr.push({name:"John"});

//pop() method
myArr.pop(); //remove last element from array

//shift() method
myArr.shift(); //remove first element from array

//join() method
result= myArr.join("-"); //return string representation of array

//sort() method
result=myletters.sort(); //sort array in alphabetical order
result=mynumbers.sort(function(a,b){
    return a-b;
}); //sort array in numerical order

//concat() method
result=mynumbers.concat(myletters); //concatenate two arrays

//iteration methods {for, forEach, map, filter, reduce, some, every}

//for loop
// for(var i=0; i<result.length; i++){
//     console.log("try again");
// }
//forEach loop
function NewForLoop(value,index,arrayitself) {
    console.log(value,index,arrayitself)
}
//result.forEach(NewForLoop) 
//result.map(NewForLoop)


var total=0;
// for(var i=0; i<mynumbers.length; i++){
//     total+=mynumbers[i];
//     console.log(total);
mynumbers.forEach(function(n){
    total+=n;
    //result=`The total is ${total}`;
    
})

result=`The total is ${total}`

//filter() method
result= mynumbers.filter(function(value){
    return value>10;
})

let posts=[{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  }
]

result= posts.filter(value => value>=30)
result = posts.filter(value =>{
    return value.id ===5
})

function FindPostById(id){
    return posts.filter(value => value.id ===id)
}

result=FindPostById(5)
console.log(result);