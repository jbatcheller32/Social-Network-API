const { Thoughts, Users } = require('../models');

module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thoughts.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single thought by its _id
  async getSingleThought(req, res) {
    try {
      const thought = await Thoughts.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thoughts.create(req.body);
      await Users.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } });
      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a thought by its _id
  async updateThought(req, res) {
    try {
      const thought = await Thoughts.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a thought by its _id
  async deleteThought(req, res) {
    try {
      const thought = await Thoughts.findByIdAndDelete(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      // Remove thought from associated user's thoughts array
      await Users.findByIdAndUpdate(thought.userId, { $pull: { thoughts: thought._id } });
      res.json({ message: 'Thought deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
