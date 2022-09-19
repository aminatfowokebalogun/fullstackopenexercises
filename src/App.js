import React, { useState }  from 'react';
import ContactList from './ContactList';
import Form from './Form';
import SearchBar from './SearchBar';

const App = () => {
  //state for numbers array
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456', id: 1 },
                                          { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
                                          { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
                                          { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  //state for search query results
  const [search, setSearch] = useState("");

  //sets to inputted value
  //const onInputChange=(event)=>{
    //setNewName(event.target.value)
    //console.log(newName)
  //}


  //to get values of name from persons array to compare inputs in onsubmit function because you
  //cant access the one in return functionn
  const compareName = persons.map(e=> e.name.toLowerCase());
  const compareNumber = persons.map(i=> i.number)

  const onSubmit=(event)=>{
    event.preventDefault()
    ///alert(newName)
    //variable intialize when button is clciked to create a new object and add to persons array
    const nameObject ={
      name: newName,
      number: newNumber,
    }
    //add to persons array
    setPersons(persons.concat(nameObject))
    //sets the value to input tag back to empty string
    setNewName('')
    setNewNumber('')
    setSearch('')
    
    const name = compareName.includes(newName.toLowerCase());
    const number = compareNumber.includes(newNumber);
    //{console.log(name)
    //condition for existing input name
    if(name || number){
      alert(newName.toUpperCase() + ' '+ 'with number:'+ ' ' + newNumber+ ' ' + 'is already added to phonebook')
    }
  }

  //search function
  const onSearch =(event)=>{setSearch(event.target.value)
    //console.log(search)
  }
  const filteredNames = persons.filter((person)=> {
    return(person.name.toLowerCase().includes(search.toLowerCase()))
  })
  
  return (
    <>
      <div>
        <h2>Phonebook</h2>
        
        <SearchBar onSearch={onSearch} search={search}/>

        <Form onSubmit={onSubmit} newName={newName} newNumber={newNumber} 
              setNewName={setNewName} setNewNumber={setNewNumber}
          />
      <h2>Phone Numbers</h2>
          <ContactList filteredNames={filteredNames}/>
    </div>

    </>
  );
}

export default App;
