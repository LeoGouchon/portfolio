import {GlobalWrapper, ImageWrapper, IntroductionWrapper, TextWrapper, DescriptionStyled} from "./AboutMe.style.tsx";
import {Typography} from "@mui/material";
import {useScreenSizeContext} from "../../../../providers/ScreenSizeProvider.tsx";

export const AboutMe = () => {
    const screenSize: number = useScreenSizeContext();

    return (
        <GlobalWrapper>
            <IntroductionWrapper screensize={screenSize}>
                <ImageWrapper img={"/works/showcase/pricing-pact-01.webp"} screensize={screenSize} />
                <TextWrapper screensize={screenSize}>
                    <Typography variant={"h2"}>"Un ingénieur inspiré par l'art"</Typography>
                    <DescriptionStyled variant={"body1"} screensize={screenSize}>
                            Je m'appelle Léo, 23 ans, jeune diplomé en tant qu'ingénieur logiciel et big data à Lyon.
                            Je fais également du graphisme et de la photographie.
                            Je suis un texte introductif pour donner un peu de hype.
                    </DescriptionStyled>
                </TextWrapper>
            </IntroductionWrapper>
        </GlobalWrapper>
    )
}