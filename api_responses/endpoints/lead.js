var standardResponse = require('api_responses/standardResponse.js'),
    transformPerson = require('api_responses/converters/transformPerson.js'),
    transformRegistration = require('api_responses/converters/transformRegistration.js'),
    seedData = require('seed_data');

module.exports = {
    createPerson: {
        requests: [{
            method: "PUT",
            url: "/v1/lead",
            data: {
                lead_owner_id: seedData.mongoId("jillTheLeadOwner"),
                email: "foo@bar.com",
                first_name: "Foo",
                last_name: "Khan",
                phone_number: "01234 567890",
                country: "gb",
                timezone: "Europe/London",
            }
        }],
        response: standardResponse({
            id: "__personId__",
            href: "/v1/lead/__personId__",
            _type: "lead",
            lead_owner: {
                id: String(seedData.mongoId("jillTheLeadOwner")),
                href: "/v1/lead_owner/" + seedData.mongoId("jillTheLeadOwner")
            },
            email: "foo@bar.com",
            phone: "01234 567890",
            evaluation: [],
            first_name: "Foo",
            last_name: "Khan",
            country: "gb",
            timezone: "Europe/London",
            is_in_shaw_subscription: null,
            is_in_aft_subscription: null,
            user: null,
            language: {
                id: 'en',
                href: '/v1/language/en',
            }
        })
    },
    createPersonE2E: {
        requests: [{
            method: "PUT",
            url: "/v1/lead",
            data: {
                lead_owner_id: "$$lead_owner_id$$",
                email: "$$email$$",
                first_name: "$$first_name$$",
                last_name: "$$last_name$$",
                phone_number: "$$phone_number$$",
                country: "$$country$$",
                timezone: "$$timezone$$",
                language: {
                    id: 'en',
                    href: '/v1/language/en',
                }
            }
        }],
        response: standardResponse({
            id: "__personId__",
            href: "/v1/lead/__personId__",
            _type: "lead",
            lead_owner: {
                id: "$$lead_owner_id$$",
                href: "/v1/lead/$$lead_owner_id$$"
            },
            email: "$$email$$",
            phone: "$$phone_number$$",
            evaluation: "$$phone_number$$",
            first_name: "$$first_name$$",
            last_name: "$$last_name$$",
            user: null,
            country: "$$country$$",
            timezone: "$$timezone$$",
            is_in_shaw_subscription: false,
            is_in_aft_subscription: false,
        })
    },
    getFredThePerson: {
        requests: [
            "GET /v1/lead/" + seedData.mongoId("fredThePerson"),
        ],
        response: standardResponse(transformPerson("fredThePerson"))
    },
    getJessThePerson: {
        requests: [
            "GET /v1/lead/" + seedData.mongoId("jessThePerson"), // by Person ID
            "GET /v1/lead?registration_id=" + seedData.mongoId("jessTheRegistration"), // by Registration ID
        ],
        response: standardResponse(transformPerson("jessThePerson"))
    },
    getLeadsForCampaign1: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("hippogriffTamingCampaign") + "/leads"
        ],
        response: standardResponse([ // Ordered alphabetically by name
            transformPerson("fredThePerson"),
            transformPerson("jessThePerson"),
            transformPerson("jimThePerson"),
            transformPerson("samThePerson"),
            transformPerson("sueThePerson")
        ])
    },
    getLeadsForCampaign2: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("firstV1DigitalMarketingCampaign") + "/leads"
        ],
        response: standardResponse([ // Ordered alphabetically by name
            transformPerson("billThePerson"),
            transformPerson("fredThePerson"),
            transformPerson("jimThePerson"),
            transformPerson("sueThePerson")
        ])
    },
    getLeadsForCampaign3: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("firstV2DigitalMarketingCampaign") + "/leads"
        ],
        response: standardResponse([ // Ordered alphabetically by name
            transformPerson("jessThePerson"),
            transformPerson("samThePerson")
        ])
    },
    getLeadsForCampaign1NoEvaluation: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("hippogriffTamingCampaign") + "/leads?no_evaluation=1"
        ],
        response: standardResponse([ // Ordered alphabetically by name
            transformPerson("fredThePerson", true),
            transformPerson("jessThePerson", true),
            transformPerson("jimThePerson", true),
            transformPerson("samThePerson", true),
            transformPerson("sueThePerson", true)
        ])
    },
    getLeadsForCampaign1WithRegistration: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("hippogriffTamingCampaign") + "/leads?with_registration=1"
        ],
        response: standardResponse([ // Ordered alphabetically by name
            transformPerson("fredThePerson", false, transformRegistration("fredTheRegistration")),
            transformPerson("jessThePerson", false, transformRegistration("jessTheRegistration")),
            transformPerson("jimThePerson", false, transformRegistration("jimTheRegistration")),
            transformPerson("samThePerson", false, transformRegistration("samTheRegistration")),
            transformPerson("sueThePerson", false, transformRegistration("sueTheRegistration"))
        ])
    },
    getLeadsForCampaign1NoEvaluationWithRegistration: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("hippogriffTamingCampaign") + "/leads?no_evaluation=1&with_registration=1"
        ],
        response: standardResponse([ // Ordered alphabetically by name
            transformPerson("fredThePerson", true, transformRegistration("fredTheRegistration")),
            transformPerson("jessThePerson", true, transformRegistration("jessTheRegistration")),
            transformPerson("jimThePerson", true, transformRegistration("jimTheRegistration")),
            transformPerson("samThePerson", true, transformRegistration("samTheRegistration")),
            transformPerson("sueThePerson", true, transformRegistration("sueTheRegistration"))
        ])
    },
    getLeadsForMultipleCampaigns: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("hippogriffTamingCampaign") + "," + seedData.mongoId("firstV1DigitalMarketingCampaign") + "/collection/leads"
        ],
        response: standardResponse([ // Ordered alphabetically by name
            transformPerson("billThePerson"),
            transformPerson("fredThePerson"),
            transformPerson("jessThePerson"),
            transformPerson("jimThePerson"),
            transformPerson("samThePerson"),
            transformPerson("sueThePerson")
        ])
    },
    getLeadsForMultipleCampaignsNoEvaluation: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("hippogriffTamingCampaign") + "," + seedData.mongoId("firstV1DigitalMarketingCampaign") + "/collection/leads?no_evaluation=1"
        ],
        response: standardResponse([ // Ordered alphabetically by name
            transformPerson("billThePerson", true),
            transformPerson("fredThePerson", true),
            transformPerson("jessThePerson", true),
            transformPerson("jimThePerson", true),
            transformPerson("samThePerson", true),
            transformPerson("sueThePerson", true)
        ])
    },
    getLeadsForMultipleCampaignsWithRegistration: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("hippogriffTamingCampaign") + "," + seedData.mongoId("firstV1DigitalMarketingCampaign") + "/collection/leads?with_registration=1"
        ],
        response: standardResponse([ // Ordered alphabetically by name
            transformPerson("fredThePerson", false, transformRegistration("fredTheRegistration")),
            transformPerson("jessThePerson", false, transformRegistration("jessTheRegistration")),
            transformPerson("jimThePerson", false, transformRegistration("jimTheRegistration")),
            transformPerson("samThePerson", false, transformRegistration("samTheRegistration")),
            transformPerson("sueThePerson", false, transformRegistration("sueTheRegistration")),
            transformPerson("billThePerson", false, transformRegistration("billTheRegistrationDM1")),
            transformPerson("fredThePerson", false, transformRegistration("fredTheRegistrationDM1")),
            transformPerson("jimThePerson", false, transformRegistration("jimTheRegistrationDM1")),
            transformPerson("sueThePerson", false, transformRegistration("sueTheRegistrationDM1"))
        ])
    },
    getLeadsForMultipleCampaignsNoEvaluationWithRegistration: {
        requests: [
            "GET /v1/campaign/" + seedData.mongoId("hippogriffTamingCampaign") + "," + seedData.mongoId("firstV1DigitalMarketingCampaign") + "/collection/leads?no_evaluation=1&with_registration=1"
        ],
        response: standardResponse([ // Ordered alphabetically by name
            transformPerson("fredThePerson", true, transformRegistration("fredTheRegistration")),
            transformPerson("jessThePerson", true, transformRegistration("jessTheRegistration")),
            transformPerson("jimThePerson", true, transformRegistration("jimTheRegistration")),
            transformPerson("samThePerson", true, transformRegistration("samTheRegistration")),
            transformPerson("sueThePerson", true, transformRegistration("sueTheRegistration")),
            transformPerson("billThePerson", true, transformRegistration("billTheRegistrationDM1")),
            transformPerson("fredThePerson", true, transformRegistration("fredTheRegistrationDM1")),
            transformPerson("jimThePerson", true, transformRegistration("jimTheRegistrationDM1")),
            transformPerson("sueThePerson", true, transformRegistration("sueTheRegistrationDM1"))
        ])
    }
};
