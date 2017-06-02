// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 2))

// var toAdd = [9,5];

// console.log(add(...toAdd));

// var groupA = ['Twinkie', 'Jeremy'];
// var groupB = ['Albert', 'Amy'];
// var final = [3, ...groupA, ...groupB];

// console.log(final);

var person = ['Andrew', 25];
var person2 = ['Jen',  29];

function greet (name, age) {
    return 'Hi, ' + name + ' you are: ' + age + '.';
}

console.log(greet(...person));
console.log(greet(...person2));

var group1 = ['Isabelle', 'Alan'];
var final = [...group1, 'Michael'];

final.forEach(function(element){
    console.log('Hi, ' + element + '.');
});