import React, { Component } from 'react'
import Form from '../Form/Form'
import Staff from '../Staff/Staff'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      staff: [],
      // students: []
    }
  }

  componentDidMount() {
    
    Promise.all([fetch('http://hp-api.herokuapp.com/api/characters/staff'), fetch('http://hp-api.herokuapp.com/api/characters/students')])
     .then(response => {
      // response.map(res => {
      //   console.log(res)
      //   res.then(data => {
      //     console.log(data)
      //   })
      // }) 
      //  response = response[0].json()
      //  response = response[1].json()
       console.log(response)
       return response[0].json()
     })
     .then((data) => {
       this.setState({
         staff: data,
        //  students: data[1].json()
       })
     })
     .catch(error => console.log(error))
  //   fetch("http://hp-api.herokuapp.com/api/characters/staff")
  //   .then((response) => {
  //     console.log(response)
  //     return response.json()
  //   })
  //   .then((data) => {
  //     this.setState({
  //       staff: data
  //     })
  //   })
  //   .catch(error => console.log(error))
  }

  addStaff = (newStaff) => {
    this.setState({
      staff: [...this.state.staff, newStaff]
    })
  }
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Turing Yearbook</h1>
      </header>
      <h2 style={{color: 'blue'}}>Staff</h2>
        <Form 
        addStaff={this.addStaff} 
        />
        <Staff 
        staff={this.state.staff} 
        />
      </div>
    )
  }
}

export default App;

// students: []
