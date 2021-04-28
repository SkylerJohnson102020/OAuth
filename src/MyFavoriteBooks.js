import React from 'react';
import BestBooks from './BestBooks.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './MyFavoriteBooks.css';

class MyFavoriteBooks extends React.Component {
  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>       
        <BestBooks />
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
