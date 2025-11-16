import Register from "./modules/user/pages/Register.jsx";
import { Button } from "@radix-ui/themes";
import { AppRoutes } from "./shared/routes/AppRoutes.jsx";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.token; // true when logged in

  return (
    <>
      {/* Show Register + Login only if NOT logged in */}
      {!isLoggedIn && (
        <>
          <Button
            onClick={() => navigate("/register")}
            variant="soft"
            size="3"
            style={{ margin: 4 }}
          >
            Register
          </Button>

          <Button
            onClick={() => navigate("/login")}
            variant="classic"
            size="3"
            style={{ margin: 4 }}
          >
            Login
          </Button>
        </>
      )}

      {/* Your existing Logout button will remain wherever it already is */}

      <AppRoutes />
    </>
  );
}

export default App;
