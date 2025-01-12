import {Outlet} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar.tsx";
import {ContentWrapper} from "./global.style.tsx";
import {CssBaseline} from "@mui/material";
import {useScreenSizeContext} from "./providers/ScreenSizeProvider.tsx";

export const App = () => {
    const screenSize = useScreenSizeContext();

    return (
        <>
            <ContentWrapper screensize={screenSize}>
                <Navbar />
                <CssBaseline/>
                <Outlet />
            </ContentWrapper>
        </>
    );
}

export default App
