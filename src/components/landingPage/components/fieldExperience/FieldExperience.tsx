import {
    ArrowsWrapper, CTAWrapper,
    DescriptionProfilWrapper,
    DesignWrapper, FirstRowWrapper,
    GlobalWrapper, ImageCategoryStyled, MainTextWrapper, NameProfilWrapper, NameWrapper, SecondRowWrapper,
    ShowcaseCategoryWrapper,
    SmallCategoryWrapper, TextDescriptionWrapper,
    TextWrapper, TitleStyled
} from "./FieldExperience.style.tsx";
import {Button, Typography} from "@mui/material";
import {useState} from "react";
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";
import {useScreenSizeContext} from "../../../../providers/ScreenSizeProvider.tsx";

export const FieldExperience = () => {
    const screenSize = useScreenSizeContext();

    const profiles = [{
        id: 1,
        name: "Photography",
        description: "Découvert en 2023 lors des 6 heures de Spa-Francorchamps, la photographie est devenue une passion ponctuelle. Elle me permet d'exprimer et de sauvegarder les évènements (automobiles principalement) auquels j'assiste dans ma vie.",
        image: "/works/showcase/24h-spa-01.webp",
        imageAlt: "Photographie (par Léo Gouchon) des 24H Crowdstrike Spa-Francorchamps 2023"
    }, {
        id: 2,
        name: "Design",
        description: "Découvrir Adobe Photoshop au collège a sans doute été un tournant dans ma vie. J'ai découvert et appris le graphisme en autodicacte et en m'amusant. Cela me permet maintenant d'élaborer des projets plus complexes.",
        image: "/works/showcase/dorianne-pin-booster-01.webp",
        imageAlt: "Cartes à collectionner de la pilote Dorianne Pin"
    }, {
        id: 3,
        name: "Event",
        description: "Participer a des évènements en tant qu'organisateur est toujours gratifiant en regardant le résultat final. Je peux apporter mon expertise en matière de graphisme tout en gérant des équipes de différentes tailles.",
        image: "/works/showcase/tedx-cpe-lyon-01.webp",
        imageAlt: "Photographie (par Léo Gouchon) du TEDx CPE Lyon 2023"
    }, {
        id: 4,
        name: "Tech",
        description: "Mon choix professionel. Diplomé en 2024 de CPE Lyon en tant qu'ingénieur numérique spécialité Conception Logiciel et Big Data. Découvrir de nouvelles technologies et explorer le monde de la data ont toujours attisés ma curiosité.",
        image: "/works/showcase/pricing-pact-01.webp",
        imageAlt: "Photographie (par Jonagraphe) lors du stage chez Givemefive (anciennement PricingPact)"
    }];

    const [showcaseProfileId, setShowcaseProfileId] = useState<number>(1);

    return (
        <GlobalWrapper screensize={screenSize}>
            <FirstRowWrapper screensize={screenSize}>
                <TextWrapper screensize={screenSize}>
                    {screenSize > 2 &&
                        <NameWrapper>
                            <Typography variant={"body1"}>Léo Gouchon</Typography>
                            <Typography variant={"body1"}>Lyon, France</Typography>
                        </NameWrapper>}
                    <MainTextWrapper>
                        <TitleStyled variant={[3,4].includes(screenSize) ? "h2" : "h1"}>Découvrez mes 4 types d'expérience</TitleStyled>
                        <ArrowsWrapper>
                            <ArrowUpward onClick={() => setShowcaseProfileId(showcaseProfileId === 4 ? 1 : showcaseProfileId + 1)}/>
                            <ArrowDownward onClick={() => setShowcaseProfileId(showcaseProfileId === 1 ? 4 : showcaseProfileId - 1)}/>
                        </ArrowsWrapper>
                    </MainTextWrapper>
                </TextWrapper>
                <DesignWrapper screensize={screenSize}>
                    <SmallCategoryWrapper screensize={screenSize}>
                        {profiles
                            .filter(profile => profile.id !== showcaseProfileId)
                            .map(profile => (
                                <ImageCategoryStyled key={profile.id}
                                                     image={profile.image}
                                                     onClick={() => setShowcaseProfileId(profile.id)}
                                                     screensize={screenSize}
                                >
                                    <Typography variant={"h5"}>{profile.name}</Typography>
                                </ImageCategoryStyled>
                            ))
                        }
                    </SmallCategoryWrapper>
                    <ShowcaseCategoryWrapper
                        image={profiles.find(profile => profile.id === showcaseProfileId)?.image ?? ""}>
                        <Typography variant={"caption"}>
                            {profiles.find(profile => profile.id === showcaseProfileId)?.imageAlt}
                        </Typography>
                    </ShowcaseCategoryWrapper>
                </DesignWrapper>
            </FirstRowWrapper>
            <SecondRowWrapper screensize={screenSize}>
                <CTAWrapper screensize={screenSize}>
                    <Button variant={"outlined"} color={"primary"} href={"/works"}>Works</Button>
                </CTAWrapper>
                <TextDescriptionWrapper screensize={screenSize}>
                    <NameProfilWrapper>
                        <Typography
                            variant={"h4"}>{profiles.find(profile => profile.id === showcaseProfileId)?.name}</Typography>
                    </NameProfilWrapper>
                    <DescriptionProfilWrapper screensize={screenSize}>
                        <Typography
                            variant={"body2"}>{profiles.find(profile => profile.id === showcaseProfileId)?.description}
                        </Typography>
                    </DescriptionProfilWrapper>
                </TextDescriptionWrapper>
            </SecondRowWrapper>
        </GlobalWrapper>
    )
}