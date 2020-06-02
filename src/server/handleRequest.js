function validateRequest(req, res, next) {
    if (!req.body.text) {
        return res.status(400).json({
            message: 'Invalid input'
        })
    }
    return next();
}

function registerPostHandler(req, res, next) {

    var aylien = require("aylien_textapi");
    // set aylien API credentias
    var textapi = new aylien({
        application_id: "fbb544d8",
        application_key: "50507798490be37af5cfab605167610f"
    });
    // resource: https://docs.aylien.com/textapi/endpoints/#entity-level-sentiment-analysis
    textapi.sentiment({
        'url': req.body.text
    }, function (error, response) {
        res.send(response)
    });

}

exports.validateRequest = validateRequest;
exports.registerPostHandler = registerPostHandler;