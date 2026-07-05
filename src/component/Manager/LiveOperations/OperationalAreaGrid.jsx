import OperationalAreaCard from "./OperationalAreaCard";
import { useState } from "react";

import OperationalAreaDrawer from "./OperationalAreaDrawer/OperationalAreaDrawer";
const operationalAreas = [
  {
    id: 1,
    name: "Registration",
    required: 7,
    active: 6,
    completedTasks: 12,
    status: "Critical",
    lastUpdated: "10:12 AM",
    
    deployedOut:1,

    available:2,
  },
  {
    id: 2,
    name: "Food Distribution",
    required: 12,
    active: 8,
    completedTasks: 35,
    status: "Healthy",
    lastUpdated: "10:18 AM",
    
    deployedOut:1,

    available:2,
  },
  {
    id: 3,
    name: "Medical",
    required: 3,
    active: 2,
    completedTasks: 5,
    status: "Warning",
    lastUpdated: "10:14 AM",
    
    deployedOut:1,

    available:2,
  },
  {
    id: 4,
    name: "Parking",
    required: 5,
    active: 5,
    completedTasks: 28,
    status: "Healthy",
    lastUpdated: "10:15 AM",
    
    deployedOut:1,

    available:2,
  },
];

const OperationalAreaGrid = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Operational Areas
          </h2>

          <p className="text-gray-500 mt-1">
            Monitor every operational area and deploy volunteers when needed.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {operationalAreas.map((area) => (
          <OperationalAreaCard
            key={area.id}
            area={area}
            onOpen={setSelectedArea}
          />
        ))}
      </div>

      <OperationalAreaDrawer
    open={Boolean(selectedArea)}
    area={selectedArea}
    onClose={() => setSelectedArea(null)}
/>
    </section>
  );
};

export default OperationalAreaGrid;
