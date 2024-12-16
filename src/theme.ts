import {ThemeOptions} from "@mui/material";


export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#e4944d',
        },
        secondary: {
            main: '#393E46',
        },
        background: {
            default: '#222831',
            paper: '#393E46',
        },
    },
    typography: {
        fontFamily: 'Lato',
        h1: {
            fontFamily: 'Lato',
            fontWeight: 600,
        },
        h2: {
            fontWeight: 500,
        },
        button: {
            fontWeight: 500,
        },
    },
};