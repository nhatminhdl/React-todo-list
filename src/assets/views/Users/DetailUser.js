import React, { Component } from "react";

import axios from "axios";
import withRouter from "../Example/withRouter";

export class DetailUser extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    let id = this.props;

    if (id.params) {
      let res = await axios.get(`https://reqres.in/api/users/${id.params.id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }

  render() {
    let { user } = this.state;
    console.log(this.props);

    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <div>
        {isEmptyObj === false && (
          <>
            <div>
              User's name:{user.first_name} - {user.last_name}
            </div>
            <div>User's email:{user.email} </div>
            <div>
              Image:
              <img src={user.avatar} />
            </div>
            <div>
              {/* <button onClick={() => handleBackButton}>Back</button> */}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(DetailUser);
