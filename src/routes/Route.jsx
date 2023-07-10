import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeMain from "../pages/Home/HomeMain/HomeMain";
import Services from "../pages/services/Services";
import BloodTest from "../components/BloodTest";
import BloodTrans from "../components/BloodTrans";
import AuthenticLayout from "../layouts/AuthenticLayout";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import BecomeDonors from "../pages/donors/BecomeDonors";
import RegularDonors from "../pages/donors/RegularDonors";
import RegisteredDonors from "../pages/donors/RegisteredDonors";
import Platelet from "../pages/donors/Platelet";


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
            },
            {
                path: '/regular-donors',
                element: <RegularDonors></RegularDonors>
            },
            {
                path: '/registered-donors',
                element: <RegisteredDonors></RegisteredDonors>
            },
            {
                path: '/platelet-donors',
                element: <Platelet></Platelet>
            }

        ]
    },
    {
        path: 'auth-layout',
        element: <AuthenticLayout></AuthenticLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'become-donor',
                element: <BecomeDonors></BecomeDonors>
            }
        ]
    }
])

export default router;