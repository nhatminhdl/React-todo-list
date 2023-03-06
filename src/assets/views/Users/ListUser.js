import React, { Component } from "react";
import axios from "axios";
import "./ListUsers.scss";
import withRouter from "../Example/withRouter";
import { Navigate } from "react-router";

export class ListUser extends Component {
  state = {
    listUsers: [],
  };

  async componentDidMount() {
    // axios.get('https://reqres.in/api/users?page=2')
    // .then(res => {
    //     console.log(res.data);
    // })

    let res = await axios.get("https://reqres.in/api/users?page=2");

    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });

   
  }

  handleViewDetail = (user) => {
    let a = this.props
    a.navigate(`/listuser/${user.id}`)
    // console.log(a.navigate.name);
    // Navigate(`/listuser/${user.id}`)
  }
  render() {
   
    let { listUsers } = this.state;
   
    return (
      <div className="list-user-container">
        <div className="title"> Fetch all list users</div>
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((user, index) => {
              return (
              <div className="child-content" key={user.id}
                    onClick = {() => this.handleViewDetail(user)}
              >
                {index + 1} - {user.first_name} {user.last_name}

              </div>);
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
