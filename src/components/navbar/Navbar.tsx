import {
    AppBarStyled,
    GlobalWrapper,
    LeftSideMenuWrapper,
    MiddleSideMenuWrapper,
    NavLinkStyled, NavWrapper, RightSideMenuWrapper,
    ToolBarStyled
} from "./Navbar.style.tsx";

export const Navbar = () => {
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
                            <NavLinkStyled to="/works">
                                Works
                            </NavLinkStyled>

                        </MiddleSideMenuWrapper>
                        <RightSideMenuWrapper>

                            <NavLinkStyled to={""} onClick={() => window.location.href = 'mailto:contact@leogouchon.com'}>
                                Contact
                            </NavLinkStyled>
                        </RightSideMenuWrapper>
                    </NavWrapper>

                </ToolBarStyled>
            </AppBarStyled>
        </GlobalWrapper>
    )
}