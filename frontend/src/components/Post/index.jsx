import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

import { FaRegThumbsUp } from 'react-icons/fa'

function Post() {
    return (
        <Col xs={6} className="border border-2 rounded-3 pb-2">
            
            {/* POST HEADER */}
            <Row className="pt-2 justify-content-between">
                <Col xs={6}>PSEUDO</Col>
                <Col xs={6} className="text-end">9 septembre 2022, 00:59</Col>
            </Row>
            
            {/* POST MESSAGE */}
            <Row className="p-3 justify-content-center">
                <Col className="border border-2 rounded-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Odio porro, dolorem ipsam error sequi ab? Placeat 
                        repudiandae adipisci unde asperiores aut quisquam, 
                        minus cumque saepe itaque debitis, quo cupiditate ipsam iste pariatur non maiores inventore 
                        laborum sint ducimus distinctio accusantium nam? Magni quos sapiente ex cupiditate quod eius, 
                        repellendus est velit excepturi dolore mollitia vitae.
                    </p>
                </Col>
            </Row>
            
            {/* POST IMAGE */}
            <Row>
                <Col className="d-flex justify-content-center">
                    <Image rounded fluid src="https://picsum.photos/680/480?random=1" alt="placeHolder text"/>
                </Col>
            </Row>
            
            {/* POST FOOTER */}
            <Row className="mt-2 justify-content-between">
                <Col className='d-flex align-items-center'>
                    <div className='fs-4'><FaRegThumbsUp/> J'aime - 0</div>
                </Col>
                <Col>
                    <Row className='bg-white'>
                        <Col className="d-flex justify-content-center"><Button variant="secondary">Modifier</Button></Col>
                        <Col className="d-flex justify-content-center"><Button variant="danger">Supprimer</Button></Col>
                    </Row>
                </Col>
            </Row>   
            
        </Col>
    )
}

export default Post