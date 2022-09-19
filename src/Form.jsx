import React from "react";

const Form =({newName, newNumber,onSubmit,setNewName,setNewNumber})=>{
    return(
        <>
        <form onSubmit={onSubmit}>
          <h3> Add a new contact</h3>
          <div>
            name: 
            <input value={newName} onChange={(event)=> setNewName(event.target.value)} required/>
            Phone Number: 
            <input value={newNumber} onChange={(event)=> setNewNumber(event.target.value)} type='number' required/>
        </div>
            <div>
                <button type="submit">
                    ADD
                </button>
            </div>
      </form>
        </>
    )
}

export default Form;