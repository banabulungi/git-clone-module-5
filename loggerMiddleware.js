function logger(req, res, next) {
    console.log(`Request received for ${req.method} - ${req.url}`);
    next();
}
module.exports = logger;