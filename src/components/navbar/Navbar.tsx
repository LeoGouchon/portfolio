import {AppBarStyled, GlobalWrapper, NavLinkStyled, ToolBarStyled} from "./Navbar.style.tsx";
import {Button} from "@mui/material";
import {useAuth} from "../../utils/AuthProvider.tsx";

export const Navbar = () => {
    const { user, logout } = useAuth()

    console.log(user)

    return (
        <GlobalWrapper>
            <AppBarStyled position="static">
                <ToolBarStyled>
                    <nav>
                        {user?.role === "admin" && <Button color="inherit">
                            <NavLinkStyled to="/create">
                                Create
                            </NavLinkStyled>
                        </Button>}
                        <Button color="inherit">
                            <NavLinkStyled to="/card">
                                Cards
                            </NavLinkStyled>
                        </Button>
                    </nav>
                    {
                        user ?
                            <Button color="inherit"
                                onClick={logout}
                            >
                                Log out
                            </Button> :
                            <Button color="inherit">
                                <NavLinkStyled to="/login">
                                    Login
                                </NavLinkStyled>
                            </Button>
                    }
                </ToolBarStyled>
            </AppBarStyled>
        </GlobalWrapper>
    )
}