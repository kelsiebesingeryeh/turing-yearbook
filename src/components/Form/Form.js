import React, { Component } from "react"

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      img: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitIdea = (event) => {
    event.preventDefault();

    const newStaff = {
      id: Date.now(),
      ...this.state,
    };

    this.props.addStaff(newStaff);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      name: '',
      img: '',
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Staff Name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Image"
          name="img"
          value={this.state.img}
          onChange={this.handleChange}
        />
        <button onClick={this.submitIdea}>SUBMIT</button>
      </form>
    );
  }
}

export default Form