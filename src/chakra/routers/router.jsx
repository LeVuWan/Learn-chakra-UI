import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

// layouts and pages
import Create from "../pages/Create";
import Profile from "../pages/Profile";
import RootLayout from "../layouts/RootLayout";
import App from "../../tailwind/taiwind";
import Dashboard from "../pages/Dashboard";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="create" element={<Create />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="tailwind" element={<App />} />
    </>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
