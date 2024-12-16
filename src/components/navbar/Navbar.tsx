import {NavLink} from "react-router-dom";
import {AppBarStyled, GlobalWrapper, ToolBarStyled} from "./Navbar.style.tsx";
import {Button, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
    return (
        <GlobalWrapper>
            <AppBarStyled position="static">
                <ToolBarStyled>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <nav>
                        <Button color="inherit">
                            <NavLink to="/create">
                                Create
                            </NavLink>
                        </Button>
                        <Button color="inherit">
                            <NavLink to="/list">
                                List
                            </NavLink>
                        </Button>
                        <Button color="inherit">
                            <NavLink to="/card">
                                Cards
                            </NavLink>
                        </Button>
                    </nav>
                </ToolBarStyled>
            </AppBarStyled>
        </GlobalWrapper>
    )
}