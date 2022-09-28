
import { HeaderContainer, Logo, NavContainer, LinkTitle, StyledIcon } from './styles'
import { StyledLink } from '../../utils/style/Atoms'
import RedLogo from '../../assets/icon-left-font.png'
import { useDispatch, useSelector} from "react-redux";
import { setCache, deleteCache } from "../../features/users.slice";
import { useEffect } from "react";
import { selectCache } from '../../utils/selectors'
import { FaHome, FaSignOutAlt, FaSignInAlt } from "react-icons/fa"

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
        <HeaderContainer>
            <Logo src={RedLogo} />                
            <NavContainer>
                <StyledLink to="/">
                    <StyledIcon><FaHome/></StyledIcon>
                    <LinkTitle>Accueil</LinkTitle>
                </StyledLink>
                {cache ? (
                    <StyledLink to="#" onClick={() => handleLogout()}>
                        <StyledIcon><FaSignOutAlt/></StyledIcon>
                        <LinkTitle>Déconnexion</LinkTitle>
                    </StyledLink>
                ) : (
                    <StyledLink to="/login">
                        <StyledIcon><FaSignInAlt/></StyledIcon>
                        <LinkTitle>Connexion</LinkTitle>
                    </StyledLink>
                )}
                
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header