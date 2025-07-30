import { createGlobalStyle }  from 'styled-components'

export const StyledGlobalStyle = createGlobalStyle `
    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    * {
        font-family: 'Lato', sans-serif ;
    }

    body {
        box-sizing: border-box;
    }
`