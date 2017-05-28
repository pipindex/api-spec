var seedData = require('seed_data');

module.exports = function (callInfoSpecId) {
    var callInfo = seedData.objectFromSpecId(callInfoSpecId);
    return {
        id: String(callInfo._id),
        href: "/v1/call_info/" + callInfo._id,
        _type: "call_info",
        date: callInfo.date,
        time_of_day: callInfo.time_of_day,
        valid_number: callInfo.valid_number,
        answered: callInfo.answered,
        notes: callInfo.notes,
        call_type: {
            id: String(callInfo._call_type_id),
            href: "/v1/call_type/" + String(callInfo._call_type_id)
        },
        registration: {
            id: String(callInfo._registration_id),
            href: "/v1/registration/" + String(callInfo._registration_id)
        },
        caller: {
            id: String(callInfo._caller_id),
            href: "/v1/caller/" + String(callInfo._caller_id)
        },
        call_data: callInfo._call_data_id ? {
            id: String(callInfo._call_data_id),
            href: "/v1/call_data/" + String(callInfo._call_data_id)
        } : null
    };
};
