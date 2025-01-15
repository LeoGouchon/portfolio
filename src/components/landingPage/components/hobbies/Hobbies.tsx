import {GlobalWrapper, HobbiesWrapper, HobbyWrapper, TextWrapper} from "./Hobbies.style.tsx";
import {Typography} from "@mui/material";
import {useScreenSizeContext} from "../../../../providers/ScreenSizeProvider.tsx";
import path from "path";

export const Hobbies = () => {
    const screenSize = useScreenSizeContext();

    return (
        <GlobalWrapper screensize={screenSize}>
            <TextWrapper screensize={screenSize}>
                <Typography variant={"h2"}>
                    Mes passions
                </Typography>
                    <Typography variant={"body1"}>
                        J'ai toujours aimé créer, gérer et accomplir des projets quels qu'il soit.
                        Avoir trois passions peut sembler chronophage, sauf quand on arrive à les fusionner.
                        Voilà comment j'arrive à trouver de l'inspiration et enrichir ma créativité :
                        Et pourquoi pas créer une affiche par voiture licensiée dans un championnat automobile et éditer
                        un livre contenant ces affiches ? (le projet en question)
                        S'entrainer à la photographie grâce aux simulateurs automobiles ? :check:
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