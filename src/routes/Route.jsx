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
import MessageWebSo from "../components/shared/MessageWebSo";
import ProtectedRoute from "./ProtectedRoute";
import DashLayout from "../layouts/DashLayout";
import BloodGroupDonors from "../pages/donors/BloodGroupDonors";
import BloodTestBooking from "../pages/services/BloodTestBooking";


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
            },
            {
              path: '/group-donors',
              element: <BloodGroupDonors></BloodGroupDonors>
            },
             {
                path: '/message-web/:id',
                element: <ProtectedRoute><MessageWebSo></MessageWebSo></ProtectedRoute>
            },
            {
                path: '/test-book',
                element: <BloodTestBooking></BloodTestBooking>
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
    },
    {
        path: 'dash-layout',
        element: <DashLayout></DashLayout>,
        children: [
            {
                path: 'admin-pro',
            }
        ]
    }
])

export default router;