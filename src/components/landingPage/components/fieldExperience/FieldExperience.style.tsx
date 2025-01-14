import styled from "@emotion/styled";
import {ScreenSizeInterface} from "../../../../global.style.tsx";
import {getGapValue} from "../../../../utils/CssUtils.ts";
import {css, Typography} from "@mui/material";

interface GlobalWrapperProps extends ScreenSizeInterface {};

export const GlobalWrapper = styled.div<GlobalWrapperProps>`
    width: 100%;
    height: fit-content;
    
    display: flex;
    flex-direction: column;
    gap: ${props => getGapValue(props.screensize)};
`;

interface TextWrapperProps extends ScreenSizeInterface{}

export const TextWrapper = styled.div<TextWrapperProps>`
    display: flex; 
    flex-direction: column;
    
    width: ${(props) => props.screensize < 3 ? "100%" : "33%"};
`;

interface DesignWrapperProps extends ScreenSizeInterface{}

export const DesignWrapper = styled.div<DesignWrapperProps>`
    display: flex;
    flex-direction: column;
    
    width: ${props => props.screensize < 3 ? "100%" : "66%"};;
    
    gap: ${props => getGapValue(props.screensize)};
`;

interface SmallCategoryWrapperProps extends ScreenSizeInterface{}

export const SmallCategoryWrapper = styled.div<SmallCategoryWrapperProps>`
    display: flex;
    
    width: 100%;

    gap: ${props => getGapValue(props.screensize)};
`;

interface ShowcaseCategoryWrapper {
    image: string;
}

export const ShowcaseCategoryWrapper = styled.div<ShowcaseCategoryWrapper>`
    width: 100%;
    height: auto;
    aspect-ratio: 689 / 330;
    
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    
    padding: 4px 12px;
    
    display: flex;
    justify-content: start;
    align-items: end;
    
    color: #ffffff;
`;

interface ImageCategoryStyledProps extends ScreenSizeInterface {}

export const ImageCategoryStyled = styled(ShowcaseCategoryWrapper)<ImageCategoryStyledProps>`
    aspect-ratio: 216/60;
    display: flex;
    justify-content: center;
    align-items: center;
    
    ${props => props.screensize === 1 && css`
        aspect-ratio: 216/90;
    `}
`;

export const NameWrapper = styled.div`
    height: 100%;
    align-content: center;
`;

interface TextDescriptionWrapperProps extends ScreenSizeInterface{}

export const TextDescriptionWrapper = styled.div<TextDescriptionWrapperProps>`
    display: flex;
    width: 66%;
    
    ${props => props.screensize <= 2 && css`
        width: 100%;
        flex-direction: column;
        
        > * {
            text-align: left;
        }
    `}
`;

export const NameProfilWrapper = styled.div`
    width: 33%;
    text-align: start;
    align-items: start;
`;

interface DescriptionProfilWrapperProps extends ScreenSizeInterface{};

export const DescriptionProfilWrapper = styled.div<DescriptionProfilWrapperProps>`
    width: ${props => props.screensize <= 2 ? "100%" : "66%"};
    text-align: ${props => props.screensize <= 1 ? "start" : "end"};
    align-items: start;
    text-wrap: ${props => props.screensize <= 1 ? "pretty" : "balance"};
`;

interface FirstRowWrapperProps extends ScreenSizeInterface {}

export const FirstRowWrapper = styled.div<FirstRowWrapperProps>`
    width: 100%;
    display: flex;
    height: 100%;
    gap: ${props => getGapValue(props.screensize)};
    flex-direction: ${(props) => props.screensize <= 2 ? "column" : "row"};
`;

interface SecondRowWrapperProps extends ScreenSizeInterface {}

export const SecondRowWrapper = styled.div <SecondRowWrapperProps>`
    width: 100%;
    display: flex;
    gap: ${props => getGapValue(props.screensize)};
    
    flex-direction: ${(props) => props.screensize <= 2 ? "column-reverse" : "row"};
`;

interface CTAWrapperProps extends ScreenSizeInterface {}

export const CTAWrapper = styled.div<CTAWrapperProps>`
    width: 33%;
    height: 100%;
    
    display: flex;
    gap: 20px;
    
    ${props => props.screensize < 2 && css`
        justify-content: center;
        align-items: center;
        width: 100%;
    `};
`;

export const MainTextWrapper = styled.div`
    display: flex;
    height: 100%;
`;

export const ArrowsWrapper = styled.div`
    display: flex;
    width: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const TitleStyled = styled(Typography)`
`;

