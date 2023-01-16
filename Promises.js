// var promise = new Promise(function(resolve,reject){
//     const x = "Adfar"
//     const y = "Adfasr"
//     if(x===y){
//         resolve();
//     }else{
//         reject()
//     }
// })

// promise.then(()=>{
//     console.log("success, promise resolved")
// }).catch(()=>{
//     console.log("Callback failure")
// })

// var promise = new Promise(function(resolve,reject){
//     reject("Adfar Rasheed")
// })
// promise.catch((error)=>{
//     console.log(error)
// })

let promise = new Promise((resolve,reject)=>{
    resolve("Adfar Rasheed")
})
promise.then(
    new Promise((resolve,reject)=>{
        resolve("Hello Adfar")
    }).then((result1)=>{
        console.log(result1)
    })
).then((result2)=>{
    console.log(result2)
})









