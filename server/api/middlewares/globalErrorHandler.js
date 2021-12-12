

module.exports = function (err, req, res, next) {
    if (err.custom) {
        return res.status(err.status).json(err)
    }
    if (err.stack) {
        if (err.message && err.message.includes('duplicate')) {
            const error = err.message.match(/([\w\.\s]+: "[\w\d\s\.]+")/gi)[0]
            const duplicateError = { message: `This ${error} already exist. Choose another!`, data: err.data }
            return res.status(400).json(duplicateError)
        }
        if (err.message && err.message.includes('validation failed')) {
            const error = err.message.match(/[\w:]+ [\w\s]+!/gi)
            const failedError = { message: error, data: err.data }
            return res.status(400).json(failedError)
        }
        const messages = Object.values(err.errors).map(x => x.message)
        return res.status(400).json(messages)
    }

    return res.status(500).json(err)
}