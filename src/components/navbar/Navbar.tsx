import {
    AppBarStyled,
    GlobalWrapper,
    LeftSideMenuWrapper,
    MiddleSideMenuWrapper,
    NavLinkStyled, NavWrapper, RightSideMenuWrapper,
    ToolBarStyled
} from "./Navbar.style.tsx";
import {useAuth} from "../../providers/AuthProvider.tsx";

export const Navbar = () => {
    const {user} = useAuth()

    return (
        <GlobalWrapper>
            <AppBarStyled>
                <ToolBarStyled>
                    <NavWrapper>
                        <LeftSideMenuWrapper>
                            <NavLinkStyled to="/">
                                Home
                            </NavLinkStyled>
                        </LeftSideMenuWrapper>
                        <MiddleSideMenuWrapper>
                            {user?.role === "admin" &&
                                <NavLinkStyled to="/create">
                                    create
                                </NavLinkStyled>
                            }

                            <NavLinkStyled to="/works">
                                Works
                            </NavLinkStyled>

                        </MiddleSideMenuWrapper>
                        <RightSideMenuWrapper>

                            <NavLinkStyled to="/card">
                                Contact
                            </NavLinkStyled>

                            {/*{*/}
                            {/*    user ?*/}
                            {/*        <NavLinkStyled to="#"*/}
                            {/*                       onClick={logout}*/}
                            {/*        >*/}
                            {/*            Log out*/}
                            {/*        </NavLinkStyled> :*/}
                            {/*        <NavLinkStyled to="/login">*/}
                            {/*            Login*/}
                            {/*        </NavLinkStyled>*/}
                            {/*}*/}
                        </RightSideMenuWrapper>
                    </NavWrapper>

                </ToolBarStyled>
            </AppBarStyled>
        </GlobalWrapper>
    )
}