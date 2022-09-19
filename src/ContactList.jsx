import React from "react";

const ContactList =({filteredNames})=>{
    return(
        <>
            {/******************array mapping**************** */}
            
                {
                    filteredNames?.map ((person, i)=>(<li key={i}>
                  {person.name}: {person.number}
                </li>
                     ) )
                    
                }
            
          
        </>
    )
}

export default ContactList;