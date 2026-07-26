import { useRoutes } from "react-router-dom";

import authRoutes from "../features/auth/routes";
import managerRoutes from "../features/manager/Routes";
const routes = [
  ...authRoutes,
...managerRoutes,
  // Organization Routes
  // ...organizationRoutes,

  // Volunteer Routes
  // ...volunteerRoutes,

  // Manager Routes
  // ...managerRoutes,
];

export default function AppRoutes() {
  return useRoutes(routes);
}