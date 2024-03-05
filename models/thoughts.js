const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema({
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction'
      }
    ]
  });
  
  // the virtual for the reaction count 
  thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  
  // Create the Thought model
  const Thought = model('Thought', thoughtSchema);
  
  module.exports = Thought;
  
 