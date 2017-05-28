var standardResponse = require('api_responses/standardResponse.js'),
    transformCallType = require('api_responses/converters/transformCallType.js'),
    seedData = require('seed_data');

module.exports = {
    getSingleCallType: {
        requests: [
            "GET /v1/call_type/" + seedData.mongoId("introCallType"),
        ],
        response: standardResponse(transformCallType("introCallType"))
    },

    getAllCallTypes: {
        requests: [
            "GET /v1/call_type",
        ],
        response: standardResponse([
            transformCallType("welcomeCallType"),
            transformCallType("introCallType"),
            transformCallType("midCallType"),
            transformCallType("sales1CallType"),
            transformCallType("sales2CallType"),
            transformCallType("sales3CallType"),
            transformCallType("sales4CallType"),
            transformCallType("sales5CallType"),
        ])
    },
};
