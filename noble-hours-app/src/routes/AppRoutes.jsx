import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ShopPage from "../pages/ShopPage";
import LoginPage from "../pages/UserPage";
import LoginForm from "../components/Forms/LoginForm";
import RegisterForm from "../components/Forms/RegisterForm";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = (props) => {
  return (
    <>
      {/* Main Routes */}
      <Routes>
        {/* Index route to HomePage triggers page reload */}
        <Route
          index
          element={<HomePage />}
        />
        {/* Home route to HomePage - won't trigger reload */}
        <Route
          path="/home"
          element={<HomePage />}
        />
        {/* About route to AboutPage - won't trigger reload  */}
        <Route
          path="/about"
          element={<AboutPage />}
        />
        {/* Shop route to ShopPage Protected Route */}
        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <ShopPage />
            </ProtectedRoute>
          }
        />
        {/* User route to UserPage  */}
        <Route
          path="/user"
          element={<LoginPage />}>
          <Route
            path="/user/login"
            element={<LoginForm />}
          />
          <Route
            path="/user/register"
            element={<RegisterForm />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
