import { createGlobalStyle }  from 'styled-components'

export const StyledGlobalStyle = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

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