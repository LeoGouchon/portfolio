import {Outlet} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar.tsx";

export const App = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default App
