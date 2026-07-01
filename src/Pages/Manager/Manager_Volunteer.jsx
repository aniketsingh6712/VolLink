import VolunteerStats from "../../component/Manager/Volunteers/VolunteerStats";
import VolunteerDirectoryToolbar from "../../component/Manager/Volunteers/VolunteerDirectoryToolbar";
import VolunteerDirectory from "../../component/Manager/Volunteers/VolunteerDirectory";

const ManagerVolunteers = () => {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          Volunteers

        </h1>

        <p className="text-gray-500 mt-2">

          Manage volunteers across all assigned events.

        </p>

      </div>

      <VolunteerStats/>

      <VolunteerDirectoryToolbar/>

      <VolunteerDirectory/>

    </div>
  );
};

export default ManagerVolunteers;