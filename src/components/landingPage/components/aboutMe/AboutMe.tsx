import {GlobalWrapper, ImageWrapper, IntroductionWrapper, TextWrapper, DescriptionStyled} from "./AboutMe.style.tsx";
import {useScreenSizeContext} from "../../../../providers/ScreenSizeProvider.tsx";
import {MotionTypography} from "../../../mui/motionTypography/MotionTypography.tsx";

export const AboutMe = () => {
    const screenSize: number = useScreenSizeContext();

    return (
        <GlobalWrapper>
            <IntroductionWrapper screensize={screenSize}>
                <ImageWrapper img={"/works/showcase/pricing-pact-01.webp"} screensize={screenSize} />
                <TextWrapper screensize={screenSize}>
                    <MotionTypography
                        variant={"h2"}
                    >
                        "Un mélange d'ingénieur et d'artiste"
                    </MotionTypography>
                    <DescriptionStyled variant={"body1"} screensize={screenSize}>
                        Je m'appelle Léo, j'ai 23 ans et je suis récemment diplômé en ingénierie logicielle et big data à Lyon.
                        Passionné par les nouvelles technologies et l'art, je développe mes propres projets de graphisme et de photographie en parallèle de mon travail.
                    </DescriptionStyled>
                </TextWrapper>
            </IntroductionWrapper>
        </GlobalWrapper>
    )
}