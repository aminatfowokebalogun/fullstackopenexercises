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

  //contatc_new_name = persons.map((contact_name, i)=> contact_name.name)

    const onSubmit=(event)=>{
      event.preventDefault()
      //alert(contactObject.number);
      contactsservices.createContact(contactObject)
      .then(res=> res.data)
      //error
  
      //condition for comparing new inputs to existing ones
      //console.log(newName, newNumber)
      //if(newName.toLowerCase().includes(t.toString().toLowerCase())){console.log('true')}else{console.log('false')}

      //onsubmit input values should be empty strings
      setNewName('')
      setNewNumber('')
    }

    const onSearch=(event)=>{
      setSearch(event.target.value)
      //console.log(search)
    }
    //variable filtering
    const filteredNames = persons.filter((person,i)=>{
    return person.name.toLowerCase().includes(search.toLowerCase());
  });

  //const t =()=>{
    //filteredNames.map((persons,i)=>persons.name)
    //console.log(persons.name)
  //}
    
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
