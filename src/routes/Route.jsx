import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeMain from "../pages/Home/HomeMain/HomeMain";
import Services from "../pages/services/Services";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeMain></HomeMain>
            },
            {
                path: '/services',
                element: <Services></Services>
            }

        ]
    }
])

export default router;