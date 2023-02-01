const incrementCounter =()=>{
    return {
        type:"increment"
    }
}
const decrementCounter = ()=>{
    return {
        type:"decrement"
    }
}

export {incrementCounter,decrementCounter}