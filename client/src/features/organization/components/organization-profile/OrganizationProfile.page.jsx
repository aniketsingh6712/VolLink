import { useEffect, useState } from "react";
import { supabase } from "../../../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";
export default function OrganizationProfile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  const [orgProfile, setOrgProfile] = useState(null);
  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // COMMON PROFILE
    const { data: profileData } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    // ORGANIZATION PROFILE
    const { data: orgData } = await supabase
      .from("organization_profiles")
      .select("*")
      .eq("user_id", user.id)
      .single();

    setProfile(profileData);
    setOrgProfile(orgData);
  };


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
      }

      // GET FILE EXTENSION
      const fileExt = file.name.split(".").pop();

      // USER FOLDER
      const folderPath = `${user.id}`;

      // FINAL FILE PATH
      const filePath = `${folderPath}/logo.${fileExt}`;
      /*
      STEP 1
      DELETE OLD FILES
    */
      const { data: oldFiles } = await supabase.storage
        .from("organization-logos")
        .list(folderPath);

      if (oldFiles?.length > 0) {
        const filesToDelete = oldFiles.map(
          (file) => `${folderPath}/${file.name}`,
        );

        await supabase.storage.from("organization-logos").remove(filesToDelete);
      }
      /*
      STEP 2
      UPLOAD NEW FILE
    */
      const { error: uploadError } = await supabase.storage
        .from("organization-logos")
        .upload(filePath, file, {
          upsert: true,
        });

      if (uploadError) throw uploadError;

      // GET PUBLIC URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("organization-logos").getPublicUrl(filePath);

      // UPDATE DATABASE
      const { error: dbError } = await supabase
        .from("organization_profiles")
        .update({
          logo_url: publicUrl,
        })
        .eq("user_id", user.id);

      if (dbError) throw dbError;

      // UPDATE UI
      setOrgProfile({
        ...orgProfile,
        logo_url: publicUrl,
      });
    } catch (err) {
   

      alert(err.message);
      toast.error("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };


   if (!profile || !orgProfile) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">

      <div className="flex flex-col items-center gap-4">

        {/* SPINNER */}
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        {/* TEXT */}
        <p className="text-gray-500 font-medium">
          Loading organization profile...
        </p>

      </div>

    </div>
  );
}
  return (
    <div className="bg-slate-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow overflow-hidden">
        {/* COVER */}
        <div className="bg-blue-600 h-36"></div>

        {/* PROFILE SECTION */}
        <div className="px-8 pb-10 relative">
          {/* AVATAR */}
          <div className="absolute -top-16">
            <div className="relative group">
              {/* IMAGE */}
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
                {orgProfile.logo_url ? (
                  <img
                    src={`${orgProfile.logo_url}?t=${Date.now()}`}
                    alt="Organization Logo"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-500 bg-slate-200">
                    {orgProfile.org_name?.charAt(0)}
                  </div>
                )}

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <FaCamera className="text-white text-xl" />
                </div>
              </div>

              {/* FILE INPUT */}
              <label className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center cursor-pointer shadow-md transition">
                {uploading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <FaCamera size={14} />
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

          {/* HEADER */}
          <div className="pt-20 flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold">{orgProfile.org_name}</h1>

              <div className="flex items-center gap-3 mt-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Organization
                </span>

                {/* VERIFIED TAG */}
                {orgProfile.verified ? (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Verified
                  </span>
                ) : (
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Unverified
                  </span>
                )}
              </div>
            </div>

            {/* BUTTON */}
            {orgProfile.verified ? (
              <button
                onClick={() => navigate("/organization/dashboard")}
                className="bg-green-600 text-white px-5 py-3 rounded-xl"
              >
                Go To Dashboard
              </button>
            ) : (
              <button
                disabled
                className="bg-gray-300 text-gray-600 px-5 py-3 rounded-xl cursor-not-allowed"
              >
                Waiting For Approval
              </button>
            )}
          </div>

          {/* CONTENT */}
          <div className="grid md:grid-cols-2 gap-10 mt-12">
            {/* LEFT */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Organization Information
              </h2>

              <div className="space-y-5">
                <div>
                  <p className="text-gray-500">Organization Name</p>

                  <h3 className="font-semibold">{orgProfile.org_name}</h3>
                </div>

                <div>
                  <p className="text-gray-500">Email</p>

                  <h3 className="font-semibold">{profile.email}</h3>
                </div>

                <div>
                  <p className="text-gray-500">Phone</p>

                  <h3 className="font-semibold">{profile.phone}</h3>
                </div>

                <div>
                  <p className="text-gray-500">Website</p>

                  <h3 className="font-semibold">{orgProfile.website}</h3>
                </div>

                <div>
                  <p className="text-gray-500">Address</p>

                  <h3 className="font-semibold">{orgProfile.address}</h3>
                </div>

                <div>
                  <p className="text-gray-500">Description</p>

                  <h3 className="font-semibold">{orgProfile.description}</h3>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="bg-slate-50 p-6 rounded-2xl border">
                <h2 className="text-xl font-bold mb-4">Verification Status</h2>

                {orgProfile.verified ? (
                  <div className="text-green-600 font-semibold">
                    ✅ Your organization is verified
                  </div>
                ) : (
                  <div className="text-yellow-600 font-semibold">
                    ⏳ Your organization is under review
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
