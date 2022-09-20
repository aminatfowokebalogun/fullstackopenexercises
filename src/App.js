import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import CountriesName from './CountriesName';
import CountriesDetails from './CountriesDetails';

const App = () => {
  //states for api and search-query-input
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCoutry] = useState('');

  //search event handler
  const onSearch =(event)=>{
    setSearchCoutry(event.target.value)
    //console.log(searchCountry)
  }
  
  //data fetch with axios
  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then(countrynames => setCountries(countrynames.data))
    //console.log(countries)
  }, [])

  //filter function of the countries API data
  const filteredCountries = countries.filter((country)=>
  { return country.name.common.toLowerCase().includes(searchCountry.toLowerCase()) })

  return (
    <>
      <div>
        <h2>Find Countries by name</h2>
        <input type='search' placeholder='search country by name' onChange={onSearch} value={searchCountry}/>
      </div>
      
      <div>
        {/*******condition for display depending search input length******************************** */}
        {
            ((searchCountry).length < 9) ? <p><CountriesName countriesname={filteredCountries} search={searchCountry} /></p> : 
            <div>
              <CountriesDetails countries={filteredCountries}/>
            </div>
        }
      </div>
    </>
  );
}

export default App;
