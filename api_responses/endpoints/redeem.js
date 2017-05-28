var standardResponse = require('api_responses/standardResponse.js'),
    seedData = require('seed_data');

module.exports = {
    createRedemptionWithValidVoucher: {
        requests: [{
            method: "POST",
            url: "/v1/lead/" + seedData.mongoId("thePersonWhoIsNotSignedUpToAnythingYet") + "/redemption",
            data: {
                voucher_id: "GRP99388404899",
            }
        }],
        response: standardResponse({
            id: "__redemptionId__",
            href: "/v1/redemption/__redemptionId__",
            _type: "redemption",
            redeemed: false,
            is_valid: true,
            voucher: {
                href: "/v1/voucher/GRP99388404899",
                id: "GRP99388404899",
            }
        })
    },
    createRedemptionWithValidVoucherE2E: {
        requests: [{
            method: "POST",
            url: "/v1/lead/__personId__/redemption",
            data: {
                voucher_id: "GRP99388404899",
            }
        }],
        response: standardResponse({
            id: "__redemptionId__",
            href: "/v1/redemption/__redemptionId__",
            _type: "redemption",
            redeemed: false,
            is_valid: true,
            voucher: {
                href: "/v1/voucher/GRP99388404899",
                id: "GRP99388404899",
            }
        })
    },
    createRedemptionWithInvalidVoucher: {
        requests: [{
            method: "POST",
            url: "/v1/lead/" + seedData.mongoId("thePersonWhoIsNotSignedUpToAnythingYet") + "/redemption",
            data: {
                country: "gb",
                course_id: seedData.mongoId("digitalMarketingCourse"),
                partner: "The Voucher Factory",
                voucher_id: "NOT-A-REAL-VOUCHER",
            }
        }],
        response: standardResponse({
            id: "__redemptionId__",
            href: "/v1/redemption/__redemptionId__",
            _type: "redemption",
            redeemed: false,
        })
    },
    createRedemptionWithInvalidVoucherE2E: {
        requests: [{
            method: "POST",
            url: "/v1/lead/__personId__/redemption",
            data: {
                country: "$$country$$",
                course_id: "$$course_id$$",
                partner: "$$partner$$",
                voucher_id: "$$voucher_code$$",
            }
        }],
        response: standardResponse({
            id: "__redemptionId__",
            href: "/v1/lead/__personId__/redemption/__redemptionId__",
            _type: "redemption",
            redeemed: false,
            is_valid: false
        })
    },
    redeemRedemptionValidE2E: {
        requests: [{
            method: "POST",
            url: "/v1/lead/__personId__/redemption/__redemptionId__/redeem",
            data: {
                campaign_id: "$$someCampaignId$$",
            }
        }],
        response: standardResponse({
            id: "__registrationId__",
            href: "/v1/registration/__registrationId__",
            _type: "registration",
            attendance: [],
            notes: [],
            info_requested: false,
            info_sent: false,
            one_two_one: false,
            one_to_one_had: false,
            rating: null,
            upsold: false,
            opt_out: false,
            lead: {
                id: "__personId__",
                href: "/v1/lead/__personId__",
            },
            campaign: {
                id: "$$someCampaignId$$",
                href: "/v1/campaign/$$someCampaignId$$"
            },
            intro_registration: null,
            foundation_registration: null,
            has_shaw_subscription: false,
            previous_shaw_courses: null
        })
    },
    redeemRedemptionValid: {
        requests: [{
            method: "POST",
            url: "/v1/lead/" +
                 seedData.mongoId('thePersonWhoIsNotSignedUpToAnythingYet') +
                 '/redemption/' +
                 seedData.mongoId('validFastTrackBusinessSuccessRedemption1') +
                 "/redeem",
            data: {
                campaign_id: seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15"),
            }
        }],
        response: standardResponse({
            id: "__registrationId__",
            href: "/v1/registration/__registrationId__",
            _type: "registration",
            attendance: [],
            notes: [],
            info_requested: false,
            info_sent: false,
            one_to_one: false,
            one_to_one_had: false,
            rating: null,
            wynik: null,
            upsold: false,
            opt_out: false,
            lead: {
                id: seedData.mongoId('thePersonWhoIsNotSignedUpToAnythingYet'),
                href: "/v1/lead/" + seedData.mongoId('thePersonWhoIsNotSignedUpToAnythingYet'),
            },
            campaign: {
                id: seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15"),
                href: "/v1/campaign/" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMarch15"),
            },
            intro_registration: null,
            foundation_registration: null,
            has_shaw_subscription: false,
            previous_shaw_courses: null
        })
    },
    redeemRedemptionInvalid: {
        requests: [{
            method: "POST",
            url: "/v1/lead/" +
                 seedData.mongoId('thePersonWhoIsNotSignedUpToAnythingYet') +
                 '/redemption/' +
                 seedData.mongoId('invalidHippogriffTamingRedemption1') +
                 "/redeem",
            data: {
                campaign_id: seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMay15"),
            }
        }],
        response: standardResponse({
            id: "__registrationId__",
            href: "/v1/registration/__registrationId__",
            _type: "registration",
            attendance: [],
            notes: [],
            info_requested: false,
            info_sent: false,
            one_to_one: false,
            one_to_one_had: false,
            rating: null,
            wynik: null,
            upsold: false,
            opt_out: false,
            lead: {
                id: seedData.mongoId('thePersonWhoIsNotSignedUpToAnythingYet'),
                href: "/v1/lead/" + seedData.mongoId('thePersonWhoIsNotSignedUpToAnythingYet'),
            },
            campaign: {
                id: seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMay15"),
                href: "/v1/campaign/" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCampaignMay15"),
            },
            intro_registration: null,
            foundation_registration: null,
            has_shaw_subscription: false,
            previous_shaw_courses: null
        })
    },
    redeemRedemptionInvalidE2E: {
        requests: [{
            method: "POST",
            url: "/v1/lead/" +
                 seedData.mongoId('fredThePerson') +
                 '/redemption/' +
                 seedData.mongoId('invalidHippogriffTamingRedemption') +
                 "/redeem",
            data: {
                campaign_id: "$$someCampaignId$$",
            }
        }],
        response: standardResponse({
            id: "__registrationId__",
            href: "/v1/registration/__registrationId__",
            _type: "registration",
            attendance: [],
            notes: [],
            info_requested: false,
            info_sent: false,
            one_to_one: false,
            one_to_one_had: false,
            wynik: null,
            rating: null,
            upsold: false,
            opt_out: false,
            lead: {
                id: seedData.mongoId('fredThePerson'),
                href: "/v1/lead/" + seedData.mongoId('fredThePerson'),
            },
            campaign: {
                id: "$$someCampaignId$$",
                href: "/v1/campaign/$$someCampaignId$$"
            },
            intro_registration: null,
            foundation_registration: null,
            has_shaw_subscription: false,
            previous_shaw_courses: null
        })
    }
};