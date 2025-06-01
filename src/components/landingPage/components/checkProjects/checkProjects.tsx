import {BoxAnimationWrapper, TypographyStyled} from "./checkProjects.style.tsx";

export const CheckProjects = () => {
    return (
        <BoxAnimationWrapper
            onClick={() => {
                window.location.href = "/works";
            }}
        >
            <TypographyStyled
                variant="h3"
            >
                Voir les derniers projets - Voir les derniers projets - Voir les derniers projets - Voir les derniers projets - Voir les derniers projets - Voir les derniers projets - Voir les derniers projets - Voir les derniers projets -
            </TypographyStyled>
        </BoxAnimationWrapper>
    );
};