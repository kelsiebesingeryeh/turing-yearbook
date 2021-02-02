import React, { Component } from 'react'
import Cohort from '../Cohort/Cohort'
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

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Turing Yearbook</h1>
      </header>
      <h2 style={{color: 'blue'}}>Staff</h2>
        <Cohort cohorts={this.state} />
        {/* <Cohort students={this.state.students} /> */}
      </div>
    );
  }
}

export default App;
