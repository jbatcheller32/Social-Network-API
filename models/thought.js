const { Schema, model } = require('mongoose');
const reactionSchema = require('./reactions');

// Thought schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => new Date(timestamp).toISOString() 
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema] // Array of nested reaction documents
});

// Create virtual for reactionCount
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Create and export Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;