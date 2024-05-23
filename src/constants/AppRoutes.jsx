import React from "react";
import { Route, Routes } from "react-router-dom";
import RoleBasedRoute from "../features/RoleBasedRoute";
import { UserProvider } from "../features/UserContext";
import Login from "../pages/exmployee/Login";
import Register from "../pages/exmployee/Register";
import ForgotPassword from "../pages/exmployee/ForgotPassword";
import NotFound from "../components/Employee/Global/NotFound";
import Home from "../pages/exmployee/Home";
import Jobs from "../pages/exmployee/Jobs";
import JobApply from "../pages/exmployee/JobApply";
import JobDetails from "../pages/exmployee/JobDetails";
import JobCategories from "../pages/exmployee/JobCategories";
import UserProfile from "../pages/exmployee/UserProfile";
import Settings from "../pages/exmployee/Settings";
import AboutUs from "../pages/exmployee/AboutUs";
import ContactUs from "../pages/exmployee/ContactUs";
import Profile from "../pages/employer/Profile";
import PostJob from "../pages/employer/PostJob";
import Auth from "../components/Employee/Global/Auth";
import Layout from "../components/Employee/Global/Layout";

const AppRoutes = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Auth />} />
        <Route path="/not-found" element={<Layout pages={<NotFound />} />} />

        {/* Employee Routes */}
        <Route
          path="/employee/home"
          element={
            <RoleBasedRoute
              allowedRoles={["employee"]}
              element={<Layout pages={<Home />} />}
            />
          }
        />
        <Route
          path="/employee/jobs"
          element={
            <RoleBasedRoute
              allowedRoles={["employee"]}
              element={<Layout pages={<Jobs />} />}
            />
          }
        />
        <Route
          path="/employee/jobs/job-details/:id"
          element={
            <RoleBasedRoute
              allowedRoles={["employee"]}
              element={<Layout pages={<JobApply />} />}
            />
          }
        />
        <Route
          path="/employee/jobs/:id"
          element={
            <RoleBasedRoute
              allowedRoles={["employee"]}
              element={<Layout pages={<JobDetails />} />}
            />
          }
        />
        <Route
          path="/employee/job-categories"
          element={
            <RoleBasedRoute
              allowedRoles={["employee"]}
              element={<Layout pages={<JobCategories />} />}
            />
          }
        />
        <Route
          path="/employee/user-profile"
          element={
            <RoleBasedRoute
              allowedRoles={["employee"]}
              element={<UserProfile />}
            />
          }
        />
        <Route
          path="/employee/settings"
          element={
            <RoleBasedRoute
              allowedRoles={["employee"]}
              element={<Settings />}
            />
          }
        />
        <Route
          path="/employee/about-us"
          element={
            <RoleBasedRoute
              allowedRoles={["employee"]}
              element={<Layout pages={<AboutUs />} />}
            />
          }
        />
        <Route
          path="/employee/contact-us"
          element={
            <RoleBasedRoute
              allowedRoles={["employee"]}
              element={<Layout pages={<ContactUs />} />}
            />
          }
        />

        {/* Employer Routes */}
        <Route
          path="/employer/profile"
          element={
            <RoleBasedRoute allowedRoles={["employer"]} element={<Profile />} />
          }
        />
        <Route
          path="/employer/post-job"
          element={
            <RoleBasedRoute allowedRoles={["employer"]} element={<PostJob />} />
          }
        />

        <Route path="*" element={<Layout pages={<NotFound />} />} />
      </Routes>
    </UserProvider>
  );
};

export default AppRoutes;
