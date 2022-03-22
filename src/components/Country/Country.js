import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <div className='card'>
            <img src={ props.image} alt=""/>
            <h2><span>Name: </span><span className='CName'>{props.name}</span></h2>
            <h2><strong>Population: </strong><span className='CName'>{props.population}</span></h2>
            <h2><strong>Area: </strong><span className='CName'>{props.area}</span></h2>
            <h2><strong>Region: </strong><span className='CName'>{props.region}</span></h2>
            </div>
        </div>
    );
};

export default Country;