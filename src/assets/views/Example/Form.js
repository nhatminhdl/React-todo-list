import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class Form extends Component {

state = {
    firstName: '',
    lastName: '',
    arrJobs: [
        {id: 'abcJob1', title: 'Developer', salary: '500$'},
        {id: 'abcJob2', title: 'Tester', salary: '400$'},
        {id: 'abcJob3', title: 'Project Manager', salary: '1000$'},
    ]
}

handleChangeFirstName = (event) => {
    this.setState({
        firstName: event.target.value,

    }) 
}

handleChangeLastName = (event) => {
    this.setState({
    
        lastName: event.target.value
    }) 
}

handleSubmit = () =>{
    console.log(this.state.firstName, this.state.lastName);
}
  render() {
    return (
      <>
        <form >
          <label htmlFor="fname">First name:</label>
          <br />
          <input 
          type="text"  
          value={this.state.firstName} 
          onChange= {(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input 
          type="text" 
          value={this.state.lastName}
          onChange= {(event) => this.handleChangeLastName(event)}
           />
          <br />
          <br />
          <input 
          type="button" 
          value="Submit" 
          onClick={() => this.handleSubmit()}
          />
        </form>
        <ChildComponent 
        name ={this.state.firstName}
        age ={'20'}
        address ={'Đà Lạt'}
        arrJobs = {this.state.arrJobs}
        />
      </>
      //   <div>Form</div>
    );
  }
}

export default Form;
