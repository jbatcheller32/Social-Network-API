const { Users, Reactions, Thoughts } = require('../models');

module.exports = {

    async getThoughts(req, res) {
        try {
            const thoughts = await Thoughts.find().populate('thoughts');
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },


async getSingleThought(req, res) {
    try {
        const thoughts = await Thoughts.findOne({ _id: req.params.thoughtId }); 
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
}, 
}