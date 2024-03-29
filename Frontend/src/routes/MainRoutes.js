import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";
import Register from "pages/Schedule-Information/Register.js";
import ScrapingReport from "../pages/Report/Reports";
import DetailPage from "../pages/Report/ScreenshotDetails";
import ScrapingDetails from "../pages/Report/ScrapingDetails";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("pages/dashboard")));

// render - utilities


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "/Schedule-Information/Register",
      element: <Register />,
    },
    {
      path: "/Scraping-Report",
      element: <ScrapingReport />,
    },
  
    {
      path: "/details/:campaignId" ,
      element: <DetailPage />
    },
    {
      path: "/ScrapingDetails/:campaignId" ,
      element: <ScrapingDetails />
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },
  ],
};

export default MainRoutes;
