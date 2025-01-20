import {Outlet, useLocation} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar.tsx";
import {ContentWrapper} from "./global.style.tsx";
import {CssBaseline} from "@mui/material";
import {useScreenSizeContext} from "./providers/ScreenSizeProvider.tsx";
import {motion, AnimatePresence} from "motion/react";

export const App = () => {
    const screenSize = useScreenSizeContext();

    const location = useLocation();

    const MotionContentWrapper = motion.create(ContentWrapper);

    return (
        <AnimatePresence mode={"wait"}>
            <MotionContentWrapper
                screensize={screenSize}
                key={location.pathname}
            >
                <Navbar/>
                <CssBaseline/>
                <Outlet/>
            </MotionContentWrapper>
        </AnimatePresence>
    );
}

export default App
