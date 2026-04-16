// components/modals/EventDetailsModal.jsx

import Modal from "../ui/Modal";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function EventDetailsModal({ isOpen, onClose, event }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>

      {/* Image */}
      <img
        src={event.image}
        className="w-full h-48 object-cover rounded-xl"
      />

      <h2 className="text-xl font-bold mt-4">{event.title}</h2>

      <p className="text-gray-500 text-sm mt-1">{event.org}</p>

      <p className="mt-3 text-gray-600">{event.description}</p>

      {/* Info */}
      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <p className="flex items-center gap-2">
          <MdOutlineCalendarToday /> {event.date}
        </p>
        <p className="flex items-center gap-2">
          <LuMapPin /> {event.location}
        </p>
      </div>

      {/* Benefit */}
      <div className="mt-4 bg-green-50 text-green-700 p-3 rounded-lg text-sm">
        {event.benefit}
      </div>

      {/* Actions */}
     

    </Modal>
  );
}