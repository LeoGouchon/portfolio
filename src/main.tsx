import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {GlobalStyles, GlobalWrapper} from "./global.style.tsx";
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";
import {themeOptions} from "./theme.ts";
import {Works} from "./components/Works/Works.tsx";
import {ScreenSizeProvider} from "./providers/ScreenSizeProvider.tsx";
import {LandingPage} from "./components/landingPage/LandingPage.tsx";
import {Work} from "./components/Work/Work.tsx";
import {SpeedInsights} from "@vercel/speed-insights/react";
import {Global} from "@emotion/react";

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
        path: "/works",
        element:
            <App/>,
        children:
            [
                {
                    path: "/works",
                    element: <Works/>
                },
                {
                    path: "/works/:id",
                    element: <Work/>
                }
            ]
    }
])

const theme = responsiveFontSizes(createTheme(themeOptions));

createRoot(document.getElementById('root')!).render(
    <ScreenSizeProvider>
        <ThemeProvider theme={theme}>
            <GlobalWrapper>
                <StrictMode>
                    <Global styles={GlobalStyles} />
                    <RouterProvider router={router}/>
                    <SpeedInsights />
                </StrictMode>
            </GlobalWrapper>
        </ThemeProvider>
    </ScreenSizeProvider>
);