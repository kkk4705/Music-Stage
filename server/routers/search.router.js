const router = require('express').Router();
const {
  Artist, Event, EventStatus, Place,
} = require('../db/models');

router.get('/', async (req, res) => {
  const allEvents = await EventStatus.findAll({
    include: [{ model: Event, include: Place }, Artist],
    raw: true,
  });
  // console.log('A-A-A_A_A_a-A-A_A_A_A_A-a-a-a-A-a', allEvents);
  res.json({ allEvents });
});
// .post(async (req, res) => {
//   const allTracks = await Track.create({name:});
//   res.json({ allTracks });
// });

router.post('/:id', async (req, res) => {
  try {
    const id = req.body?.id || req.params?.id;
    const allEventsArtist = await EventStatus.findAll({
      where: { artist_id: id },
      include: [{ model: Event, include: Place }, Artist],
      raw: true,
    });
    console.log('--->', allEventsArtist);
    res.json({ allEventsArtist });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
