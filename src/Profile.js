import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
      console.log("bump");
    const { user } = this.props.auth0;
    return (
    <>
        <h3>Hello, {user.name}!</h3>
        <p>{user.email}</p>
        <img src={user.picture} alt="userphoto"></img>
    </>
    )
  }
}

export default withAuth0(Profile);