import React from 'react'
import { withAuth0 } from '@auth0/auth0-react'
import { Form } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

class BookFormModal extends React.Component {
    handleSubmit = (e) => {
        
    }
    render() {
        return(
            <Modal show={this.props.showModal} onHide={this.props.hideModal}>
                <Modal.Header closeButton>
                <Modal.Title>Add a New Book!</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Enter Book Name" />
                                <br />
                                <Form.Control type="text" placeholder="Enter Description" />
                                <br />
                                <Button>Add Book</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.hideModal}>Close</Button>
                </Modal.Footer>
            </Modal>



        )
    }
}

export default withAuth0(BookFormModal);
