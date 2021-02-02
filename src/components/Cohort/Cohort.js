import React from 'react'
import Person from '../Person/Person'
import './Cohort.css'

const Cohort = (props) => {
    const staffOnDisplay = props.staff.map(people => {
        return <Person
        key={people.id}
        people={people}
        />
    })
    return (
    <section>
        <h2>Staff</h2>
        {staffOnDisplay}
    </section>
    )
} 

export default Cohort
