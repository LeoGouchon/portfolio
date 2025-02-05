import styled from "@emotion/styled";
import {Box, css} from "@mui/material";
import {breakpoints} from "./providers/ScreenSizeProvider.tsx"
import {getGapValue} from "./utils/CssUtils.ts";

export const GlobalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
`;

export interface ScreenSizeInterface {
    screensize: number;
}

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

type ContentWrapperProps = ScreenSizeInterface

export const ContentWrapper = styled(Box)<ContentWrapperProps>`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${props => getGapValue(props.screensize)};
    max-width: 100%;
    
    overflow-x: hidden;
    
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