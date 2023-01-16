// //array 
// var a =[1,2,3,4,5,6]
// //slice method => extract some part of array
// // array.slice(start,end) does not effect my original array
// a.slice(2)
// console.log(a)
// // arr.splice => used to add remove elements from my given array. effect your original array
// // array.splice(start,delete,ele1,el2,el)
// a.splice(2,2,"j","k","l")
// console.log(a)

// var a = [1,2,3,4,5,6]
// // for(let i =0;i<a.length;i++){
// //     console.log(a[i])
// // }
// var books = ["adfar","lpu","Riva","Prigya"]
// for(let i of books){
//     console.log(books)
// }

// function add(a,b,c,...other){
     
//     return a+b+c+other
// }
// console.log(add(4,5,6,7,8,9,56,674,6,47,4,63,6,46,4,6))

// function add(...other){
//     let sum = 0;
//     for(let i of other){
//         sum += i
//     }
//     return sum
// }
// console.log(add(2,3,4,56,2))
// console.log(add(2,23,34,56,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2))

// let a = [3,2,5,4,6]
// let b = ['a',...a,7,8,9,0]
// let c = [...a]
// console.log(f)
// let a = [2,4,6,8,10]
// let b = a.map((x)=>{
//    return x*x
// })
// console.log(b)

// const a = [12,23,3,4,54,65,76,87,6766]
// const b = a.filter((ea)=>{
//     return ea > 12;
// })
// console.log(b)

//sort

// var a = [-120,31,12,5.2,6.4,56,-20,0,3]
// console.log(a.sort(function(a,b){
//     return a-b
// }))
// var b2 = ['Adfar','Prigya','Nithin','Rahman','Abhoy','Ace']
// console.log(b2.sort())

// const r = ['a','b','d','x','c','r','p','t']
// console.log(r.sort())

// var adfar = {
//     name : "Adfar",
//     age : 25,
//     Designation : "Lead",
//     habits : ["Cooking","Coding","Dancing"],
//     likes : {
//         name : "Nisha",
//         designation : 'Aditya'
//     }
// }
// console.log(adfar.likes.designation)

// var a = new Object();
// a.name = "Adfar"
// console.log(a)

// var adfar = {
//     name : "Adfar",
//     age : 25,
//     Designation : "Lead",
//     habits : ["Cooking","Coding","Dancing"],
//     likes : {
//         name : "Nisha",
//         designation : 'Aditya'
//     }
// }
// for (let i in adfar){
//     console.log(i)
// }

// let f = Object.keys(adfar)
// let g = Object.values(adfar)
// console.log(f)
// console.log(g)

var adfar = {
    name : "Adfar",
    age : 25,
    Designation : "Lead",
    email:"adfarrasheed136@gmail.com"
}
// console.log(adfar)
// var Nipun = {...adfar}

var Nipun  = Object.assign({},adfar)
// console.log(Nipun)
Nipun.name = "Nipun"
console.log(adfar)
console.log(Nipun)
