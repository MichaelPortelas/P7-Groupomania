import styled from 'styled-components'
import colors from '../../utils/style/colors'

import Container from 'react-bootstrap/Container';

export const FooterContainer = styled(Container) `
    background-color: ${colors.tertary};
`

export const TitleCopyright = styled.div `
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 38px;
    text-align: center;
    align-items: center;
    color: ${colors.secondary};
`
export const StyledCopyrightLogo = styled.img `
    height: 2rem;
    width: 2rem;
    align-items: center;
    margin-left: 8px;
    margin-right: 8px;
    filter: invert(30%) sepia(82%) saturate(6360%) hue-rotate(8deg) brightness(105%) contrast(105%);
`