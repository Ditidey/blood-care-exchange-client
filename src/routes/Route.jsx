import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeMain from "../pages/Home/HomeMain/HomeMain";
import Services from "../pages/services/Services";
import BloodTest from "../components/BloodTest";
import BloodTrans from "../components/BloodTrans";


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
            },
            {
                path: '/blood-test',
                element: <BloodTest></BloodTest>
            },
            {
               path: '/blood-trans',
               element: <BloodTrans></BloodTrans>
            }

        ]
    }
])

export default router;