var seedData = require('seed_data');

module.exports = function (callEmailSpecId) {
    var callEmail = seedData.objectFromSpecId(callEmailSpecId);
    var response = {
        id: String(callEmail._id),
        href: "/v1/call_email/" + callEmail._id,
        _type: "call_email",
        product: {
            href: "/v1/product/" + callEmail._product_id,
            id: String(callEmail._product_id)
        },
        email_template_slug: callEmail.email_template_slug,
        filters: {
            call_type_id: callEmail.filters._call_type_id ? String(callEmail.filters._call_type_id) : null,
            valid_number: callEmail.filters.valid_number,
            answered: callEmail.filters.answered,
            info_requested: callEmail.filters.info_requested
        }
    };

    return response;
};