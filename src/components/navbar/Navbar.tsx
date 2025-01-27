import {
    AppBarStyled,
    GlobalWrapper,
    LeftSideMenuWrapper, LinkWrapperStyled,
    NavLinkStyled, NavWrapper, RightSideMenuWrapper,
    ToolBarStyled
} from "./Navbar.style.tsx";
import {TypographyClickStyled} from "../landingPage/components/fieldExperience/FieldExperience.style.tsx";

export const Navbar = () => {
    return (
        <GlobalWrapper>
            <AppBarStyled>
                <ToolBarStyled>
                    <NavWrapper>
                        <LeftSideMenuWrapper>
                            <LinkWrapperStyled>
                                <NavLinkStyled to="/">
                                    Accueil
                                </NavLinkStyled>
                            </LinkWrapperStyled>
                        </LeftSideMenuWrapper>
                        <RightSideMenuWrapper>
                            <LinkWrapperStyled>
                                <NavLinkStyled to="/works">
                                    Projets
                                </NavLinkStyled>
                            </LinkWrapperStyled>
                            <LinkWrapperStyled>
                                <TypographyClickStyled
                                    onClick={() => window.location.href = 'mailto:contact@leogouchon.com'}>
                                    Contactez-moi
                                </TypographyClickStyled>
                            </LinkWrapperStyled>
                        </RightSideMenuWrapper>
                    </NavWrapper>

                </ToolBarStyled>
            </AppBarStyled>
        </GlobalWrapper>
    )
}