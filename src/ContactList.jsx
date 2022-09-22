import React from "react";
import contactservices from './services/contactsinfo';

const ContactList =({filteredNames})=>{

const getId = filteredNames?.map((name,i)=> name.id)

const handleDelete =()=>{
    console.log(getId)
}

    return(
        <>
            {/******************array mapping**************** */}
                {
                    filteredNames?.map ((person, i)=>(
                    <React.Fragment key={i}>
                        <li>
                            {person.name}: {person.number} 
                            <span>
                                <button onClick={handleDelete}>
                                    Delete Contact
                                </button>
                            </span>
                        </li>
                    </React.Fragment>
                    ) )
                    
                }
            
        </>
    )
}

export default ContactList;