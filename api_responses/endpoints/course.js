var standardResponse = require('api_responses/standardResponse.js'),
    transformCourse = require('api_responses/converters/transformCourse.js'),
    seedData = require('seed_data');

module.exports = {
    getSingleCourse: {
        requests: [
            "GET /v1/course/" + seedData.mongoId("digitalMarketingCourse"),
        ],
        response: standardResponse(transformCourse("digitalMarketingCourse"))
    },

    getAllCourses: {
        requests: [
            "GET /v1/course",
        ],
        response: standardResponse([
            transformCourse("digitalMarketingCourse"),
            transformCourse("fastTrackBusinessSuccessOnlineDiplomaCourse"),
            transformCourse("foundationTradingCourse"),
            transformCourse("hippogriffTamingCourse"),
            transformCourse("ultimateFastTrackBusinessSuccess")
        ])
    },
};
