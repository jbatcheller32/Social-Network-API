const { generateRandomUsers, generateRandomThoughts, generateRandomReactions } = require('./data');

// Generate some random users
const users = generateRandomUsers(5);

// Generate some random thoughts for each user
const thoughts = [];
users.forEach(user => {
  const userThoughts = generateRandomThoughts(user._id, 3); // Generate 3 thoughts for each user
  thoughts.push(...userThoughts);
});

// Generate some random reactions for each thought
const reactions = [];
thoughts.forEach(thought => {
  const thoughtReactions = generateRandomReactions(thought._id, Math.floor(Math.random() * 5)); // Generate up to 5 reactions for each thought
  reactions.push(...thoughtReactions);
});

console.log('Users:', users);
console.log('Thoughts:', thoughts);
console.log('Reactions:', reactions);