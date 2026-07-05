import AvailableVolunteerCard from "./AvailableVolunteerCard";

const AvailableVolunteerList = ({
  volunteers,
}) => {

  return (

    <div className="max-h-[650px] overflow-y-auto">

      {

        volunteers.map((volunteer)=>(

          <AvailableVolunteerCard
            key={volunteer.id}
            volunteer={volunteer}
          />

        ))

      }

    </div>

  );

};

export default AvailableVolunteerList;