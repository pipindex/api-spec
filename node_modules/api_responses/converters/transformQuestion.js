var _ = require('lodash'),
    seedData = require('seed_data'),
    transformTranslationsArray = require('api_responses/converters/transformTranslationsArray');

module.exports = function transformQuestion(questionMongoId) {
    var question = seedData.objectFromMongoId(questionMongoId);
    return {
        id: String(question._id),
        href: "/v1/question/" + question._id,
        _type: "question",
        translations: transformTranslationsArray(question.translations),
        answers: _.map(question.answers, transformAnswer),
    };
};

function transformAnswer (answerObject) {
    return {
        translations: transformTranslationsArray(answerObject.translations),
        value: answerObject.value,
    };
}