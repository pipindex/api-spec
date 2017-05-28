var standardResponse = require('api_responses/standardResponse.js'),
    transformLesson = require('api_responses/converters/transformLesson.js'),
    seedData = require('seed_data'),
    _ = require('lodash');

module.exports = {
    getLesson: {
        requests: [
            "GET /v1/lesson/" +
            seedData.objectFromSpecId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15").lessons[0]._id,
        ],
        response: standardResponse(
            transformLesson(
                seedData.objectFromSpecId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15").lessons[0],
                seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15")
            )
        )
    },
    getLesson2: {
        requests: [
            "GET /v1/lesson/" +
            seedData.objectFromSpecId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15").lessons[1]._id,
        ],
        response: standardResponse(
            transformLesson(
                seedData.objectFromSpecId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15").lessons[1],
                seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15")
            )
        )
    },
    getLessonsForFTBSOD: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15") + "/lessons"
        ],
        response: standardResponse(_.map(
            seedData.objectFromSpecId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15").lessons,
            function (lesson) {
                return transformLesson(lesson, seedData.objectFromSpecId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15")._id);
            }
        ))
    },
    getLessonsForUFTBSApril: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("ultimateFastTrackBusinessSuccessCampaignApril15") + "/lessons"
        ],
        response: standardResponse(_.map(
            seedData.objectFromSpecId("ultimateFastTrackBusinessSuccessCampaignApril15").lessons,
            function (lesson) {
                return transformLesson(lesson, seedData.objectFromSpecId("ultimateFastTrackBusinessSuccessCampaignApril15")._id);
            }
        ))
    },
    getLessonsForUFTBSJune: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("ultimateFastTrackBusinessSuccessCampaignJune15") + "/lessons"
        ],
        response: standardResponse(_.map(
            seedData.objectFromSpecId("ultimateFastTrackBusinessSuccessCampaignJune15").lessons,
            function (lesson) {
                return transformLesson(lesson, seedData.objectFromSpecId("ultimateFastTrackBusinessSuccessCampaignJune15")._id);
            }
        ))
    },
    getWebinarsInDateRange: {
        requests: [
            "GET /v1/lesson?max_start_time=2015-04-16T17:00:00Z&min_end_time=2015-04-15T17:45:00Z",
            "GET /v1/lesson?max_start_time=$$startTime$$&min_end_time=$$endTime$$"
        ],
        response: standardResponse(_.map(
            [seedData.objectFromSpecId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15").lessons[7]],
            function (lesson) {
                return transformLesson(lesson, seedData.objectFromSpecId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15")._id);
            }
        ))
    }
};