const TimelineItem = ({ item }) => {

    const Icon = item.icon;

    return (

        <div className="relative px-8 py-6">

            {/* Vertical Line */}

            <div
                className="absolute left-[43px] top-16 bottom-0 w-[2px] bg-gray-200"
            />

            <div className="flex gap-5">

                <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${item.color}`}
                >
                    <Icon/>
                </div>

                <div className="flex-1">

                    <div className="flex justify-between">

                        <h3 className="font-semibold text-slate-800">

                            {item.title}

                        </h3>

                        <span className="text-sm text-gray-400">

                            {item.time}

                        </span>

                    </div>

                    <p className="text-gray-500 mt-2">

                        {item.description}

                    </p>

                </div>

            </div>

        </div>

    );

};

export default TimelineItem;