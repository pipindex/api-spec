var standardResponse = require('api_responses/standardResponse.js'),
    transformProduct = require('api_responses/converters/transformProduct.js'),
    seedData = require('seed_data');

module.exports = {
    getAllProducts: {
        requests: [
            "GET /v1/product/"
        ],
        response: standardResponse([
            transformProduct("digitalMarketingInEnglish"),
            transformProduct("fastTrackBusinessSuccessOnlineDiplomaInEnglish"),
            transformProduct("foundationTradingProduct"),
            transformProduct("hippogriffTamingInFrench"),
            transformProduct("digitalMarketingInFrench"),
            transformProduct("ultimateFastTrackBusinessSuccessInEnglish")
        ])
    },
    getProduct: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("digitalMarketingInEnglish"),
            "GET /v1/product?slug=digital-marketing",
        ],
        response: standardResponse(transformProduct("digitalMarketingInEnglish"))
    },
    getProductFoundationEntrepreneurship: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaInEnglish"),
            "GET /v1/product?slug=fast-track-business-success",
        ],
        response: standardResponse(transformProduct("fastTrackBusinessSuccessOnlineDiplomaInEnglish"))
    },
    getProductUltimateEntrepreneurship: {
        requests: [
            "GET /v1/product/" + seedData.mongoId("ultimateFastTrackBusinessSuccessInEnglish"),
            "GET /v1/product?slug=ultimate-entrepreneurship",
        ],
        response: standardResponse(transformProduct("ultimateFastTrackBusinessSuccessInEnglish"))
    },
    getNonExistentProduct: {
        requests: [
            "GET /v1/product/someproductthatdoesnotexist",
        ],
        response: {
            code: 404
        }
    },
    getProductsForDigitalMarketingCourse: {
        requests: [
            "GET /v1/product?course_id=" + seedData.mongoId("digitalMarketingCourse"),
        ],
        response: standardResponse([
            transformProduct("digitalMarketingInEnglish"),
            transformProduct("digitalMarketingInFrench")
        ])
    },
    getProductsForBusinessCourse: {
        requests: [
            "GET /v1/product?course_id=" + seedData.mongoId("fastTrackBusinessSuccessOnlineDiplomaCourse"),
        ],
        response: standardResponse([
            transformProduct("fastTrackBusinessSuccessOnlineDiplomaInEnglish"),
        ])
    },
    getProductsForDomain1: {
        requests: [
            "GET /v1/product/?domain=learn.academyft.com"
        ],
        response: standardResponse([
            transformProduct("foundationTradingProduct")
        ])
    },
    getProductsForDomain2: {
        requests: [
            "GET /v1/product/?domain=app.shawacademy.com"
        ],
        response: standardResponse([
            transformProduct("digitalMarketingInEnglish"),
            transformProduct("fastTrackBusinessSuccessOnlineDiplomaInEnglish"),
            transformProduct("hippogriffTamingInFrench"),
            transformProduct("digitalMarketingInFrench"),
            transformProduct("ultimateFastTrackBusinessSuccessInEnglish")
        ])
    },
    getProductsInEnglish: {
        requests: [
            "GET /v1/product/?language=en"
        ],
        response: standardResponse([
            transformProduct("digitalMarketingInEnglish"),
            transformProduct("fastTrackBusinessSuccessOnlineDiplomaInEnglish"),
            transformProduct("foundationTradingProduct"),
            transformProduct("ultimateFastTrackBusinessSuccessInEnglish")
        ])
    },
    getProductsInFrench: {
        requests: [
            "GET /v1/product/?language=fr"
        ],
        response: standardResponse([
            transformProduct("hippogriffTamingInFrench"),
            transformProduct("digitalMarketingInFrench")
        ])
    },
    getProductsForUltimateCourses: {
        requests: [
            "GET /v1/product/?is_ultimate=true"
        ],
        response: standardResponse([
            transformProduct("ultimateFastTrackBusinessSuccessInEnglish")
        ])
    },
    getProductsForFoundationCourses: {
        requests: [
            "GET /v1/product/?is_ultimate=false"
        ],
        response: standardResponse([
            transformProduct("digitalMarketingInEnglish"),
            transformProduct("fastTrackBusinessSuccessOnlineDiplomaInEnglish"),
            transformProduct("foundationTradingProduct"),
            transformProduct("hippogriffTamingInFrench"),
            transformProduct("digitalMarketingInFrench")
        ])
    },
    getProductsForDomainAndLanguage: {
        requests: [
            "GET /v1/product/?domain=app.shawacademy.com&language=fr"
        ],
        response: standardResponse([
            transformProduct("hippogriffTamingInFrench"),
            transformProduct("digitalMarketingInFrench")
        ])
    }
};



