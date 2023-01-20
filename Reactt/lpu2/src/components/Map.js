import React from 'react'

export default function Map() {
    const students = [
        ["Name","Subject","Marks","cgpa"],
        ["Adfar","Coding",100,10,["html","css","js"]],
        ["Nipun","React",90,9,["react","c","c++"]],
        ["Riva","JS",80,8,["JS","java","python"]],
        ["Animesh","Node",70,7,["react","c","c++"]]
    ]
  return (
    <div>
      <table>
        <thead>
            <tr>
                {students[0].map((x,i)=> {
                    return <th key={i}>{x}</th>
                })}
            </tr>
            </thead>
            <tbody>
                {students.slice(1,4).map((x,i)=>{
                    return (
                        <tr key={i}>
                            <td>{x[0]}</td>
                            <td>{x[1]}</td>
                            <td>{x[2]}</td>
                            <td>{x[3]}</td>
                        </tr>
                    )
                })}

            </tbody>
        
      </table>
    </div>
  )
}
