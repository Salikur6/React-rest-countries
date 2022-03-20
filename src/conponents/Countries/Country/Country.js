import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    const {name, flag, region, population, area}=props.country
    return (
        <div className='country'>
        
            <h2>{name}</h2>
            <img width='50%' height='150px' src={flag} alt="" />
            <h4>Region: {region}</h4>
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;