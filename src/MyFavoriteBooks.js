import React from 'react';
import BestBooks from './BestBooks.js'
import AddBook from './AddBook.js'
import BookFormModal from './BookFormModal.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './MyFavoriteBooks.css';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false
    }
  }

  handleClose = () => {
    this.setState({ displayModal: false});
  }

  showModal = () => {
    if (this.state.displayModal === true) {
      this.setState({ displayModal: false })
    } else if (this.state.displayModal === false) {
      this.setState({ displayModal: true })
    }
    console.log(this.state)
      
  }
  

  render() {
    return(
      <Jumbotron>
        <AddBook displayModal={this.showModal}/>
        <BookFormModal showModal={this.state.displayModal} hideModal={this.handleClose}/>
        <h1>My Favorite Books</h1>       
        <BestBooks />
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
