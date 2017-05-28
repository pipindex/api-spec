var seedData = require('seed_data');

module.exports = {
    answerQuestion1: {
        requests: [{
            method: "PUT",
            url: "/v1/response",
            data: {
                question_id: seedData.mongoId("FTBSOD-q1"),
                lead_id: seedData.mongoId("fredThePerson"),
                answer: "male"
            }
        }],
        response: {
            code: 200
        }
    },
    answerQuestion2: {
        requests: [{
            method: "PUT",
            url: "/v1/response",
            data: {
                question_id: seedData.mongoId("FTBSOD-q2"),
                lead_id: seedData.mongoId("fredThePerson"),
                answer: "18-21"
            }
        }],
        response: {
            code: 200
        }
    },
    answerQuestion3: {
        requests: [{
            method: "PUT",
            url: "/v1/response",
            data: {
                question_id: seedData.mongoId("FTBSOD-q3"),
                lead_id: seedData.mongoId("fredThePerson"),
                answer: "Account Management"
            }
        }],
        response: {
            code: 200
        }
    },
    answerQuestion4: {
        requests: [{
            method: "PUT",
            url: "/v1/response",
            data: {
                question_id: seedData.mongoId("FTBSOD-q4"),
                lead_id: seedData.mongoId("fredThePerson"),
                answer: "Intermediate"
            }
        }],
        response: {
            code: 200
        }
    },
    answerQuestion5: {
        requests: [{
            method: "PUT",
            url: "/v1/response",
            data: {
                question_id: seedData.mongoId("FTBSOD-q5"),
                lead_id: seedData.mongoId("fredThePerson"),
                answer: "1-3years"
            }
        }],
        response: {
            code: 200
        }
    },
    answerQuestion6: {
        requests: [{
            method: "PUT",
            url: "/v1/response",
            data: {
                question_id: seedData.mongoId("FTBSOD-q6"),
                lead_id: seedData.mongoId("fredThePerson"),
                answer: "Curiosity"
            }
        }],
        response: {
            code: 200
        }
    },
    answerQuestion7: {
        requests: [{
            method: "PUT",
            url: "/v1/response",
            data: {
                question_id: seedData.mongoId("FTBSOD-q7"),
                lead_id: seedData.mongoId("fredThePerson"),
                answer: "Master Level"
            }
        }],
        response: {
            code: 200
        }
    },
    answerQuestion8: {
        requests: [{
            method: "PUT",
            url: "/v1/response",
            data: {
                question_id: seedData.mongoId("FTBSOD-q8"),
                lead_id: seedData.mongoId("fredThePerson"),
                answer: "Unemployed"
            }
        }],
        response: {
            code: 200
        }
    },
    answerQuestion9: {
        requests: [{
            method: "PUT",
            url: "/v1/response",
            data: {
                question_id: seedData.mongoId("FTBSOD-q9"),
                lead_id: seedData.mongoId("fredThePerson"),
                answer: "1pm-5pm"
            }
        }],
        response: {
            code: 200
        }
    },
    answerQuestionE2E: {
        requests: [{
            method: "PUT",
            url: "/v1/response",
            data: {
                question_id: "$$question_id$$",
                lead_id: "__leadId__",
                answer: "$$answer$$"
            }
        }],
        response: {
            code: 200
        }
    }
};