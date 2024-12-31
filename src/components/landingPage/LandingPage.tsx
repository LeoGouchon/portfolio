import {
    ArrowsWrapper, CTAWrapper,
    DescriptionProfilWrapper,
    DesignWrapper, FirstRowWrapper,
    GlobalWrapper, ImageCategoryStyled, MainTextWrapper, NameProfilWrapper, NameWrapper, SecondRowWrapper,
    ShowcaseCategoryWrapper,
    SmallCategoryWrapper, TextDescriptionWrapper,
    TextWrapper
} from "./LandingPage.style.tsx";
import {Button, Typography} from "@mui/material";
import {useState} from "react";
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";

export const LandingPage = () => {
    const profiles = [{
        id: 1,
        name: "Photography",
        description: "Découvert en 2023 lors des 6 heures de Spa-Francorchamps, la photographie est devenue une passion ponctuelle. Elle me permet d'exprimer et de sauvegarder les évènements (automobiles principalement) auquels j'assiste dans ma vie.",
        image: "https://i.ibb.co/W3f70RG/IMG-3952-1-Insta-copie.png",
        imageAlt: "Photographie (par Léo Gouchon) des 24H Crowdstrike Spa-Francorchamps 2023 - #23 Car Collection Motorsport - #98 Rowe Racing"
    }, {
        id: 2,
        name: "Design",
        description: "Découvrir Adobe Photoshop au collège a sans doute été un tournant dans ma vie. J'ai découvert et appris le graphisme en autodicacte et en m'amusant. Cela me permet maintenant d'élaborer des projets plus complexes.",
        image: "https://i.ibb.co/sFT57ZW/Sans-titre-1-copie.png",
        imageAlt: "Poster (par Léo Gouchon) de la voiture #95 United Autosports du championnat WEC"
    }, {
        id: 3,
        name: "Event",
        description: "Participer a des évènements en tant qu'organisateur est toujours gratifiant en regardant le résultat final. Je peux apporter mon expertise en matière de graphisme tout en gérant des équipes de différentes tailles.",
        image: "https://i.ibb.co/T2n7bhP/lucie01.jpg",
        imageAlt: "Photographie (par Léo Gouchon) de Lucie Mourer lors de sa présentation au TEDx CPE Lyon 2023"
    }, {
        id: 4,
        name: "Tech",
        description: "Mon choix professionel. Diplomé en 2024 de CPE Lyon en tant qu'ingénieur numérique spécialité Conception Logiciel et Big Data. Découvrir de nouvelles technologies et explorer le monde de la data ont toujours attisés ma curiosité.",
        image: "https://i.ibb.co/wLKgZrh/pricing-jonagraphe-7.jpg",
        imageAlt: "Photographie (par Jonagraphe) lors du stage chez Givemefive (anciennement PricingPact)"
    }];

    const [showcaseProfileId, setShowcaseProfileId] = useState<number>(1);

    return (
        <GlobalWrapper>
            <FirstRowWrapper>
                <TextWrapper>
                    <NameWrapper>
                        <Typography variant={"body1"}>Léo Gouchon</Typography>
                        <Typography variant={"body1"}>from France</Typography>
                    </NameWrapper>
                    <MainTextWrapper>
                        <Typography variant={"h1"}>Discover him through 4 fields</Typography>
                        <ArrowsWrapper>
                            <ArrowUpward onClick={() => setShowcaseProfileId(showcaseProfileId === 4 ? 1 : showcaseProfileId + 1)}/>
                            <ArrowDownward onClick={() => setShowcaseProfileId(showcaseProfileId === 1 ? 4 : showcaseProfileId - 1)}/>
                        </ArrowsWrapper>
                    </MainTextWrapper>
                </TextWrapper>
                <DesignWrapper>
                    <SmallCategoryWrapper>
                        {profiles
                            .filter(profile => profile.id !== showcaseProfileId)
                            .map(profile => (
                                <ImageCategoryStyled key={profile.id}
                                                     image={profile.image}
                                                     onClick={() => setShowcaseProfileId(profile.id)}>
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
            <SecondRowWrapper>
                <CTAWrapper>
                    <Button variant={"outlined"} color={"primary"} href={"/about"}>About me</Button>
                    <Button variant={"outlined"} color={"primary"} href={"/card"}>Works</Button>
                </CTAWrapper>
                <TextDescriptionWrapper>
                    <NameProfilWrapper>
                        <Typography
                            variant={"h4"}>{profiles.find(profile => profile.id === showcaseProfileId)?.name}</Typography>
                    </NameProfilWrapper>
                    <DescriptionProfilWrapper>
                        <Typography
                            variant={"body2"}>{profiles.find(profile => profile.id === showcaseProfileId)?.description}
                        </Typography>
                    </DescriptionProfilWrapper>
                </TextDescriptionWrapper>
            </SecondRowWrapper>
        </GlobalWrapper>
    )
}