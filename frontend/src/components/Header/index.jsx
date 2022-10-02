
import { HeaderContainer, LinkTitle, StyledIcon } from './styles'
import { StyledLink } from '../../utils/style/Atoms'
import RedLogo from '../../assets/icon-left-font.png'
import { useDispatch, useSelector} from "react-redux";
import { setCache, deleteCache } from "../../features/users.slice";
import { useEffect } from "react";
import { selectCache } from '../../utils/selectors'
import { FaHome, FaSignOutAlt, FaSignInAlt } from "react-icons/fa"

import Nav from 'react-bootstrap/Nav';
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
        <header>
            <Navbar collapseOnSelect expand="lg">
                <HeaderContainer fluid>
                    <Navbar.Brand href="/"><img src={RedLogo} className="img-fluid py-3" alt="Groupomania"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <StyledLink href="/">
                                <StyledIcon><FaHome/></StyledIcon>
                                <LinkTitle>Accueil</LinkTitle>
                            </StyledLink>
                            {cache ? (
                                <StyledLink href="#" onClick={() => handleLogout()} className="">
                                    <StyledIcon><FaSignOutAlt/></StyledIcon>
                                    <LinkTitle>Déconnexion</LinkTitle>
                                </StyledLink>
                            ):(
                                <StyledLink href="/login">
                                    <StyledIcon><FaSignInAlt/></StyledIcon>
                                    <LinkTitle>Connexion</LinkTitle>
                                </StyledLink>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </HeaderContainer>
            </Navbar>
        </header>
    )
}

export default Header