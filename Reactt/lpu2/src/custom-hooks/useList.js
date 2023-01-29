import { useState } from "react"

const useList = ()=>{
    const [list,setList] = useState(["Adfar","Himanshu","Prigya"])
    const push =(value)=>{
        const newlist = list.concat(value)
        setList(newlist)
    }
    const pull = (index)=>{
        const newlist = list.filter((listitem,listindex)=>{
            return listindex !== index
        })
        setList(newlist)
    }
    return {
        list:list,
        push:push,
        pull:pull
    }
}
export default useList