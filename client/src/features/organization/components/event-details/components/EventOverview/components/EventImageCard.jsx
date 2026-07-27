import React from 'react'

function EventImageCard({ event }) {
    return (
        <>
            <div className="w-full h-40 rounded-2xl overflow-hidden bg-gray-100 shadow-sm border">

                {event.image_url ? (

                    <img
                        src={event.image_url}
                        alt={event.title}
                        className="w-full h-full object-cover"
                    />

                ) : (

                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">

                        <div className="text-4xl">
                            🖼️
                        </div>

                        <p className="text-sm mt-2">
                            No Event Image
                        </p>

                    </div>
                )}

            </div>
        </>
    )
}

export default EventImageCard;