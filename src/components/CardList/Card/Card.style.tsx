import styled from "@emotion/styled";
import {Card, CardActions, css, Tab, Tabs} from "@mui/material";

export const DriverInformation = styled(Card)`
    width: 100%;
`;

export const DriverCardVisualWrapper = styled.div`
    aspect-ratio: 744 / 1039;
    
    display: flex;
    align-items: center;   
    justify-content: center;

    margin: 10px;
    width: 100%;
`;

export const DriverWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    margin-left: 1px;
    margin-bottom: 1px;
    width: 100%;
    max-width: 280px;
    padding: 16px 24px;
`;

export const DriverCardVisual = styled.div<{ img: string, isUnknow: boolean }>`
    background-image: url(${props => props.img});
    background-size: cover;
    aspect-ratio: 744 / 1039;
    width: 100%;
    height: 100%;
    
    ${props => props.isUnknow && css`
        filter: blur(2px);
    `} 
`;

export const CardActionsWrapper = styled(CardActions)`
    width: 100%;
    padding: 0 0 5px 0;
`;

export const CardTabs = styled(Tabs)`
    display: flex;
    width: 100%;
`;

export const TabStyled = styled(Tab)`
    display: flex;
    width: 20%;
    min-width: 0;
`;
