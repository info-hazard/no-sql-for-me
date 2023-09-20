const router = require('express').Router();
// importing from thought controller
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtcontroller');
router
.route('/')
.get(getAllThoughts)
.post(createThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
.route('/:thoughtId/reactions')
.post(createReaction);

router.
route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;