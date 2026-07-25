import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

export default function SendMessageModal({
    volunteer,
    onClose,
    onSend,
}) {

    const [message, setMessage] =
        useState("");

    return (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden p-6">
                {/* HEADER */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                        <img
                            src={volunteer.avatar}
                            alt={volunteer.name}
                            className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                        />
                        <div>
                            <h3 className="font-bold text-[#0F172A]">
                                {volunteer.name}
                            </h3>
                            <p className=" text-xs text-gray-500">
                                Send a message
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-200 rounded-lg transition text-xl text-gray-500"
                    >
                        <IoClose />
                    </button>
                </div>
                {/* BODY */}
                <div className="px-6">
                    <textarea
                        rows={5}
                        value={message}
                        onChange={(e) =>
                            setMessage(e.target.value)
                        }
                        placeholder="Type your message here..."
                        className="
                                    w-full
                                    px-4 py-3
                                    rounded-lg
                                    border
                                    border-gray-300
                                    
                                    resize-none
                                    outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                    text-gray-700
                                    mb-4
                                    "
                    />

                </div>
                {/* FOOTER */}
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="
              flex-1
              px-4
              py-2
              border
              border-gray-300
              
              rounded-lg
              font-semibold
              hover:bg-gray-50 transition
            "
                    >
                        Cancel
                    </button>
                    <button
                        disabled={!message.trim()}
                        onClick={() => {

                            onSend(message);

                            setMessage("");

                            onClose();

                        }}
                        className={`
    flex-1
    flex
    items-center
    justify-center
    gap-2
    px-4
    py-3
    rounded-lg
    font-semibold
    transition

    ${message.trim()
                                ? "bg-blue-400 text-white hover:bg-blue-700"
                                : "opacity-50 bg-blue-300 text-white cursor-not-allowed"
                            }
  `}
                    >

                        <FiSend />

                        Send Message

                    </button>
                </div>
            </div>
        </div>
    );
}