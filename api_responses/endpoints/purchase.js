var standardResponse = require('api_responses/standardResponse.js'),
    seedData = require('seed_data');

/*
    Arguments:

        data.email,
        data.registration_id,
        data.product_id,
        data.stripe_token,
        data.price,
        data.currency,
        data.instalments,
        data.purchase_id
*/
function purchaseRequestWithData(data) {
    var personId = seedData.objectFromMongoId(data.registration_id)._person_id;
    return {
        requests: [{
            method: "POST",
            url: "/v1/purchase",
            data: {
                registration_id: data.registration_id,
                product_id: data.product_id,
                stripe_token: data.stripe_token, // TODO: How to make this testable from the base-api repo?
                price: data.price, // Total, not per instalment
                currency: data.currency,
                instalments: data.instalments,
            }
        }],
        response: standardResponse({
            _type: "purchase",
            id: data.purchase_id,
            href: "/v1/purchase/" + data.purchase_id,
            price: data.price,
            currency: data.currency,
            instalments: data.instalments,
            purchase_start_date: "__purchaseTimestamp__", // Moment that the user made the first payment
            purchase_finish_date: "__purchaseEndTimestamp__", // Moment that the final payment is scheduled for
            product: {
                href: "/v1/product/" + data.product_id,
                id: data.product_id,
            },
            lead: {
                href: "/v1/lead/" + personId,
                id: personId
            }
        })
    };
}

var buyProductE2E = purchaseRequestWithData({
        registration_id: seedData.mongoId("jessTheRegistration"),
        product_id: seedData.mongoId("ultimateFastTrackBusinessSuccessInEnglish"),
        stripe_token: "$$stripe_token$$",
        price: 395,
        currency: "USD",
        instalments: 1,
        purchase_id: "__purchaseId__",
    }),
    buyProductInstalmentyE2E = purchaseRequestWithData({
        registration_id: seedData.mongoId("fredTheRegistration"),
        product_id: seedData.mongoId("ultimateFastTrackBusinessSuccessInEnglish"),
        stripe_token: "$$stripe_token$$",
        price: 500,
        currency: "USD",
        instalments: 4,
        purchase_id: "__instalmentyPurchaseId__",
    });

module.exports = {
    buyProductE2E: buyProductE2E,
    buyProductInstalmentyE2E: buyProductInstalmentyE2E,
    getPurchaseE2E: {
        requests: [
            "GET /v1/purchase/__purchaseId__",
        ],
        response: buyProductE2E.response
    },
    getPurchaseInstalmentyE2E: {
        requests: [
            "GET /v1/purchase/__instalmentyPurchaseId__",
        ],
        response: buyProductInstalmentyE2E.response
    },
    setPurchaseCampaignId: {
        requests: [{
            method: 'PATCH',
            url: "/v1/purchase/" + seedData.mongoId("ultimateFastTrackBusinessSuccessPurchase"),
            data: {
                campaign_id: seedData.mongoId("foundationTradingCampaign")
            }
        }],
        response: {
            code: 200
        }
    }
};