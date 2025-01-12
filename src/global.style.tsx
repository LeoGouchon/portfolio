import styled from "@emotion/styled";
import {Box} from "@mui/material";
import {breakpoints} from "./providers/ScreenSizeProvider.tsx"
import {getGapValue} from "./utils/CssUtils.ts";

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

interface ContentWrapperProps extends ScreenSizeInterface {}

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