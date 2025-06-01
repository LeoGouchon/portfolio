import {GlobalWrapper} from "./LandingPage.style.tsx";
import {Hobbies} from "./components/hobbies/Hobbies.tsx";
import {AboutMe} from "./components/aboutMe/AboutMe.tsx";
import {Divider} from "./components/divider/Divider.tsx";
import {FieldExperience} from "./components/fieldExperience/FieldExperience.tsx";
import {motion} from "motion/react";
import {InitialTransition} from "../transition/InitialTransition.tsx";
import {CheckProjects} from "./components/checkProjects/checkProjects.tsx";

export const LandingPage = () => {

    const MotionGlobalWrapper = motion.create(GlobalWrapper);

    return (
        <MotionGlobalWrapper
            exit={{opacity: 0}}
        >
            <InitialTransition/>
            <AboutMe/>
            <Divider/>
            <CheckProjects/>
            <Divider/>
            <FieldExperience/>
            <Divider/>
            <Hobbies/>
        </MotionGlobalWrapper>
    )
}