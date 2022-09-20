import React, {useState} from "react";
import axios from "axios";

//variables
let OPENWEATHER_APIKEY = 'd9fc355d852eb3441b086bdfd1bc322a';
let OPENWEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

//wWHAT I DID: THE SEARCH INPUT PASSED AS PROPS TO THIS COMPONENT IS PASSED
//AS A TEMPLATE STRING TO THE WEATHER API, THEREFORE ON CLICK GIVES THE
//CORRESPONDING INFO OF COUNTRY INPUTTED IN SEARCH BAR

const CountriesName=({countriesname, search})=>{
    //sttates for weatherapi, for search query from input passed as props
    const [countryinfo, setCountryInfo] = useState(true);
    const [countryCity, setCountryCity] = useState('');
    const [weatherInfo, setWeatherInfo] = useState({})

    //handles what happens when button is clicked
    const handleClick =()=>{ 
        setCountryInfo(!countryinfo)
        setCountryCity(search.toLowerCase())
       // console.log(search)
        axios.get(`${OPENWEATHER_URL}${countryCity}&appid=${OPENWEATHER_APIKEY}`)
        .then(response => setWeatherInfo(response.data))
    }

    return(
            <>
                {
                    countriesname.map((countryname,i)=>
                        <div key={i}>
                            <p>{countryname.name.common} 
                                <button onClick={handleClick}>{countryinfo ? 'Show Country Details & City Forecast' : 'Hide' } Country's details</button>
                            </p>
                            {/*********this section handles display of certain info************************ */}
                            <p>
                                {
                                    countryinfo ? null : 
                                    <ul>
                                        Capital: {countryname.capital }
                                        <li>Officialy: {countryname.name.official}</li>
                                        <li>Country Status: {countryname.status }</li>
                                        <li>Independent: {countryname.independent }</li>
                                        <li>Capital: {countryname.capital }</li>
                                        <li>Region: {countryname.region }</li>
                                        <li>
                                        <img alt='countryimage' src={countryname.coatOfArms.png} style={{width:'30%',height:'30%'}}/>
                                        </li>
                                        <li>{weatherInfo ? weatherInfo.name :  null}</li>
                                        <li>Temperature: {weatherInfo.main ? weatherInfo.main.temp :  null} Celcius</li>
                                        <li>
                                            <img alt='weather-icon' 
                                                src={weatherInfo.weather ? weatherInfo.weather[0].icon : null}
                                                style={{width:'20%', height:'20%'}}
                                            />
                                        </li>
                                        <li>
                                            Wind: {weatherInfo.wind ? weatherInfo.wind.speed : null}m/s
                                        </li>
                                        
                                    </ul>
                                }
                            </p>
                        </div>
                    )
                }
               </>
        
    )
}

export default CountriesName;