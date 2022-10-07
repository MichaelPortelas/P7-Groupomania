import axios from 'axios';

import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { deletePost } from "../../features/posts.slice"
import { selectCache } from "../../utils/selectors"

import Col from 'react-bootstrap/Col';

import { ButtonDelete } from './styles';

const DelPost = ({ id }) => {
    const dispatch = useDispatch();

    const cache = useSelector(selectCache);

    const HandleDelete = (e) => {

        e.preventDefault();

        // connection database
        const apiUrl = 'http://localhost:3000/api';
        
        const authAxios = axios.create({
            baseURL: apiUrl,
        })

        authAxios.defaults.headers.common['Authorization'] = `Bearer ${cache.token}`;

        authAxios.delete(`/posts/` + id)
            .then( () =>
                dispatch(deletePost(id))
                
            )
            .catch((error) => {
                console.log(error)
                return <span>Oupssss!! il y a un problème</span>
            });
        
        window.location.reload();
    }

    return (
        <>
            <Col xs={12} sm={6} className="d-flex justify-content-center justify-content-sm-start">
                <ButtonDelete variant="danger" onClick={(e) => HandleDelete(e)}>Supprimer</ButtonDelete>
            </Col>
        </>
    );
};

export default DelPost;