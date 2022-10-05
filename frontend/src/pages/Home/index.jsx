import Container from 'react-bootstrap/Container';

import Post from "../../components/Post";
import Cta from '../../components/Cta';

function Home(){   
    const id = [];
    
    for(let i = 0; i < 4; i++){
        id.push(i);
    }

    console.log(id);

    return (
        <main className='mt-3'>
            <Container fluid>                
                    <Cta />
                    {id.map((id) => (
                        <Post key={id} id={id} />
                    ))}                
            </Container>
        </main>
    )
}

export default Home