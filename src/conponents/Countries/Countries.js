import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, getCountries] = useState([]);


    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(response=>response.json())
        .then(data=>getCountries(data))
    },[])
    return (
        <div>
            <h2>All Countries in the world!!!</h2>
            <h3>Total {countries.length} Countries </h3>

            <div className='countries-container'>
            {
                countries.map(country => <Country 
                country={country}
                
                // name={country.name} 
                // population={country.population} 
                // area={country.area}
                // flag={country.flags.png}
                // region={country.region}
                ></Country>)    
            }
            </div>
            
        </div>
    );
};

export default Countries;