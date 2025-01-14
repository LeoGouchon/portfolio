import styled from "@emotion/styled";
import {ScreenSizeInterface} from "../../../../global.style.tsx";

export const CTAWrapper = styled.div`
    display: flex;
    gap: 8px;
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
`;

interface HeaderShowcaseWrapperProps extends ScreenSizeInterface {}

export const HeadersShowcaseWrapper = styled.div<HeaderShowcaseWrapperProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    
    width: ${props => props.screensize >= 3 ? "20%" : "100%"};
    height: fit-content;
    
    gap: 8px;
`;

interface ImageShowcaseProps extends ScreenSizeInterface {
    img: string;
}

export const ImageShowcase = styled.div<ImageShowcaseProps>`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    
    width: ${props => props.screensize <= 2 ? "100%" : "66%"};
    aspect-ratio: 16 / 9;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: start;
    align-items: start;
`;

interface WorkShowcaseWrapperProps extends ScreenSizeInterface {}

export const WorkShowcaseWrapper = styled.div<WorkShowcaseWrapperProps>`
    display: flex;
    flex-direction: ${props => props.screensize >= 3 ? 'row' : 'column'};
    
    gap: 20px;
    padding-bottom: 16px;
    padding-top: 8px;
    
    width: 100%;
`;