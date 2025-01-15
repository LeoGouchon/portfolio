// import {Navigate, useParams} from "react-router-dom";
// import {BodyStyled, GlobalWrapper, HeaderWrapper, ImageSectionWrapper, TextSectionWrapper} from "./Work.style.tsx";
// import {ImageList, ImageListItem, Typography} from "@mui/material";
// import {dateToDisplay} from "../../utils/Date.ts";
// import {Divider} from "../landingPage/components/divider/Divider.tsx";
// import {useScreenSizeContext} from "../../providers/ScreenSizeProvider.tsx";
// import {getColNumber, getGapValue} from "../../utils/CssUtils.ts";
// import {ReactNode} from "react";
// import data from "../../data/works.json";
// import {WorkType} from "../Works/Works.tsx";
//
// interface sectionsInterface {
//     type: string;
//     heading: string;
// }
//
// interface textSectionInterface extends sectionsInterface {
//     type: "text",
//     body: string[];
// }
//
// interface imageSectionInterface extends sectionsInterface {
//     type: "image",
//     disposition: "landscape" | "portrait" | "single";
//     images: {
//         url: string;
//         alt: string;
//     }[];
// }

export const Work = () => {
    return("In progress")
    // const screenSize = useScreenSizeContext();
    //
    // const {id} = useParams();
    //
    // const workData = data.find((w: WorkType) => w.work_id.toString() === id);
    //
    // const imageSection: (data: imageSectionInterface) => ReactNode = (data: imageSectionInterface): ReactNode => <ImageSectionWrapper>
    //     <Typography variant={"h2"}>{data.heading}</Typography>
    //     <ImageList variant="masonry" cols={data.disposition === "single" ? 1 : data.disposition === "landscape" ? getColNumber(screenSize) - 1 : getColNumber(screenSize) } gap={Number(getGapValue(screenSize, "number"))}>
    //         {data.images.map((item: {url: string, alt: string}): ReactNode => (
    //             <ImageListItem key={item.url}>
    //                 <img
    //                     srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //                     src={`${item.url}?w=248&fit=crop&auto=format`}
    //                     alt={item.alt}
    //                     loading="lazy"
    //                 />
    //                 {/*<ImageListItemBar*/}
    //                 {/*    title={item.alt}*/}
    //                 {/*    position={"below"}*/}
    //                 {/*/>*/}
    //             </ImageListItem>
    //         ))}
    //     </ImageList>
    // </ImageSectionWrapper>
    //
    // const textSection: (data: textSectionInterface) => ReactNode = (data: textSectionInterface): ReactNode => <TextSectionWrapper>
    //     <Typography variant={"h2"}>{data.heading}</Typography>
    //     {data.body.map((p: string, index: number): ReactNode => <BodyStyled variant={"body1"} key={index} screensize={screenSize}>{p}</BodyStyled>)}
    //
    // </TextSectionWrapper>
    //
    // if (workData === undefined) {
    //     return <Navigate to={"/"}/>
    // }
    //
    // return (
    //     <GlobalWrapper>
    //         {/*<HeaderWrapper>*/}
    //         {/*    <Typography variant={"h1"}>{workData.work_name}</Typography>*/}
    //         {/*    <Typography*/}
    //         {/*        variant={"h2"}>{dateToDisplay(workData.work_date_from, workData.work_date_to)}</Typography>*/}
    //         {/*</HeaderWrapper>*/}
    //         {/*{workData?.work_content?.map((section: sectionsInterface, index: number): ReactNode =>*/}
    //         {/*    <div key={index}>*/}
    //         {/*        <Divider />*/}
    //         {/*        {*/}
    //         {/*            section.type === "image" ? imageSection(section as imageSectionInterface) : textSection(section as textSectionInterface)*/}
    //         {/*        }*/}
    //         {/*    </div>*/}
    //         {/*)}*/}
    //     </GlobalWrapper>
    // )
}