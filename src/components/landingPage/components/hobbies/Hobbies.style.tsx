import styled from "@emotion/styled";
import {ScreenSizeInterface} from "../../../../global.style.tsx";
import {getGapValue} from "../../../../utils/CssUtils.ts";
import {css} from "@mui/material";

interface GlobalWrapperProps extends ScreenSizeInterface {};

export const GlobalWrapper = styled.div<GlobalWrapperProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: ${props => getGapValue(props.screensize)}
`;

interface HobbyWrapperProps extends ScreenSizeInterface {
    img: string;
}

export const HobbyWrapper = styled.div<HobbyWrapperProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    width: 100%;
    aspect-ratio: 1/1;
    padding: 20px;
    
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    
    color: #ffffffee;

    ${(props) => props.screensize === 1 && css`
        transform: rotate(-90deg);
        
        > * {
            transform: rotate(90deg);
        }
    `}
`;

interface HobbiesProps extends ScreenSizeInterface {};

export const HobbiesWrapper = styled.div<HobbiesProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0;
    
    ${(props) => props.screensize === 1 && css`
        flex-direction: column-reverse;
    `}
`;

interface TextWrapperProps extends ScreenSizeInterface{};

export const TextWrapper = styled.div<TextWrapperProps>`
    display: flex;
    flex-direction: column;
    gap: ${props => getGapValue(props.screensize)}
`;