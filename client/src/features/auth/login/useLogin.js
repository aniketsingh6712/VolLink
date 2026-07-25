import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  login,
  getCurrentUser,
  getProfile,
  getOrganizationProfile,
} from "../services/auth.service";

export default function useLogin() {
  const navigate = useNavigate();

  const loginHandler = async (email, password) => {
    const { data, error } = await login(email, password);

    if (error) {
      toast.error(error.message);
      return false;
    }

    toast.success("Logged in successfully!");

    const {
      data: { user: authUser },
    } = await getCurrentUser();

    const { data: profile } = await getProfile(authUser.id);

    if (profile.role === "organization") {
      const { data: orgProfile } = await getOrganizationProfile(authUser.id);

      if (!orgProfile) {
        navigate("/organization/setup");
        return true;
      }

      navigate("/organization/profile");
      return true;
    }

    navigate("/volunteer/dashboard");
    return true;
  };

  return {
    loginHandler,
  };
}