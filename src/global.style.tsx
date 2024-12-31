import styled from "@emotion/styled";
import {Box} from "@mui/material";
import {breakpoints} from "./providers/ScreenSizeProvider.tsx"

export const GlobalWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    margin: 0;
    
    background-color: ${({theme}) => theme.palette.background.default};
`;

export const ContentWrapper = styled(Box)`
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
    max-width: 100%;
    
    ${breakpoints.mobile.css} {
        max-width: 100%;
    }
    ${breakpoints.tablet.css} {
        max-width: 100%;
    }
    ${breakpoints.laptop.css} {
        max-width: 100%;
    }
    ${breakpoints.laptopL.css} {
        max-width: 100%;
    }
    ${breakpoints.laptopXL.css} {
        max-width: 100%;
    }
`