function About(props){
    
    return (
        <div>ADfarrrrrrr
            <h1>{props.name} {props.age} </h1>
            {props.skills.map((x)=> <li>{x}</li>)}
            <div>
                <h1>{props.data.welcome}</h1>
                <h1>{props.data.title}</h1>
                <h1>{props.data.Author}</h1>
            </div>
        </div>
    )
}

export default About