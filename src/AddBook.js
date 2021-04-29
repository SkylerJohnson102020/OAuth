import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap'

class AddBook extends React.Component {
  
  render() {
    return (
      <Button onClick={this.props.displayModal}>Add Book</Button>
      )
    }
  
}

export default withAuth0(AddBook);