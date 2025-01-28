import {Navigate, useParams} from "react-router-dom";
import {GlobalWrapper, HeaderWrapper} from "./Work.style.tsx";
import {dateToDisplay} from "../../utils/Date.ts";
import {Divider} from "../landingPage/components/divider/Divider.tsx";
import {ReactNode} from "react";
import data from "../../data/works.json";
import {WorkType} from "../Works/Works.tsx";
import {TextSection, textSectionInterface} from "./components/TextSection.tsx";
import {ImageSection, imageSectionInterface} from "./components/ImageSection.tsx";
import {useScreenSizeContext} from "../../providers/ScreenSizeProvider.tsx";
import {MotionTypography} from "../mui/motionTypography/MotionTypography.tsx";

export interface sectionsInterface {
    type: string;
}

export interface sectionInterface {
    heading: string;
    headingSize: "h2" | "h3" | "h4";
    text: string[];
}

export const Work = () => {
    const screensize = useScreenSizeContext();

    const {id} = useParams();

    const workData = data.find((w: WorkType) => w.work_id.toString() === id);

    if (workData === undefined) {
        return <Navigate to={"/"}/>
    }

    return (
        <GlobalWrapper>
            <HeaderWrapper screensize={screensize}>
                <MotionTypography variant={"h1"}>{workData.work_name}</MotionTypography>
                <MotionTypography
                    variant={"h2"}>{dateToDisplay(workData.work_date_from, workData.work_date_to)}</MotionTypography>
            </HeaderWrapper>
            {workData?.work_dedicated_page?.map((section: sectionsInterface, index: number): ReactNode =>
                <div key={index}>
                    <Divider/>
                    {
                        section.type === "image" ? <ImageSection data={section as imageSectionInterface}/> :
                            <TextSection data={section as textSectionInterface}/>
                    }
                </div>
            )}
        </GlobalWrapper>
    )
}