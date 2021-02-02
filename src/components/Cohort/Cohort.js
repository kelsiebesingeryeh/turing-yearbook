import React from 'react'
import Person from '../Person/Person'
import './Cohort.css'

const Cohort = (props) => {
    const staffOnDisplay = props.cohorts.staff.map(people => {
        return <Person
        key={people.id}
        people={people}
        />
    })

    const studentsOnDisplay = props.cohorts.students.map(people => {
        return <Person
        key={people.id}
        people={people}
        />
    })

    return (
    <section className="cardContainer">
        {staffOnDisplay}
        {studentsOnDisplay}
    </section>
    )
} 

export default Cohort
