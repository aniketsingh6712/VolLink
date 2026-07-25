import VolunteerStats from "./components/Stats/VolunteerStats";
import VolunteerDirectoryToolbar from "./components/DirectoryToolbar/VolunteerDirectoryToolbar";
import VolunteerDirectory from "./components/Directory/VolunteerDirectory";

const VolunteersPage = () => {
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

export default VolunteersPage;