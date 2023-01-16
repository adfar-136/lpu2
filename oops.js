// class hello{
//     message(){
//         console.log("Adfar")
//     }
//     sorry(){
//         console.log("sorry")
//     }
// }
// let a = new hello();
// a.message()
// a.sorry()

// class student{
//     constructor(){
//         let name;
//         console.log("constructor called")
//     }
//     hello(){
//         console.log("Hello " + this.name)
//     }
// }
// let a = new student()
// a.hello()
// a.name = "Adfar Rashid"
// a.hello()

// class student{
//     constructor(name,age){
//         this.stuname = name
//         this.stuage = age
//         console.log("Contructor called")
//     }
//     hello(){
//         console.log("Hello " + this.stuname +" "+ this.stuage)
//     }
//     static staticMethod(){
//         console.log("ADfar rAshid")
//     }
// }
// let a = new student("Adfar", 25)
// let b = new student("Faishal", 22)
// a.hello()
// b.hello()
// student.staticMethod()

class employee{
    constructor(name,age,salary){
        this.empname = name;
        this.empage = age;
        this.empsalary = salary;
        console.log("Constructor called")
    }
    info(){
        document.write(`<h3>Employee class</h3>
        Name:${this.empname}<br>
        Age : ${this.empage}<br>
        Salary : ${this.empsalary}`)
    }
}
class manager extends employee{
   constructor(name){
    super(name)
    console.log("Constructor : Manager " + name)
   }
  info(){
    let pa = 1000;
    let ta = 3000;
    let totalsalary = this.empsalary+ta+pa;
    document.write(`<h3>Manager class</h3>
        Name:${this.empname}<br>
        Age : ${this.empage}<br>
        Salary : ${totalsalary}`)
    super.info()
  }
}
let a  = new manager("Adfar",25,50000)
a.info()
