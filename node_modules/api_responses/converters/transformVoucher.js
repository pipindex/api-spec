var seedData = require('seed_data');

module.exports = function (voucherSpecId) {
    var voucher = seedData.objectFromSpecId(voucherSpecId);
    return {
        id: String(voucher._id),
        href: "/v1/voucher/" + voucher._id,
        _type: "voucher",
        course: {
            id: String(voucher._course_id),
            href: "/v1/course/" + voucher._course_id,
        }
    };
};