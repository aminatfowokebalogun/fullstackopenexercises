import React from "react";

const Notification=({message})=>{
    if (message === null) {
    return console.log('deleted')
  }

    return(
        <>
            <h1>
                {message === null ? 'deleted' : message} 
            </h1>

            
        </>
    )
}

export default Notification;