var standardResponse = require('api_responses/standardResponse.js'),
    transformCampaign = require('api_responses/converters/transformCampaign.js'),
    transformCallInfo = require('api_responses/converters/transformCallInfo.js'),
    ids = require('seed_data/idsToBakeIn.js'),
    ObjectID = require('mongodb').ObjectID,
    seedData = require('seed_data');

module.exports = {
    getCampaign: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("firstV1DigitalMarketingCampaign"),
        ],
        response: standardResponse(transformCampaign("firstV1DigitalMarketingCampaign"))
    },
    getFastTrackBusinessCampaign: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15"),
        ],
        response: standardResponse(transformCampaign("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15"))
    },
    getCampaignDataAllForProduct: {
        requests: [
            "GET /v1/campaign?product_id=" + seedData.mongoId("digitalMarketingInEnglish") + "&sort=start_date",
        ],
        response: standardResponse([
            transformCampaign("firstV1DigitalMarketingCampaign"),
            transformCampaign("firstV2DigitalMarketingCampaign"),
            transformCampaign("secondDigitalMarketingCampaign"),
        ])
    },
    getCampaignDataAllForBusinessSuccessCourse: {
        requests: [
            "GET /v1/campaign?course_id=" +
            seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCourse") +
            "&sort=start_date",
        ],
        response: standardResponse([
            transformCampaign("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15"),
            transformCampaign("fastTrackBusinessSuccessOnlineDiplomaCampaignMay15"),
        ])
    },
    getCampaignDataAllForBusinessSuccess: {
        requests: [
            "GET /v1/campaign?product_id=" +
            seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaInEnglish") +
            "&sort=start_date",
        ],
        response: standardResponse([
            transformCampaign("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15"),
            transformCampaign("fastTrackBusinessSuccessOnlineDiplomaCampaignMay15"),
        ])
    },
    getCampaignDataAllForUltimateFastTrackBusinessSuccess: {
        requests: [
            "GET /v1/campaign?product_id=" +
            seedData.mongoId("ultimateFastTrackBusinessSuccessInEnglish") +
            "&sort=start_date",
        ],
        response: standardResponse([
            transformCampaign("ultimateFastTrackBusinessSuccessCampaignApril15"),
            transformCampaign("ultimateFastTrackBusinessSuccessCampaignJune15"),
        ])
    },
    getNonExistentCampaign: {
        requests: [
            "GET /v1/campaign/somecampaignthatdoesnotexist",
        ],
        response: {
            code: 404
        }
    },
    getCampaignCallInfo: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15") + "/calls"
        ],
        response: standardResponse([
            transformCallInfo("test1CallInfoWelcomeCallFTBS"),
            transformCallInfo("test1CallInfoIntroCallFTBS"),
            transformCallInfo("test1CallInfoMidCallFTBS"),
            transformCallInfo("test2CallInfoWelcomeCallFTBS")
        ])
    },
    updateEmailSchedule: {
        requests: [
            {
                method: "POST",
                url: "/v1/campaign/" +
                     seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15") +
                     "/update_email_schedule",
                data: {
                    scheduled_emails: [
                        {
                            email_variant_ids: [
                                String(seedData.objectFromSpecId('ftbsodEnDefaultEmailSeries').email_variants[0]._id)
                            ],
                            due_date_utc: "2015-05-29T00:00:00+00:00"
                        }
                    ]
                }
            },
            {
                method: "POST",
                url: "/v1/campaign/" +
                     seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMay15") +
                     "/update_email_schedule",
                data: {
                    scheduled_emails: [
                        {
                            email_variant_ids: [
                                String(seedData.objectFromSpecId('ftbsodEnDefaultEmailSeries').email_variants[0]._id)
                            ],
                            due_date_utc: "2015-05-29T00:00:00+00:00"
                        }
                    ]
                }
            }
        ],
        response: {
            code: 200
        }
    }
};