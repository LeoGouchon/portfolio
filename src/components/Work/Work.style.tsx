import styled from "@emotion/styled";
import {Typography} from "@mui/material";
import {ScreenSizeInterface} from "../../global.style.tsx";

export const GlobalWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

export const HeaderWrapper = styled.div`

`;

export const TextSectionWrapper = styled.div`

`;

export const ImageSectionWrapper = styled.div`

`;

interface BodyStyledProps extends ScreenSizeInterface{};

export const BodyStyled = styled(Typography)<BodyStyledProps>`
    text-align: left;
    text-wrap: pretty;
    width: ${(props) => props.screensize <= 2 ? "100%" : "66%"};
`;