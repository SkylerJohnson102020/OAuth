import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react'

class BestBooks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            name: '',
            newBook: []
        }
    }

    componentDidMount = async (e) => {
        // e.preventDefault();
        console.log('bookComponentDidMount');
        const SERVER = 'http://localhost:3001';
        try {
            const books = await axios.get(`${SERVER}/books`);
            console.log(books.data); 
            this.setState({ books: books.data })
        } catch(error){
            console.log(error);
        }
    }
    
    getNewBooks = async (e) => {
        
    }
    
    render() {
        console.log(this.state);
        return(
            this.state.books.length > 0 ? 
            <Carousel>    
                {this.state.books.map((book, index) =>
                <Carousel.Item key={index}>
                    <Carousel.Caption>
                        <h3>{book.name}</h3>
                        <p>{book.description}</p>
                        <p>{book.status}</p>
                    </Carousel.Caption>
                </Carousel.Item> 
            )}   
            </Carousel>
            : ''
        )
    }
}

export default withAuth0(BestBooks);
