module.exports = function standardResponse(data) {
    return {
        code: 200,
        body: {
            createdTimestamp: '__timestamp__',
            code: "",
            message: "",
            data: data
        }
    };
};