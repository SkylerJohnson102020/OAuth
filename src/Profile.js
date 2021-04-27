import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Jumbotron } from 'react-bootstrap';

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    if (!user) {
        return <h1>Not Authorized</h1> 
    }
    return (
    <Jumbotron>
        <h3>Hello, {user.name}!</h3>
        <p>{user.email}</p>
        <img src={user.picture} alt="userphoto"></img>
    </Jumbotron>
    )
  }
}

export default withAuth0(Profile);