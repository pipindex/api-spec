var seedData = require('seed_data');

module.exports = function (eventSpecId) {
    var event = seedData.objectFromSpecId(eventSpecId);
    return {
        id: String(event._id),
        href: "/v1/event/" + event._id,
        _type: "event",
        name: event.name,
    };
};