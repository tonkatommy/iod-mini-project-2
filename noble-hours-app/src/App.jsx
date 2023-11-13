import "./App.css";
import ResponsiveAppBar from "./components/AppBar/ResponsiveAppBar";
import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <UserProvider>
        <ResponsiveAppBar />
        <AppRoutes />
      </UserProvider>
    </>
  );
};

export default App;
