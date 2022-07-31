const router = require('express').Router();
const { Artist, EventStatus } = require('../db/models');

router.get('/', async (req, res) => {
  const findAllStatus = await EventStatus.findAll();
  const findAllArtists = await Artist.findAll();
  console.log('--->', findAllStatus, findAllArtists);
});

module.exports = router;
