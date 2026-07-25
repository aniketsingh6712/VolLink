import LoginPage from "./login/LoginPage";
import SignupPage from "./signup/SignupPage";

const authRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <SignupPage />,
  },
];

export default authRoutes;