var seedData = require('seed_data');

module.exports = function(inboundEmailSpecId) {
    var inboundEmail = seedData.objectFromSpecId(inboundEmailSpecId);
    return {
        id: String(inboundEmail._id),
        href: "/v1/inbound_email/" + inboundEmail._id,
        _type: "inbound_email",
        lead: {
            id: String(inboundEmail._person_id),
            href: "/v1/lead/" + inboundEmail._person_id
        },
        date: inboundEmail.date,
        from_address: inboundEmail.from_address,
        from_name: inboundEmail.from_name,
        to: inboundEmail.to,
        subject: inboundEmail.subject,
        text_content: inboundEmail.text_content,
        html_content: inboundEmail.html_content || null
    };
};