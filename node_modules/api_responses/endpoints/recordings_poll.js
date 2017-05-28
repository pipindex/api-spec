var standardResponse = require('api_responses/standardResponse.js'),
    seedData = require('seed_data');

module.exports = {
    trackWatchingRecording: {
        requests: [
            {
                method: "POST",
                url: "/v1/lesson/" +
                     seedData.objectFromSpecId('fastTrackBusinessSuccessOnlineDiplomaCampaignMay15').lessons[0]._id +
                     "/record_watched_recording_minute",
                data: {
                    registration_id: seedData.mongoId("fredTheRegistrationFTBS"),
                }
            },
            {
                method: "POST",
                url: "/v1/lesson/" +
                     seedData.objectFromSpecId('fastTrackBusinessSuccessOnlineDiplomaCampaignMay15').lessons[0]._id +
                     "/record_watched_recording_minute",
                data: {
                    email: seedData.objectFromSpecId("fredThePerson").email,
                }
            }
        ],
        response: {
            code: 200
        }
    }
};