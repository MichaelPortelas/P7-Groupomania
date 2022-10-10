import Moment from 'moment';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import { useSelector } from "react-redux"
import { selectCache } from "../../utils/selectors"

import { ColPostDate, ColPostPseudo, ColPost, RowPostHeader, RowPostMessage, RowPostImage } from './styles';


import DelPost from '../DelPost';
import UpdPost from '../UpdPost';
import UserLike from '../UserLike';

function Post(props) {
    const postUserId = props.userId;
    const cache = useSelector(selectCache);

    Moment.locale('fr');
    const formatDate = Moment(props.date).format('Do MMMM YYYY, HH:mm');

    // on regarde si l'user est admin ou créateur du post
    // si oui on lui donne les droits de moderation
    let moderate = false;    

    if(cache){
        const isAdmin = cache.admin;
        const userId = cache.userId;

        if(isAdmin || postUserId === userId){
            moderate = true;
        }
    }

    return (
        <Row className="mt-3 mb-4 justify-content-center">
            <ColPost xs={10} md={8} lg={6} className="border border-2 rounded-3 pb-2">
                
                {/* POST HEADER */}
                <RowPostHeader className="rounded-top py-2 justify-content-between">
                    <ColPostPseudo xs={12} lg={6} className="d-flex align-items-center fs-2 justify-content-center justify-content-lg-start">{props.pseudo}</ColPostPseudo>
                    <ColPostDate xs={12} lg={6} className="d-flex align-items-center fs-5 justify-content-center justify-content-lg-end">{formatDate}</ColPostDate>
                </RowPostHeader>
                
                {/* POST MESSAGE */}
                <RowPostMessage className="p-3 justify-content-center">
                    <Col className="py-1 bg-white border border-2 rounded-3">
                        <p>
                            {props.message}
                        </p>
                    </Col>
                </RowPostMessage>
                
                {/* POST IMAGE */}
                {props.imageUrl? (
                    <RowPostImage className="pb-3 border-bottom border-2">
                        <Col className="d-flex justify-content-center">
                            <Image rounded fluid src={props.imageUrl} alt="placeHolder text"/>
                        </Col>
                    </RowPostImage>
                ):(
                    <></>
                )}
                
                {/* POST FOOTER */}                
                <Row 
                    className=
                        {cache && moderate ?(
                            "mt-2 justify-content-between bg-white"
                        ):(
                            "mt-2 justify-content-center bg-white"  
                        )}
                >
                    <UserLike 
                        likes={props.likes} 
                        postUserId={props.userId}    
                    />
                    {moderate ? (
                        <Col xs={12} lg={6}>
                            <Row>
                                <UpdPost post={props} />
                                <DelPost id={props.id} />
                            </Row>
                        </Col>
                    ):(
                        <></>   
                    )}                
                </Row>
            </ColPost>
        </Row>
    )
}

export default Post