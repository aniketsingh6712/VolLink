export default function EntryToolsSection({
    role,
    onOpenScanner,
}) {
    if (role !== "ENTRY_VOLUNTEER") return null;

    return (
        <>
         {role === "ENTRY_VOLUNTEER" && (
                    <div
                        className="
                                    mt-6
                                    bg-white
                                    rounded-lg
                                    border
                                    border-gray-100
                                    shadow-md
                                    p-4
                                "
                    >
                        <div
                            className="
                                        flex
                                        justify-between
                                        items-center
                                        "
                        >
                            <div>
                                <h2
                                    className="
                                            font-bold
                                            text-xl
                                            "
                                >
                                    Entry Tools
                                </h2>

                                <p
                                    className="
                                    text-gray-500
                                    "
                                >
                                    Scan volunteer passes
                                </p>
                            </div>

                            <button
                                onClick={() => onOpenScanner(true)}
                                className="
                                    bg-blue-600
                                    text-white
                                    rounded-xl
                                    px-6
                                    py-3
                                    "
                            >
                                Open Scanner
                            </button>
                        </div>
                    </div>
                )}
                </>
    );
}