import AvailableVolunteerCard from "./components/VolunteerCard/AvailableVolunteerCard";

const AvailableVolunteerList = ({
  volunteers,
  selectedVolunteers,
  onToggle
}) => {

  return (

    <div className="max-h-[650px] overflow-y-auto">

      {

        volunteers.map((volunteer) => (

          <AvailableVolunteerCard

            key={volunteer.id}

            volunteer={volunteer}

            checked={

              selectedVolunteers.includes(

                volunteer.id

              )

            }

            onToggle={onToggle}

          />

        ))

      }

    </div>

  );

};

export default AvailableVolunteerList;