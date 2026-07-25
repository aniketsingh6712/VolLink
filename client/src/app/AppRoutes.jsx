import { useRoutes } from "react-router-dom";

import authRoutes from "../features/auth/routes";

const routes = [
  ...authRoutes,

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