import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Mainloader from "./Components/spinners/Spinner";
import Userdatatable from "./Pages/Userdatatable";
import Userdatagrid from "./Pages/Userdatagrid";
import Register from "./Pages/authentication/Register";
import Resetpassword from "./Pages/authentication/resetpassword";
import Otpverification from "./Pages/authentication/OtpVerification";
import Changepassword from "./Pages/authentication/Changepassword";

const PageRoutes = () => {
    const Login = lazy(() => import("./Pages/authentication/Login"));
    const Dashboard = lazy(() => import("./Pages/Dashboard"));
    const Users = lazy(() => import("./Pages/Users"));


    return (
        <Suspense fallback={<Mainloader />}>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user" element={<Users />} />
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Resetpassword" element={<Resetpassword/>} />
                <Route path="/OtpVerification" element={<Otpverification/>} />
                <Route path="/Changepassword" element={<Changepassword/>} />
               

            </Routes>
        </Suspense>
    );
};

export default PageRoutes;
