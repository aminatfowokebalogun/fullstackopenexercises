import React from'react';

const Course =({courses})=>{
    
    return(
        <>
        {
                courses.map((course, i) =>
                <div key={i}>
                    <h1>{course.name}</h1>
                    <ul>
                        <li>{course.parts.map((part,i)=> <p key={i}>{part.name}:{part.exercises}</p>
                        )}
                        </li>
                    </ul>                                 
                </div>
                
                )
        }
        </>
    )
}

export default Course;