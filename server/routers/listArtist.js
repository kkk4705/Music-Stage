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

router.post('/:id', async (req, res) => {
  const { id } = req.body;
  const oneArtists = await Artist.findAll({
    where: { id },
    raw: true,
  });
  // console.log('====>>', oneArtists);
  res.json({ oneArtists });
});

router.get('/events', async (req, res) => {
  const allEvents = await EventStatus.findAll({
    include: [{ model: Event, include: Place }, Artist],
    raw: true,
  });
  // console.log('--->', allEvents);
  res.json({ allEvents });
});
router.get('/event', async (req, res) => {
  console.log('-1---->>>>', req.session.user, req.params);
  // const allEvents = await EventStatus.findone({
  //   where: { user },
  // });
  // console.log('--->', allEvents);
  res.status(200);
});

module.exports = router;
