import {Outlet} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar.tsx";
import {ContentWrapper} from "./global.style.tsx";

export const App = () => {
    return (
        <>
            <Navbar />
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
        </>
    );
}

export default App
