var standardResponse = require('api_responses/standardResponse.js'),
    seedData = require('seed_data'),
    transformQuestion = require('api_responses/converters/transformQuestion.js');

module.exports = {
    getQuestion1: {
        requests: [
            "GET /v1/question/" + seedData.mongoId('FTBSOD-q1')
        ],
        response: standardResponse(transformQuestion(seedData.mongoId("FTBSOD-q1")))
    },
    getQuestion2: {
        requests: [
            "GET /v1/question/" + seedData.mongoId('FTBSOD-q2')
        ],
        response: standardResponse(transformQuestion(seedData.mongoId("FTBSOD-q2")))
    },
    getQuestion3: {
        requests: [
            "GET /v1/question/" + seedData.mongoId('FTBSOD-q3')
        ],
        response: standardResponse(transformQuestion(seedData.mongoId("FTBSOD-q3")))
    },
    getQuestion4: {
        requests: [
            "GET /v1/question/" + seedData.mongoId('FTBSOD-q4')
        ],
        response: standardResponse(transformQuestion(seedData.mongoId("FTBSOD-q4")))
    },
    getQuestionCollection1: {
        requests: [
            "GET /v1/question/" + seedData.mongoId('FTBSOD-q1') + "," + seedData.mongoId('FTBSOD-q2') + "," + seedData.mongoId('FTBSOD-q3') + "/collection"
        ],
        response: standardResponse([
            transformQuestion(seedData.mongoId("FTBSOD-q1")),
            transformQuestion(seedData.mongoId("FTBSOD-q2")),
            transformQuestion(seedData.mongoId("FTBSOD-q3"))
        ])
    },
    getQuestionCollection2: {
        requests: [
            "GET /v1/question/" + seedData.mongoId('FTBSOD-q7') + "," + seedData.mongoId('FTBSOD-q1') + "," + seedData.mongoId('FTBSOD-q4') + "/collection"
        ],
        response: standardResponse([
            transformQuestion(seedData.mongoId("FTBSOD-q7")),
            transformQuestion(seedData.mongoId("FTBSOD-q1")),
            transformQuestion(seedData.mongoId("FTBSOD-q4"))
        ])
    }
};