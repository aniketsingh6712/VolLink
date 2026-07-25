import CommunicationHeader from "../../features/manager/announcement/Header/CommunicationHeader";

import AudienceList from "../../features/manager/announcement/Audience/AudienceList";

import AnnouncementComposer from "../../features/manager/announcement/Composer/AnnouncementComposer";

import AnnouncementFeed from "../../features/manager/announcement/Feed/AnnouncementFeed";

const ManagerCommunicationPage = () => {

    return (

        <div className="space-y-6">

            <CommunicationHeader/>

            <div className="grid grid-cols-12 gap-6">

                {/* Audience */}

                <div className="col-span-3">

                    <AudienceList/>

                </div>

                {/* Composer */}

                <div className="col-span-4">

                    <AnnouncementComposer/>

                </div>

                {/* Feed */}

                <div className="col-span-5">

                    <AnnouncementFeed/>

                </div>

            </div>

        </div>

    )

}

export default ManagerCommunicationPage;