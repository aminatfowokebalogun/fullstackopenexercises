import React from "react";
import contactservices from './services/contactsinfo';


const ContactList =({filteredNames})=>{

//event handler with id and name paremter gotten from the button as an arguement, and add to the baseurl of the restapi
const handleDelete =(id, name)=>{
    //console.log(id)
    //variable that accepts the array and uses the find method, and confirms the id is equal to the expected id
    const todelete = filteredNames.find((ptd)=> ptd.id === id)
    //conition for confirm dialog
    if(window.confirm(`Do you want to delete ${name}?`)){
        contactservices.deleteContact(id, todelete)
        .catch(error => alert(error.message))
    }
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
                                <button onClick={() => handleDelete(person.id,person.name)}>
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