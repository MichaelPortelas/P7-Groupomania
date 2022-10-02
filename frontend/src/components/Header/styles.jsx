import styled from 'styled-components'
import colors from '../../utils/style/colors'

import Container from 'react-bootstrap/Container';

export const HeaderContainer = styled(Container) `
    border-bottom: 2px solid ${colors.tertary};
`

export const LinkTitle = styled.div `
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    text-align: center;
    
    &:hover {
        border-bottom : 3px solid ${colors.primary};
        color: ${colors.secondary};
        font-weight: 400;
        transition: .3s;
    }
`
export const StyledIcon = styled.svg `
    height: 22px;
    width: 26px;
    scale: 2;
    padding-right: 8px;
` 