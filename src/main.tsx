import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {GlobalWrapper} from "./global.style.tsx";
import {DataList} from "./components/DataList.tsx";
import {CardList} from "./components/CardList/CardList.tsx";
import {CreateEntity} from "./components/CreateEntity.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <DataList/>
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
        path: "/list",
        element: <App/>,
        children: [
            {
                path: "/list",
                element: <DataList/>
            }
        ]
    },
    {
        path: "/card",
        element: <App/>,
        children: [
            {
                path: "/card",
                element: <CardList/>
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
