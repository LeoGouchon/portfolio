import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {GlobalWrapper} from "./global.style.tsx";
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";
import {themeOptions} from "./theme.ts";
import {Works} from "./components/Works/Works.tsx";
import {ScreenSizeProvider} from "./providers/ScreenSizeProvider.tsx";
import {LandingPage} from "./components/landingPage/LandingPage.tsx";
import {Work} from "./components/Work/Work.tsx";

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
            <ScreenSizeProvider>
                <ThemeProvider theme={theme}>
                    <GlobalWrapper>
                        <StrictMode>
                            <RouterProvider router={router}/>
                        </StrictMode>
                    </GlobalWrapper>
                </ThemeProvider>
            </ScreenSizeProvider>
    </QueryClientProvider>
)
