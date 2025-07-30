import axios from 'axios';
import React, { useRef, useState } from 'react';

import * as AtomsStyles from "../../utils/style/Atoms";
import { ButtonUpdate } from './styles';

import { useDispatch, useSelector } from "react-redux";
import { editPost } from '../../features/posts.slice';

import { selectCache } from "../../utils/selectors";

import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'


const UpdPost = ({ post }) => {

    const formRef = useRef();
    const inputPost = useRef();
    const inputImage = useRef();
    const dispatch = useDispatch();

    // on recupère le cache dans le state redux
    const cache = useSelector(selectCache);

    const [show, setShow] = useState(false);    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const HandleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('message', inputPost.current?.value);        
        
        // si l'user envoie un fichier on créé le data image 
        if(inputImage.current?.files[0]) {
            formData.append('image', inputImage.current?.files[0]);
        }

        // connection database
        const authAxios = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
        })

        // on recupère le token dans le cache
        authAxios.defaults.headers.common['Authorization'] = `Bearer ${cache.token}`;

        authAxios.put("/posts/" + post.id, formData)
        .then((res) => {
            console.log(res.data.message);
            
            // on mets a jours le post dans le state redux
            dispatch(editPost([res.data.post, post.id]));
            
            formRef.current.reset();

            setShow(false);

            window.location.reload();
        })
        .catch((error) => {
            console.log(error)
            return <span>Oupssss!! il y a un problème</span>
        })
        
        
    }

    return (
        <>
            <Col xs={12} sm={6} className="mb-2 mb-sm-0 d-flex justify-content-center justify-content-sm-end">
                <ButtonUpdate variant="secondary" onClick={handleShow}>Modifier</ButtonUpdate>
            </Col>

            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={(e) => HandleSubmit(e)} ref={formRef}>
                    <AtomsStyles.ModalHeader closeButton>
                        <AtomsStyles.ModalTitle>Modifier la publication</AtomsStyles.ModalTitle>
                    </AtomsStyles.ModalHeader>
                    <AtomsStyles.ModalBody>
                            <Form.Group className="mb-3" controlId="controlTextarea">
                                <Form.Control 
                                    as="textarea"
                                    defaultValue={post.message}
                                    rows={5} 
                                    ref={inputPost} 
                                    required 
                                />
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label><Image src={post.imageUrl} thumbnail /></Form.Label>
                                <Form.Control 
                                    type="file" 
                                    ref={inputImage} 
                                />
                            </Form.Group>
                    </AtomsStyles.ModalBody>
                    <Modal.Footer className='justify-content-center'>
                        <AtomsStyles.DarkButton variant="secondary" type="submit" className="px-5 fs-4">
                            Modifier
                        </AtomsStyles.DarkButton>
                    </Modal.Footer>
                </Form>
            </Modal> 
        </>
    );
};

export default UpdPost;