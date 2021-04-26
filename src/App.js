import React from 'react';
import Header from './Header';
import LoginButton from './LoginButton.js'
import LogoutButton from './LogoutButton.js'
import Profile from './Profile.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFavoriteBooks from './MyFavoriteBooks.js'
import { withAuth0 } from '@auth0/auth0-react';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
        <Router>
          <IsLoadingAndError>
            <Header />
            {!this.props.auth0.isAuthenticated && <LoginButton />}
            <LogoutButton />
            <Switch>
              <Route exact path="/" />

                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                {this.props.auth0.isAuthenticated ? <MyFavoriteBooks /> : <LoginButton />}
              <Route exact path="/profile" />
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Profile />
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
    );
  }
}

export default withAuth0(App);
