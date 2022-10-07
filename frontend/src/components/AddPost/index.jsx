import React, { useRef, useState } from 'react';
import * as AtomsStyles from "../../utils/style/Atoms";

import { useDispatch, useSelector } from "react-redux";
import { addPost } from '../../features/posts.slice';

import { selectCache } from "../../utils/selectors"

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const AddPost = (props) => {
    const pseudo = props.pseudo;

    const formRef = useRef();
    const inputPost = useRef();
    const inputImage = useRef();
    const dispatch = useDispatch();

    const cache = useSelector(selectCache);

    const [show, setShow] = useState(false);
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const HandleSubmit = (e) => {
        e.preventDefault();       
        
        const formData = new FormData();
        formData.append('post', inputPost.current?.value);
        formData.append('image', inputImage.current?.files[0]);         
        
        // connection database
        const apiUrl = 'http://localhost:3000/api';
        
        const authAxios = axios.create({
            baseURL: apiUrl,
        })

        authAxios.defaults.headers.common['Authorization'] = `Bearer ${cache.token}`;

        authAxios.post(`/posts`, formData)
        .then((res) => {
            console.log(res.data.message);
            
            dispatch(addPost(res.data.post));
            
            formRef.current.reset();

            setShow(false);
        })
        .catch((error) => {
            console.log(error)
            return <span>Oupssss!! il y a un problème</span>
        })        
        
    }

    return (
        <>        
            <AtomsStyles.StyledLink href="#" className="fs-5" onClick={handleShow}>Quoi de neuf, {pseudo} ?</AtomsStyles.StyledLink>

            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={(e) => HandleSubmit(e)} ref={formRef}>
                    <AtomsStyles.ModalHeader closeButton>
                        <AtomsStyles.ModalTitle>Créer une publication</AtomsStyles.ModalTitle>
                    </AtomsStyles.ModalHeader>
                    <AtomsStyles.ModalBody>
                            <Form.Group className="mb-3" controlId="controlTextarea">
                                <Form.Control 
                                    as="textarea" 
                                    rows={5} 
                                    placeholder={`Quoi de neuf, ${pseudo} ?`} 
                                    ref={inputPost} 
                                    required 
                                />
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control 
                                    type="file" 
                                    ref={inputImage} 
                                />
                            </Form.Group>
                    </AtomsStyles.ModalBody>
                    <Modal.Footer className='justify-content-center'>
                        <AtomsStyles.DarkButton variant="secondary" type="submit" className="px-5 fs-4">
                            Publier
                        </AtomsStyles.DarkButton>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default AddPost;