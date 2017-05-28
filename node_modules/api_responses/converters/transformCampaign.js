var seedData = require('seed_data');

module.exports = function (campaignSpecId) {
    var campaign = seedData.objectFromSpecId(campaignSpecId);
    var response =  {
        id: String(campaign._id),
        href: "/v1/campaign/" + campaign._id,
        _type: "campaign",
        name: campaign.name,
        period: {
            start: campaign.start_date,
            end: campaign.end_date,
        },
        product: {
            href: "/v1/product/" + campaign._product_id,
            id: String(campaign._product_id),
        },
        timezone: campaign.timezone,
        is_on_demand: Boolean(campaign.is_on_demand),
        extension_offer: null, // TODO: Populate this properly once we have ANY data in this field or know what it means
    };

    if (campaign.offer_start_date) response.offerStart = campaign.offer_start_date;
    if (campaign.offer_end_date) response.offerEnd = campaign.offer_end_date;

    return response;
};