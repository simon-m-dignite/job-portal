import { lazy } from "react";
import Auth from "../components/Employee/Global/Auth";
import Layout from "../components/Employee/Global/Layout";
import Dashboard from "../pages/employer/Dashboard";
import EmployerLayout from "../components/Employer/Global/EmployerLayout";
import Applications from "../pages/employer/Applications";
import ApplicationDetails from "../pages/employer/ApplicationDetails";
import MyJobs from "../pages/employer/MyJobs";
import Notifications from "../pages/employer/Notifications";
import EditJob from "../pages/employer/EditJob";
import EmployerSettings from "../pages/employer/EmployerSettings";
const NotFound = lazy(() => import("../components/Employee/Global/NotFound"));

const Home = lazy(() => import("../pages/exmployee/Home"));
const Jobs = lazy(() => import("../pages/exmployee//Jobs"));
const JobApply = lazy(() => import("../pages/exmployee//JobApply"));
const JobDetails = lazy(() => import("../pages/exmployee/JobDetails"));
const JobCategories = lazy(() => import("../pages/exmployee/JobCategories"));
const UserProfile = lazy(() => import("../pages/exmployee/UserProfile"));
const Settings = lazy(() => import("../pages/exmployee/Settings"));
const AboutUs = lazy(() => import("../pages/exmployee/AboutUs"));
const ContactUs = lazy(() => import("../pages/exmployee/ContactUs"));
const Login = lazy(() => import("../pages/exmployee/Login"));
const Register = lazy(() => import("../pages/exmployee/Register"));
const ForgotPassword = lazy(() => import("../pages/exmployee/ForgotPassword"));

// employer routes
const Profile = lazy(() => import("../pages/employer/Profile"));
const PostJob = lazy(() => import("../pages/employer/PostJob"));

export const routes = [
  {
    title: "Login Page",
    url: "/login",
    page: <Login />,
  },
  {
    title: "Register Page",
    url: "/register",
    page: <Register />,
  },
  {
    title: "Forgot Password Page",
    url: "/forgot-password",
    page: <ForgotPassword />,
  },
  {
    title: "Auth Page",
    url: "/",
    page: <Auth />,
  },
  {
    title: "Not Found Page",
    url: "/not-found",
    page: <Layout pages={<NotFound />} />,
  },
  {
    title: "Home Page",
    url: "/employee/home",
    page: <Layout pages={<Home />} />,
  },
  {
    title: "Jobs Page",
    url: "/employee/jobs",
    page: <Layout pages={<Jobs />} />,
  },
  {
    title: "JobApply Page",
    url: "/employee/jobs/job-details/:id",
    page: <Layout pages={<JobApply />} />,
  },
  {
    title: "JobDetails Page",
    url: "/employee/jobs/:id",
    page: <Layout pages={<JobDetails />} />,
  },
  {
    title: "JobCategories Page",
    url: "/employee/job-categories",
    page: <Layout pages={<JobCategories />} />,
  },
  {
    title: "UserProfile Page",
    url: "/employee/user-profile",
    page: <UserProfile />,
  },
  {
    title: "Settings Page",
    url: "/employee/settings",
    page: <Settings />,
  },
  {
    title: "AboutUs Page",
    url: "/employee/about-us",
    page: <Layout pages={<AboutUs />} />,
  },
  {
    title: "ContactUs Page",
    url: "/employee/contact-us",
    page: <Layout pages={<ContactUs />} />,
  },
  // employer pages
  {
    title: "Employer Dashboard Page",
    url: "/employer/dashboard",
    page: <EmployerLayout pages={<Dashboard/>} />,
  },
  {
    title: "Employer Edit Job Details Page",
    url: "/employer/my-jobs",
    page: <EmployerLayout pages={<MyJobs/>} />,
  },
  {
    title: "Employer Applications Page",
    url: "/employer/applications",
    page: <EmployerLayout pages={<Applications/>} />,
  },
  {
    title: "Employer Notifications Page",
    url: "/employer/post-job",
    page: <EmployerLayout pages={<ApplicationDetails/>} />,
  },
  {
    title: "Employer Profile Page",
    url: "/employer/profile",
    page: <Profile />,
  },
  {
    title: "Employer Post Job Page",
    url: "/employer/post-job",
    page: <EmployerLayout pages={<PostJob />} />,
  }, 
  {
    title: "Employer Applications Page",
    url: "/employer/notifications",
    page: <EmployerLayout pages={<Notifications />} />,
  },
  {
    title: "Employer Notifications Page",
    url: "/employer/edit-job/:id",
    page: <EmployerLayout pages={<EditJob />} />,
  },
  {
    title: "Employer Edit Job Details Page",
    url: "/employer/settings",
    page: <EmployerLayout pages={<EmployerSettings />} />,
  },
];
