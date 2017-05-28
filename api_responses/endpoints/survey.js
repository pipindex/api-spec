var standardResponse = require('api_responses/standardResponse.js'),
    surveyForProduct = require('api_responses/converters/surveyForProduct.js'),
    seedData = require('seed_data');

module.exports = {
    getQuestionsForProduct: {
        requests: [
            "GET /v1/survey?product_id=" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaInEnglish"),
        ],
        response: standardResponse(surveyForProduct("fastTrackBusinessSuccessOnlineDiplomaInEnglish"))
    }
};