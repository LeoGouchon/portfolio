import styled from "@emotion/styled";
import {AppBar, Toolbar} from "@mui/material";

export const GlobalWrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const AppBarStyled = styled(AppBar)`
    width: 100%;
`;

export const ToolBarStyled = styled(Toolbar)`
    width: auto;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
`;
