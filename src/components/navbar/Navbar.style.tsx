import styled from "@emotion/styled";
import {AppBar, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {themeOptions} from "../../theme.ts";

export const GlobalWrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const AppBarStyled = styled(AppBar)`
    width: 100%;
    overflow: hidden;
`;

export const ToolBarStyled = styled(Toolbar)`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;

    box-sizing: border-box; 
    
    display: flex;
    justify-content: space-between;
`;

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: ${themeOptions?.palette?.text?.secondary ?? "#ffffff"};
`;