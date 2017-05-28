var seedData = require('seed_data');

module.exports = function (registrationSpecId) {
    var registration = seedData.objectFromSpecId(registrationSpecId);
    return {
        id: String(registration._id),
        href: "/v1/registration/" + registration._id,
        _type: "registration",
        lead: {
            id: String(registration._person_id),
            href: "/v1/lead/" + registration._person_id
        },
        campaign: {
            id: String(registration._campaign_id),
            href: "/v1/campaign/" + registration._campaign_id
        },
        info_requested: (registration.info_requested !== undefined) ? registration.info_requested  : false,
        info_sent: (registration.info_sent !== undefined) ? registration.info_sent  : false,
        one_to_one: (registration.one_to_one !== undefined) ? registration.one_to_one  : false,
        one_to_one_had: (registration.one_to_one_had !== undefined) ? registration.one_to_one_had  : false,
        rating: (registration.rating !== undefined) ? registration.rating  : null,
        upsold: (registration.upsold !== undefined) ? registration.upsold : false,
        opt_out: (registration.opt_out !== undefined) ? registration.opt_out : false,
        has_shaw_subscription: (registration.has_shaw_subscription !== undefined) ? registration.has_shaw_subscription : false,
        previous_shaw_courses: (registration.previous_shaw_courses !== undefined) ? registration.previous_shaw_courses : null,

        // TODO: These will be broken for registrants with ANY answered questions,
        //       but at least they will explode visibly. We should fix before
        //       properly consuming these endpoints.
        attendance: registration.attendance, // TODO: Format these properly
        notes: registration.notes,

        wynik: registration.wynik || null,

        intro_registration: (registration.intro_registration_id !== undefined)
            ? {
            id: String(registration.intro_registration_id),
            href: "/v1/intro_registration/" + registration.intro_registration_id
            }
            : null,

        foundation_registration: (registration.foundation_registration_id !== undefined)
            ? {
            id: String(registration.foundation_registration_id),
            href: "/v1/intro_registration/" + registration.foundation_registration_id
            }
            : null,
    };
};