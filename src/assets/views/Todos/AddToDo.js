import React, { Component } from "react";
import {toast } from 'react-toastify';

export class AddToDo extends Component {

    state = {
        title: "",
    }
    
    handleOnChangeTitle =(event) => {
      this.setState({
        title: event.target.value
      })
    }


    handleAddToDo = () => {
      if(!this.state.title){
          toast.error('Missing title',{autoClose: 3000,});
          return;
      }
      let todo ={
        id: Math.floor(Math.random() * 1000),
        title: this.state.title
      }

      this.props.handleAddNewToDo(todo);
      this.setState({
        title: ""
      })
    }
  render() {
    let title = this.state.title;
    
    return (
      <div className="add-todo">
        <input 
        type={"text"} 
        value={title} 
        onChange={(event) => this.handleOnChangeTitle(event)}/>
        
        <button
        onClick={() => {this.handleAddToDo()}}
        className="btn-add" 
        type="button"
        
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddToDo;
