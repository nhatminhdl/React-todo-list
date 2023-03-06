import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import "./Nav.scss";

export class Nav extends Component {
  render() {
    return (
        <div className="topnav">

        <NavLink to={"/"} >Home</NavLink>
        <NavLink to={"/todo" } >Todos</NavLink>
        <NavLink to={"/about"} >About</NavLink>
        <NavLink to={"/listuser"} >User</NavLink>
        
        {/* <Link activeClassName ="active" to={"/"}>Home</Link>
        <Link activeClassName ="active" to={"/todo"}>Todos</Link>
        <Link activeClassName ="active" to={"/about"}>About</Link> */}
        {/* <a className="active" href="/">Home</a>
        <a href="/todo">Todos</a>
        <a href="/about">About</a> */}
      </div>
    )
  }
}

export default Nav