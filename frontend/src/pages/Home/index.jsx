import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Post from "../../components/Post";
import Cta from '../../components/Cta';

function Home(){   

    return (
        <main className="mt-5">
            <Container fluid className="mt-5 pt-5">
                <Row className="justify-content-center mt-5">
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