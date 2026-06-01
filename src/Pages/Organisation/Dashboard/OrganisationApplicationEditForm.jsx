import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase";
import { useNavigate } from "react-router-dom";

import { MdVerifiedUser } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuMapPin } from "react-icons/lu";
import { TbFileDescription } from "react-icons/tb";
import { FaArrowRight, FaCamera } from "react-icons/fa6";

export default function EditOrganizationApplication() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    org_name: "",
    description: "",
    website: "",
    address: "",
    logo_url: "",
    review_message: "",
  });

  // FETCH EXISTING DATA
  useEffect(() => {

    fetchOrganizationData();

  }, []);

  const fetchOrganizationData = async () => {

    try {

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/login");
        return;
      }

      const { data, error } = await supabase
        .from("organization_profiles")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (error) throw error;

      setFormData(data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);
    }
  };

  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE LOGO UPLOAD
  const handleImageUpload = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    try {

      setUploading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/login");
        return;
      }

      const fileExt = file.name.split(".").pop();

      const fileName = `${user.id}-${Date.now()}.${fileExt}`;

      // UPLOAD
      const { error: uploadError } = await supabase.storage
        .from("organization-logos")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // PUBLIC URL
      const {
        data: { publicUrl },
      } = supabase.storage
        .from("organization-logos")
        .getPublicUrl(fileName);

      // UPDATE STATE
      setFormData({
        ...formData,
        logo_url: publicUrl,
      });

    } catch (err) {

      alert(err.message);

    } finally {

      setUploading(false);
    }
  };

  // UPDATE APPLICATION
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setSaving(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { error } = await supabase
        .from("organization_profiles")
        .update({
          org_name: formData.org_name,
          description: formData.description,
          website: formData.website,
          address: formData.address,
          logo_url: formData.logo_url,

          // RESET VERIFICATION AFTER EDIT
          verified: false,
        })
        .eq("user_id", user.id);

      if (error) throw error;

      navigate("/organization/dashboard");

    } catch (err) {

      alert(err.message);

    } finally {

      setSaving(false);
    }
  };

if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">

      <div className="flex flex-col items-center gap-4">

        {/* LOADER */}
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        {/* TEXT */}
        <p className="text-gray-500 font-medium text-sm tracking-wide">
          Loading...
        </p>

      </div>

    </div>
  );
}

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-10">

      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 md:p-10 text-white shadow-lg relative overflow-hidden">

          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>

          <div className="absolute right-20 bottom-0 w-24 h-24 bg-white/10 rounded-full"></div>

          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-5 backdrop-blur-sm">

              <MdVerifiedUser size={34} />

            </div>

            <h1 className="text-3xl md:text-4xl font-bold">

              Edit Organization Application

            </h1>

            <p className="text-blue-100 mt-3 max-w-2xl leading-relaxed">

              Update your organization information and resubmit your
              application for admin verification.

            </p>

          </div>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 mt-[-30px] relative z-20 overflow-hidden">

          {/* HEADER */}
          <div className="border-b px-8 py-6 bg-slate-50">

            <h2 className="text-2xl font-bold text-[#0F172A]">

              Organization Information

            </h2>

            <p className="text-gray-500 mt-1">

              Keep your organization details accurate and up to date.

            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-8 space-y-7"
          >

            {/* LOGO */}
            <div className="flex justify-center">

              <div className="relative group">

                <div className="w-36 h-36 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-lg">

                  {formData.logo_url ? (
                    <img
                      src={formData.logo_url}
                      alt="Organization Logo"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-gray-500">
                      {formData.org_name?.charAt(0)}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                    <FaCamera className="text-white text-2xl" />

                  </div>

                </div>

                {/* UPLOAD BUTTON */}
                <label className="absolute bottom-1 right-1 w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center cursor-pointer shadow-md transition">

                  {uploading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <FaCamera size={15} />
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageUpload}
                  />

                </label>

              </div>
            </div>

            {/* ADMIN FEEDBACK */}
            {formData.review_message && (

              <div className="bg-red-50 border border-red-200 rounded-2xl p-5">

                <h3 className="font-semibold text-red-700 mb-2">
                  Admin Feedback
                </h3>

                <p className="text-red-600 text-sm">
                  {formData.review_message}
                </p>

              </div>
            )}

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
                placeholder="Tell us about your organization..."
                className="w-full border border-gray-200 rounded-2xl px-4 py-3.5 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* GRID */}
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

                Re-Verification Process

              </h3>

              <ul className="space-y-2 text-sm text-blue-700">

                <li>
                  • Your application will be reviewed again after changes
                </li>

                <li>
                  • Dashboard access remains locked until approval
                </li>

                <li>
                  • Approval usually takes 24–48 hours
                </li>

              </ul>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-2">

              <button
                type="button"
                onClick={() => navigate("/organization/dashboard")}
                className="px-6 py-3 rounded-2xl border border-gray-200 hover:bg-gray-50 transition font-medium"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-3 rounded-2xl font-medium flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {saving ? (
                  "Saving..."
                ) : (
                  <>
                    Save & Resubmit
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