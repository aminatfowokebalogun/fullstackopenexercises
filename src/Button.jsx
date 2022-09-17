import React from 'react';

const Button =({value, text,handleClick})=>{
    return(
        <>
        {value}
        <br/>
        <button onClick={handleClick}>
            {text}
        </button>
        </>
    )
}

export default Button;