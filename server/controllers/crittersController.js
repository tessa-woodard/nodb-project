const critters = require('./data.json')

module.exports = {
    getAllCritters: (req, res) => {
        res.status(200).send(critters)
    },
}