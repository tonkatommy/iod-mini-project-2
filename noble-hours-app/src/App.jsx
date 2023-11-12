import "./App.css";
import ResponsiveAppBar from "./components/AppBar/ResponsiveAppBar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <AppRoutes />
    </>
  );
};

export default App;
