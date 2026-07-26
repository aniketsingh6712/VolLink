import React from "react";

const StatCard = ({
    title,
    value,
    subtitle,
    icon: Icon,
    iconBg,
    iconColor,
}) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-start">

                <div>

                    <p className="text-sm text-gray-500">
                        {title}
                    </p>

                    <h2 className="text-3xl font-bold text-slate-800 mt-2">
                        {value}
                    </h2>

                    <p className="text-sm text-gray-400 mt-3">
                        {subtitle}
                    </p>

                </div>

                <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconBg}`}
                >
                    <Icon className={`text-2xl ${iconColor}`} />
                </div>

            </div>
        </div>
    );
};

export default StatCard;