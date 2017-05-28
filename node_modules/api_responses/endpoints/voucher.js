var standardResponse = require('api_responses/standardResponse.js'),
    transformVoucher = require('api_responses/converters/transformVoucher.js');
module.exports = {
    getVoucher: {
        requests: [
            "GET /v1/voucher/GRP99388404899",
        ],
        response: standardResponse(transformVoucher("digitalMarketingVoucher"))
    },
    getNoSuchVoucher: {
        requests: [
            "GET /v1/voucher/NOTVALIDVOUCHER",
        ],
        response: {
            code: 404
        }
    },
    getNoSuchVoucherE2E: {
        requests: [
            "GET /v1/voucher/$$voucher_code$$",
        ],
        response: {
            code: 404
        }
    }
};