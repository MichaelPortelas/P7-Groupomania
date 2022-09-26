
import { HeaderContainer, Logo, NavContainer, LinkTitle, StyledIcon } from './styles'
import { StyledLink } from '../../utils/style/Atoms'
import RedLogo from '../../assets/icon-left-font.png'
import IconHome from '../../assets/home-icon.svg'
import IconLogout from '../../assets/logout-icon.svg'

function Header() {
    return (
        <HeaderContainer>
            <Logo src={RedLogo} />                
            <NavContainer>
                <StyledLink to="#">
                    <StyledIcon src={IconHome} />
                    <LinkTitle>Accueil</LinkTitle>
                </StyledLink>
        
                <StyledLink to="#">
                    <StyledIcon src={IconLogout} />
                    <LinkTitle>Déconnexion</LinkTitle>
                </StyledLink>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header