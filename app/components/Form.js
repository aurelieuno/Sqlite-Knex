import React from "react";
import axios from "axios";

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  age:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit(event) {
       event.preventDefault();
       axios.post("/api/data", this.state)
      .then (res => console.log(res))
      .catch(error => console.log(error))
    }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

module.exports=  Form2;