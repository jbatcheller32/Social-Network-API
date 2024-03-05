const { Users, Reactions, Thoughts } = require('../models');

module.exports = {

    async getUsers(req, res) {
        try {
            const users = await Users.find().populate('users');
            res.json(users);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    async getThoughts(req, res) {
        try {
            const thoughts = await Thoughts.find().populate('thoughts');
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getReactions(req, res) {

        try {
            const reactions = await Reactions.find().populate('reactions'); 
            res.json(reactions);
        } catch (err) {
            res.status(500).json(err); 
        } 


    }, 

    async getSingleUser(req, res) {
        try {
            const users = await Users.findOne({ _id: req.params.userId })
            .populate('users'); 
            res.json(users);
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