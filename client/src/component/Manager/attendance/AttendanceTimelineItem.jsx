const AttendanceTimelineItem = ({ item ,isLast }) => {

  const Icon = item.icon;

  return (

    <div className="relative flex gap-5 pb-8">

      <div className="relative">

        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}
        >

          <Icon className="text-sm"/>

        </div>

       {
    !isLast && (

        <div
            className="absolute left-1/2 top-10 -translate-x-1/2 w-[2px] h-full bg-gray-200"
        />

    )
}
      </div>

      <div className="flex-1">

        <div className="flex justify-between items-center">

          <h4 className="font-semibold">

            {item.title}

          </h4>

          <span className="text-sm text-gray-500">

            {item.time}

          </span>

        </div>

      </div>

    </div>

  );

};

export default AttendanceTimelineItem;