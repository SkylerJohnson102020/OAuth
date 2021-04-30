import React from 'react';
import BestBooks from './BestBooks.js'
import BookFormModal from './BookFormModal.js'
import AddBook from './AddBook.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './MyFavoriteBooks.css';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      displayModal: false
    }
  }

  handleClose = () => {
    this.setState({ displayModal: false });
  }

  showModal = () => {
    this.setState({ displayModal: true })
  }
      

  newName = (name) => {
    console.log(name);
    this.setState({ name: name })
}

  newDescription = (description) => {
    console.log(description);
    this.setState({ description: description })
}
  

  render() {
    return(
      <>
        <AddBook open={this.showModal} close={this.handleClose} />
      <Jumbotron>
        <BookFormModal show={this.state.displayModal} newName={this.newName} newDescription={this.newDescription} close={this.handleClose} />
        <h1>My Favorite Books</h1>       
        <BestBooks />
      </Jumbotron>
      </>
    )
  }
}

export default MyFavoriteBooks;
