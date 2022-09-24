import React,{useState} from "react";
import contactservices from './services/contactsinfo';
import Notification from "./Notification";


const ContactList =({filteredNames})=>{
    const [errorMessage, setErrorMessage] = useState(null);
   // const [successful, setSuccessful] = useState('')

//event handler with id and name paremter gotten from the button as an arguement, and add to the baseurl of the restapi
const handleDelete =(id, name)=>{
    //console.log(id)
    //variable that accepts the array and uses the find method, and confirms the id is equal to the expected id
    const todelete = filteredNames.find((contactid)=> contactid.id === id)
    //conition for confirm dialog
    if(window.confirm(`Do you want to delete ${name}?`)){
        contactservices.deleteContact(id, todelete)
        //error message
        .catch(error => {
            if(error === null){
                alert('no error')
            }
        })
    }
}

    return(
        <>
            {/******************array mapping**************** */}
            <Notification message={errorMessage} />
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