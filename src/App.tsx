import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AuthenticationBody } from './components';
import { SuperAdminSignUp } from './pages';
import CreateAdmin from './pages/CreateAdmin'
import "./App.css";
import FlexImg from "./assets/flex-img.jpg";
import InputFields from "./components/inputs/InputFields";
import Navbar from "../src/components/navbar/Navbar";
import AuthLayout from "./layout/Auth/AuthLayout";
import Admin_Dashboard from "./pages/admin_Dashboard/Admin_Dashboard";
import ResetPassword from "./pages/reset_password/ResetPassword";
import GetUsers from "./pages/getUsers/getUsers";
import ForgotPassword from "./pages/forgot_password/ForgotPassword";
import User_Mgt_Dashboard from "./pages/user_mgt_dashboard/User_Mgt_Dashboard";
import Dashboard from "./pages/dashboard/Dashboard";
import LogoutPage from "./pages/logout_Page/LogoutPage";
import PerformanceReport from "./components/performanceReport/PerformanceReport"
import ViewAllAdminPage from "./pages/ViewAllAdminPage/ViewAllAdminsPage";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import Profile_Page from "./pages/profile_page/Profile_Page";
import AdminStack from './pages/admin_stack/AdminStack';
import StudentDashBoard from "./pages/studentDashboard/StudentDashBoard";
import AdminManagementPage from "./pages/AdminManagementPage/AdminManagementPage";
import HomePage from './pages/LandingPage/LandingPage';
import Signup from './pages/SignupPage/Signup';
import ViewAllUserPage from './pages/ViewAllUserPage/ViewAllUserPage';
import AuthenticationBodySuperAdmin from './components/authenticationBodySuperAdmin';
import CreateUser from './pages/createUser';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/forgot-password"
          element={
            <AuthLayout
              leftContent={<ForgotPassword />}
            />
          }
        />


        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthenticationBody />} />
        <Route path="/superadminlogin" element={<AuthenticationBodySuperAdmin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/superadmin_signup" element={<SuperAdminSignUp />} />
        <Route path="/updatepassword" element={<UpdatePasswordPage />} />
        <Route path="/performancereport" element={<PerformanceReport />} />
        <Route path="/admindashboard" element={<ViewAllAdminPage />} />
        <Route path="/reset-password" element={<AuthLayout />} />
        <Route path="/createadmin" element={<CreateAdmin />} />
        <Route path="/createuser" element={<CreateUser />} />

        <Route
          path="/reset-password"
          element={
            <AuthLayout
              leftContent={<ResetPassword />}
              rightContent={
                <img className="flex--img" src={FlexImg} alt="guy typing" />
              }
            />
          }
        />
        <Route path="/admindashboard" element={<Admin_Dashboard />} />
        <Route path="/stack" element={<AdminStack />} />
        <Route path="/profile-page" element={<Profile_Page />} />
        <Route path="/userdashboard" element={<StudentDashBoard />} />
        <Route path="/dashboard" element={<AdminStack />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/adminmanagement" element={<AdminManagementPage />} />
        <Route path="/viewdecadevs" element={<ViewAllUserPage />} />
        <Route path="/viewadmins" element={<ViewAllAdminPage />} />

      </Routes>

    </div>
  );
}

export default App;
