const tabs = [

    {
        id:"overview",
        label:"Overview"
    },

    {
        id:"volunteers",
        label:"Volunteers"
    },

    {
        id:"attendance",
        label:"Attendance"
    },

    {
        id:"timeline",
        label:"Timeline"
    },

    {
        id:"tasks",
        label:"Tasks"
    }

];

const EventTabs = ({
    activeTab,
    setActiveTab
}) => {

    return(

        <div className="bg-white rounded-xl border shadow-sm p-2 flex gap-2">

            {

                tabs.map(tab=>(

                    <button

                        key={tab.id}

                        onClick={()=>setActiveTab(tab.id)}

                        className={`
                            px-6
                            py-3
                            rounded-lg
                            transition

                            ${
                                activeTab===tab.id
                                ?
                                "bg-emerald-500 text-white"
                                :
                                "hover:bg-gray-100"
                            }
                        `}

                    >

                        {tab.label}

                    </button>

                ))

            }

        </div>

    )

}

export default EventTabs;