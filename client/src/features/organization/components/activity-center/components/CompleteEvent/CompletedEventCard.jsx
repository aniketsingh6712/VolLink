
import { FiSend } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { useState } from "react";
import SendInviteModal from "./components/SendInvite/SendInviteModal"
import SendMessageModal from "../Message/MessageModal";
import ViewAllVolunteer from "./components/ViewVolunteer/ViewAllVolunteer";
export default function CompletedEvent({ event, availableEvents = [] }) {

  const participationPercent = Math.round(
    (event.selectedVolunteers / event.totalVolunteers) * 100
  );
  const [showInviteModal, setShowInviteModal] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const [role, setRole] = useState("");

  const [message, setMessage] = useState("");
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [
    showMessageModal,
    setShowMessageModal,
  ] = useState(false);

  const handleSendInvite = async () => {

    if (!selectedEvent) {
      alert("Please select an event");
      return;
    }

    if (!role.trim()) {
      alert("Please enter a role");
      return;
    }

    console.log({
      volunteer: selectedVolunteer,
      event: selectedEvent,
      role,
      message,
    });

    // TODO: insert into event_invites table

    setShowInviteModal(false);

    setRole("");

    setMessage("");

    setSelectedEvent(null);

    setSelectedVolunteer(null);
  };

  const [
    showParticipants,
    setShowParticipants,
  ] = useState(false); // for viewing all volunteers of this completed event
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">

      {/* IMAGE */}
      <div className="relative h-48 bg-gray-100">

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />

        <span className="absolute top-4 right-4 bg-white shadow-sm px-4 py-1.5 rounded-full text-xs font-medium capitalize">
          {event.category}
        </span>

      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* TITLE */}
        <h3 className="font-bold text-lg text-[#0F172A]">
          {event.title}
        </h3>

        {/* DATE */}
        <p className="text-sm text-gray-500 mt-1">
          {event.startDate} → {event.endDate}
        </p>

        {/* PARTICIPATION */}
        <div className="bg-blue-50 rounded-2xl p-4 mt-5">

          <div className="flex justify-between items-center">

            <span className="text-sm text-gray-600">
              Volunteer Participation
            </span>

            <span className="font-bold text-xl text-blue-600">
              {participationPercent}%
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">

            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{
                width: `${participationPercent}%`,
              }}
            />

          </div>

          <p className="text-xs text-gray-500 mt-2">
            {event.selectedVolunteers} of {event.totalVolunteers} volunteers
          </p>

        </div>

        {/* PARTICIPANTS */}
        <div className="mt-5">

          <p className="text-sm font-medium text-gray-700 mb-3">
            Participants ({event.volunteers.length})
          </p>

          <div className="space-y-3">

            {event.volunteers.slice(0, 3).map((volunteer) => (

              <div
                key={volunteer.id}
                className="flex items-center justify-between"
              >

                <div className="flex items-center gap-3 flex-1 min-w-0">

                  <img
                    src={volunteer.avatar}
                    alt={volunteer.name}
                    className="w-10 h-10 rounded-full object-cover border"
                  />

                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">
                      {volunteer.name}
                    </p>

                    <p className="text-xs text-gray-500 truncate">
                      {volunteer.role}
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3 flex-shrink-0">

                  <span
                    className={`
      px-3 py-1 rounded-full text-xs font-medium
      ${volunteer.rating === "Excellent"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                      }
    `}
                  >
                    ⭐ {volunteer.rating}
                  </span>

                  <button
                    onClick={() => {
                      setSelectedVolunteer(volunteer);
                      setSelectedEvent(event); // current completed event
                      setShowInviteModal(true);
                    }}
                    className="text-blue-500 hover:text-blue-600 transition"
                  >
                    <FiSend />
                  </button>

                  <button onClick={() => {

                    setSelectedVolunteer(
                      volunteer
                    );

                    setShowMessageModal(
                      true
                    );

                  }}
                    className="
    text-green-500
    hover:text-green-600
    transition">
                    <IoMailOutline />
                  </button>

                </div>

              </div>
            ))}

          </div>

          {event.volunteers.length > 3 && (
            <button className="mt-4 text-blue-600 text-sm font-medium hover:text-blue-700"
              onClick={() =>
                setShowParticipants(
                  true
                )
              }
            >
              View all {event.volunteers.length} volunteers →
            </button>
          )}

        </div>

      </div>

      {
        showInviteModal && (
          <SendInviteModal
            volunteer={selectedVolunteer}
            events={availableEvents}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
            role={role}
            setRole={setRole}
            message={message}
            setMessage={setMessage}
            onClose={() => setShowInviteModal(false)}
            onSend={handleSendInvite}
          />
        )
      }

      {
        showMessageModal &&
        selectedVolunteer && (
          <SendMessageModal
            volunteer={
              selectedVolunteer
            }
            onClose={() => {
              setShowMessageModal(
                false
              );
              setSelectedVolunteer(
                null
              );
            }}
            onSend={(message) => {
              console.log(
                "Send:",
                message
              );
            }}
          />
        )
      }


      {
        showParticipants && (

          <ViewAllVolunteer

            event={event}

            volunteers={
              event.volunteers
            }

            onClose={() =>
              setShowParticipants(
                false
              )
            }

            onInvite={(v) => {

              setSelectedVolunteer(
                v
              );

              setShowInviteModal(
                true
              );

            }}

            onMessage={(v) => {

              setSelectedVolunteer(
                v
              );

              setShowMessageModal(
                true
              );

            }}

          />

        )
      }
    </div>
  );
}