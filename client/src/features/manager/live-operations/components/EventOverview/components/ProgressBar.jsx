const ProgressBar = ({ value, color = "bg-blue-500" }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className={`${color} h-full rounded-full transition-all duration-500`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;