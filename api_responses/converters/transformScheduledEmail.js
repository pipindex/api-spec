var seedData = require('seed_data'),
    _ = require('lodash');

module.exports = function (scheduledEmailSpecId) {
    var scheduledEmail = seedData.objectFromSpecId(scheduledEmailSpecId);
    return {
        id: String(scheduledEmail._id),
        href: "/v1/scheduled_email/" + scheduledEmail._id,
        _type: "scheduled_email",
        campaign: {
            id: String(scheduledEmail._campaign_id),
            href: "/v1/campaign/" + scheduledEmail._campaign_id,
        },
        email_variant_ids: _.map(scheduledEmail._email_variant_ids, String),
        due_date_utc: scheduledEmail.due_date_utc,
    };
};