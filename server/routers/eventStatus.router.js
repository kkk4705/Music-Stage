/* eslint-disable camelcase */
const router = require('express').Router();
const { EventStatus } = require('../db/models');

router.post('/', async (req, res) => {
  const { event_id, artist_id, message } = req.body;
  if (event_id && artist_id && message) {
    try {
      const newEventStatus = await EventStatus.create({
        event_id,
        artist_id,
        message,
      });
      res.json({ newEventStatus });
    } catch (error) {
      console.error(error);
    }
  }
});

module.exports = router;
