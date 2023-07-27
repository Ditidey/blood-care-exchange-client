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
import TransDonation from "../pages/services/TransDonation";
import Treatment from "../pages/services/treatment/Treatment";
import AllTreatment from "../pages/services/treatment/AllTreatment";
import BloodTreatLearn from "../components/BloodTreatLearn";
import UserProfile from "../pages/dashPage/userPages/UserProfile";
import Research from "../pages/Home/Research";
import BloodNeeded from "../pages/Home/HomeMain/BloodNeeded/BloodNeeded";
import DoctorProfile from "../pages/dashPage/DoctorPage/DoctorProfile";
import AdminProfile from "../pages/dashPage/AdminPage/AdminProfile";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            // home pages
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
            // services pages
            {
 
            },
            {
                path: '/test-book',
                element: <BloodTestBooking></BloodTestBooking>
            },
            {
                path: '/trans-donation',
                element: <TransDonation></TransDonation>
            },
            {
                path: '/treatment',
                element: <Treatment></Treatment>
            },
            {
                path: '/all-treatment',
                element: <AllTreatment></AllTreatment>
            },
            {
                path: '/treat-learn',
                element: <BloodTreatLearn></BloodTreatLearn>
            },
            {
                path: '/research',
                element: <Research></Research>
            },
            {
                path: '/blood-need',
                element: <BloodNeeded></BloodNeeded>
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
                path: 'user-pro',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'doctor-pro',
                element: <DoctorProfile></DoctorProfile>
            },
            {
                path: 'admin-pro',
                element: <AdminProfile></AdminProfile>
            }
        ]
    }
])

export default router;