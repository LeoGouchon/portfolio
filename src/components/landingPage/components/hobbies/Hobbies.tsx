import {GlobalWrapper, HobbiesWrapper, HobbyWrapper, TextWrapper} from "./Hobbies.style.tsx";
import {Typography} from "@mui/material";
import {useScreenSizeContext} from "../../../../providers/ScreenSizeProvider.tsx";

export const Hobbies = () => {
    const screenSize = useScreenSizeContext();

    return (
        <GlobalWrapper screensize={screenSize}>
            <TextWrapper screensize={screenSize}>
                <Typography variant={"h2"}>
                    Mes passions
                </Typography>
                <Typography variant={"body1"}>
                    J'ai toujours aimé créer, gérer et mener à bien des projets, quels qu'ils soient. À première vue,
                    avoir trois passions peut sembler chronophage, mais tout change lorsqu'on peut les fusionner.
                    C'est ainsi que je trouve mes nouveaux projets, mon inspiration et enrichi ma créativité.
                </Typography>
            </TextWrapper>
            <HobbiesWrapper screensize={screenSize}>
                <HobbyWrapper screensize={screenSize} img={"/home/design.jpg"}>
                    <Typography variant={"h2"}>Design</Typography>
                </HobbyWrapper>
                <HobbyWrapper screensize={screenSize} img={"/home/videoGame.jpg"}>
                    <Typography variant={"h2"}>Jeux vidéo</Typography>
                </HobbyWrapper>
                <HobbyWrapper screensize={screenSize} img={"/home/automotiveSport.jpg"}>
                    <Typography variant={"h2"}>Sport automobile</Typography>
                </HobbyWrapper>
            </HobbiesWrapper>
        </GlobalWrapper>
    )
}