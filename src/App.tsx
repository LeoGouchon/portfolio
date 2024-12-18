import {Outlet} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar.tsx";
import {ContentWrapper} from "./global.style.tsx";
import {CssBaseline} from "@mui/material";

export const App = () => {
    return (
        <>
            <Navbar />
            <ContentWrapper>
                <CssBaseline/>
                <Outlet />
            </ContentWrapper>
        </>
    );
}

export default App
