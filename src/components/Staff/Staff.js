import React from 'react'
import Card from '../Card/Card'
import './Staff.css'

const Staff = ({ staff }) => {
    const staffOnDisplay = staff.map(human => {
        return <Card
        key={human.name}
        human={human}
        />
    })

    return (
    <section className="cardContainer">
        {staffOnDisplay}
    </section>
    )
} 

export default Staff
