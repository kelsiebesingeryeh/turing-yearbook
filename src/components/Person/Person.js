import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div>
            <img src={props.people.photo} alt="headshot" />
            <p>{props.people.name}</p>
            <p>{props.people.quote}</p>
            <p>{props.people.superlative}</p>
        </div>
    )
}

export default Person;
