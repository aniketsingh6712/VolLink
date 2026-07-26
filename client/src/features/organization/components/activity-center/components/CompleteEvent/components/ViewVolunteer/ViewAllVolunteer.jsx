import { IoClose, IoMailOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

export default function ViewAllVolunteer({
  event,
  volunteers,
  onClose,
  onInvite,
  onMessage,
}) {

  return (
    <div className="fixed inset-0 z-[50] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">

        {/* HEADER */}
        <div className="sticky top-0 bg-white border-b border-gray-200 flex justify-between items-center p-6">

          <div>

            <h3 className="text-2xl font-bold text-[#0F172A]">

              All Participants

              <span className="font-medium">
                {" "}— {event.title}
              </span>

            </h3>

          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:bg-gray-200 hover:rounded-md transition text-2xl cursor-pointer transition"
          >
            <IoClose />
          </button>

        </div>

        {/* BODY */}
       

          <div className="p-6 space-y-4">

            {volunteers.map((volunteer) => (

              <div
                key={volunteer.id}
                className="
                  flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition gap-4 sm:gap-3
                "
              >

                {/* LEFT */}
                <div className="flex items-center gap-4 flex-1 min-w-0">

                  <img
                    src={volunteer.avatar}
                    alt={volunteer.name}
                    className="
                      w-12
                      h-12
                      rounded-full
                      object-cover
                      border-3
                      border-blue-500
                      flex-shrink-0
                    "
                  />

                  <div className="flex-1 min-w-0">

                    <p className="font-bold truncate text-gray-900">

                      {volunteer.name}

                    </p>

                    <p className="text-gray-600 text-sm truncate">

                      {volunteer.email || "abc@example.com"}

                    </p>

                    {/* TAGS */}
                    <div className="flex gap-2 mt-1 flex-wrap">

                      {["skills","Organizer"]?.map(
                        (skill, index) => (

                          <span
                            key={index}
                            className="
                              px-2
                              py-0.5
                              rounded
                              bg-blue-100
                              text-blue-700
                              text-xs
                              font-semibold
                            "
                          >

                            {skill}

                          </span>

                        )
                      )} 

                    </div>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-2 flex-wrap justify-between sm:justify-end">

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold

                      ${
                        volunteer.rating ===
                        "Excellent"
                          ? "bg-green-100 text-green-700"
                          : volunteer.rating ===
                            "Good"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }
                    `}
                  >

                    {volunteer.rating ===
                    "Excellent"
                      ? "⭐"
                      : volunteer.rating ===
                        "Good"
                      ? "✓"
                      : "•"}

                    {" "}

                    {volunteer.rating}

                  </span>
                <div className="flex gap-2 text-xl ">
                  <button
                    onClick={() =>{
                        
                      onInvite(
                        volunteer
                      );
                      onClose();
                    }
                    }
                    className="
                    p-2
                      text-blue-500
                      hover:bg-blue-200
                      rounded-lg
                      transition
                      cursor-pointer
                      transition
                    "
                  >

                    <FiSend  />

                  </button>

                  <button
                    onClick={() =>{
                       
                      onMessage(
                        volunteer
                      );
                       onClose();
                    }
                }
                    className="
                    p-2
                      text-green-500
                      rounded-lg
                      hover:bg-green-200
                      transition
                      cursor-pointer
                      transition
                    "
                  >

                    <IoMailOutline  />

                  </button>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

    

    </div>
  );
}