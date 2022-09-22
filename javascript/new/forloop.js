const student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    address: {
        city: 'Lviv',
        street: 'Shevchenko',
    }
};

//console.log(student['name']);
// for in
// for (var key in student) {
//     console.log(student[key]);
//     if(key === 'address') {
//         for (var key2 in student[key]) {
//             console.log(student[key][key2]);
//         }
//     }
// }

// console.log("Resut", student['isAdmin']);
// function UpdateData(obj, key, newValue) {
//     return obj[key] = newValue;
// }
// UpdateData(student, 'name', 'Petr');

// //console.log(student);

// const student1 = {
//     x: 'john',
//     y: 'smith',
//     z: 'adasd',
// }

// UpdateData(student1, 'y', 'petr');
// //console.log(student1);

// function UpdateNestedData(obj, key, newKey, newValue) {
//     return obj[key][newKey] = newValue;
// }
// console.log(UpdateNestedData(student, 'address', 'city', 'samsun'));
// UpdateData(student, 'courses', '[html, css, js]');
// console.log(student);


// for of
function UpdateObjectData(obj, key, newValue) {
    obj[key] = newValue;
}


for (var key of Object.keys(student)) {
    //console.log(key);
    console.log(student[key]);
}
// console.log(Object.entries(student)[0][1]);
// console.log(Object.keys(student));