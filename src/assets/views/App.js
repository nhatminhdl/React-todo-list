import logo from "./logo.svg";
import "./App.scss";
import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
// import MyComponent from './Example/MyComponent';
// import Form from './Example/Form';
// import ChildComponent from './Example/ChildComponent';
// import AddComponent from './Example/AddComponent';
import MyComponent from "./Example/MyComponent";
import ListToDo from "./Todos/ListToDo";
import { ToastContainer } from "react-toastify";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";

function App() {
  return (
    <BrowserRouter>
     

      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header> */}
         <Nav />
        <Routes>      
            <Route path="/" index element={<Home/>} />
            <Route path="/todo" element={<ListToDo/>} />
            <Route path="/about" element={<MyComponent/>} />
            <Route path="/listuser" element={<ListUser/>} />
            <Route path="/listuser/:id" element={<DetailUser/>} />
            
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
