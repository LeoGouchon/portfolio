import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Record} from "./components/Record.tsx";
import {RecordList} from "./components/RecordList.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <RecordList />
            }
        ]
    },
    {
        path: "/edit/:id",
        element: <App />,
        children: [
            {
                path: "/edit/:id",
                element: <Record />
            }
        ]
    },
    {
        path: "/create",
        element: <App />,
        children: [
            {
                path: "/create",
                element: <Record />
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
