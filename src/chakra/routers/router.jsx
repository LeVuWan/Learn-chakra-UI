import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

// layouts and pages
import Dashboard, { tasksLoader } from "../pages/Dashboard";
import Create from "../pages/Create";
import Profile from "../pages/Profile";
import RootLayout from "../layouts/RootLayout";
import App from "../../tailwind/taiwind";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} loader={tasksLoader} />
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
