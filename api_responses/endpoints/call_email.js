var standardResponse = require('api_responses/standardResponse.js'),
    transformCallEmail = require('api_responses/converters/transformCallEmail.js'),
    seedData = require('seed_data');

module.exports = {
    getCallEmailsForProductWithoutAny: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("foundationTradingProduct") + "/call_email"
        ],
        response: standardResponse([])
    },
    getCallEmailsAll: {
        requests: [
            "GET /v1/call_email"
        ],
        response: standardResponse([
            transformCallEmail("callEmailFTBS_ENIntroNoAnswer"),
            transformCallEmail("callEmailFTBS_ENMidBadNumber"),
            transformCallEmail("callEmailFTBS_ENMoreInfo"),
            transformCallEmail("callEmailFTBS_ENWelcomeAnswered"),
            transformCallEmail("callEmailHG_FRIntroAnswered"),
            transformCallEmail("callEmailHG_FRMidNoAnswer"),
            transformCallEmail("callEmailHG_FRMoreInfo"),
            transformCallEmail("callEmailHG_FRWelcomeBadNumber")
        ])
    },
    getCallEmailsAllValidNumber: {
        requests: [
            "GET /v1/call_email?validNumber=true"
        ],
        response: standardResponse([
            transformCallEmail("callEmailFTBS_ENIntroNoAnswer"),
            transformCallEmail("callEmailFTBS_ENWelcomeAnswered"),
            transformCallEmail("callEmailHG_FRIntroAnswered"),
            transformCallEmail("callEmailHG_FRMidNoAnswer")
        ])
    },
    getCallEmailsAllValidNumberAndNoAnswer: {
        requests: [
            "GET /v1/call_email?validNumber=true&answered=false"
        ],
        response: standardResponse([
            transformCallEmail("callEmailFTBS_ENIntroNoAnswer"),
            transformCallEmail("callEmailHG_FRMidNoAnswer")
        ])
    },
    getCallEmailsAllValidNumberAndAnswered: {
        requests: [
            "GET /v1/call_email?validNumber=true&answered=true"
        ],
        response: standardResponse([
            transformCallEmail("callEmailFTBS_ENWelcomeAnswered"),
            transformCallEmail("callEmailHG_FRIntroAnswered")
        ])
    },
    getCallEmailsAllInvalidNumber: {
        requests: [
            "GET /v1/call_email?validNumber=false"
        ],
        response: standardResponse([
            transformCallEmail("callEmailFTBS_ENMidBadNumber"),
            transformCallEmail("callEmailHG_FRWelcomeBadNumber")
        ])
    },
    getCallEmailsAllMoreInfo: {
        requests: [
            "GET /v1/call_email?infoRequested=true"
        ],
        response: standardResponse([
            transformCallEmail("callEmailFTBS_ENMoreInfo"),
            transformCallEmail("callEmailHG_FRMoreInfo")
        ])
    },

    /*
     * PRODUCT 1
     */
    getCallEmailsForProduct1: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaInEnglish") + "/call_email"
        ],
        response: standardResponse([
            transformCallEmail("callEmailFTBS_ENIntroNoAnswer"),
            transformCallEmail("callEmailFTBS_ENMidBadNumber"),
            transformCallEmail("callEmailFTBS_ENMoreInfo"),
            transformCallEmail("callEmailFTBS_ENWelcomeAnswered")
        ])
    },
    getCallEmailsForProduct1ValidNumber: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaInEnglish") + "/call_email?validNumber=true"
        ],
        response: standardResponse([
            transformCallEmail("callEmailFTBS_ENIntroNoAnswer"),
            transformCallEmail("callEmailFTBS_ENWelcomeAnswered")
        ])
    },
    getCallEmailsForProduct1ValidNumberAndNoAnswer: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaInEnglish") + "/call_email?validNumber=true&answered=false"
        ],
        response: standardResponse([
            transformCallEmail("callEmailFTBS_ENIntroNoAnswer")
        ])
    },
    getCallEmailsForProduct1ValidNumberAndAnswered: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaInEnglish") + "/call_email?validNumber=true&answered=true"
        ],
        response: standardResponse([
            transformCallEmail("callEmailFTBS_ENWelcomeAnswered")
        ])
    },
    getCallEmailsForProduct1InvalidNumber: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaInEnglish") + "/call_email?validNumber=false"
        ],
        response: standardResponse([
            transformCallEmail("callEmailFTBS_ENMidBadNumber")
        ])
    },
    getCallEmailsForProduct1MoreInfo: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaInEnglish") + "/call_email?infoRequested=true"
        ],
        response: standardResponse([
            transformCallEmail("callEmailFTBS_ENMoreInfo")
        ])
    },

    /*
     * PRODUCT 2
     */
    getCallEmailsForProduct2: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("hippogriffTamingInFrench") + "/call_email"
        ],
        response: standardResponse([
            transformCallEmail("callEmailHG_FRIntroAnswered"),
            transformCallEmail("callEmailHG_FRMidNoAnswer"),
            transformCallEmail("callEmailHG_FRMoreInfo"),
            transformCallEmail("callEmailHG_FRWelcomeBadNumber")
        ])
    },
    getCallEmailsForProduct2ValidNumber: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("hippogriffTamingInFrench") + "/call_email?validNumber=true"
        ],
        response: standardResponse([
            transformCallEmail("callEmailHG_FRIntroAnswered"),
            transformCallEmail("callEmailHG_FRMidNoAnswer")
        ])
    },
    getCallEmailsForProduct2ValidNumberAndNoAnswer: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("hippogriffTamingInFrench") + "/call_email?validNumber=true&answered=false"
        ],
        response: standardResponse([
            transformCallEmail("callEmailHG_FRMidNoAnswer")
        ])
    },
    getCallEmailsForProduct2ValidNumberAndAnswered: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("hippogriffTamingInFrench") + "/call_email?validNumber=true&answered=true"
        ],
        response: standardResponse([
            transformCallEmail("callEmailHG_FRIntroAnswered")
        ])
    },
    getCallEmailsForProduct2InvalidNumber: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("hippogriffTamingInFrench") + "/call_email?validNumber=false&answered=false"
        ],
        response: standardResponse([
            transformCallEmail("callEmailHG_FRWelcomeBadNumber")
        ])
    },
    getCallEmailsForProduct2MoreInfo: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("hippogriffTamingInFrench") + "/call_email?infoRequested=true"
        ],
        response: standardResponse([
            transformCallEmail("callEmailHG_FRMoreInfo")
        ])
    }
};
