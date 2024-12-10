import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {GlobalWrapper} from "./global.style.tsx";
import {DriverList} from "./components/DriverList.tsx";
import {CreateEntity} from "./components/CreateEntity.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <DriverList/>
            }
        ]
    },
    {
        path: "/create",
        element: <App/>,
        children: [
            {
                path: "/create",
                element: <CreateEntity/>
            }
        ]
    },
    {
        path: "/driver",
        element: <App/>,
        children: [
            {
                path: "/driver",
                element: <DriverList/>
            }
        ]
    }
])

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <GlobalWrapper>
            <StrictMode>
                <RouterProvider router={router}/>
            </StrictMode>
        </GlobalWrapper>
    </QueryClientProvider>
)
