module.exports = app => {
    const getDDD = (req, res) => {
        app.db('DDDs').select('origin', 'destiny', 'valueMinute').then(ddds => res.json(ddds)).catch(err => res.status(500).send(err))
    }

    return { getDDD }
}