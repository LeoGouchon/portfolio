import styled from "@emotion/styled";
import {Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";

export const GlobalWrapper = styled.div`
    display: flex;
    width: 100%;
    
    position: sticky;
    top:0;
    z-index: 2;
    
    background-color: ${({ theme }) => theme.palette.background.default};
`;

export const AppBarStyled = styled.div`
    width: 100%;
    overflow: hidden;

    padding: 0;
`;

export const ToolBarStyled = styled(Toolbar)`
    width: 100%;
    margin: 0 auto;
    padding: 0;

    box-sizing: border-box;
`;

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary};
`;

export const NavWrapper = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
`;

export const LeftSideMenuWrapper = styled.div`
    width: 100%;
`;

export const RightSideMenuWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: end;
    gap: 20px;
`;

export const LinkWrapperStyled = styled.div`
    width: fit-content;
    padding: 4px 8px;
    border-radius: 5px;
    transition: all 0.2s ease-out;
    
    :hover{
        background-color: ${props => props.theme.palette.background.paper};
    }
`;
