import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const HeaderContainer = styled.header `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${colors.tertary};
`

export const NavContainer = styled.nav `
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Logo = styled.img `
    left: 0%;
    right: 49.86%;
    top: 0%;
    bottom: 4.11%;
`

export const LinkTitle = styled.div `
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    padding-bottom: 4px;

    &:hover {
        border-bottom : 3px solid ${colors.primary}; 
    }
`
export const StyledIcon = styled.svg `
    height: 22px;
    width: 26px;
    scale: 2;
    padding-right: 8px;
` 