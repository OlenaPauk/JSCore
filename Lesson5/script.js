// 1
console.log("Task 1");
function testThrow(exception) {
    try {
        throw exception;
    }
    catch (error) {
        console.log("Caught: " + error);
    }
}
testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));
// 

// 2
console.log("Task 2");
function calcRectangleArea(width, height) {
    width = prompt('Task 2: Write width rectangle', 2);
    height = prompt('Task 2: Write height rectangle', 2);
    try {
        if (width > 0 && height > 0) {
            return ('Rectangle area = ' + width * height);
        }
        else if (width <= 0 || height <= 0) {
            throw new Error('Enter a positive number');
        }
        else if (isNaN(width) || isNaN(height)) {
            throw new Error('You write not a number!');
        }
        else {
            throw new Error("The field is empty! Please enter number.");
        }
    }
    catch (err) {
        return err;
    }
}
console.log(calcRectangleArea());

//

// 3
console.log("Task 3");
function isInt(n) {
    return n !== "" && Number(n) == n && n % 1 === 0;
}
function checkAge() {
    let age = prompt("Task 3: Write your age");
    try {
        if (isInt(age)) {
            if (age < 14) {
                throw new Error("Your age < 14, sorry :(");
            }
            else {
                alert("Welcome!!");
            }
        }
        else if (isNaN(age)) {
            throw new Error("You write not a number! Please enter your age");
        }
        else {
            throw new Error("The field is empty! Please enter your age");
        }
    }
    catch (err) {
        alert(err.name + " : " + err.message);
    }
}
checkAge();
//

// 4
console.log("Task 4");
class MonthException extends Error {
    constructor(message) {
        super();
        this.name = "MonthException";
        this.message = "Incorrect month number";
    }
}
function showMonthName(month) {
    try {
        month = +prompt("Task 4: Write number");
        if (!month || !isInt(month) || month < 1 || month > 12) {
            throw new MonthException("Incorrect month number");
        }

        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNames[month - 1];
    }
    catch (e) {
        if (e instanceof MonthException)
            return e.name + " " + e.message;
    }
}
console.log(showMonthName());
// 