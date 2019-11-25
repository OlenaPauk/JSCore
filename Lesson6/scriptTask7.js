// 7.1
let mainT = document.createElement("main");
mainT.classList.add("mainClass");
mainT.classList.add("check");
mainT.classList.add("item");

let divT = document.createElement("div");
divT.id = "myDiv";

let pT = document.createElement("p");
pT.innerHTML="First paragraph";

divT.prepend(pT);
mainT.prepend(divT);
document.body.append(mainT);
console.log(document.body.outerHTML);

// 7.2
// let mainT = document.createElement("main");
// mainT.classList.add("mainClass");
// mainT.classList.add("check");
// mainT.classList.add("item");

// let divT = document.createElement("div");
// divT.id = "myDiv";

// divT.insertAdjacentHTML("afterbegin","<p>First paragraph</p>");
// mainT.appendChild(divT);
// document.body.append(mainT);
// console.log(document.body.outerHTML);


