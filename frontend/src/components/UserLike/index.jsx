import React from 'react';

import { useSelector } from "react-redux"
import { selectCache } from "../../utils/selectors"

import { StyledLink } from '../../utils/style/Atoms'
import { FaRegThumbsUp } from 'react-icons/fa'

import Col from 'react-bootstrap/Col';

const UserLike = (props) => {
    
    const likes = props.likes;
    const postUserId = props.postUserId;
    const cache = useSelector(selectCache);

    let liked = false;

    if(cache){
        const userId = cache.userId;
        liked = true;

        if(postUserId === userId){
            liked = false
        }
    }

    return (      
        <Col xs={12} lg={6} className='mb-2 mb-lg-0 d-flex justify-content-center align-items-center'>
            {liked?(
                <StyledLink href="#" className='fs-4'><FaRegThumbsUp/> J'aime - {likes}</StyledLink>                
            ):(                   
                <div className='fs-4'><FaRegThumbsUp/> {likes}</div>
            )}
        </Col>  
    );
};

export default UserLike;