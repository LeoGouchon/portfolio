import styled from "@emotion/styled";
import {Typography} from "@mui/material";
import {ScreenSizeInterface} from "../../global.style.tsx";
import {getGapValue} from "../../utils/CssUtils.ts";

export const GlobalWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

type HeaderWrapperProps = ScreenSizeInterface

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
    margin: auto;
    width: ${props => props.screensize > 3 ? "66%" : "100%"};
`;

export const TextSectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

type ImageSectionWrapperProps = ScreenSizeInterface

export const ImageSectionWrapper = styled.div<ImageSectionWrapperProps>`
    margin: auto;
    width: ${props => props.screensize > 3 ? "66%" : "100%"};
`;

export const BodyStyled = styled(Typography)`
    text-align: left;
    text-wrap: pretty;
    width: 100%;
`;

type PartWrapperProps = ScreenSizeInterface

export const PartWrapper = styled.div<PartWrapperProps>`
    display: flex;
    width: ${props => props.screensize > 3 ? "66%" : "100%"};
    gap: ${props => getGapValue(props.screensize)};
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 66%;
`;

export const HeadingWrapper = styled.div`
    width: 33%;
    > * {
        text-wrap: balance;
    }
`;