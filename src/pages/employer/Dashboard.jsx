import React, { useEffect } from "react";
import Analytics from "../../components/Employer/Dashboard/Analytics";
import RecentJobApplications from "../../components/Employer/Dashboard/RecentJobApplications";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Jobstack - Dashboard";
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <Analytics />
      <RecentJobApplications />
    </div>
  );
};

export default Dashboard;
