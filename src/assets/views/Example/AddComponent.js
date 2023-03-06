import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class AddComponent extends Component {
  state = {
    title: "",
    salary: "",
   
  };
  handleChangeTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = () =>{
    if (!this.state.title || !this.state.salary) {
        alert ("Missing required params");
        return;
    }
    this.props.addNewJob({
        id: Math.floor(Math.random() *100 ) ,
        title: this.state.title,
        salary: this.state.salary
    });

    this.setState({
        title: ' ',
        salary: ' '
    })

    console.log(this.state.title, this.state.salary);
    }

  render() {
    return (
        <>
      <form>
        <label htmlFor="fname">Job's title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangeTitleJob(event)}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />

        <br />
        <br />
        <input
          type="button"
          value="Submit"
          onClick={() => this.handleSubmit()}
        />
      </form>
       
       </>
    );
  }
}

export default AddComponent;
