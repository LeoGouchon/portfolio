import styled from "@emotion/styled";
import {Box, Typography} from "@mui/material";
import {keyframes} from "@mui/system";

export const BoxAnimationWrapper = styled(Box)`
    white-space: nowrap;
    width: 100%;
    background-color: #282525;
    color: white;
    padding: 8px 0;
    position: relative;
    
    cursor: pointer;
`;

const scroll = keyframes`
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-50%);
        }
    `;


export const TypographyStyled = styled(Typography)`
    display: inline-block;
    px: 2;
    animation: ${scroll} 60s linear infinite;
`;
