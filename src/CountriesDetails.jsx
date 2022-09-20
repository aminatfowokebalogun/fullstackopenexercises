import React from 'react';


const CountriesDetails =({countries})=>{
    
    return(
        <>
            {
                countries.map((country, i)=> 
                    <ul key={i}>
                        <li>Country: {country.name.common}</li>
                        <li>Officialy: {country.name.official}</li>
                        <li>Country Status: {country.status }</li>
                        <li>Independent: {country.independent }</li>
                        <li>Capital: {country.capital }</li>
                        <li>Region: {country.region }</li>
                        <li>
                            <img alt='countryimage' src={country.coatOfArms.png} style={{width:'30%',height:'30%'}}/>
                        </li>
                    </ul>                
                )
            }
        </>
    )
}

export default CountriesDetails;