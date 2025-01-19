import styled from "@emotion/styled";

export const BackgroundWrapper = styled.div`
    position: absolute;
    z-index: 10;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(236, 241, 241, 0.94);
    backdrop-filter: blur(10px);
`;

export const SVGStyled = styled.div`
    position: absolute;
    z-index: 10;
    display: flex;
`;

export const PatternStyled = styled.div`
    color: white;
`;

export const LogoImg = styled.img`
    width: 300px;
    height: auto;   
    position: relative;
    margin: auto;
`;