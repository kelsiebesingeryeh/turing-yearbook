import { Component } from "react"

class Form extends Component() {
    constructor() {
        super()
        this.state = {
            name: '',
            img: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const newStudent = {
            id: Date.now(),
            name: this.state.name,
            img: this.state.img
        }

        this.props.addStudent(newStudent)
    }

    render() {
        return (
            <form>
                <input 
                type="text"
                name="name"
                placeholder="Student Name"
                value={this.state.name}
                onChange={(event) => this.handleChange(event)}
                />
                <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
            </form>
        )
    }
}



export default Form

//pseudocode
// create form class
// add a setstate to the app 