import CommunicationHeader from "./Header/CommunicationHeader";

import AudienceList from "./Audience/AudienceList";

import AnnouncementComposer from "./Composer/AnnouncementComposer";

import AnnouncementFeed from "./Feed/AnnouncementFeed";

const AnnouncementPage = () => {

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

export default AnnouncementPage;