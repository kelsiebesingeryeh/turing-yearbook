import { Component } from "react"

class Form extends Component() {
    constructor() {
        super()
        this.state = {
            name: '',
            img: ''
        }
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