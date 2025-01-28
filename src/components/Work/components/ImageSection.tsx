import {ReactNode} from "react";
import {ImageSectionWrapper} from "../Work.style.tsx";
import {ImageList, ImageListItem} from "@mui/material";
import {getColNumber, getGapValue} from "../../../utils/CssUtils.ts";
import {sectionsInterface} from "../Work.tsx";
import {useScreenSizeContext} from "../../../providers/ScreenSizeProvider.tsx";

export interface imageSectionInterface extends sectionsInterface {
    type: "image",
    disposition: "landscape" | "portrait" | "single";
    images: {
        url: string;
        alt: string;
    }[];
}

export const ImageSection: ({data}: {data: imageSectionInterface}) => ReactNode = ({data}: {data: imageSectionInterface}): ReactNode => {
    const screenSize = useScreenSizeContext();

    return (
        <ImageSectionWrapper screensize={screenSize}>
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
    )
}