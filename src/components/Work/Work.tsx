import {Navigate, useParams} from "react-router-dom";
import {BodyStyled, GlobalWrapper, HeaderWrapper, ImageSectionWrapper, TextSectionWrapper} from "./Work.style.tsx";
import {ImageList, ImageListItem, Typography} from "@mui/material";
import {dateToDisplay} from "../../utils/Date.ts";
import {Divider} from "../landingPage/components/divider/Divider.tsx";
import {useScreenSizeContext} from "../../providers/ScreenSizeProvider.tsx";
import {getColNumber, getGapValue} from "../../utils/CssUtils.ts";
import {ReactNode} from "react";
import data from "../../data/works.json";
import {WorkType} from "../Works/Works.tsx";

interface sectionsInterface {
    type: string;
}

interface sectionInterface {
    heading: string;
    headingSize: "h2" | "h3" | "h4";
    text: string[];
}

interface textSectionInterface extends sectionsInterface {
    type: "text",
    sections: sectionInterface[]
}

interface imageSectionInterface extends sectionsInterface {
    type: "image",
    disposition: "landscape" | "portrait" | "single";
    images: {
        url: string;
        alt: string;
    }[];
}

export const Work = () => {
    const screenSize = useScreenSizeContext();

    const {id} = useParams();

    const workData = data.find((w: WorkType) => w.work_id.toString() === id);

    const imageSection: (data: imageSectionInterface) => ReactNode = (data: imageSectionInterface): ReactNode =>
        <ImageSectionWrapper>
            <ImageList variant="masonry"
                       cols={data.disposition === "single" ? 1 : data.disposition === "landscape" ? getColNumber(screenSize) - 1 : getColNumber(screenSize)}
                       gap={Number(getGapValue(screenSize, "number"))}>
                {data.images.map((item: { url: string, alt: string }): ReactNode => (
                    <ImageListItem key={item.url}>
                        <img
                            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.url}?w=248&fit=crop&auto=format`}
                            alt={item.alt}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </ImageSectionWrapper>

    const textSection: (data: textSectionInterface) => ReactNode = (data: textSectionInterface): ReactNode =>
        <TextSectionWrapper>
            {data.sections?.map((p: sectionInterface, index: number): ReactNode =>
                <div key={index}>
                    {p.heading && <Typography variant={p.headingSize ?? "h2"}>{p.heading}</Typography>}
                    {p.text.map((t: string) => <BodyStyled variant={"body1"} screensize={screenSize}>{t}</BodyStyled>)}
                </div>
            )}
        </TextSectionWrapper>

    if (workData === undefined) {
        return <Navigate to={"/"}/>
    }

    return (
        <GlobalWrapper>
            <HeaderWrapper>
                <Typography variant={"h1"}>{workData.work_name}</Typography>
                <Typography
                    variant={"h2"}>{dateToDisplay(workData.work_date_from, workData.work_date_to)}</Typography>
            </HeaderWrapper>
            {workData?.work_dedicated_page?.map((section: sectionsInterface, index: number): ReactNode =>
                <div key={index}>
                    <Divider/>
                    {
                        section.type === "image" ? imageSection(section as imageSectionInterface) : textSection(section as textSectionInterface)
                    }
                </div>
            )}
        </GlobalWrapper>
    )
}