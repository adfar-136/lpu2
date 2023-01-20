import React from 'react'

// const Skill = ({skill : [tech,level]})=>
//   <li>{tech} {level}</li>

export default function Skills({students}) {
    
  return (
    <div>
      {students.map((person,index)=> {
        return (
            <div key={index}>
        <h2>Name : {person.name}</h2>
        <span>Skill :</span>
        {person.skills.map((skill,index)=> {
            return (
                <div key={index}>
                
                <span>  {skill}</span>
                </div>
            )
        })}
        </div>
        )
      })}
    </div>
  )
}

// const skills = [
//     ["HTML",10],
//     ["CSS",9],
//     ["JS",8],
//     ["React",7]
//   ]


// const students = [
//     {id:1,name:"Sharan", skills : ["html","css","js"]},
//     {id:2,name:"Preet", skills :["react","node","js"]},
//     {id:3,name:"Harry",skills :["c","data analysis","james bond","DSA"]}

//   ]