import React from "react";

const Total =(props)=>{
    return(
        <>
            <h4>
                Total score of exercises= 
                {props.parts[0].exercises + props.parts[1].exercises +props.parts[2].exercises }
            </h4>
        </>
    )
}

export default Total;