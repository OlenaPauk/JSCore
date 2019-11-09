// 1
let x = 1;
let y = 2;

let res1 = x + '' + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x + y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseFloat('x' - 'y');
console.log(res4); // NaN
console.log(typeof res4); // "number"
// 

// 2
let num = +prompt('Write your number');
if (num <= 0) {
    console.log('You have entered a negative number or zero');
}
else if (num % 2 == 0 && num % 7 == 0 && num > 0) {
    console.log('A positive even number is a multiple of 7');
}
else if (num % 2 == 0 && num > 0) {
    console.log('A positive even number');
}
else if (num % 7 == 0) {
    console.log(' The number is a multiple of 7');
}
else {
    console.log('The number does not satisfy the conditions');
}
// 

// 3
let isAdult = +prompt('How old are you?');
if (isAdult >= 18) {
    alert('You`ve reached the age of majority');
}
else if (isAdult < 10) {
    alert('You are still too young');
}
else {
    alert('You are under 18');
}
// 

// 4
let triangleA = +prompt('Please enter the length of the first side of the triangle.', '3').replace(/\s+/g, '');
let triangleB = +prompt('Please enter the length of the second side of the triangle.', '4').replace(/\s+/g, '');
let triangleC = +prompt('Please enter the length of the third side of the triangle.', '5').replace(/\s+/g, '');

if (triangleA == ' ' || triangleB == ' ' || triangleC == ' ') {
    console.log('You have not entered a number, please, try again');
}
else if (triangleA > 0 && triangleB > 0 && triangleC > 0) {
    let semiperimeter = ((triangleA + triangleB + triangleC) / 2);
    let areaTriangle = (semiperimeter * (semiperimeter - triangleA) * (semiperimeter - triangleB) * (semiperimeter - triangleC)) ** (1 / 2);
    if (isNaN(areaTriangle)) {
        console.log('There is no such triangle!');
    } else {
        console.log(`The area of ​​the triangle is equal ${Math.round(areaTriangle * 1000) / 1000}`);
        if (Math.hypot(triangleA, triangleB) == Math.hypot(triangleC)
            || Math.hypot(triangleB, triangleC) == Math.hypot(triangleA)
            || Math.hypot(triangleA, triangleC) == Math.hypot(triangleB)) {
            console.log('The triangle is rectangular');
        }
        else {
            console.log('The triangle is not rectangular');
        }
    }
}
else {
    console.log('Incorrect data');
}


// 5
let data = new Date().getHours();
console.log(data);
// ---1---
if (data > 5 && data <= 11) {
    console.log('Good morning!');
}
else if (data > 11 && data <= 17) {
    console.log('Good afternoon!');
}
else if (data > 17 && data <= 23) {
    console.log('Good evening!');
}
else {
    console.log('Good night!');
}
// ---
// ---2---
switch (data) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        console.log('Good morning!');
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log('Good afternoon!');
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        console.log('Good evening!');
        break;
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Good night!');
        break;
}
// ---
// 
