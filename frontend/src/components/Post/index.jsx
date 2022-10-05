import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import { useSelector } from "react-redux"
import { selectCache } from "../../utils/selectors"

import { ColPostDate, ColPostPseudo, ButtonDelete, ButtonUpdate, ColPost, RowPostHeader, RowPostMessage, RowPostImage } from './styles';
import { StyledLink } from '../../utils/style/Atoms'
import { FaRegThumbsUp } from 'react-icons/fa'

function Post(props) {
    const id = props.id;
    
    const cache = useSelector(selectCache)
    let admin = false;

    if(cache){
        admin = cache.admin;
    }

    return (
        <Row className="mt-3 mb-4 justify-content-center">
            <ColPost xs={10} md={8} lg={6} className="border border-2 rounded-3 pb-2">
                
                {/* POST HEADER */}
                <RowPostHeader className="rounded-top py-2 justify-content-between">
                    <ColPostPseudo xs={12} lg={6} className="d-flex align-items-center fs-2 justify-content-center justify-content-lg-start">Pseudo</ColPostPseudo>
                    <ColPostDate xs={12} lg={6} className="d-flex align-items-center fs-5 justify-content-center justify-content-lg-end">9 septembre 2022, 00:59</ColPostDate>
                </RowPostHeader>
                
                {/* POST MESSAGE */}
                <RowPostMessage className="p-3 justify-content-center">
                    <Col className="py-1 bg-white border border-2 rounded-3">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aliquam ornare, erat vel aliquet tincidunt, nisl enim gravida lorem, 
                            consequat vulputate justo metus et odio. Nulla placerat, 
                            lorem nec convallis dapibus, tellus nunc vehicula augue, at malesuada sem
                        </p>
                    </Col>
                </RowPostMessage>
                
                {/* POST IMAGE */}
                <RowPostImage className="pb-3 border-bottom border-2">
                    <Col className="d-flex justify-content-center">
                        <Image rounded fluid src={`https://picsum.photos/680/480?random=${id}`} alt="placeHolder text"/>
                    </Col>
                </RowPostImage>
                
                {/* POST FOOTER */}                
                    {admin ? (
                        <Row className="mt-2 justify-content-between bg-white">
                            <Col xs={12} lg={6} className='mb-2 mb-lg-0 d-flex justify-content-center align-items-center'>
                                <StyledLink href="#" className='fs-4'><FaRegThumbsUp/> J'aime - 0</StyledLink>
                            </Col>
                            <Col xs={12} lg={6}>
                                <Row>
                                    <Col xs={12} sm={6} className="mb-2 mb-sm-0 d-flex justify-content-center justify-content-sm-end">
                                        <ButtonUpdate variant="secondary">Modifier</ButtonUpdate>
                                    </Col>
                                    <Col xs={12} sm={6} className="d-flex justify-content-center justify-content-sm-start">
                                        <ButtonDelete variant="danger">Supprimer</ButtonDelete>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    ):(
                        <Row className="mt-2 justify-content-center bg-white">
                            <Col xs={12} lg={6} className='mb-2 mb-lg-0 d-flex justify-content-center align-items-center'>
                                <StyledLink href="#" className='fs-4'><FaRegThumbsUp/> J'aime - 0</StyledLink>
                            </Col>
                        </Row>   
                    )}                
            </ColPost>
        </Row>
    )
}

export default Post