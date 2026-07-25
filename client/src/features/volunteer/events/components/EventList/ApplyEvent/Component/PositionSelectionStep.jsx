import { FaUserTag } from "react-icons/fa";

const PositionSelectionStep = ({
    event,
    selectedPosition,
    setSelectedPosition,
    onBack,
    onContinue,
}) => {
    return (
        <div className="space-y-8">
            {/* Heading */}
            <div>
                <h2 className="text-2xl font-bold">
                    Choose Your Position
                </h2>
                <p className="text-gray-500 mt-2">
                    Select the volunteer position you'd like to contribute in.
                </p>
            </div>
            {/* Position Cards */}
            <div className="space-y-4">
                {
                    event.positions.map(position => {
                        const openings =
                            position.needed - position.applied;
                        const selected =
                            selectedPosition?.id === position.id;
                        return (
                            <button
                                key={position.id}
                                onClick={() => setSelectedPosition(position)}
                                className={`w-full text-left rounded-2xl border transition-all

                                ${selected
                                        ? "border-blue-600 ring-2 ring-blue-100"
                                        : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                                    }
                                `}
                            >
                                <div className="p-5 flex items-center justify-between">

                                    {/* Left */}

                                    <div className="flex gap-4">

                                        <div
                                            className={`w-12 h-12 rounded-xl flex items-center justify-center

                                            ${selected
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-blue-100 text-blue-600"
                                                }
                                            `}
                                        >

                                            <FaUserTag />

                                        </div>

                                        <div>

                                            <h3 className="font-semibold text-lg">

                                                {position.title}

                                            </h3>

                                            <p className="text-sm text-gray-500 mt-1">

                                                {position.description}

                                            </p>

                                        </div>

                                    </div>

                                    {/* Right */}

                                    <div className="flex gap-8">

                                        <div className="text-center">

                                            <p className="text-xs text-gray-400">

                                                Needed

                                            </p>

                                            <h4 className="text-xl font-bold">

                                                {position.needed}

                                            </h4>

                                        </div>

                                        <div className="text-center">

                                            <p className="text-xs text-gray-400">

                                                Applied

                                            </p>

                                            <h4 className="text-xl font-bold text-blue-600">

                                                {position.applied}

                                            </h4>

                                        </div>

                                        <div className="text-center">

                                            <p className="text-xs text-gray-400">

                                                Openings

                                            </p>

                                            <h4 className="text-xl font-bold text-green-600">

                                                {openings}

                                            </h4>

                                        </div>

                                    </div>

                                </div>

                            </button>

                        );

                    })

                }

            </div>

            {/* Footer */}

            <div className="flex justify-between">

                <button
                    onClick={onBack}
                    className="px-8 py-3 rounded-xl border hover:bg-gray-50"
                >

                    Back

                </button>

                <button
                    disabled={!selectedPosition}
                    onClick={onContinue}
                    className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white"
                >

                    Continue

                </button>

            </div>

        </div>

    );

};

export default PositionSelectionStep;