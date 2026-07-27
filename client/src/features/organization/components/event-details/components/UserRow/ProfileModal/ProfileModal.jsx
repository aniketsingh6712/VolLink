import Modal from "../../../../../../common/Modal/Modal";
import { FaTimes } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { LuBook } from "react-icons/lu";
export default function ProfileModal({
  isOpen,
  onClose,
  user,
  onApprove,
  onReject,
  onInvite,
}) {
  if (!user) return null;

  user.skills = ["First Aid", "Cooking", "Teaching"];
  user.experience = "Volunteered at local food bank for 2 years.";
  user.bio = "Passionate volunteer with a love for community service.";
  user.emergencyName = "Jane Doe";
  user.relation = "Sister";
  user.emergencyPhone = "555-0105";
  user.aadhar = "1234-5678-9012";
  user.college = "City University";
  user.degree = "B.A. in Sociology";
  user.cgpa = "3.8";
  user.year = "2024";
  user.address = "123 Main St, Anytown, USA";

  user.photoId= "https://randomuser.me/api/portraits/women/44.jpg"; 
  return (
    <Modal isOpen={isOpen} onClose={onClose}>

      {/* HEADER */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-4 flex justify-between items-center rounded-t-xl ">
        <h2 className="text-lg font-semibold">Candidate Profile</h2>
       
      </div>

      {/* BODY */}
      <div className="max-h-[70vh] overflow-y-auto px-6 py-5 space-y-6">

        {/* PROFILE */}
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl">
            👤
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {user.name}
            </h3>

            <p className="text-gray-500 text-sm">
              {user.bio || "Volunteer"}
            </p>

            <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
              <IoCheckmark />
              ID Verified
            </div>
          </div>
        </div>

        <Divider />

        {/* CONTACT */}
        <Section title="Contact Information">
          <Info icon={<FiMail />} text={user.email} />
          <Info icon={<FiPhone />} text={user.phone} />
          <Info icon={<FiMapPin />} text={user.address} />
        </Section>

        <Divider />

        {/* EDUCATION */}
        <Section title="Education">
          <Row label="College" value={user.college} />
          <Row label="Degree" value={user.degree} />
          <Row label="CGPA" value={user.cgpa} />
          <Row label="Graduation Year" value={user.year} />
        </Section>

        <Divider />

        {/* SKILLS */}
        <Section title="Skills & Experience">
          <Row label="Volunteer Experience" value={user.experience} />

          <div>
            <p className="text-sm text-gray-500 mb-2">Skills</p>
            <div className="flex flex-wrap gap-2">
              {user.skills?.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Divider />

        {/* IDENTIFICATION */}
        <Section title="Identification">
          <Row label="Aadhar Card" value={user.aadhar || "Not provided"} />
          <div className="flex justify-between items-center">
            <span className="text-green-600 text-sm bg-green-100 px-3 py-1 rounded-full">
              ✓ Verified
            </span>
          </div>
          <div className="mt-3">
          
            <img
              src={user.photoId}    
                alt="Photo ID"  
                className="w-full max-w-md h-32 object-cover rounded-lg border"
            />
          </div>
        </Section>

        <Divider />

        {/* EMERGENCY */}
        <Section title="Emergency Contact">
          <Row label="Name" value={user.emergencyName || "Not provided"} />
          <Row label="Relation" value={user.relation || "Not provided"} />
          <Row label="Phone" value={user.emergencyPhone || "Not provided"} />
        </Section>
      </div>

      {/* FOOTER */}
      <div className="px-6 py-4 border-t flex gap-3 bg-white rounded-b-xl">
        <button
          onClick={onReject}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
        >
          Reject
        </button>

        <button
          onClick={onApprove}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
        >
          Approve
        </button>

        <button
          onClick={onInvite}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          Send Event Invite
        </button>
      </div>
    </Modal>
  );
}

/* 🔹 Helpers */

function Section({ title, children }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="space-y-2 text-sm">{children}</div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-gray-600">
      <span className="text-blue-500">{icon}</span>
      {text}
    </div>
  );
}

function Divider() {
  return <hr className="border-gray-200" />;
}