var standardResponse = require('api_responses/standardResponse.js'),
    transformRegistration = require('api_responses/converters/transformRegistration.js'),
    transformCallInfo = require('api_responses/converters/transformCallInfo.js'),
    seedData = require('seed_data');

module.exports = {
    selectCampaign: {
        requests: [
            {
                method: "POST",
                url: "/v1/registration",
                data: {
                    lead_id: seedData.mongoId("jessThePerson"),
                    campaign_id: seedData.mongoId("ultimateFastTrackBusinessSuccessCampaignApril15"),
                    purchase_id: "__purchaseId__"
                }
            }
        ],
        response: {
            code: 200
        }
    },
    selectCampaignInstalmenty: {
        requests: [
            {
                method: "POST",
                url: "/v1/registration",
                data: {
                    lead_id: seedData.mongoId("fredThePerson"),
                    campaign_id: seedData.mongoId("ultimateFastTrackBusinessSuccessCampaignJune15"),
                    purchase_id: "__instalmentyPurchaseId__"
                }
            }
        ],
        response: {
            code: 200
        }
    },
    selectCampaignInstalmentyE2E: {
        requests: [{
            method: "POST",
            url: "/v1/registration",
            data: {
                lead_id: "$$leadId$$",
                campaign_id: "$$campaignId$$",
                purchase_id: "$$purchaseId$$",
            }
        }],
        response: {
            code: 200
        }
    },
    getRegistration1: {
        requests: [
            "GET /v1/registration/" + seedData.mongoId("fredTheRegistration"),
        ],
        response: standardResponse(transformRegistration("fredTheRegistration"))
    },
    getRegistration2: {
        requests: [
            "GET /v1/registration/" + seedData.mongoId("jimTheRegistration"),
        ],
        response: standardResponse(transformRegistration("jimTheRegistration"))
    },
    getRegistration3: {
        requests: [
            "GET /v1/registration/" + seedData.mongoId("sueTheRegistration"),
        ],
        response: standardResponse(transformRegistration("sueTheRegistration"))
    },
    getRegistration4: {
        requests: [
            "GET /v1/registration/" + seedData.mongoId("samTheRegistration"),
        ],
        response: standardResponse(transformRegistration("samTheRegistration"))
    },
    getRegistration5: {
        requests: [
            "GET /v1/registration/" + seedData.mongoId("jessTheRegistration"),
        ],
        response: standardResponse(transformRegistration("jessTheRegistration"))
    },
    getRegistrationTest1: {
        requests: [
            "GET /v1/registration/" + seedData.mongoId("test1TheRegistrationFTBSMarch"),
        ],
        response: standardResponse(transformRegistration("test1TheRegistrationFTBSMarch"))
    },
    getRegistrationE2E: {
        requests: [
            "GET /v1/registration/__registrationId__",
        ],
        response: standardResponse({
            id: "__registrationId__",
            href: "/v1/registration/__registrationId__",
            // This isn't a valid response, but it will do for the registration form.
        })
    },
    getRegistrationsForCampaign1: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("hippogriffTamingCampaign") + "/registrations"
        ],
        response: standardResponse([
            transformRegistration("fredTheRegistration"),
            transformRegistration("jimTheRegistration"),
            transformRegistration("sueTheRegistration"),
            transformRegistration("samTheRegistration"),
            transformRegistration("jessTheRegistration")
        ])
    },
    getRegistrationsForCampaign2: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("firstV1DigitalMarketingCampaign") + "/registrations"
        ],
        response: standardResponse([
            transformRegistration("billTheRegistrationDM1"),
            transformRegistration("fredTheRegistrationDM1"),
            transformRegistration("jimTheRegistrationDM1"),
            transformRegistration("sueTheRegistrationDM1")
        ])
    },
    getRegistrationsForCampaign3: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("firstV2DigitalMarketingCampaign") + "/registrations"
        ],
        response: standardResponse([
            transformRegistration("samTheRegistrationDM2"),
            transformRegistration("jessTheRegistrationDM2")
        ])
    },
    getRegistrationsCallInfo: {
        requests: [
            "GET /v1/registration/" + seedData.mongoId("test1TheRegistrationFTBSMarch") + "/call_info"
        ],
        response: standardResponse([
            transformCallInfo("test1CallInfoWelcomeCallFTBS"),
            transformCallInfo("test1CallInfoIntroCallFTBS"),
            transformCallInfo("test1CallInfoMidCallFTBS"),
        ])
    },
    updateCallInfo: {
        requests: [
            {
                method: "POST",
                url: "/v1/registration/" +
                seedData.mongoId("test3TheRegistrationFTBSMarch") +
                "/call_info",
                data: {
                    call_type_id: seedData.mongoId("midCallType"),
                    date: "2015-05-29T00:00:00+00:00",
                    time_of_day: 'mid',
                    valid_number: true,
                    answered: true,
                    notes: "Test note",
                    send_email: true,
                    caller_id: seedData.mongoId("jackTheLeadOwner"),
                }
            }
        ],
        response: {
            code: 200
        }
    },
    transferRegistration: {
        requests: [
            {
                method: "POST",
                url: "/v1/registration/" +
                seedData.mongoId("test1TheRegistrationFTBSMarch") +
                "/transfer",
                data: {
                    lead_id: seedData.mongoId("test1ThePerson"),
                    campaign_id: seedData.mongoId("ultimateFastTrackBusinessSuccessCampaignApril15"),
                    opt_out_of_current_campaign: true
                }
            }
        ],
        response: {
            code: 200
        }
    }
};
