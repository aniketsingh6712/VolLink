// pages/LoginPage.jsx

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function LoginPage() {

 const [user,setUser]=useState({
  email:"",
  password:""
 })
 const navigate = useNavigate();
  const loginWithEmailHandler = async (event) => {
  event.preventDefault();

  const { email, password } = user;

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    toast.error(error.message);
    return;
  }
  console.log(data);
  toast.success("Logged in successfully!");
 // GET CURRENT USER
    const {
      data: { authUser },
    } = await supabase.auth.getUser();

    // FETCH PROFILE
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", authUser.id)
      .single();

    // ORGANIZATION FLOW
    if (profile.role === "organization") {

      const { data: orgProfile } = await supabase
        .from("organization_profiles")
        .select("*")
        .eq("user_id", authUser.id)
        .single();

      // NOT APPLIED
      if (!orgProfile) {
        navigate("/organization/setup");
        return;
      }

      // APPLIED
      navigate("/organization/profile");
      return;
    }

    // VOLUNTEER FLOW
    navigate("/volunteer/dashboard");
};
  return (
    <div className="min-h-screen bg-[#F1F5F9] flex items-center justify-center px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-900 text-center">
          Log In to VOL-LINK
        </h2>

        <p className="text-center text-sm text-gray-500 mt-1">
          Welcome back! Please enter your details
        </p>

        {/* Google Login */}
        <button className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-lg hover:bg-gray-50 transition text-sm">
          <FcGoogle className="text-lg" />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-2 text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Form */}
        <form className="space-y-3">

          <div>
            <label className="text-xs text-gray-600">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="w-full mt-1 px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value})}
            />
          </div>

          <div>
            <label className="text-xs text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              required
              className="w-full mt-1 px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.password}
              onChange={(e) => setUser({...user, password: e.target.value})}
            />
          </div>

          {/* Login Button */}
          <button
           onClick={loginWithEmailHandler}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium text-sm mt-2"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}