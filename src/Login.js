import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from 'react-bootstrap';
import { LogoutButton } from 'react-bootstrap';

// import { Auth0Provider } from '@auth0/auth0-react'

class Login extends React.Component {
  render() {
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
            <LoginButton variant="primary">Login</LoginButton>
            <LogoutButton variant="primary">Login</LogoutButton>
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
