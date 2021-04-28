import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react'

class BestBooks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            name: ''
        }
    }

    componentDidMount = async (e) => {
        // e.preventDefault();
        const SERVER = 'localhost:27017';
        try {
            const books = await axios.get(`${SERVER}/books`, {params: { email: this.props.auth0.user.email }});
            console.log(books.data); 
            this.setState({ books: books.data })
        } catch(error){
            console.log(error);
        }
    }

    // updateName = (name) => this.setState({ name });

    render() {
        return(
            <Carousel>
                {/* {this.props.} */}

            </Carousel>
        )
    }
}

export default withAuth0(BestBooks);
