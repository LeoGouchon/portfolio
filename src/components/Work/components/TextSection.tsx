import {ReactNode} from "react";
import {BodyStyled, HeadingWrapper, PartWrapper, TextSectionWrapper, TextWrapper} from "../Work.style.tsx";
import {Typography} from "@mui/material";
import {sectionInterface, sectionsInterface} from "../Work.tsx";
import {useScreenSizeContext} from "../../../providers/ScreenSizeProvider.tsx";

export interface textSectionInterface extends sectionsInterface {
    type: "text",
    sections: sectionInterface[]
}

export const TextSection: ({data}: { data: textSectionInterface }) => ReactNode = ({data}: {
    data: textSectionInterface
}): ReactNode => {
    const screenSize = useScreenSizeContext();

    return (
        <TextSectionWrapper>
            {data.sections?.map((p: sectionInterface, index: number): ReactNode =>
                <PartWrapper key={index} screensize={screenSize}>
                    <HeadingWrapper>
                        {p.heading && <Typography variant={p.headingSize ?? "h2"}>{p.heading}</Typography>}
                    </HeadingWrapper>
                    <TextWrapper>
                        {p.text.map((t: string) =>
                            <BodyStyled variant={"body1"}>{t}</BodyStyled>)}
                    </TextWrapper>
                </PartWrapper>
            )}
        </TextSectionWrapper>
    )
}
