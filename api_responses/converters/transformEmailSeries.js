var seedData = require('seed_data'),
    _ = require('lodash');

module.exports = function (emailSeriesSpecId) {
    var emailSeries = seedData.objectFromSpecId(emailSeriesSpecId);
    return {
        id: String(emailSeries._id),
        href: "/v1/email_series/" + emailSeries._id,
        _type: "email_series",
        name: emailSeries.name,
        email_variants: _.map(emailSeries.email_variants, transformEmailVariant),
    };

    function transformEmailVariant(emailVariant) {
        return {
            id: String(emailVariant._id),
            name: emailVariant.name,
            is_default: emailVariant.is_default,
            event_id: String(emailVariant._event_id),
            email_template_slug: emailVariant.email_template_slug,
        };
    }
};