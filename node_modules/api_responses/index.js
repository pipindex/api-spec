var _ = require('lodash'),
    glob = require('glob'),
    allApiRequests = (function () {
        var result = {},
            objectFiles = glob.sync(__dirname + '/endpoints/**/*.js');

        _.each(objectFiles, function (filename) {
            _.extend(result, require(filename));
        });

        return result;
    }());

module.exports = allApiRequests;