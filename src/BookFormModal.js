import React from 'react'
import { withAuth0 } from '@auth0/auth0-react'
import { Form } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

class BookFormModal extends React.Component {
    
    render() {
        return(
            <Modal show={this.props.show} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Book!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter Book Name" onChange={(e) => this.props.name(e.target.value)} />
                            <br />
                            <Form.Control type="text" placeholder="Enter Description" onChange={(e) => this.props.description(e.target.value)} />
                            <br />
                            <Button variant="success" onClick={this.props.createNewBooks}>Add Book</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>Close</Button>
                    </Modal.Footer>
            </Modal>


        )
    }
}

export default withAuth0(BookFormModal);
