import React from'react';

const Course =({courses})=>{
    return(
        <>
        {
                courses.map((course, i) =>
                <div key={i}>
                    <h1>{course.name}</h1>
                    <ul>
                        <li>{course.parts[i].name} {course.parts[i].exercises}</li>
                    </ul>                                 
                </div>
                
                )
        }
        </>
    )
}

export default Course;