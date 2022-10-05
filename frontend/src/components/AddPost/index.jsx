import React, { useRef, useState } from 'react';
import { StyledLink } from '../../utils/style/Atoms'

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddPost = (props) => {
    const pseudo = props.pseudo;

    const formRef = useRef();
    const inputPost = useRef();
    const inputImage = useRef();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const HandleSubmit = (e) => {
        e.preventDefault();

        const data = {
            post: inputPost.current.value,
            image: inputImage.current.value,
        }

        // connection database
        console.log(data);
        setShow(false);
    }

    return (
        <>        
            <StyledLink href="#" className="fs-5" onClick={handleShow}>Quoi de neuf, {pseudo} ?</StyledLink>

            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={(e) => HandleSubmit(e)} ref={formRef}>
                    <Modal.Header closeButton>
                        <Modal.Title>Créer une publication</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <Form.Group className="mb-3" controlId="controlTextarea">
                                <Form.Control as="textarea" rows={5} placeholder={`Quoi de neuf, ${pseudo} ?`} ref={inputPost} required />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="file" ref={inputImage}/>
                            </Form.Group>

                            {/* <Button variant="primary" type="submit">
                                Submit
                            </Button> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" type="submit">
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>

    );
};

export default AddPost;