import { useSelector } from "react-redux"
import { selectCache } from "../../utils/selectors"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home(){
    const cache = useSelector(selectCache)

    return (
        
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={6}>
                    {cache ? (
                        <h1>Bienvenue {cache.pseudo}</h1>
                    ) : (
                        <div>Hello world</div>
                    )}
                </Col>
            </Row>
        </Container>
        
    )
}

export default Home