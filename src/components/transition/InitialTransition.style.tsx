import styled from "@emotion/styled";

export const BackgroundWrapper = styled.div`
    position: absolute;
    z-index: 10;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000ef;
    backdrop-filter: blur(10px);
`;

export const SVGStyled = styled.svg`
    position: absolute;
    z-index: 10;
    display: flex;
`;

export const PatternStyled = styled.pattern`
    color: white;
`;

export const RectBackgroundStyled = styled.rect`
    width: 100%;
    height: 100%;
    fill: currentColor;
`;

export const RectStyled = styled.rect`
    width: 100%;
    height: 100%;
    fill: currentColor;
    color: rebeccapurple;
`;
