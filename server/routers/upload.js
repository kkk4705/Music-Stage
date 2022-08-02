const router = require('express').Router();
const multer = require('multer');
const { Track } = require('../db/models');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/music/');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

router.post('/add', upload.single('file'), async (req, res) => {
  try {
    console.log('-----3--->>', req.body.id);
    console.log('-----3--->>', req.file);
    const { id } = req.body;
    const path = `public/music/${req.file.originalname}`;
    await Track.create({ track: path, artist_id: id });
    const allTracks = await Track.findAll();
    res.json(allTracks);
  } catch (error) {
    console.error(error);
  }
});

router.get('/alltracks', async (req, res) => {
  try {
    const allTracks = await Track.findAll();
    res.json({ allTracks });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
