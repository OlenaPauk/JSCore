// 1 for
let arr1 = [2, 3, 4, 5];
let sum1 = 1;
for (let i = 0; i < arr1.length; i++) {
    sum1 *= arr1[i];
}
console.log("Task 1 - " + sum1);

// 1 while
let j = 0;
let sum2 = 1;
while (j < arr1.length) {
    sum2 *= arr1[j];
    j++;
}
console.log("Task 1 - " + sum2);
// 

// 2
console.log("Task 2 ");
for (let i = 0; i < 15; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is even`);
    }
    else if (i % 2 != 0) {
        console.log(`${i} is odd`);
    }
}
// 

// 3
function randArray(k) {
    let randArr = [];
    for (let i = 0; i < k; i++) {
        let randNum = Math.floor(1 + Math.random() * 500);
        randArr.push(randNum);
    }
    console.log("Task 3 - " + randArr);
}
randArray(5);
//

// 4
let num = prompt('Write integer number', 2);
let degree = prompt('Write integer degree', 2);
console.log("Task 4 ");
function isInt(n) {
    return n !== "" && Number(n) == n && n % 1 === 0;
}
function raiseToDegree() {
    if (isInt(num) && isInt(degree)) {
        let res = 1;

        if (degree > 0) {
            for (let i = 1; i <= degree; i++) {
                res = res * num;
            }
            console.log(res);
        }
        else {
            degree = -degree;
            for (let i = 1; i <= degree; i++) {
                res = res * num;
            }
            res = 1 / res;
            console.log(res);
        }
    }
    else {
        alert('Please, enter the correct value in the input field');
    }
}
raiseToDegree();


// 5
console.log("Task 5 ");
function lastElem(arr, count) {
    if (count == null) {
        console.log(arr.slice(-1)[0])
    }
    else {
        console.log(arr.slice(-count));
    }
}
lastElem([3, 4, 10, -5]);
lastElem([3, 4, 10, -5], 2);
lastElem([3, 4, 10, -5], 8);
// 

// 6
let strToUpperCase = prompt("Please, write your string", "i love java script");
function upperCase(str) {
    let strSplit = (str || "").toLowerCase().split(' ');
    for (let i = 0; i < strSplit.length; i++) {
        strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].substring(1);
    }
    return strSplit.join(' ');
}
console.log("Task 6 - " + upperCase(strToUpperCase));
//