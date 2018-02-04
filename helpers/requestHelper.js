// Define a request Helper ( Middleware ) to parse the id
// We don't need this when we work with and ORM

const parseId = (req, res, next) => {
    if (req && req.params && req.params.id) {
        req.params.id = parseInt(req.params.id)
    }

    next()
}

module.exports = {
    parseId
}