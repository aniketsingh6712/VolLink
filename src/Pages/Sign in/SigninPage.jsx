import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import { supabase } from "../../utils/supabase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function SignupForm() {
  const [errors, setErrors] = useState({}); // for validation errors
  const [role, setRole] = useState("volunteer");
  const [user, setUser] = useState({
    email: "",
    password: "",

    full_name: "",
    phone: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Signup Handler
  const signupHandler = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      // 1️⃣ Sign up with Supabase Auth
      const { data, error } = await supabase.auth.signUp({
  email: user.email,
  password: user.password,
  options: {
    data: {
      full_name: user.full_name,
      role,
      phone: user.phone,
    },
  },
});
      if (error) throw error;

      toast.success("Signup successful! Please verify your email.");
      navigate("/login");
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  };

  const validate = () => {
    let newErrors = {};

    // Full Name
    if (!user.full_name.trim()) {
      newErrors.full_name = "Full name is required";
    }

    // Email
    if (!user.email) {
      newErrors.email = "Email is required";
    }

    // Password regex
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!user.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(user.password)) {
  
      newErrors.password =
        "Min 8 chars, 1 uppercase, 1 number, 1 special character";
    }
    else if(user.password !== user.confirmPassword) {
      console.log("Password:", user.password, "Confirm:", user.confirmPassword);
      newErrors.confirmPassword = "Passwords do not match";
    }

    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;

    if (!user.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(user.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 mx-auto">
        {/* Heading */}
        <h2 className="text-xl font-bold text-center text-[#0F172A]">
          Create Your Account
        </h2>
        <p className="text-center text-gray-500 mt-1 text-sm">
          Join VOL-LINK and make an impact
        </p>

        {/* Role Toggle */}
        <div className="mt-4">
          <p className="text-xs text-gray-600 mb-1">I want to join as:</p>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setRole("volunteer")}
              className={`py-2 rounded-lg border text-sm ${
                role === "volunteer"
                  ? "border-blue-500 text-blue-600 bg-blue-50"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              Volunteer
            </button>

            <button
              onClick={() => setRole("organization")}
              className={`py-2 rounded-lg border text-sm ${
                role === "organization"
                  ? "border-green-500 text-green-600 bg-green-50"
                  : "border-gray-300 text-gray-600"
              }`}
            >
              Organization
            </button>
          </div>
        </div>

        {/* Google Sign In */}
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
            <label className="text-xs text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              name="full_name"
              required
              className="w-full mt-1 px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.full_name}
              onChange={handleChange}
            />

            {errors.full_name && (
              <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>
            )}
          </div>

          <div>
            <label className="text-xs text-gray-600">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              name="email"
              required
              className="w-full mt-1 px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.email}
              onChange={handleChange}
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="text-xs text-gray-600">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              className="w-full mt-1 px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="text-xs text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="........."
              required
              className="w-full mt-1 px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.password}
              onChange={handleChange}
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="text-xs text-gray-600">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="........."
              required
              className="w-full mt-1 px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            onClick={signupHandler}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium text-sm mt-2"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium cursor-pointer text-sm "
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
