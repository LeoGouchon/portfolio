import {
    CTAWrapper,
    DescriptionWrapper,
    HeadersShowcaseWrapper,
    ImageShowcase,
    TextWrapper,
    WorkShowcaseWrapper
} from "./ShowcaseWork.style.tsx";
import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {WorkType} from "../../Works.tsx";
import {useScreenSizeContext} from "../../../../providers/ScreenSizeProvider.tsx";

export const ShowcaseWork = ({highlightWork}: {highlightWork: WorkType}) => {
    const navigate = useNavigate();

    const screenSize = useScreenSizeContext();

    return (
        <WorkShowcaseWrapper screensize={screenSize}>
            <HeadersShowcaseWrapper screensize={screenSize}>
                <TextWrapper>
                    <DescriptionWrapper>
                        <Typography variant={"subtitle1"}>{highlightWork?.work_short_description}</Typography>
                    </DescriptionWrapper>
                </TextWrapper>
                <CTAWrapper>
                    <Button
                        variant={"outlined"}
                        color={"inherit"}
                        disabled={!highlightWork?.work_has_dedicated_page}
                        onClick={() => navigate(`/works/${highlightWork?.work_id}`)}
                    >
                        Show more
                    </Button>
                    <Button variant={"outlined"} color={"inherit"}>Share</Button>
                </CTAWrapper>
            </HeadersShowcaseWrapper>
            <ImageShowcase
                screensize={screenSize}
                img={highlightWork?.work_image_showcase}/>
        </WorkShowcaseWrapper>
    )
}