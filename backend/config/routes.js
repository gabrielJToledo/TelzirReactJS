module.exports = app => {
    app.get('/', app.api.callTime.getDDD)
}