const priorities = [
    "Normal",
    "Important",
    "Emergency",
];

const colors = {

    Normal:
        "bg-green-100 text-green-700 border-green-300",

    Important:
        "bg-yellow-100 text-yellow-700 border-yellow-300",

    Emergency:
        "bg-red-100 text-red-700 border-red-300",

};

const PrioritySelector = ({
    priority,
    setPriority,
})=>{

    return(

        <div>

            <label className="font-semibold block mb-3">

                Priority

            </label>

            <div className="grid grid-cols-3 gap-3">

                {

                    priorities.map((item)=>(

                        <button
                            key={item}
                            onClick={()=>setPriority(item)}
                            className={`
                                rounded-xl
                                py-3
                                border
                                transition
                                ${
                                    priority===item

                                    ?

                                    colors[item]

                                    :

                                    "border-gray-200 hover:border-blue-400"
                                }
                            `}
                        >

                            {item}

                        </button>

                    ))

                }

            </div>

        </div>

    )

}

export default PrioritySelector;