import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
export default function SignupForm() {
  const [role, setRole] = useState("volunteer");

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
          <p className="text-xs text-gray-600 mb-1">
            I want to join as:
          </p>

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
              required
              className="w-full mt-1 px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-xs text-gray-600">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="w-full mt-1 px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-xs text-gray-600">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full mt-1 px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-xs text-gray-600">Password</label>
            <input
              type="password"
              placeholder="........."
              required
              className="w-full mt-1 px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-xs text-gray-600">Confirm Password</label>
            <input
              type="password"
              placeholder="........."
              required
              className="w-full mt-1 px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium text-sm mt-2"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium cursor-pointer text-sm ">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}