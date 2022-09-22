import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import ContactList from './ContactList';
import Form from './Form';
import SearchBar from './SearchBar';
import contactsservices from './services/contactsinfo';



const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  

  useEffect(()=>{
      contactsservices.getAll()
      .then(response => setPersons(response.data))
  },[]);

  //a new object that accepts the value of the contacts info inputted
  const contactObject = {
    name: newName,
    number: newNumber
  }

    const onSubmit=(event)=>{
      event.preventDefault()
      //alert(contactObject.number);
      contactsservices.createContact(contactObject)
      .then(res=> res.data)
      //onsubmit input values should be empty strings
      setNewName('')
      setNewNumber('')
    }

    const onSearch=(event)=>{
      setSearch(event.target.value)
      //console.log(search)
    }

    //condition for filtering
   



  return (
    <>
      <div>
        <h2>Phonebook</h2>

        <SearchBar onSearch={onSearch} search={search}/>

        <Form onSubmit={onSubmit} newName={newName} newNumber={newNumber} 
              setNewName={setNewName} setNewNumber={setNewNumber}
          />
      <h2>Phone Numbers</h2>
          <ContactList filteredNames={persons} />
    </div>
    </>
  );
}

export default App;
