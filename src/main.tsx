import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {GlobalWrapper} from "./global.style.tsx";
import {CardList} from "./components/CardList/CardList.tsx";
import {CreateEntity} from "./components/CreateEntity.tsx";
import {Login} from "./components/login/Login.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";
import {themeOptions} from "./theme.ts";
import {AuthProvider} from "./providers/AuthProvider.tsx";
import {ProtectedRoute} from "./ProtectedRoute.tsx";
import {LandingPage} from "./components/landingPage/LandingPage.tsx";
import {Works} from "./components/Works/Works.tsx";
import {AboutMe} from "./components/AboutMe/AboutMe.tsx";
import {ScreenSizeProvider} from "./providers/ScreenSizeProvider.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <LandingPage/>
            }
        ]
    },
    {
        path: "/create",
        element: <App/>,
        children: [
            {
                path: "/create",
                element: (
                    <ProtectedRoute>
                        <CreateEntity/>
                    </ProtectedRoute>
                )
            }
        ]
    },
    {
        path: "/card",
        element:
            <App/>,
        children:
            [
                {
                    path: "/card",
                    element: <CardList/>
                }
            ]
    },
    {
        path: "/login",
        element:
            <App/>,
        children:
            [
                {
                    path: "/login",
                    element: <Login/>
                }
            ]
    },
    {
        path: "/about",
        element:
            <App/>,
        children:
            [
                {
                    path: "/about",
                    element: <AboutMe/>
                }
            ]
    },
    {
        path: "/works",
        element:
            <App/>,
        children:
            [
                {
                    path: "/works",
                    element: <Works/>
                }
            ]
    }
])

const theme = responsiveFontSizes(createTheme(themeOptions))

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <ScreenSizeProvider>
                <ThemeProvider theme={theme}>
                    <GlobalWrapper>
                        <StrictMode>
                            <RouterProvider router={router}/>
                        </StrictMode>
                    </GlobalWrapper>
                </ThemeProvider>
            </ScreenSizeProvider>
        </AuthProvider>
    </QueryClientProvider>
)
