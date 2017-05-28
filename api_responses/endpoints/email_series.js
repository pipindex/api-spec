var standardResponse = require('api_responses/standardResponse.js'),
    seedData = require('seed_data'),
    transformEmailSeries = require('api_responses/converters/transformEmailSeries.js');

module.exports = {
    getEmailSeriesForFTBSOD: {
        requests: [
            "GET /v1/email_series?campaign_id=" +
                seedData.mongoId('fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15'),
            "GET /v1/email_series?campaign_id=" +
                seedData.mongoId('fastTrackBusinessSuccessOnlineDiplomaCampaignMay15'),
        ],
        response: standardResponse([
            transformEmailSeries("ftbsodEnDefaultEmailSeries"),
            transformEmailSeries("ftbsodAusDefaultEmailSeries"),
        ])
    }
};