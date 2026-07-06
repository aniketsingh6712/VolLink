import CommunicationHeader from "../../component/Manager/Communication/Header/CommunicationHeader";

import AudienceList from "../../component/Manager/Communication/Audience/AudienceList";

import AnnouncementComposer from "../../component/Manager/Communication/Composer/AnnouncementComposer";

import AnnouncementFeed from "../../component/Manager/Communication/Feed/AnnouncementFeed";

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