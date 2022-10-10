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
    const cache = useSelector(selectCache);
    const dispatch = useDispatch();

    let liked = false;
    let disliked = false;
    let data = {};

    if(cache){
        const userId = cache.userId;
        liked = true;

        if(postUserId === userId){
            liked = false
        }
    
        if(props.usersLiked?.find((element) => element === cache.userId)){
            data = {
                like: 0,
            };
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
        const apiUrl = 'http://localhost:3000/api';
        
        const authAxios = axios.create({
            baseURL: apiUrl,
        })

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
            {liked?(
                <StyledLink href="#" className='fs-4' onClick={ (e) => HandleLike(e) }><LikeOrDislike /></StyledLink>              
            ):(                   
                <div className='fs-4'><FaRegThumbsUp/> {likes} Like(s)</div>
            )}
            
        </Col>  
    );
};

export default UserLike;