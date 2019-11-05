// 2
let MyLastName = "Pauk";
console.log(MyLastName);
// 

// 3
let num, str;
num = 10;
mess = "Hello";
console.log("num" + "  " + num);
console.log("mess" + "  " + mess);

num = mess;
console.log("num" + "  " + num);
console.log("mess" + "  " + mess);
// 

// 4
let isAdult = confirm("Are you 18 years old?");

// 5
let firstName, lastName, group, yearOfBirth;
firstName = "Olena";
lastName = "Pauk";
group = "Lv-456.JSCore";
yearOfBirth = 1996;

let maritalStatus;
maritalStatus = false;

let firstNameType = typeof firstName;
let lastNameType = typeof lastName;
let groupType = typeof group;
let yearOfBirthType = typeof yearOfBirth;
let maritalStatusType = typeof maritalStatus;

console.log(yearOfBirth, yearOfBirthType);
console.log(maritalStatus, maritalStatusType);
console.log(firstName, firstNameType);
console.log(lastName, lastNameType);
console.log(group, groupType);

let variable1 = null;
let variable2;
console.log(variable1, typeof variable1);
console.log(variable2, typeof variable2);
// 

// 6
let userLogin = prompt("Please, write your login", "Bill");
let userEmail = prompt("Please, write your email", "bill@gmail.com");
let userPass = prompt("Please, write your password", 1234);
alert(`Dear ${userLogin}, your email is ${userEmail}, your password is ${userPass} `);
// 

// 7
let second = 60;
let hour = 60 * second;
let day = 24 * hour;
let month = 30 * day;
alert(`Hour = ${hour} seconds,day = ${day} seconds,month = ${month} seconds`);
//