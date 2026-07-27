import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { HiLockClosed } from "react-icons/hi";
import { supabase } from "../../../utils/supabase";
export default function OrganizationVerificationGuard({
  children,
}) {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [verified, setVerified] = useState(false);

  // CHECK VERIFICATION
  useEffect(() => {

    checkVerification();

  }, []);

  // LOCK BODY SCROLL
  useEffect(() => {

    if (!verified) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

  }, [verified]);

  const checkVerification = async () => {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      navigate("/login");
      return;
    }

    const { data: orgProfile } = await supabase
      .from("organization_profiles")
      .select("verified")
      .eq("user_id", user.id)
      .single();

    setVerified(orgProfile?.verified || false);

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">

      <div className="flex flex-col items-center gap-4">

        {/* SPINNER */}
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        {/* TEXT */}
        <p className="text-gray-500 font-medium">
          Loading ...
        </p>

      </div>

    </div>
    );
  }
  return (
   <div className="relative min-h-screen overflow-hidden">

      {/* PAGE CONTENT */}
      <div
        className={`transition ${
          !verified
            ? "blur-sm pointer-events-none select-none opacity-70"
            : ""
        }`}
      >
        {children}
      </div>

      {/* LOCK OVERLAY */}
      {!verified && (

        <div className="fixed inset-0 flex items-center justify-center px-4 z-50 backdrop-blur-[2px]">

          <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-10 text-center border">

            {/* ICON */}
            <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center mx-auto">

              <HiLockClosed
                className="text-yellow-600"
                size={42}
              />

            </div>

            {/* TITLE */}
            <h1 className="text-3xl font-bold text-[#0F172A] mt-6">
              Verification Pending
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-500 mt-4 leading-relaxed">

              Your organization profile is currently under admin review.

              <br /><br />

              Once verified, you'll gain access to all organization tools,
              event creation, volunteer management, and analytics.

            </p>

            {/* STATUS */}
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-4">

              <p className="text-yellow-700 font-semibold">
                ⏳ Waiting for Admin Approval
              </p>

              <p className="text-sm text-yellow-600 mt-1">
                Average approval time: 24–48 hours
              </p>

            </div>

            {/* ACTIONS */}
            <div className="flex gap-4 mt-8">

              <button
                onClick={() => navigate("/organization/profile")}
                className="flex-1 border border-gray-200 py-3 rounded-2xl font-medium hover:bg-gray-50 transition"
              >
                View Profile
              </button>

              <button
                onClick={() => navigate("/organization/edit/application")}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-medium transition"
              >
                Edit Application
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}