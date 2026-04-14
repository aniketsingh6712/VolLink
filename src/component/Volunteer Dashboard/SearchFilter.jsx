import { FaUtensils, FaBookOpen, FaLeaf, FaHeartbeat, FaUsers } from "react-icons/fa";

export default function SearchFilter({ selected, setSelected }) {
  const categories = [
    { name: "Food & Hunger", icon: <FaUtensils />, color: "bg-orange-100 text-orange-600" },
    { name: "Education", icon: <FaBookOpen />, color: "bg-blue-100 text-blue-600" },
    { name: "Environment", icon: <FaLeaf />, color: "bg-green-100 text-green-600" },
    { name: "Health & Wellness", icon: <FaHeartbeat />, color: "bg-red-100 text-red-600" },
    { name: "Community", icon: <FaUsers />, color: "bg-purple-100 text-purple-600" },
  ];

  return (
    <div className="space-y-5">
      
      {/* 🔍 Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search events, organizations, locations..."
          className="w-full px-5 py-3 pl-12 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
          🔍
        </span>
      </div>

      {/* 🎯 Filters */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => {
          const isActive = selected === cat.name;

          return (
            <button
              key={cat.name}
              onClick={() => setSelected(cat.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all duration-200
                ${isActive 
                  ? "bg-blue-600 text-white shadow-md scale-105" 
                  : `${cat.color} border-transparent hover:scale-105 hover:shadow-sm`
                }
              `}
            >
              <span className="text-base">{cat.icon}</span>
              {cat.name}
            </button>
          );
        })}

        {/* Clear Button */}
        <button
          onClick={() => setSelected("")}
          className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition"
        >
          ✖ Clear
        </button>
      </div>
    </div>
  );
}