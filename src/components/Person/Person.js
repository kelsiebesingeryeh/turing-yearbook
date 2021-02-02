import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="staffCards">
            <img className='birdImage' src={props.people.photo} alt="headshot" />
            <p style={{color: 'red', fontWeight: 'bold'}}>{props.people.name}</p>
            <p style={{fontStyle: 'italic'}}>{props.people.quote}</p>
            <p style={{color: 'blue', fontWeight: 'bold'}}>{props.people.superlative}</p>
        </div>
        
    )
}

export default Person;
