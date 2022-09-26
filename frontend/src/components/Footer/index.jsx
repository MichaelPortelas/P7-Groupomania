import { FooterContainer, TitleCopyright, StyledCopyrightLogo, LogoFooter } from './styles'
import CopyrightLogo from '../../assets/copyrightlogo.svg'
import FooterLogo from '../../assets/logofooter.png'

function Footer() {
    return (
        <FooterContainer>
            <TitleCopyright>
                Copyright  
                <StyledCopyrightLogo src={CopyrightLogo} />
                2022 
            </TitleCopyright>
            <LogoFooter src={FooterLogo} />
        </FooterContainer>
    )
}

export default Footer