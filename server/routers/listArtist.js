/* eslint-disable camelcase */
const router = require('express').Router();
const {
  Artist, Event, EventStatus, Place,
} = require('../db/models');

router.get('/', async (req, res) => {
  const allArtists = await EventStatus.findAll({
    include: [{ model: Event, include: Place }, Artist],
    raw: true,
  });
  console.log('--->', allArtists);
  res.json({ allArtists });
});

module.exports = router;
