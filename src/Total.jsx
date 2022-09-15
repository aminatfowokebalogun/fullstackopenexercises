import React from "react";

const Total =(props)=>{
    return(
        <>
            <h4>
                Total score of exercises= {props.exercises1 + props.exercises2 + props.exercises3}
            </h4>
        </>
    )
}

export default Total;