import React, { Component, memo } from "react";
import { Route } from "react-router";
import Color from "../HOC/Color";
import ListToDo from "../Todos/ListToDo";
import withRouter from "./withRouter";


export class Home extends Component {
  componentDidMount(){
    setTimeout(() => {
      // <Route path="/todo" element={<ListToDo/>} />
      console.log(1);
      
    }, 3000)
  }


  render() {
    console.log(this.props);
    return <div>Home</div>;
  }
}

export default Color(Home);
