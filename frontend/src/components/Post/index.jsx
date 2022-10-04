import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import { ColPostDate, ColPostPseudo, ButtonDelete, ButtonUpdate, ColPost, RowPostHeader, RowPostMessage, RowPostImage } from './styles';
import { StyledLink } from '../../utils/style/Atoms'
import { FaRegThumbsUp } from 'react-icons/fa'

function Post() {
    return (
        <ColPost xs={6} className="border border-2 rounded-3 pb-2">
            
            {/* POST HEADER */}
            <RowPostHeader className="rounded-top py-2 justify-content-between">
                <ColPostPseudo xs={6} className="d-flex align-items-center fs-2">Pseudo</ColPostPseudo>
                <ColPostDate xs={6} className="d-flex align-items-center fs-5 justify-content-end">9 septembre 2022, 00:59</ColPostDate>
            </RowPostHeader>
            
            {/* POST MESSAGE */}
            <RowPostMessage className="p-3 justify-content-center">
                <Col className="py-1 bg-white border border-2 rounded-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Odio porro, dolorem ipsam error sequi ab? Placeat 
                        repudiandae adipisci unde asperiores aut quisquam, 
                        minus cumque saepe itaque debitis, quo cupiditate ipsam iste pariatur non maiores inventore 
                        laborum sint ducimus distinctio accusantium nam? Magni quos sapiente ex cupiditate quod eius, 
                        repellendus est velit excepturi dolore mollitia vitae.
                    </p>
                </Col>
            </RowPostMessage>
            
            {/* POST IMAGE */}
            <RowPostImage className="pb-3 border-bottom border-2">
                <Col className="d-flex justify-content-center">
                    <Image rounded fluid src="https://picsum.photos/680/480?random=1" alt="placeHolder text"/>
                </Col>
            </RowPostImage>
            
            {/* POST FOOTER */}
            <Row className="mt-2 justify-content-between bg-white">
                <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                    <StyledLink href="#" className='fs-4'><FaRegThumbsUp/> J'aime - 0</StyledLink>
                </Col>
                <Col xs={12} lg={6}>
                    <Row>
                        <Col xs={12} sm={6} className="d-flex justify-content-center justify-content-sm-end"><ButtonUpdate variant="secondary">Modifier</ButtonUpdate></Col>
                        <Col xs={12} sm={6} className="d-flex justify-content-center justify-content-sm-start"><ButtonDelete variant="danger">Supprimer</ButtonDelete></Col>
                    </Row>
                </Col>
            </Row>   
            
        </ColPost>
    )
}

export default Post