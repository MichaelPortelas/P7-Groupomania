import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Post from "../../components/Post";
import Cta from '../../components/Cta';

function Home(){   

    return (
        <main className='mt-3'>
            <Container fluid>
                <Row className="justify-content-center">
                    <Cta />
                </Row>
                <Row className="mt-3 mb-4 justify-content-center">
                    <Post />
                </Row>                
            </Container>
        </main>
    )
}

export default Home