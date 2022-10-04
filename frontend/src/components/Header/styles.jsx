import styled from 'styled-components'
import colors from '../../utils/style/colors'

import Container from 'react-bootstrap/Container';

export const HeaderContainer = styled(Container) `
    border-bottom: 2px solid ${colors.tertary};
`

export const NavLink = styled.div `
    &:hover {
        border-bottom : 3px solid ${colors.primary};
        color: ${colors.secondary};
        font-weight: 400;
        transition: .3s;
    }
`
export const Logo = styled.img `
    width: 60%;
`