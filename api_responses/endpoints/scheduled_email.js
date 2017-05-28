var standardResponse = require('api_responses/standardResponse.js'),
    transformScheduledEmail = require('api_responses/converters/transformScheduledEmail.js'),
    seedData = require('seed_data');

module.exports = {
    getScheduledEmailsForFTBSOD: {
        requests: [
            "GET /v1/scheduled_email?campaign_id=" +
            seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMay15")
        ],
        response: standardResponse([
            transformScheduledEmail('ftbsodEnWelcomeScheduledEmail'),
            transformScheduledEmail('ftbsodEnWeek1ReviewScheduledEmail'),
        ])
    }
};