import styled from 'styled-components'
import colors from '../../utils/style/colors'

import Button from 'react-bootstrap/Button';

export const ButtonDelete = styled(Button) `
    background-color: ${colors.primary};
    border-radius: 20px;
    color: ${colors.secondary};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`