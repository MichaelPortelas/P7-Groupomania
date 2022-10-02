import { FooterContainer, TitleCopyright, StyledCopyrightLogo} from './styles'
import CopyrightLogo from '../../assets/copyrightlogo.svg'
import FooterLogo from '../../assets/logofooter.png'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer>
            <FooterContainer fluid>
                <Row className="justify-content-between align-items-center py-3">
                    <Col xs={12} md={5}>
                        <TitleCopyright> Copyright <StyledCopyrightLogo src={CopyrightLogo} /> 2022 </TitleCopyright>
                    </Col>
                    <Col xs={12} md={5}><img src={FooterLogo} className="img-fluid py-3" alt="Groupomania"/></Col>
                </Row>
            </FooterContainer>            
        </footer>
    )
}

export default Footer