// //number
// // //int a=3
// // // float b =3.2
// // var a = 3;
// // var b = 3.035456;
// // //w =2431423143214311234n
// // //r =BigInt(234656478114818417)
// // //string "2"
// // //boolean true and false
// // //null var a = null;
// // //undefined var a;
// // //arrays
// // var a = [1, 2, 3, "a", "b", "c"];
// // console.log(a)
// // a.push('d','e','f',1,2,3,4,5)
// // console.log(a)
// // a.pop()
// // console.log(a)
// var a = 10;
// if(a>=5){
//     console.log("adfar")
// }
// else if(a<10){
//     console.log("Animesh")
// }
// else if(a=10){
//     console.log("something")
// }
// else {
//     console.log("ff")
// }
// let marks = "B"
// switch(marks){
//     case "A":
//         console.log("Ad");
//         break;
//     case "B":
//         console.log("Bt");
//         break;
//     case "C":
//         console.log("else");
//         break;
//     default:
//         console.log("default")
// }

// function add(x,y){
//     console.log(x+y)
// }
// add(5,6)
// add(6,8)

var num =3;
function double(x){
    var sum =x*x;
    function thrice(y){
        var thr = y*y*y;
        return thr
    }
    var th =thrice(4)
    console.log(th)
    return sum;
}
var newnum = double(4)
console.log(newnum)

