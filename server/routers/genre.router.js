const router = require('express').Router();
const { Genre } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    const allGenres = await Genre.findAll({ raw: true });
    console.log(allGenres);
    res.json({ allGenres });
  });
module.exports = router;
