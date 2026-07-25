import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { signup } from "../services/auth.service";

export default function useSignup() {
  const navigate = useNavigate();

  const signupHandler = async (user, role) => {
    try {
      const { error } = await signup(user, role);

      if (error) throw error;

      toast.success("Signup successful! Please verify your email.");
      navigate("/login");

      return true;
    } catch (err) {
      toast.error(err.message);
      return false;
    }
  };

  return {
    signupHandler,
  };
}