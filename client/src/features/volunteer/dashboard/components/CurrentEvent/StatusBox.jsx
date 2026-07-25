
import { IoMdCheckmark } from "react-icons/io";
export const StatusBox = ({ 
  title,
  value,
  bg,
}) => {     
  const styles = {
    blue:
      "bg-blue-50 border-blue-200 text-blue-500",

    green:
      "bg-green-50 border-green-200 text-green-500",

    purple:
      "bg-purple-50 border-purple-200 text-purple-500",
  };

  return (
    <div
      className={`
      p-4
      rounded-lg
      border
      ${styles[bg]}
      `}
    >

      <div
        className="
        text-xs
        font-bold
        mb-1
        flex flex-row gap-1
        "
      >
       {title==="Check In" && <LuAlarmClock/>}{title === "Hours" && <LuAlarmClock/>} {title==="Check Out" && <IoMdCheckmark/>}{title}
      </div>

      <div
        className="
        text-lg
        text-gray-900 font-black
        "
      >
        {value}
      </div>

    </div>
  );
}
