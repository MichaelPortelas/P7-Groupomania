import styled from 'styled-components'
import colors from '../../utils/style/colors'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export const ColPost = styled(Col) `
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ColPostPseudo = styled(Col) `
    color: ${colors.primary};
`

export const ColPostDate = styled(Col) `
    color: ${colors.secondary};
`

export const RowPostHeader = styled(Row) `
    background-color: ${colors.tertary};
`
export const RowPostMessage = styled(Row) `
    background-color: ${colors.secondary};
`
export const RowPostImage = styled(Row) `
    background-color: ${colors.secondary};
`
export const ButtonUpdate = styled(Button) `
    background-color: ${colors.tertary};
    border-radius: 20px;
    color: ${colors.secondary};
    text-shadow: 0px 4px 4px black;
`