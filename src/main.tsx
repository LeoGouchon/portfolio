import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {GlobalWrapper} from "./global.style.tsx";
import {CardList} from "./components/CardList/CardList.tsx";
import {CreateEntity} from "./components/CreateEntity.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createTheme, ThemeProvider} from "@mui/material";
import {themeOptions} from "./theme.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <CardList/>
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

const theme = createTheme(themeOptions)

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000, // Set a default stale time
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <GlobalWrapper>
                <StrictMode>
                    <RouterProvider router={router}/>
                </StrictMode>
            </GlobalWrapper>
        </ThemeProvider>
    </QueryClientProvider>
)
