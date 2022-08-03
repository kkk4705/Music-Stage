/* eslint-disable camelcase */
const router = require('express').Router();
const { EventStatus } = require('../db/models');

router.post('/', async (req, res) => {
  const { event_id, artist_id, message } = req.body;
  if (event_id && artist_id && message) {
    try {
      const [newEventStatus, created] = await EventStatus.findOrCreate({
        where: {
          event_id,
          artist_id,
        },
        defaults: {
          message,
        },
      });
      if (created) {
        res.json({ newEventStatus });
      } else {
        res.json({ created });
      }
    } catch (error) {
      console.error(error);
    }
  }
});

module.exports = router;
