import { useState, useRef, useEffect } from "react";
import {
   
    FaUser,
    FaCommentDots,
    FaCalendarAlt,
    FaClipboardList,
    FaUserEdit,
    FaUserTimes,
} from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
const menuItems = [
    {
        id: 1,
        title: "View Profile",
        icon: FaUser,
    },
    {
        id: 2,
        title: "Send Message",
        icon: FaCommentDots,
    },
    {
        id: 3,
        title: "View Assigned Event",
        icon: FaCalendarAlt,
    },
    {
        id: 4,
        title: "Attendance History",
        icon: FaClipboardList,
    },
    {
        id: 5,
        title: "Change Role",
        icon: FaUserEdit,
    },
    {
        id: 6,
        title: "Mark Absent",
        icon: FaUserTimes,
        danger: true,
    },
];

const VolunteerActionMenu = ({ onViewProfile ,  onChangeRole }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const closeMenu = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", closeMenu);

        return () =>
            document.removeEventListener("mousedown", closeMenu);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="w-10 h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center transition"
            >
                <FaEllipsisVertical />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">

                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        const handleClick = () => {
                            switch (item.title) {
                                case "View Profile":
                                    onViewProfile?.();
                                    break;

                                case "Send Message":
                                    console.log("Send Message");
                                    break;

                                case "View Assigned Event":
                                    console.log("View Event");
                                    break;

                                case "Attendance History":
                                    console.log("Attendance History");
                                    break;

                                case "Change Role":
                                    onChangeRole?.();
                                    break;

                                case "Mark Absent":
                                    console.log("Mark Absent");
                                    break;

                                default:
                                    break;
                            }

                            setOpen(false);
                        };

                        return (
                            <button
                                key={item.id}
                                onClick={handleClick}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition ${item.danger ? "text-red-600" : "text-slate-700"
                                    }`}
                            >
                                <Icon />

                                {item.title}
                            </button>
                        );
                    })}

                </div>
            )}
        </div>
    );
};

export default VolunteerActionMenu;