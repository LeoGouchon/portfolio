import {alpha, getContrastRatio, PaletteOptions, ThemeOptions} from "@mui/material";

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#e4944d',
        },
        secondary: {
            main: '#ffffff',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        programming: {
            main: alpha("#EB9C83", 0.7),
            light: alpha("#EB9C83", 0.5),
            dark: alpha("#EB9C83", 0.9),
            contrastText: getContrastRatio("#EB9C83", '#fff') > 4.5 ? '#fff' : '#111',
        },
        photography: {
            main: alpha("#B4EB83", 0.7),
            light: alpha("#B4EB83", 0.5),
            dark: alpha("#B4EB83", 0.9),
            contrastText: getContrastRatio("#B4EB83", '#fff') > 4.5 ? '#fff' : '#111',
        },
        design: {
            main: alpha("#8396EB", 0.7),
            light: alpha("#8396EB", 0.5),
            dark: alpha("#8396EB", 0.9),
            contrastText: getContrastRatio("#8396EB", '#fff') > 4.5 ? '#fff' : '#111',
        },
        event: {
            main: alpha("#747B96", 0.7),
            light: alpha("#747B96", 0.5),
            dark: alpha("#747B96", 0.9),
            contrastText: getContrastRatio("#747B96", '#fff') > 4.5 ? '#fff' : '#111',
        }
    } as PaletteOptions,
    typography: {
        fontFamily: 'roboto',
        htmlFontSize: 10,
        fontSize: 16,
        h1: {
            fontFamily: 'Big Shoulders Display',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1,
        },
        h2: {
            fontWeight: 800,
            fontFamily: 'Big Shoulders Display',
            textTransform: 'uppercase',
            lineHeight: 1,
        },
        button: {
            fontWeight: 500,
            fontFamily: 'roboto',
        },
        h3: {
            fontFamily: 'Big Shoulders Display',
            textTransform: 'uppercase',
            lineHeight: 1,
            fontWeight: 800,
        },
        h4: {
            fontFamily: 'Big Shoulders Display',
            textTransform: 'uppercase',
            lineHeight: 1.2,
            fontWeight: 800,
        },
        h5: {
            fontFamily: 'Big Shoulders Display',
            textTransform: 'uppercase',
            lineHeight: 1.2,
            fontWeight: 800,
        },
        h6: {
            fontFamily: 'Big Shoulders Display',
            textTransform: 'uppercase',
            lineHeight: 1.2,
            fontWeight: 800,

        },
        subtitle1: {
            fontFamily: 'roboto',
            textTransform: 'uppercase',
            lineHeight: 1.2,
        },
        subtitle2: {
            fontFamily: 'roboto',
            textTransform: 'uppercase',
            lineHeight: 1.2,
        },
        body1: {
            fontFamily: 'roboto',
            textTransform: 'uppercase',
        },
        body2: {
            fontFamily: 'roboto',
            textTransform: 'uppercase',
        },
        caption: {
            fontFamily: 'roboto',
            textTransform: 'uppercase',
        },
        overline: {
            fontFamily: 'roboto',
            textTransform: 'uppercase',
        },
    },
    components: {
        MuiSwitch: {
            styleOverrides: {
                root: {
                    width: 46,
                    height: 26,
                    padding: 0,
                    margin: 8,
                },
                switchBase: {
                    padding: 1,
                    '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
                        transform: 'translateX(16px)',
                        color: '#fff',
                        '& + $track': {
                            opacity: 1,
                            border: 'none',
                        },
                    },
                },
                thumb: {
                    width: 24,
                    height: 24,
                },
                track: {
                    borderRadius: 13,
                    border: '1px solid #bdbdbd',
                    backgroundColor: '#fafafa',
                    opacity: 1,
                    transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                },
            }
        },
    }
};

