import styled from "@emotion/styled";
import {Box} from "@mui/material";
import {themeOptions} from "./theme.ts";

export const GlobalWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    margin: 0;
    
    background-color: ${themeOptions.palette.background.default};
`

export const ContentWrapper = styled(Box)`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`