import styled from "@emotion/styled";

export const GlobalWrapper = styled.div`
    width: 100%;
    height: fit-content;
    
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const TextWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    
    width: 33%;
`;

export const DesignWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 66%;
    
    gap: 20px;
`;

export const SmallCategoryWrapper = styled.div`
    display: flex;
    
    width: 100%;

    gap: 20px;
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

export const ImageCategoryStyled = styled(ShowcaseCategoryWrapper)`
    aspect-ratio: 216 / 60;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NameWrapper = styled.div`
    height: 100%;
    align-content: center;
`;

export const TextDescriptionWrapper = styled.div`
    display: flex;
    width: 66%;
`;

export const NameProfilWrapper = styled.div`
    width: 33%;
    text-align: start;
    align-items: start;
`;

export const DescriptionProfilWrapper = styled.div`
    width: 66%;
    text-align: end;
    align-items: start;
    text-wrap: balance;
`;

export const FirstRowWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
`;

export const SecondRowWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
`;

export const CTAWrapper = styled.div`
    width: 33%;
    height: 100%;
    
    display: flex;
    gap: 20px;
`;

export const MainTextWrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const ArrowsWrapper = styled.div`
    display: flex;
    width: 40px;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    
    height: 100%;
`;

