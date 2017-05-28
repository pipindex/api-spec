var seedData = require('seed_data');

module.exports = function (lessonObject, campaignId) {
    var response = {
            id: String(lessonObject._id),
            href: "/v1/lesson/" + lessonObject._id,
            _type: "lesson",
            name: lessonObject.name,
            is_on_demand: lessonObject.kind == "static",
            extension: lessonObject.extension,
            campaign: {
                id: String(campaignId),
                href: "/v1/campaign/" + campaignId
            },
            expected_availability_date: lessonObject.expected_availability_date,
            number: lessonObject.number,
        },
        campaign = seedData.objectFromMongoId(campaignId),
        product = seedData.objectFromMongoId(campaign._product_id);

    if (lessonObject.recording) response.recording = lessonObject.recording;
    if (lessonObject.kind == 'webinar') {
        response.processed_attendee_stats = false;
        response.start_time = lessonObject.start_time;
        response.end_time = lessonObject.end_time;
        response.stream_name = product.stream_names[0].name;
        if (lessonObject.actual_start_time) response.actual_start_time = lessonObject.actual_start_time;
        if (lessonObject.actual_end_time) response.actual_end_time = lessonObject.actual_end_time;
    }

    return response;
};