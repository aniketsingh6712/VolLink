import { FiSearch } from "react-icons/fi";

export default function InvitationSearch({ value, onChange,placeholder }) {
  return (
    <div className="relative mb-6">
      <FiSearch
        className="
absolute
left-5
top-1/2
-translate-y-1/2
text-gray-400
"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
w-full
pl-10
py-3
rounded-2xl
bg-white
border
border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 transition

"
      />
    </div>
  );
}
