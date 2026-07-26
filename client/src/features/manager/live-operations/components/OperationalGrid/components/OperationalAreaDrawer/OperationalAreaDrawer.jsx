import { FaTimes } from "react-icons/fa";

import AreaSummaryCard from "./components/AreaSummaryCard/AreaSummaryCard";
import VolunteerTable from "./components/VolunteerTable/VolunteerTable";
import DeploymentHistory from "./components/DeploymentHistory/DeploymentHistory";
import ActiveDeployments from "./components/ActiveDeployment/ActiveDeployments";
const OperationalAreaDrawer = ({
  open,
  area,
  onClose,
}) => {

  if (!open || !area) return null;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* Drawer */}

      <div className="fixed right-0 top-0 h-screen w-full max-w-3xl bg-slate-50 shadow-2xl z-50 overflow-y-auto">

        {/* Header */}

        <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold">

              {area.name}

            </h1>

            <p className="text-gray-500 mt-2">

              Live Operations Console

            </p>

          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 rounded-xl hover:bg-gray-100 flex items-center justify-center transition"
          >
            <FaTimes />
          </button>

        </div>

        {/* Body */}

        <div className="p-8 space-y-8">

          <AreaSummaryCard area={area} />

          <VolunteerTable />

          <ActiveDeployments />
          <DeploymentHistory />

        </div>

      </div>
    </>
  );
};

export default OperationalAreaDrawer;