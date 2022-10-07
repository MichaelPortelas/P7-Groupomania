import styled from 'styled-components'
import colors from '../../utils/style/colors'

import Button from 'react-bootstrap/Button';

export const ButtonUpdate = styled(Button) `
    background-color: ${colors.tertary};
    border-radius: 20px;
    color: ${colors.secondary};
    text-shadow: 0px 4px 4px black;
`