import React from "react";

const StatisticsLine =({value,text})=>{
    return(
        <>
        <p>
            {text}: {value}
        </p>
        
        </>
    )
}

export default StatisticsLine;