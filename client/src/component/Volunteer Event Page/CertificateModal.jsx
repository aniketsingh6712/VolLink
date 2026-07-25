// components/modals/CertificateModal.jsx

import Modal from "../ui/Modal";

export default function CertificateModal({ isOpen, onClose, event }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      
      <h2 className="text-xl font-bold text-center text-[#0F172A]">
        🎉 Certificate Ready!
      </h2>

      <p className="text-gray-500 text-center mt-2">
        Congratulations for completing <b>{event.title}</b>
      </p>

      {/* Preview */}
      <div className="mt-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-xl text-center">
        <p className="text-sm opacity-80">Certificate of Participation</p>
        <h3 className="text-lg font-bold mt-2">{event.title}</h3>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg">
          Download PDF
        </button>

        <button
          onClick={onClose}
          className="flex-1 border border-gray-300 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}