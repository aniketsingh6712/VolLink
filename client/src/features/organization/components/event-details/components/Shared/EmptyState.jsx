import React from 'react'

function EmptyState({
    title,
    subtitle,
}) {
    return (
        <div className="py-14 flex flex-col items-center justify-center text-center">

            {/* ICON */}
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-4xl">

                📭

            </div>

            {/* TITLE */}
            <h3 className="mt-5 text-lg font-semibold text-gray-800">

                {title}

            </h3>

            {/* SUBTITLE */}
            <p className="text-gray-500 mt-2 max-w-sm text-sm">

                {subtitle}

            </p>

        </div>
    )
}

export default EmptyState