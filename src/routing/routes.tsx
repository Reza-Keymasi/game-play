import {createBrowserRouter} from "react-router-dom"
import GameDatailsPage from "../pages/GameDatailsPage"
import HomePage from "../pages/HomePage"
import Layout from "../pages/Layout"


const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout />,
        children:[
            {index:true,element:<HomePage />},
            {path:"games/:id",element:<GameDatailsPage />},
        ]
    }
])

export default router