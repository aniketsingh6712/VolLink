import { useState } from "react";
import { supabase } from "../../../utils/supabase";
import { useNavigate } from "react-router-dom";

import { MdVerifiedUser } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuMapPin } from "react-icons/lu";
import { TbFileDescription } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { toast } from "react-toastify";
export default function OrganizationSetup() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    org_name: "",
    description: "",
    website: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { error } = await supabase
        .from("organization_profiles")
        .insert([
          {
            user_id: user.id,
            ...formData,
            verified: false,
          },
        ]);

      if (error) throw error;

      toast.success("Organization profile submitted successfully!");
      navigate("/organization/profile");
    } catch (err) {
      alert(err.message);
      toast.error("Failed to submit organization profile.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-10">

      <div className="max-w-5xl mx-auto">

        {/* TOP HEADER */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 md:p-10 text-white shadow-lg relative overflow-hidden">

          {/* Background Blur */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute right-20 bottom-0 w-24 h-24 bg-white/10 rounded-full"></div>

          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-5 backdrop-blur-sm">
              <MdVerifiedUser size={34} />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold">
              Organization Verification
            </h1>

            <p className="text-blue-100 mt-3 max-w-2xl leading-relaxed">
              Complete your organization profile to unlock event creation,
              volunteer management, and organization dashboard access.
            </p>

          </div>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 mt-[-30px] relative z-20 overflow-hidden">

          {/* HEADER */}
          <div className="border-b px-8 py-6 bg-slate-50">

            <h2 className="text-2xl font-bold text-[#0F172A]">
              Organization Details
            </h2>

            <p className="text-gray-500 mt-1">
              Your application will be reviewed by the VOL-LINK admin team.
            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-8 space-y-7"
          >

            {/* ORGANIZATION NAME */}
            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
                <HiOutlineBuildingOffice2 size={18} />
                Organization Name
              </label>

              <input
                type="text"
                name="org_name"
                required
                value={formData.org_name}
                onChange={handleChange}
                placeholder="Helping Hands Foundation"
                className="w-full border border-gray-200 rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
                <TbFileDescription size={18} />
                Organization Description
              </label>

              <textarea
                rows="5"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your organization, mission, and activities..."
                className="w-full border border-gray-200 rounded-2xl px-4 py-3.5 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* TWO COLUMN */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* WEBSITE */}
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
                  <FiGlobe size={18} />
                  Website
                </label>

                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourorg.com"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* ADDRESS */}
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
                  <LuMapPin size={18} />
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Bangalore, India"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

            </div>

            {/* INFO BOX */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

              <h3 className="font-semibold text-blue-800 mb-2">
                Verification Process
              </h3>

              <ul className="space-y-2 text-sm text-blue-700">

                <li>
                  • Admin team will review your organization details
                </li>

                <li>
                  • Verified organizations can create and manage events
                </li>

                <li>
                  • Approval usually takes 24-48 hours
                </li>

              </ul>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-2">

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-3 rounded-2xl border border-gray-200 hover:bg-gray-50 transition font-medium"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-3 rounded-2xl font-medium flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Application
                    <FaArrowRight size={14} />
                  </>
                )}
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
}