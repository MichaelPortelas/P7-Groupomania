import axios from 'axios';
import React from 'react';

import { useDispatch, useSelector } from "react-redux"
import { selectCache } from "../../utils/selectors"

import { StyledLink } from '../../utils/style/Atoms'
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'

import Col from 'react-bootstrap/Col';
import { postLike } from '../../features/posts.slice';

const UserLike = (props) => {
    
    const likes = props.likes;
    const postUserId = props.postUserId;

    // on recupère le cache dans le state redux
    const cache = useSelector(selectCache);

    const dispatch = useDispatch();

    let liked = false;
    let disliked = false;
    let data = {};

    // on regarde si un cache existe
    if(cache){
        const userId = cache.userId;
        liked = true;

        // on regarde si l'user est le créateur du post (on ne peux pas liker sont propre post)
        if(postUserId === userId){
            liked = false
        }
        
        // on regarde si l'user à déjà liké le post
        if(props.usersLiked?.find((element) => element === cache.userId)){
            data = {
                like: 0,
            };
            // si l'user a déjà liké on active le dislike
            disliked = true;
        } else {
            data = {
                like: 1,
            };
        }
    }
    
    const HandleLike = (e) => {
        e.preventDefault();

        
        // connection database
        const authAxios = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
        })

        // on recupère le token dans le cache
        authAxios.defaults.headers.common['Authorization'] = `Bearer ${cache.token}`;

        authAxios.post("/posts/" + props.id + "/like/", data)
            .then((res) => {
                console.log(res.data.message)

                //payload[0]=postId - payload[1]=userId
                dispatch(postLike([props.id, props.userId]))
            })
            .catch((error) => {
                console.log(error)
                return <span>Oupssss!! il y a un problème</span>
            })
    }

    // on créé un mini composant pour le likeOrdislike.
    // si le dislike est activé l'user ne peux plus liker et peu dislike le post
    const LikeOrDislike = () => {
        return (
            <>
                {disliked?(
                    <><FaRegThumbsDown/> Je n'aime plus - {likes} Like(s)</>
                ):(
                    <><FaRegThumbsUp/> J'aime - {likes} Like(s)</>
                )}
            </>
        )
    }

    return (      
        <Col xs={12} lg={6} className='mb-2 mb-lg-0 d-flex justify-content-center align-items-center'>
            {/* si l'user a le droit de liker le post on renvois au composant likeOrDislike  */}
            {liked?(
                <StyledLink href="#" className='fs-4' onClick={ (e) => HandleLike(e) }><LikeOrDislike /></StyledLink>              
            ):(                   
                <div className='fs-4'><FaRegThumbsUp/> {likes} Like(s)</div>
            )}
            
        </Col>  
    );
};

export default UserLike;