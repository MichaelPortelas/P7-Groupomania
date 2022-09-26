import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const FooterContainer = styled.footer `
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${colors.tertary};
    width: 100%;
    height: 177%;
`

export const TitleCopyright = styled.div `
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    align-items: center;
    color: ${colors.secondary};
`
export const StyledCopyrightLogo = styled.img `
    height: 32px;
    width: 32px;
    align-items: center;
    margin-left: 8px;
    margin-right: 8px;
    filter: invert(30%) sepia(82%) saturate(6360%) hue-rotate(8deg) brightness(105%) contrast(105%);
`
export const LogoFooter = styled.img `
    margin: 55px;
    height: 68px;
`