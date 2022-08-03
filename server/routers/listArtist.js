const router = require('express').Router();
const {
  Artist, Event, EventStatus, Place, Owner, Photo, Type,
} = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const allArtists = await Artist.findAll({ raw: true });
    // console.log(allArtists);
    res.json({ allArtists });
  } catch (error) {
    console.error(error);
  }
});

router.get('/owner', async (req, res) => {
  try {
    const allOwner = await Owner.findAll({ raw: true });
    const allPlace = await Photo.findAll({
      include: [{ model: Place }],
      raw: true,
    });
    // console.log(allOwner, allPlace);
    res.json({ allOwner, allPlace });
  } catch (error) {
    console.error(error);
  }
});

router.get('/place', async (req, res) => {
  try {
    const allPlaces = await Place.findAll({
      raw: true,
    });
    // console.log(allPlaces);
    res.json({ allPlaces });
  } catch (error) {
    console.error(error);
  }
});

router.get('/events', async (req, res) => {
  const allEvents = await EventStatus.findAll({
    include: [{ model: Event, include: [Type, { model: Place, include: Owner }] },
      Artist],
    raw: true,
  });
  console.log(allEvents);
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

router.delete('/place/:id', async (req, res) => {
  try {
    const id = req.body?.id || req.params?.id;
    console.log('fgfgfgf', id);
    await Place.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

router.post('/:id', async (req, res) => {
  try {
    const id = req.body?.id || req.params?.id;
    const oneArtists = await Artist.findAll({
      where: { id },
      raw: true,
    });
    // console.error('====>>', oneArtists);
    res.json({ oneArtists });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
