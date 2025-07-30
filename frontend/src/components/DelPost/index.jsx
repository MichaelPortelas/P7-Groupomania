import axios from 'axios';

import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { deletePost } from "../../features/posts.slice"
import { selectCache } from "../../utils/selectors"

import Col from 'react-bootstrap/Col';

import { ButtonDelete } from './styles';

const DelPost = ({ id }) => {
    const dispatch = useDispatch();

    // on recupère le cache dans le state redux
    const cache = useSelector(selectCache);

    const HandleDelete = (e) => {

        e.preventDefault();

        // connection database
        const authAxios = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
        })

        // on récupère le token dans le cache
        authAxios.defaults.headers.common['Authorization'] = `Bearer ${cache.token}`;

        authAxios.delete(`/posts/` + id)
            .then( () =>

                // on suprime le post du store redux
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