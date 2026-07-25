import { useMemo, useState } from "react";

import {
    FaSearch,
    FaTimes,
} from "react-icons/fa";

const AssignManagerModal = ({
    open,
    managers = [],
    onClose,
    onAssign,
}) => {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);


    const filteredManagers = useMemo(() => {
        return managers.filter(manager =>
            manager.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, managers]);

    if (!open) return null;

    return (

        <>

            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/40 z-50"
            />

            <div className="fixed inset-0 flex justify-center items-center p-6 z-[60]">

                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden">

                    {/* Header */}

                    <div className="border-b p-6 flex justify-between">

                        <div>

                            <h2 className="text-2xl font-bold">

                                Assign Manager

                            </h2>

                            <p className="text-gray-500 mt-2">

                                Select a manager for this event.

                            </p>

                        </div>

                        <button onClick={onClose}>

                            <FaTimes />

                        </button>

                    </div>

                    {/* Search */}

                    <div className="p-6 border-b">

                        <div className="relative">

                            <FaSearch className="absolute left-4 top-4 text-gray-400" />

                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search manager..."
                                className="w-full border rounded-xl pl-12 pr-4 py-3"
                            />

                        </div>

                    </div>

                    {/* Manager List */}

                    <div className="max-h-[420px] overflow-y-auto">

                        {

                            filteredManagers.map(manager => (

                                <label
                                    key={manager.id}
                                    className={`flex gap-5 items-center border-b p-5 cursor-pointer hover:bg-blue-50

                            ${selected === manager.id ? "bg-blue-50" : ""}

                            `}
                                >

                                    <input
                                        type="radio"
                                        checked={selected === manager.id}
                                        onChange={() => setSelected(manager.id)}
                                    />

                                    <img
                                        src={manager.avatar}
                                        className="w-14 h-14 rounded-full"
                                    />

                                    <div className="flex-1">

                                        <h3 className="font-semibold">

                                            {manager.name}

                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">

                                            {manager.status}

                                        </p>

                                    </div>

                                </label>

                            ))

                        }

                    </div>

                    {/* Footer */}

                    <div className="border-t p-5 flex justify-end gap-3">

                        <button
                            onClick={onClose}
                            className="px-6 py-3 border rounded-xl"
                        >

                            Cancel

                        </button>

                        <button
                            disabled={!selected}
                            onClick={() => onAssign(selected)}
                            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white"
                        >

                            Assign Manager

                        </button>

                    </div>

                </div>

            </div>

        </>

    );

};

export default AssignManagerModal;