import React, { Component } from 'react'
import Cohort from '../Cohort/Cohort'
import Form from '../Form/Form'
import people from '../../data/yearbook-data.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addStudent = (student) => {
    this.setState({
      students: [...this.state.students, student]
    })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Turing Yearbook</h1>
      </header>
      <h2 style={{color: 'blue'}}>Staff</h2>
        <Form addStudent={this.addStudent} />
        <Cohort cohorts={this.state} />
      </div>
    );
  }
}

export default App;
