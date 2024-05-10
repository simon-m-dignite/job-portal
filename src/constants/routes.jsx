import { lazy } from "react";
import Auth from "../components/Employee/Global/Auth";
import Layout from "../components/Employee/Global/Layout";

const Home = lazy(() => import("../pages/exmployee/Home"));
const Jobs = lazy(() => import("../pages/exmployee//Jobs"));
const JobApply = lazy(() => import("../pages/exmployee//JobApply"));
const JobDetails = lazy(() => import("../pages/exmployee/JobDetails"));
const JobCategories = lazy(() => import("../pages/exmployee/JobCategories"));
const UserProfile = lazy(() => import("../pages/exmployee/UserProfile"));
const AboutUs = lazy(() => import("../pages/exmployee/AboutUs"));
const ContactUs = lazy(() => import("../pages/exmployee/ContactUs"));
const Login = lazy(() => import("../pages/exmployee/Login"));
const Register = lazy(() => import("../pages/exmployee/Register"));

export const routes = [
  {
    title: "Auth Page",
    url: "/",
    page: <Auth />,
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
    url: "/employee/user-profile/:id",
    page: <UserProfile />,
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
];