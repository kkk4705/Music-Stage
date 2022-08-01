/* eslint-disable camelcase */
const router = require('express').Router();
const {
  Artist, Event, EventStatus, Place,
} = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const allArtists = await Artist.findAll({ raw: true });
    res.json({ allArtists });
  } catch (error) {
    console.error(error);
  }
});

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.body;
    const oneArtists = await Artist.findAll({
      where: { id },
      raw: true,
    });
    console.error('====>>', oneArtists);
    res.json({ oneArtists });
  } catch (error) {
    console.error(error);
  }
});

router.post('/find', async (req, res) => {
  try {
    const { name } = req.body;
    const findArtist = await Artist.findAll({
      where: { name },
      raw: true,
    });
    res.json({ findArtist });
  } catch (error) {
    console.error(error);
  }
});

// НЕ ВЫВОДЯТСЯ ДАННЫЕ ИЗ БД
router.get('/events', async (req, res) => {
  const allEvents = await EventStatus.findAll({
    include: [{ model: Event, include: Place }, Artist],
    raw: true,
  });
  res.json({ allEvents });
});
router.get('/event', async (req, res) => {
  try {
    const oneEvents = await EventStatus.findOne({
      where: { name: res.locals.user.name },
      include: [{ model: Event, include: Place }, Artist],
      raw: true,
    });
    res.json({ oneEvents });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
