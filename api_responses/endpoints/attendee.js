var standardResponse = require('api_responses/standardResponse.js'),
    seedData = require('seed_data');

function createAttendeeRequest (registrationSpecId, campaignSpecId, lessonNumber) {
    var registration = seedData.objectFromSpecId(registrationSpecId),
        lesson = seedData.objectFromSpecId(campaignSpecId).lessons[lessonNumber],
        person = seedData.objectFromMongoId(registration._person_id);

    return {
        requests: [{
            method: "POST",
            url: "/v1/lesson/" + String(lesson._id) + "/attendee",
            data: {
                registration_id: seedData.mongoId(registrationSpecId),
            }
        }],
        response: standardResponse({
            _type: "attendee",
            id: "__attendeeIdFor" + registrationSpecId + "__",

            // We make sure that the identifiers here contain the registrant spec id to allow the mock backend to serve
            // different firebase tokens to different registrants
            href: "/v1/attendee/__attendeeIdFor" + registrationSpecId + "__",
            firebase_access_token: "__firebaseAccessTokenFor" + registrationSpecId + "__",

            chat_username: person.name.first_name + " " + person.name.last_name,
            lesson: {
                id: String(lesson._id),
                href: "/v1/lesson/" + String(lesson._id),
            },
            recording_attendance_stats: null,
            live_attendance_stats: null,
            live_messages: []
        })
    };
}

module.exports = {
    createAttendee1: createAttendeeRequest(
        "fredTheRegistrationFTBS",
        "fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15",
        0
    ),
    createAttendee2: createAttendeeRequest(
        "jimTheRegistrationFTBS",
        "fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15",
        0
    ),
    createAttendee3: createAttendeeRequest(
        "sueTheRegistrationFTBS",
        "fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15",
        0
    ),
    createAttendee4: createAttendeeRequest(
        "samTheRegistrationFTBS",
        "fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15",
        0
    ),
    createAttendee5: createAttendeeRequest(
        "jessTheRegistrationFTBS",
        "fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15",
        0
    ),
};