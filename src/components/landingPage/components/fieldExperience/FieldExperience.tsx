import {
    ArrowsWrapper, CTAWrapper,
    DescriptionProfilWrapper,
    DesignWrapper, FirstRowWrapper,
    GlobalWrapper, ImageCategoryStyled, MainTextWrapper, NameProfilWrapper, NameWrapper, SecondRowWrapper,
    ShowcaseCategoryWrapper,
    SmallCategoryWrapper, TextDescriptionWrapper,
    TextWrapper, TitleStyled, TypographyClickStyled
} from "./FieldExperience.style.tsx";
import {Typography} from "@mui/material";
import {useState} from "react";
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";
import {useScreenSizeContext} from "../../../../providers/ScreenSizeProvider.tsx";
import {useNavigate} from "react-router-dom";

export const FieldExperience = () => {
    const screenSize = useScreenSizeContext();
    const navigate = useNavigate();

    const profiles = [{
        id: 1,
        name: "Photographie",
        description: "Découverte en 2023 lors des 6 Heures de Spa-Francorchamps, la photographie est devenue une passion occasionnelle. Elle me permet d’exprimer ma créativité et d’immortaliser les événements auxquels j’assiste dans ma vie.",
        image: "/works/showcase/24h-spa-01.webp",
        imageAlt: "Photographie (par Léo Gouchon) des 24H Crowdstrike Spa-Francorchamps 2023"
    }, {
        id: 2,
        name: "Design",
        description: "Découvrir Adobe Photoshop au collège a sans doute marqué un tournant dans ma vie. J’ai appris le graphisme en autodidacte, tout en m’amusant. Aujourd’hui, cela me permet de réaliser des projets plus complexes.",
        image: "/works/showcase/dorianne-pin-booster-01.webp",
        imageAlt: "Cartes à collectionner de la pilote Dorianne Pin"
    }, {
        id: 3,
        name: "Evènement",
        description: "Participer à des événements en tant qu’organisateur est toujours gratifiant, surtout lorsque je contemple le résultat final. Cela me permet d’apporter mon expertise en graphisme tout en gérant des équipes de tailles variées.",
        image: "/works/showcase/tedx-cpe-lyon-01.webp",
        imageAlt: "Photographie (par Léo Gouchon) du TEDx CPE Lyon 2023"
    }, {
        id: 4,
        name: "Tech",
        description: "Mon choix professionnel. Diplômé en 2024 de CPE Lyon en tant qu’ingénieur numérique, j’ai toujours été fasciné par la découverte de nouvelles technologies et l’exploration du monde de la data, qui attisent constamment ma curiosité.",
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
                            <TypographyClickStyled variant={"body1"} color={"primary"} onClick={_ => navigate("/works")}>works</TypographyClickStyled>
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
                    {/*<Button variant={"outlined"} color={"primary"} href={"/works"}>Works</Button>*/}
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