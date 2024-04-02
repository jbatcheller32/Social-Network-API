const { Users } = require('../models');

module.exports = {
  // GET all users
  async getAllUsers(req, res) {
    try {
      const users = await Users.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // GET a single user by _id and populated thought and friend data
  async getSingleUser(req, res) {
    try {
      const user = await Users.findOne({ _id: req.params.userId })
        .populate('thoughts')
        .populate('friends', '-__v');
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  
  // POST a new user
  async createUser(req, res) {
    try {
      const user = await Users.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // PUT to update a user by its _id
  async updateUser(req, res) {
    try {
      const user = await Users.findByIdAndUpdate(req.params.userId, req.body, { new: true });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // DELETE to remove user by its _id
  async deleteUser(req, res) {
    try {
      const user = await Users.findByIdAndDelete(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};
