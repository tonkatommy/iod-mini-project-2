import { Routes } from "react-router-dom";

export const AppRoutes = (props) => {
  return (
    <>
      <Routes>
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="/shop"
          element={<ShopPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
      </Routes>
    </>
  );
};
