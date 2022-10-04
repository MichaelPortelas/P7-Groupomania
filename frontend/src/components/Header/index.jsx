
import { NavLink, HeaderContainer} from './styles'
import { StyledLink, Logo } from '../../utils/style/Atoms'
import RedLogo from '../../assets/icon-left-font.png'
import { useDispatch, useSelector} from "react-redux";
import { setCache, deleteCache } from "../../features/users.slice";
import { useEffect } from "react";
import { selectCache } from '../../utils/selectors'
import { FaHome, FaSignOutAlt, FaSignInAlt } from "react-icons/fa"

import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

    const dispatch = useDispatch();
    const cache = useSelector(selectCache);

    const handleLogout = () => {
        localStorage.clear();
        dispatch(deleteCache());

        
    };

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          dispatch(setCache(foundUser))
        }
    }, [dispatch]);

    

    return (
        <header className='mb-5'>
            <Navbar collapseOnSelect expand="lg" fixed="top" className='bg-white navbar-light'>
                <HeaderContainer fluid>
                    <Navbar.Brand href="/"><Logo src={RedLogo} className="py-3" alt="Groupomania"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='w-100 justify-content-evenly'>
                            <Row>
                                <Col xs={6} className="d-flex align-items-center">
                                    <StyledLink href="/">
                                        <NavLink className='d-flex fs-3 align-items-center' ><FaHome/>&nbsp;Accueil</NavLink>
                                    </StyledLink>
                                </Col>
                                <Col xs={6}  className="d-flex align-items-center">
                                    {cache ? (
                                        <StyledLink href="#" onClick={() => handleLogout()}>
                                            <NavLink className='d-flex fs-3 align-items-center'><FaSignOutAlt/>&nbsp;Déconnexion</NavLink>
                                        </StyledLink>
                                    ):(
                                        <StyledLink href="/login" className="d-flex align-items-baseline">
                                            <NavLink className=' d-flex fs-3 align-items-center'><FaSignInAlt/>&nbsp;Connexion</NavLink>
                                        </StyledLink>
                                    )}
                                </Col>
                            </Row>
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </HeaderContainer>
            </Navbar>
        </header>
    )
}

export default Header