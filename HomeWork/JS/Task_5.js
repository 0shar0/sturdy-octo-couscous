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
//         this.fullname = function() {
//             return this.name + " " + this.surname
//         }
//     }
// }
// class Student extends Person {
//     constructor(name, surname, year){
//         super(name, surname);
//         this.year = year;
//         this.showFullName = function(midleName){
//             return this.name + " " + this.surname + " " + midleName
//         }
//     }
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

class Worker{
    constructor(fullName, dayRate, workingDays){
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    }
    showSalary(){
        return this.dayRate * this.workingDays;
    }
    experience = 1.2;
    showSalaryWithExperience(){
        return this.dayRate * this.workingDays * this.experience
    }
    set experience(setExp){
       return this.experience = setExp
    }
} 

