const express = require('express');
const router = express.Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thoughtControllers');

// /api/thoughts
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
