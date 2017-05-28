var _ = require('lodash');
module.exports = function (translations) {
    var result = {};

    _.each(translations, function (localizedTextObject) {
        result[localizedTextObject._language_id] = {
            text: localizedTextObject.text
        };
    });

    return result;
};