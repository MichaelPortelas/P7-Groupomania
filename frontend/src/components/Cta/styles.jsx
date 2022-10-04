import styled from 'styled-components'
import colors from '../../utils/style/colors'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const RowCta = styled(Row) `
    background-color: ${colors.secondary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
` 

export const ColCta = styled(Col) `
    background-color: ${colors.secondary};
`

export const ColCtaText = styled(Col) `
    background-color: ${colors.white};
`