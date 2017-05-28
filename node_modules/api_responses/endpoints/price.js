var standardResponse = require('api_responses/standardResponse.js'),
    seedData = require('seed_data');

// The responses in here are hard-coded because they're hard-coded in the actual API; no actual data underlies this yet.

module.exports = {
    getPrice: {
        requests: [
            "GET /v1/price?instalments=1&registration_id=" +
            seedData.mongoId("jessTheRegistration") +
            "&product_slug=ultimate-entrepreneurship",
        ],
        response: standardResponse({
            country: null,
            currency: "EUR",
            price: 69500,
            instalments: 1
        })
    },
    getPriceWithInstalments: {
        requests: [
            "GET /v1/price?instalments=4&registration_id=" +
            seedData.mongoId("fredTheRegistration") +
            "&product_slug=ultimate-entrepreneurship",
        ],
        response: standardResponse({
            country: "us",
            currency: "USD",
            price: 100000,
            instalments: 4
        })
    }
};