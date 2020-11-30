//-----1-----

// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development",
//     };
// function propsCount(currentObject){
//     let arr = Object.keys(currentObject)
//     console.log(arr.length)
// };

//-----2-----

// let dog = {
//     name: 'Ronald',
//     breed: 'AST',
//     age: 6,
//     color: 'black',
//     owner: 'Bohdan Sharko'
// };
// function showProps(obj){
//     console.log(Object.keys(obj))
//     console.log(Object.values(obj))
// }

//-----3-----

// class Person {
//     constructor(name, surname){
//         this.name = name
//         this.surname = surname
//     }
//     fullname() { 
//             return this.name + " " + this.surname
//         }
//     }
    
// class Student extends Person {
//     constructor(name, surname, year){
//         super(name, surname);
//         this.year = year;
//     }
//         showFullName(midleName) {
//             return this.name + " " + this.surname + " " + midleName
//         }
    
//         showCourse() {
//             let date = (new Date()).getFullYear()
//             let course = date - this.year
//                 if (course > 6){
//                     console.log("Not a student")
//                 }
//                 else(
//             console.log("Current course " +  course))
//         }
// }

//-----4-----

// class Worker{
//     constructor(fullName, dayRate, workingDays){
//     this.fullName = fullName;
//     this.dayRate = dayRate;
//     this.workingDays = workingDays;
//     }
//     showSalary(){
//         return this.dayRate * this.workingDays;
//     }
//     #experience = 1.2;
//     get showExp(){
//         return this.#experience
//     }
//     set setExp(ex){
//         return this.#experience = ex
//      }
//     showSalaryWithExperience(){
//         return this.dayRate * this.workingDays * this.#experience
//     }
// } 

// function sortSalary(){
//     let x1 = {
//         name: worker1.fullName,
//         salary: worker1.showSalaryWithExperience()
//     }
//     let x2 = {
//         name: worker2.fullName,
//         salary: worker2.showSalaryWithExperience()
//     }
//     let x3 = {
//         name: worker3.fullName,
//         salary: worker3.showSalaryWithExperience()
//     }
//     let arr = [x1, x2, x3]
//     let result = arr.sort(function(a,b){return a.salary - b.salary})
//     console.log(result)
// }

// let worker1 = new Worker ("Jon Jonson", 20, 23);
// console.log(worker1.fullName);
// console.log(worker1.showSalary());
// console.log('Experience = ' + worker1.showExp);
// console.log(worker1.showSalaryWithExperience());
// worker1.setExp = 1.5;
// console.log('New experience = ' + worker1.showExp);
// console.log(worker1.showSalaryWithExperience());
// let worker2 = new Worker('Tom Tomson', 48, 22);
// let worker3 = new Worker('Andy Ander', 29, 23);
// worker2.setExp = 1.5;
// worker3.setExp = 1.5;
// sortSalary()

//-----5-----

class GeometricFigure{
    getArea(){
        return 0;
    }
    toString(){
        return Object.getPrototypeOf(this).construtor
    }
}
class Triangle extends GeometricFigure{
    constructor(side, height){
        super()
        this.side = side;
        this.height = height;
    }
    getArea(){
        return (this.side * this.height)/2
    }
}
class Square extends GeometricFigure{
    constructor(side){
        super()
        this.side = side;
    }
    getArea(){
        return this.side ** 2
    }
}
class Circle extends GeometricFigure{
    constructor(radius){
        super()
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius ** 2
    }
}
function handleFigures(figures){
    for(i = 0; i < figures.length; i++){
        if( (figures[i] instanceof GeometricFigure) === true){

            console.log(figures[i].getArea())
        }
    }
}

let figures = [new Triangle(4, 5), new Square(7), new Circle(5)]
console.log(handleFigures(figures))


