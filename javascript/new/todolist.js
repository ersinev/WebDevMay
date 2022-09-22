function todolist (user, course, todo) {
    this.user = user;
    this.course = course;
    this.todo = [];

}
let user1 = new todolist('Jack', 'JavaScript', 'Learn JavaScript');
let user2 = new todolist('Ersin', 'HTMl', 'Learn JavaScript');
//console.log(user1);

todolist.prototype.addNewToDo = function(newtask) {
    this.todo.push(newtask);
}
todolist.prototype.deleteToDo = function() {
    this.todo.pop();
}
todolist.prototype.showToDo = function() {
    console.log('User: ' + this.user + ' Course: ' + this.course + ' Todo: ' + this.todo + ' age: ' + this.age);
}
todolist.prototype.sirala = function(newtask) {
    for (let i = 0; i < this.todo.length; i++) {
        console.log(this.todo[i]); 
    }
    
}

todolist.prototype.age = 21; 
user1.addNewToDo("Learn React");
user1.addNewToDo("Learn Angular");
user1.deleteToDo();
console.log(user1);
user2.addNewToDo("Learn C#");
user2.addNewToDo("Learn C++");
user2.addNewToDo("Learn C");

console.log(user2);
console.log(user1.age);
console.log(user2.age);
user1.showToDo();
user2.showToDo();
sirala(user1[todo]);