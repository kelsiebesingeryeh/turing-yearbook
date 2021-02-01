import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div>
            <img src={props.photo} alt="headshot" />
        </div>
    )
}

export default Person;
