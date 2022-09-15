import React from "react";

const Part =(props)=>{
    return(
        <>
        <h3>Cousrse: {props.name}</h3>
        <h3>Exercise Score: {props.exercise}</h3>
        </>
    )
}

export default Part;