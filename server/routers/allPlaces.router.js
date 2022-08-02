const router = require('express').Router();
const { Place } = require('../db/models');

router.get('/', async (_, res) => {
  try {
    const allPlaces = await Place.findAll();
    console.log(allPlaces);
    res.json({ allPlaces });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
