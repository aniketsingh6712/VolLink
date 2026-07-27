import { useRoutes } from "react-router-dom";

import authRoutes from "../features/auth/routes";
import managerRoutes from "../features/manager/Routes";
import volunteerRoutes from "../features/volunteer/route";
import organizationRoutes from "../features/organization/routes";
const routes = [
  ...authRoutes,
...managerRoutes,
...volunteerRoutes,
...organizationRoutes,
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