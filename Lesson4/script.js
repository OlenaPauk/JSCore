// 1
console.log("Task 1");
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};
function propsCount(currentObject) {
    let count = 0;
    for (let key in mentor) {
        count++;
    }
    return count;
}
console.log(propsCount(mentor));
// 

// 2
console.log("Task 2");
let user = {
    firstName: "Tom",
    lastName: "Morgan",
    age: 30,
    city: "NY",
    status: true
}
function showProps(obj) {
    let arr1 = [];
    let arr2 = [];
    for (let key in user) {
        arr1.push(key);
        arr2.push(user[key])
    }
    console.log(arr1);
    console.log(arr2);
}
showProps(user);
// 


// 3
console.log("Task 3");
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }
    showSalary() {
        console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
    }
    experience() {
        return this._experience;
    }
    showSalaryWithExperience() {
        console.log(`${this.fullName}  salary: ${this.dayRate * this.workingDays * this._experience}`);
    }
    showSalaryWorker() {
        return `${this.dayRate * this.workingDays * this._experience}`;
    }
    get getExperience() {
        return this._experience;
    }
    set setExperience(experience) {
        this._experience = experience;
    }
}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.experience());
worker1.showSalaryWithExperience();
worker1.setExperience = 1.5;
console.log("New experience: " + worker1.getExperience);
worker1.showSalaryWithExperience();
console.log("--------------");

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.experience());
worker2.showSalaryWithExperience();
worker2.setExperience = 1.5;
console.log("New experience: " + worker2.getExperience);
worker2.showSalaryWithExperience();
console.log("--------------");

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.experience());
worker3.showSalaryWithExperience();
worker3.setExperience = 1.5;
console.log("New experience: " + worker3.getExperience);
worker3.showSalaryWithExperience();

let salaryArray = [worker1, worker2, worker3];
let sortedSalary = salaryArray.sort((a, b) => {
    return a.showSalaryWorker() - b.showSalaryWorker();
})
console.log(sortedSalary);
for (let i = 0; i < sortedSalary.length; i++) {
    console.log(salaryArray[i].fullName + ":" + salaryArray[i].showSalaryWorker());
}

// 

// 4
console.log("Task 4");
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return `${this.name} ${this.surname}`;
    }
}
class Student extends Person {
    constructor(name, surname, midleName, year) {
        super(name, surname);
        this.midleName = midleName;
        this.year = year;
    }
    showFullName(midleName) {
        return `${this.name} ${this.surname} ${midleName}`;
    }
    showCourse() {
        let cours = 0;
        switch (this.year) {
            case 2019:
                cours = 1;
                break;
            case 2018:
                cours = 2;
                break;
            case 2017:
                cours = 3;
                break;
            case 2016:
                cours = 4;
                break;
            case 2015:
                cours = 5;
                break;
            case 2014:
                cours = 6;
                break;
        }

        return cours;
    }
}
let stud1 = new Student("Petro", "Petrenko", "", 2019);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
//

// 5
console.log("Task 5");
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(heightTriangle, sideTriangle) {
        super();
        this.heightTriangle = heightTriangle;
        this.sideTriangle = sideTriangle;
    }
    getArea() {
        return 1 / 2 * (this.heightTriangle * this.sideTriangle);
    }
}
class Square extends GeometricFigure {
    constructor(sideSquare) {
        super();
        this.sideSquare = sideSquare;
    }
    getArea() {
        return this.sideSquare ** 2;
    }
}
class Circle extends GeometricFigure {
    constructor(radius) {
        super()
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

let triangle = new Triangle(4, 5);
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

function handleFigures(figuresArray) {
    let result = "";
    let totalArea = 0;
    figures.forEach(element => {
        let isInstance = element instanceof GeometricFigure;
        if (isInstance) {
            result += `Geometric figure: ${element.toString()} - area: ${element.getArea()}\n`;
            totalArea += element.getArea();
        }
    });
    result += `Total area: ${totalArea}`;
    return result;
}

console.log(handleFigures(figures));
