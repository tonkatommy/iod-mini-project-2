import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import LoginPage from "../pages/UserPage";
import LoginForm from "../components/Forms/LoginForm";
import RegisterForm from "../components/Forms/RegisterForm";

const AppRoutes = (props) => {
  return (
    <>
      <Routes>
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="/home"
          element={<HomePage />}
        />
        <Route
          path="/shop"
          element={<ShopPage />}
        />
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
