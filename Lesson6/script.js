// 1
// let firstDiv1 = document.getElementById('test').innerHTML = 'Last';
let firstDiv2 = document.body.firstElementChild.innerHTML = 'Last';
// 

// 2
let cat = document.querySelector('.image');
cat.src = "cat.jpg";
alert(cat.outerHTML);
// 

// 3
console.log("Task 3")
let divText3 = document.body.querySelectorAll('#text p');
for(let i=0;i<divText3.length;i++){
    console.log(`Selector text ${i} ${divText3[i].innerHTML} `);
}
console.log(divText3);
// 

// 4
let ulList = document.getElementById("list");
let firstLi = ulList.firstElementChild.innerHTML;
let secondLi = ulList.lastElementChild.innerHTML;
let thirdLi = ulList.children[1].innerHTML;
let fourthLi = ulList.children[3].innerHTML;
let fifthLi = ulList.children[2].innerHTML;
 alert(`Task 4: ${firstLi}, ${secondLi}, ${thirdLi}, ${fourthLi}, ${fifthLi}`);
//

// 5
let bigHeader = document.getElementsByTagName("h1")[0];
bigHeader.style.backgroundColor = "rgb(68, 209, 68)";

let myDivP1 = document.querySelectorAll("#myDiv");
myDivP1[0].firstElementChild.style.fontWeight = "bold";

let myDivP2 = document.querySelectorAll("#myDiv");
myDivP2[0].children[1].style.color = "red";

let myDivP3 = document.querySelectorAll("#myDiv");
myDivP3[0].children[2].style.textDecoration = "underline";

let myDivP4 = document.querySelectorAll("#myDiv");
myDivP4[0].children[3].style.fontStyle = "italic";

let myList = document.getElementById("myList");
myList.innerHTML = "Makemevertical!";

let mySpan = document.querySelector("span");
mySpan.style.opacity = "0";
// 

// 6
let inputVal1 = prompt("Write message1");
let inputVal2 = prompt("Write message2");
let inputText1 = document.getElementById("input1");
inputText1.value = inputVal1;

let inputText2 = document.getElementById("input2");
inputText2.value = inputVal2;
[inputText1.value,inputText2.value] =  [inputText2.value,inputText1.value];
// 




