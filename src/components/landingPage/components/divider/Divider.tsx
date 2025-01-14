import {DividerWrapper, ElementWrapper} from "./Divider.style.tsx";
import {SouthEast, SouthWest, South,} from "@mui/icons-material";
import {useScreenSizeContext} from "../../../../providers/ScreenSizeProvider.tsx";

export const Divider = () => {
    const screenSize = useScreenSizeContext();

    return (
        <DividerWrapper screensize={screenSize}>
            <ElementWrapper>
                <SouthEast/>
                <South/>
                <SouthWest/>
            </ElementWrapper>
        </DividerWrapper>
    )
}