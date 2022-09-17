import React, {useState} from "react";
import StatisticsLine from "./StatisticsLine";

const Statistics =({good, bad, neutral})=>{
    //variables for the arithmetic
    const average = good +  bad + neutral /3
    const percentage = good + bad + neutral / 100
    return(
        <>
            <h1>
                FEEDBACK STATISTICS
            </h1>
            <div>
                    <StatisticsLine value={good} text='Total Number of good counts'/>
                    <StatisticsLine value={bad} text='Total Number of bad counts' />
                    <StatisticsLine value={neutral} text='Total Number of neutral counts'/>
            </div>
            <p> Average: {average}</p>
            <p> Percentage: {percentage} %</p>
            
    
        </>
    )
}

export default Statistics;