import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setPostsData } from "../../features/posts.slice";
import { selectPosts } from "../../utils/selectors"
import { useEffect } from 'react';

import Container from 'react-bootstrap/Container';

import Post from "../../components/Post";
import Cta from '../../components/Cta';


function Home(){   
    
    const dispatch = useDispatch();
    const postsData = useSelector(selectPosts);

    // connection database
    const apiUrl = 'http://localhost:3000/api';
        
    const authAxios = axios.create({
        baseURL: apiUrl,
    })
    
    useEffect(() => {
        authAxios.get(`/posts`)
            .then((res) => {
                dispatch(setPostsData(res.data))
            })            
            .catch((error) => {
                console.log(error)
                return <span>Oupssss!! il y a un problème</span>
            })
    }, [dispatch, authAxios]);

    return (
        <main className='mt-3'>
            <Container fluid>                
                    <Cta />
                    {
                        postsData?.map((post) => 
                            <Post 
                                key={post._id}
                                id={post._id}
                                userId={post.userId}
                                pseudo={post.pseudo}
                                message={post.message}
                                imageUrl={post.imageUrl}
                                date={post.date}
                                likes={post.likes}
                                usersLiked={post.usersLiked} 
                            />
                        )
                    }                                   
            </Container>
        </main>
    )
}

export default Home