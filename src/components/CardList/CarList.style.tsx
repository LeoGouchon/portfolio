import styled from "@emotion/styled";
import {Paper} from "@mui/material";

export const GlobalWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const FilterOrderWrappper = styled(Paper)`
    display: flex;
    justify-content: center;
    max-width: 100%;
    
    margin: 8px;
`;