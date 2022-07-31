/* eslint-disable camelcase */
const router = require('express').Router();
const {
  Artist, Event, EventStatus, Place,
} = require('../db/models');

router.get('/', async (req, res) => {
  const allArtists = await Artist.findAll({ raw: true });
  // console.log('--->', allEvents);
  res.json({ allArtists });
});

module.exports = router;
