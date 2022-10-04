import { FooterContainer, TitleCopyright, StyledCopyrightLogo} from './styles'
import { Logo } from '../../utils/style/Atoms'

import CopyrightLogo from '../../assets/copyrightlogo.svg'
import FooterLogo from '../../assets/logofooter.png'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer>
            <FooterContainer fluid>
                <Row className="justify-content-between align-items-center py-3">
                    <Col xs={12} md={5} className="d-flex justify-content-center">
                        <TitleCopyright> Copyright <StyledCopyrightLogo src={CopyrightLogo} /> 2022 </TitleCopyright>
                    </Col>
                    <Col xs={12} md={5} className="d-flex justify-content-center"><Logo src={FooterLogo} className="img-fluid py-3" alt="Groupomania"/></Col>
                </Row>
            </FooterContainer>            
        </footer>
    )
}

export default Footer