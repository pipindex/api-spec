var seedData = require('seed_data'),
    transformQuestion = require('api_responses/converters/transformQuestion.js'),
    _ = require('lodash');

module.exports = function (productSpecId) {
    var product = seedData.objectFromSpecId(productSpecId),
        course = seedData.objectFromMongoId(product._course_id),
        survey = course.survey;

    return _.map(survey, function (questionGroup, index) {
        return _.map(questionGroup._question_ids, transformQuestion);
    });
};