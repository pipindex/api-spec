var seedData = require('seed_data');

module.exports = function (personSpecId, noEvaluation, registration) {
    var person = seedData.objectFromSpecId(personSpecId);
    var data = {
        id: String(person._id),
        href: "/v1/lead/" + person._id,
        _type: "lead",
        lead_owner: {
            id: String(person.lead_info._lead_owner_id),
            href: "/v1/lead_owner/" + person.lead_info._lead_owner_id
        },
        user: person._user_id ? {
            id: String(person._user_id),
            href: "/v1/user/" + person._user_id,
        } : null,
        email: person.email,
        phone: person.phone,
        country: person.address.country,
        first_name: person.name.first_name,
        last_name: person.name.last_name,
        timezone: person.timezone || null,
        evaluation: noEvaluation ? [] : person.evaluation, // TODO: Format these properly,
        is_in_shaw_subscription: person.is_in_shaw_subscription,
        is_in_aft_subscription: person.is_in_aft_subscription,
        language: {
            id: person._language_id || 'en',
            href: "/v1/language/" + (person._language_id || 'en')
        }
    };

    if (registration) {
        data.registration = registration;
    }

    return data;
};