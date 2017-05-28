var seedData = require('seed_data');

module.exports = function (callTypeSpecId) {
    var callType = seedData.objectFromSpecId(callTypeSpecId);
    return {
        id: String(callType._id),
        href: "/v1/call_type/" + callType._id,
        _type: "call_type",
        name: callType.name,
        number: callType.number,
    };
};
