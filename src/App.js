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
              <Route exact path="/">
                {this.props.auth0.isAuthenticated && <MyFavoriteBooks />}
              </Route>
              <Route exact path="/profile" 
              component={Profile}>
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
    );
  }
}

export default withAuth0(App);
