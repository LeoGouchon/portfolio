import styled from "@emotion/styled";
import {css, Typography} from "@mui/material";
import {ScreenSizeInterface} from "../../../../global.style.tsx";

export const GlobalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    gap: 40px;
`;

interface IntroductionWrapperProps extends ScreenSizeInterface {}

export const IntroductionWrapper = styled.div<IntroductionWrapperProps>`
    display: flex;
    flex-direction: ${(props) => props.screensize < 2 ? "column" : "row"};
    width: 100%;
    gap: 20px;
`;

interface ImageWrapperProps extends ScreenSizeInterface {
    img: string;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
    display: flex;
    width: ${(props) => props.screensize < 2 ? "100%" : "33%"};
    aspect-ratio: ${(props) => props.screensize < 2 ? "10/6" : "9/10"};
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: cover;
`;

interface TextWrapperProps extends ScreenSizeInterface {}

export const TextWrapper = styled.div<TextWrapperProps>`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
    
    gap: 20px;
    width: ${(props) => props.screensize < 2 ? "100%" : "66%"};
`;

interface DescriptionStyledProps extends ScreenSizeInterface {}

export const DescriptionStyled = styled(Typography)<DescriptionStyledProps>`
    display: flex;
    text-wrap: pretty;
    width: ${(props) => props.screensize >= 4 ? "33%" : "66%"};
    margin-left: ${(props) => props.screensize >= 2 ? "33%" : "0"};
    
    ${(props) => props.screensize === 2 && css`
        text-align: right;
    `}

    ${(props) => props.screensize < 2 && css`
        margin-left: 0;
        width: 100%;
    `}
`;