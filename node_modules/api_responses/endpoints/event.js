var standardResponse = require('api_responses/standardResponse.js'),
    seedData = require('seed_data'),
    transformEvent = require('api_responses/converters/transformEvent.js');

module.exports = {
    getEventsForFTBSOD: {
        requests: [
            "GET /v1/event?course_id=" + seedData.mongoId('fastTrackBusinessSuccessOnlineDiplomaCourse'),
        ],
        response: standardResponse([
            transformEvent("ftbsodWelcomeEvent"),
            transformEvent("ftbsodWeek1ReviewEvent"),
        ])
    }
};