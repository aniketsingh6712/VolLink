const ScheduleSelector = ({
    schedule,
    setSchedule,
})=>{

    return(

        <div>

            <label className="font-semibold block mb-3">

                Schedule

            </label>

            <div className="space-y-4">

                <label className="flex items-center gap-3">

                    <input
                        type="radio"
                        checked={schedule==="now"}
                        onChange={()=>setSchedule("now")}
                    />

                    Send Immediately

                </label>

                <label className="flex items-center gap-3">

                    <input
                        type="radio"
                        checked={schedule==="later"}
                        onChange={()=>setSchedule("later")}
                    />

                    Schedule Later

                </label>

                {

                    schedule==="later"

                    &&

                    <div className="grid grid-cols-2 gap-3">

                        <input
                            type="date"
                            className="border rounded-xl px-4 py-3"
                        />

                        <input
                            type="time"
                            className="border rounded-xl px-4 py-3"
                        />

                    </div>

                }

            </div>

        </div>

    )

}

export default ScheduleSelector;