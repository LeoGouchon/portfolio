import {GlobalWrapper} from "./LandingPage.style.tsx";
import {Hobbies} from "./components/hobbies/Hobbies.tsx";
import {AboutMe} from "./components/aboutMe/AboutMe.tsx";
import {Divider} from "./components/divider/Divider.tsx";
import {FieldExperience} from "./components/fieldExperience/FieldExperience.tsx";

export const LandingPage = () => {
    return (
        <GlobalWrapper>
            <AboutMe/>
            <Divider/>
            <FieldExperience/>
            <Divider/>
            <Hobbies/>
        </GlobalWrapper>
    )
}