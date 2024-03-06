const { Users, Reactions, Thoughts } = require('../models');

module.exports = {


    // get all users 
    async getUsers(req, res) {
        try {
            const users = await Users.find().populate('users');
            res.json(users);

        } catch (err) {
            res.status(500).json(err);
        }

    },

    // get single user by id
    async getSingleUser(req, res) {
        try {
            const users = await Users.findOne({ _id: req.params.userId })
            .populate('users'); 
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    }, 

    // get all user reactions 
    async getReactions(req, res) {

        try {
            const reactions = await Reactions.find().populate('reactions'); 
            res.json(reactions);
        } catch (err) {
            res.status(500).json(err); 
        } 


    }, 

    // create a new user
    async createUser(req, res) {
        try{ 
            const dbUserData = await User.create(req.body); 
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err);
        }
    }, 

    


    



    

    


















}