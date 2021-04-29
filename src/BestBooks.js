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
            description: '',
            status: ''
        }
    }
    
    componentDidMount = async (e) => {
        // e.preventDefault();
        const SERVER = 'http://localhost:3001';
        console.log('bookComponentDidMount');
        
        try {
            const books = await axios.get(`${SERVER}/books`);
            console.log("componentDidMount", books.data); 
            this.setState({ books: books.data.books })
        } catch(error){
            console.log(error);
        }
    }
    
    createNewBooks = async (e) => { 
        // e.preventDefault();
        const SERVER = 'http://localhost:3001';
        try {
            const generateBook = await axios.post(`${SERVER}/books`, {name: this.state.name, description: this.state.description, status: this.state.status });
            const newBooksArray = generateBook.data;
            this.setState({ generateBook: newBooksArray});    
        } catch(error){
            console.log(error);

        }
    }

    render() {
        console.log(this.state.books);
        return(
            this.state.books.length > 0 &&
            <Carousel>
                {this.state.books.map((book, index) =>
                <Carousel.Item key={index}>
                        <img src={"/ArnoldPlaceholder.jpeg"} alt="placeholder"/>
                     <Carousel.Caption>
                         <h3>{book.name}</h3>
                         <p>{book.description}</p>
                         <p>{book.status}</p>
                     </Carousel.Caption>
                 </Carousel.Item>
                 )}
             </Carousel>
        )
    }
}

export default withAuth0(BestBooks);
