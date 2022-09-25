import React, {useState, useEffect}  from 'react';
import ContactList from './ContactList';
import Form from './Form';
import SearchBar from './SearchBar';
import contactsservices from './services/contactsinfo';
import Notification from './Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

//data fetching
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
      //condition for comparing new inputs to existing ones

      //alert(contactObject.number);
      contactsservices.createContact(contactObject)
      .then(res=> res.data)
      alert (`You just successfully added ${newName}, ${newNumber} to your phonebook`)
      //onsubmit input values should be empty strings
      setNewName('')
      setNewNumber('')
    }

    const onSearch=(event)=>{setSearch(event.target.value)
      //console.log(search)
    }

    //variable filtering
    const filteredNames = persons.filter((person,i)=>{
    return person.name.toLowerCase().includes(search.toLowerCase());
  });

  const compare = filteredNames.map((contact, i)=> {return contact.name})
  const compareVar =()=>compare.includes(newName.toLowerCase())
  
    
  
  return (
    <>
      <div>


        <h2>Phonebook</h2>
        <SearchBar onSearch={onSearch} search={search}/>
        <Form onSubmit={onSubmit} newName={newName} newNumber={newNumber} 
              setNewName={setNewName} setNewNumber={setNewNumber} filteredNames={filteredNames}
          />


      <h2>Phone Numbers</h2>
          <ContactList filteredNames={filteredNames} />
    </div>
    </>
  );
}

export default App;
